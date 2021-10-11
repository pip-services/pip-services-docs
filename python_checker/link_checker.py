# -*- coding: utf-8 -*-

import asyncio
import json
import logging
import os
import urllib.parse
import urllib.request
from typing import List
from urllib.parse import urlparse

import aiohttp
from bs4 import BeautifulSoup

logger = logging.getLogger('Link-checker')
logging.basicConfig(level=logging.INFO)

BASE_URL = 'https://pip-services.github.io/pip-services-docs'
URL_FILE_WITH_URLS = 'https://raw.githubusercontent.com/pip-services/pip-services-docs/gh-pages/index.json'

os.environ['CHECK_ONLY_IN_BODY'] = 'true'


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


async def check_links(links: List[str]):
    """
    Check list of the links
    :param links:
    :return: list of invalid links
    """
    async with aiohttp.ClientSession(connector=aiohttp.TCPConnector(ssl=False)) as session:
        invalid_urls: List[List[str]] = []
        checked_urls: List[str] = []
        links_count = 0

        # check site urls
        for link in links:
            # skip mail links
            if link.find('mailto:') > -1:
                continue

            links_count += 1
            logger.info('%s: %s', links_count, link)

            if link not in checked_urls:
                await asyncio.sleep(0.05)
                try:
                    async with session.get(link) as resp:
                        if resp.status >= 400:
                            invalid_urls.append(['current', link])
                            logger.error('%s:Invalid url: %s', links_count, link)
                        html = await resp.text('utf-8')
                except:
                    invalid_urls.append([link, 'current'])
                finally:
                    checked_urls.append(link)

                inner_links = parse_page_links(link, html)

                # check urls on the current page
                for inner_link in inner_links:
                    # skip mail links
                    if inner_link.find('mailto:') > -1:
                        continue

                    links_count += 1
                    logger.info('%s: %s', links_count, inner_link)

                    if inner_link not in checked_urls:
                        try:
                            async with session.get(inner_link) as resp:
                                if resp.status >= 400:
                                    invalid_urls.append([inner_link, link])
                                    logger.error('%s:Invalid url: %s', links_count, inner_link)
                        except:
                            invalid_urls.append([inner_link, link])
                        finally:
                            checked_urls.append(inner_link)

        if len(invalid_urls) > 0:

            for url, page in invalid_urls:
                logger.error('Invalid url: %s on page %s ', url, page)

            logger.error('Invalid urls count: %s', len(invalid_urls))
            raise Exception('There are broken links on the site.')

        logger.info('Checked links: %s', links_count)
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
        link = urllib.parse.urljoin(current_link, link.get('href'))
        # if is_url(link):
        urls.append(link)

    return urls


def is_url(url):
    try:
        result = urlparse(url)
        return all([result.scheme, result.netloc])
    except ValueError:
        return False


if __name__ == '__main__':
    links = read_all_site_links('./public/index.json')
    asyncio.run(check_links(links))
