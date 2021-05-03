#!/usr/bin/bash

# build vitepress
yarn build:docs

# cd to .vitepress/dist
cd .vitepress/dist

# add nojykell
touch .nojekyll

# copy favicon to .vitepress/dist/_assets
cp '../../assets/favicon.png' '_assets/favicon.png'
cp '../../assets/virtual-scroll props.png' '_assets/virtual-scroll props.png'
cp '../../assets/virtual-scroll animation.gif' '_assets/virtual-scroll animation.gif'
cp '../../assets/h5.png' '_assets/h5.png'

# git ops
git init
git add -A
git commit -m "Deploy"

# push to gh-pages branch
git push -f git@github.com:b2nil/taro-ui-vue3.git main:gh-pages