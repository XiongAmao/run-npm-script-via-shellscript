env=$1

if [ $env = 'test' ]; then 
  npm run build:test
elif [ $env = 'prod' ];then
  npm run build:prod
fi