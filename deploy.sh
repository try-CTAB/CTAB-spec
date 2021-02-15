#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy latest version'

echo '>>> Pushing to remote...'
git remote add origin https://github.com/try-CTAB/spec.git
git push -u origin master --force

cd -
