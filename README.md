# RNHblog
Simple React Native blog project with Expo and React navigation

The project is using json server and ngrok tunel, so you will need an ngrok account.
Start them in _jsonserver folder with  'npm run db' and 'npm run tunnel', then copy the tunel link from ngrok console and replace the link in src/api/jsonServer.js file.

Note that ngrok seesion expires in 2 hours for free accounts, and after restart the link has changed, so you need to copy-paste again tne new tunnel link in src/api/jsonServer.js file.