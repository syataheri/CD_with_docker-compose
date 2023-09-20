# CD_with_docker-compose
Continuous Integration with docker-compose
## HOW TO RUN IT?

### PREINSTALL
It's necessary for you to have node.js installed first.
For installing other dependencies open the terminal in that directory and run :
npm install
After that, you should put public url that is logged in console (if you run this in public host you can use your host IP this is for local test) in your webhook tab in your docker hub. click on image and you can see webhook tab in above.
At last you should put /imageUpdated in the end of your url.

### RUN IT
open the terminal in that directory and run:
npm start
