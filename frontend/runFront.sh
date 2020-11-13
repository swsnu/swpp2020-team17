PROJECT_DIR=$(cd "$(dirname "$0")" && pwd)

cd $PROJECT_DIR
yarn install
yarn add eslint
yarn start
