import sqlite3

con = sqlite3.connect("db.sqlite3")
cur = con.cursor()

# # cur.execute('select name from sqlite_master where type="table"')
# cur.execute('PRAGMA table_info(shallWeGame_post)')
# # cur.execute('select * from shallWeGame_post')
# # 데이타 Fetch
# rows = cur.fetchall()

# for row in rows:
#     print(row)

# # Connection 닫기
# con.close()

init = sqlite3.connect("db_init.sqlite3")
init_cur = init.cursor()
init_cur.execute('select * from shallWeGame_post')

rows = init_cur.fetchall()
for row in rows:
    # print(row)
    query = "insert into shallWeGame_post values (?,?,?,?,?,?)"
    params = (row[0], row[1], row[2], row[3], row[4], row[5])
    cur.execute(query, params)
    con.commit()

con.close()
init.close()
