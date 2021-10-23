comment=$1

if [ ! $comment ]; then
  comment='来自github actions的自动部署，并同步到gitee'
  echo $comment
else 
  echo "not null $comment"
fi