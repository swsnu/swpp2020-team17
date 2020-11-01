import requests
from bs4 import BeautifulSoup
from pandas import DataFrame
import sqlite3
import datetime
import urllib.request
import os
import csv

# f = open('./con.txt', 'w')

url = "http://www.inven.co.kr/board/lol/2766/48803"
html_contents = requests.get(url).text
soup = BeautifulSoup(html_contents, 'html.parser')
data1 = soup.find_all(class_="contentBody")

for data in data1:
    print(data.text)
    data = data.find_all("img")
    for d in data:
        img = d['src']
        urllib.request.urlretrieve(img,'./8888.jpg')



