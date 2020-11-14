PROJECT_DIR=$(cd "$(dirname "$0")" && pwd)
DB_FILE=$PROJECT_DIR/db.sqlite3

if [ -f "$DB_FILE" ]; then
    rm $DB_FILE
    rm -rf ./backend/__pycache__
    rm -rf ./shallWeGame/__pycache__
fi

cd $PROJECT_DIR
python manage.py migrate --run-syncdb
python manage.py loaddata initial_data.json
python manage.py runserver