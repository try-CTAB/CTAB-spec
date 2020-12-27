#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

echo '>>> Pushing to remote...'
git remote add origin https://github.com/NemoAndrea/better-contributions-spec.git
git push -u origin master --force

cd -