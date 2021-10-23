# -*- coding: utf-8 -*-

import asyncio
import datetime
import json
import logging
import os
import urllib.parse
import urllib.request
from typing import List, Tuple
from urllib.parse import urlparse

import aiohttp
from bs4 import BeautifulSoup

logger = logging.getLogger('Checker')
logging.basicConfig(level=logging.INFO)  # , filename="link_log.txt")

BASE_URL = 'https://pip-services.github.io/pip-services-docs'
URL_FILE_WITH_URLS = 'https://raw.githubusercontent.com/pip-services/pip-services-docs/gh-pages/index.json'

os.environ['CHECK_ONLY_IN_BODY'] = 'true'

start_time = datetime.datetime.now()


def read_all_site_links(path: str = None) -> List[str]:
    """
    Reads urls from index.json file

    :param path:
    :return:
    """
    data: str
    links: List[str] = []

    if path:
        # Opening JSON file
        with open(path, encoding='utf-8') as f:
            data = json.load(f)
    else:
        data = json.loads(urllib.request.urlopen(URL_FILE_WITH_URLS).read().decode('utf-8'))

    for item in data:
        links.append(BASE_URL + item['permalink'])

    logger.info('Read %s links from site index.json', len(links))

    return links


async def make_request(link: str,
                       return_html: bool = False, try_count: int = 3) -> Tuple[str, bool]:
    success = False
    html = ''
    async with aiohttp.ClientSession(connector=aiohttp.TCPConnector(ssl=False)) as session:
        for i in range(try_count):
            async with session.get(link) as resp:
                if resp.status >= 500:
                    await asyncio.sleep(0.5)
                    continue
                elif resp.status >= 400:
                    break
                else:
                    if return_html:
                        html = await resp.text('utf-8')
                    success = True
                    break

    return html, success


async def check_links(links: List[str]):
    """
    Check list of the links
    :param links:
    :return: list of invalid links
    """

    invalid_urls: List[List[str]] = []
    checked_urls: List[str] = []
    links_count = 0

    # check site urls
    for link in links:
        # skip mail links
        if link.find('mailto:') > -1 or link.split('/')[-2].startswith('__'):
            continue

        links_count += 1
        if links_count % 100 == 0:
            logger.info('link:%s:runtime:%s', links_count, datetime.datetime.now() - start_time)

        if link not in checked_urls:
            html, ok = await make_request(link, return_html=True)
            checked_urls.append(link)
            if not ok:
                invalid_urls.append(['current', link])
                logger.error('%s:Invalid url: %s', links_count, link)

            inner_links = parse_page_links(link, html)

            # check urls on the current page
            tasks = []
            inner_checked = []
            for inner_link in inner_links:
                if inner_link in inner_checked:
                    continue
                # skip mail links and include files
                if inner_link.find('mailto:') > -1 or inner_link.split('/')[-2].startswith('__'):
                    continue

                links_count += 1
                if links_count % 100 == 0:
                    logger.info('link:%s:runtime:%s', links_count,
                            datetime.datetime.now() - start_time)

                task = asyncio.create_task(make_request(inner_link))
                tasks.append(task)
                inner_checked.append(inner_link)

            results = await asyncio.gather(*tasks)
            index = 0
            for _, ok in results:
                if not ok:
                    invalid_urls.append([inner_links[index], link])
                    logger.error('%s:Invalid url: %s', links_count, inner_links[index])
                index += 1

    if len(invalid_urls) > 0:

        for url, page in invalid_urls:
            logger.error('Invalid url: %s on page %s ', url, page)

        logger.error('Invalid urls count: %s', len(invalid_urls))
        raise Exception('There are broken links on the site.')

    logger.info('Checked links: %s, exec time: %s', links_count, datetime.datetime.now() - start_time)
    logger.info('All done!')


def parse_page_links(current_link: str, html: str) -> List[str]:
    """
    Parase all links in the given url
    :param current_link:
    :param html:
    :return:
    """
    soup = BeautifulSoup(html, 'html.parser')
    urls = []

    if os.getenv('CHECK_ONLY_IN_BODY'):
        soup.markup = soup.find('main')

    for link in soup.find_all('a'):
        link = link.get('href')
        if not is_url(link):
            link = urllib.parse.urljoin(current_link, link)
        urls.append(link)

    return urls


def is_url(url):
    try:
        result = urlparse(url)
        return all([result.scheme, result.netloc])
    except ValueError:
        return False


if __name__ == '__main__':
    links = read_all_site_links()  # './public/index.json'
    loop = asyncio.get_event_loop()
    loop.run_until_complete(check_links(links))
