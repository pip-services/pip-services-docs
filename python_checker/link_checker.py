# -*- coding: utf-8 -*-

import os
import sys

import pandas as pd

if __name__ == '__main__':
    os.system('git clone https://github.com/linkchecker/linkchecker.git')

    command = 'cd linkchecker && python linkchecker https://pip-services.github.io/pip-services-docs/ ' \
              '--check-extern --threads 15 --ignore-url \/__ \/ru\/ --file-output "csv/utf-8/url_log.txt"'

    os.system(command)

    # remove comments
    with open("linkchecker/url_log.txt", 'r+') as file:
        data = file.readlines()
        data = data[3:]
        file.seek(0)
        file.writelines(data)
        file.truncate()

    # parse log results
    csvLogs = pd.read_csv("linkchecker/url_log.txt", sep=";")

    if len(csvLogs) != 0:
        raise_err = False
        for index in range(len(csvLogs)):
            if '404 Not Found' not in csvLogs['result'][index] or 'http://localhost' in csvLogs['url'][index]:
                continue

            url_name = str(csvLogs['urlname'][index]) + '\n'
            name = str(csvLogs['name'][index]) + '\n'
            parent_url = str(csvLogs['parentname'][index]) + '\n'
            real_url = str(csvLogs['url'][index]) + '\n'
            result = str(csvLogs['result'][index]) + '\n'

            sys.stderr.write(f"URL: {url_name} Name: {name} "
                             f"Parent URL: {parent_url} Real URL: {real_url} Result: {result} \n")
            raise_err = True

        if raise_err:
            raise Exception(f"FOUND {len(csvLogs)} INVALID URLS")

    else:
        print('All done!')
