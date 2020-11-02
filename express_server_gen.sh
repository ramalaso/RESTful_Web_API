#!/bin/bash

npm init -y

git init

mkdir scripts/ middleswares/ config/ controllers/ env/ utils/ models/ routes/ test/

for folder in $(ls -d */)
do
    case "$folder" in 
        #ignore scripts folder
        *"scripts"*) ;;
        #ignore env folder
        *"env"*) ;;
        #default case
        *) touch $folder/index.js
            echo "adding index.js to $folder"
            ;;
    esac
done

touch server.js

touch Dockerfile Dockerfile.test

echo "node_modules" >> .gitignore &&
    cp .gitignore .dockerignore &&
    touch .eslintignore

#install express, cors, basic auth and helmet
npm i express cors express-basic-auth helmet eslint

#generate casic eslint config
./node_modules/.bin/eslint --init
