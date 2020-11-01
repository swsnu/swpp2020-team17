import requests
from bs4 import BeautifulSoup
from pandas import DataFrame
import sqlite3
import datetime
import urllib.request
import os
import csv


path = '/Users/admin/Desktop/5-1/소개원실/crawler/post_URLs'

url_file_list = os.listdir(path)
url_file_list = ['LoL_tip_url.txt']

for filename in url_file_list:
    p = path + '/' + filename
    f = open(p, 'r')

    filename = filename.replace('_url.txt', '')

    csvname = './data_' + filename + '.csv'
    datafile = open(csvname, 'a', encoding='euc-kr')
    data_writer = csv.writer(datafile)

    for url in f:
        html_contents = requests.get(url).text
        soup = BeautifulSoup(html_contents, 'html.parser')
        data1 = soup.find_all(class_="contentBody")

        for img_index, data in enumerate(data1):
            
            print(data.text)

            # write content
            data_writer.writerow([data.text])

            # save images
            savename = './Data/'
            if filename.startswith('H'):
                filename = filename.replace('HS_', '')
                savename += f'HS/image/{filename}/{img_index}_'
            elif filename.startswith('L'):
                filename = filename.replace('LoL_', '')
                savename += f'LoL/image/{filename}/{img_index}_'
            elif filename.startswith('M'):
                filename = filename.replace('MP_', '')
                savename += f'MP/image/{filename}/{img_index}_'

            data = data.find_all("img")
            for sub_index, d in enumerate(data):
                img = d['src']
                p = savename+str(sub_index)+'.jpg'
                urllib.request.urlretrieve(img, p)

f.close()