import requests
from bs4 import BeautifulSoup
from pandas import DataFrame
import sqlite3
import datetime

f = open("./HS_balanceStudy_url.txt", 'a')

url = "http://www.inven.co.kr/board/hs/3648?sort=PID&p=4"
html_contents = requests.get(url).text

soup = BeautifulSoup(html_contents, 'html.parser')

data1 = soup.find_all(class_="sj_ln")
for result in data1:
    f.write(result.get("href"))
    f.write('\n')

f.close()

