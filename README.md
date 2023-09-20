# CD_with_docker-compose
Continuous Integration with docker-compose
## HOW TO RUN IT?

### PREINSTALL
It's necessary for you to have node.js installed first.
For installing other dependencies open the terminal in that directory and run :
npm install
After that, you should put the public URL that is logged in the console (if you run this in a public host you can use your host IP this is for the local test) in your webhook tab in your docker hub. click on the image and you can see the webhook tab above.
Finally, you should put /imageUpdated at the end of your URL.

### RUN IT
open the terminal in that directory and run:
npm start
