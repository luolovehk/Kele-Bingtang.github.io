#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果发布到自定义域名，请使用
# echo 'b.xugaoyi.com' > CNAME

# 打包代码同步到 gitee gh-pages分支
if [ -z "$SSH_PRIVATE_KEY" ]; then
  msg='deploy'
  giteeUrl=git@gitee.com:kele-bingtang/blog.git
  # echo '如果是空字符串，则不部署到gitee'
else
  giteeUrl=git@gitee.com:kele-bingtang/blog.git  #gitee 仓库ssh地址
  git config --global user.name "Kele-Bingtang"
  git config --global user.email "2456019588@qq.com"
fi
git init
git add -A
git commit -m "deploy"
git push -f $giteeUrl master:gh-pages

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist
