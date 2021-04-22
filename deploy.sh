#!/usr/bin/env sh

set -e

npm run build

cd dist

git init --initial-branch=main
git init -b main
git add -A
git commit -m 'deploy'

git push -f https://github.com/sergey-kravcov/sergey-kravcov.github.io main

cd -
