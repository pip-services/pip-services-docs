# -*- coding: utf-8 -*-

import os
import sys

import pandas as pd

if __name__ == '__main__':
    command = 'linkchecker https://pip-services.github.io/pip-services-docs/ ' \
              '--check-extern --threads 15 --ignore-url \/__ --file-output "csv/utf-8/url_log.txt"'

    if os.name != 'nt':
        command = 'python ' + command
        
    os.system(command)

    # parse log results
    csvLogs = pd.read_csv("url_log.txt", sep=";", comment="#")

    if len(csvLogs) != 0:
        raise_err = False
        for index in range(len(csvLogs)):
            if csvLogs['result'][index] == '429 too many requests':
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
            raise Exception("INVALID URLS")

    else:
        print('All done!')
