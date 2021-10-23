GITHUB_REPO=git@github.com:Kele-Bingtang/blog.git

comment=$1

if [ ! $comment ]; then
comment="新的内容来了"
fi

git add -A

git commit -m $comment    # $1 是启动该脚本传来的参数，如 sh push.sh hello，其中hello就会插入到$1处，如果想两个参数，则加$2

git push -f $GITHUB_REPO   # -f 我是必须加，不加会报错，如果想push到其他分支，则在$GITHUB_REPO 后加入分支名，默认是master



git remote add github git@github.com:Kele-Bingtang/blog.git

git remote add gitee git@gitee.com:kele-bingtang/blog.git

git push -f github master:gh-pages

git push -f gitee master:gh-pages