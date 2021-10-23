GITHUB_REPO=git@github.com:Kele-Bingtang/blog.git

git add -A

git commit -m $1    # $1 是启动该脚本传来的参数，如 sh push.sh hello，其中hello就会插入到$1处，如果想两个参数，则加$2

git push -f $GITHUB_REPO   # -f 我是必须加，不加会报错，如果想push到其他分支，则在$GITHUB_REPO 后加入分支名，默认是master