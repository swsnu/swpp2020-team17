DB_FILE=./backend/db.sqlite3

if [ -f "$DB_FILE" ]; then
    pwd
    echo $DB_FILE
    rm -rf ./backend/__pycache__
    rm -rf ./shallWeGame/__pycache__
fi

cd backend
pip install -r requirements.txt
python manage.py migrate --run-syncdb
python manage.py loaddata initial_data.json
python manage.py runserver 0.0.0.0:8000
