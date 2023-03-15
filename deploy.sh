echo "deploying... "

echo "switching to Branch master"
git checkout master

echo "building app..."
npm run build

echo "deploying files to server..."
scp -r build/* heidless@139.162.220.171:/var/www/139.162.220.171/

echo "done!"
