#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果发布到自定义域名，请使用
# echo 'b.xugaoyi.com' > CNAME

# 如果手运行该脚本，则执行if里的，如果是GitHub自动执行该脚本，则是else里的
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:Kele-Bingtang/blog.git
  giteeUrl=git@gitee.com:kele-bingtang/blog.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://Kele-Bingtang:${GITHUB_TOKEN}@github.com/Kele-Bingtang/blog.git
  giteeUrl=https://Kele-Bingtang:${GITHUB_TOKEN}@gitee.com/Kele-Bingtang/blog.git
  git config --global user.name "Kele_Bingtang"
  git config --global user.email "2456019588@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github gh-pages分支
git push -f $giteeUrl master:gh-pages

# deploy to coding pages
# echo 'www.xugaoyi.com\nxugaoyi.com' > CNAME  # 自定义域名
# echo 'google.com, pub-7828333725993554, DIRECT, f08c47fec0942fa0' > ads.txt # 谷歌广告相关文件

# if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
#   codingUrl=git@e.coding.net:xgy/xgy.git
# else
#   codingUrl=https://HmuzsGrGQX:${CODING_TOKEN}@e.coding.net/xgy/xgy.git
# fi
# git add -A
# git commit -m "${msg}"
# git push -f $codingUrl master # 推送到coding

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist
