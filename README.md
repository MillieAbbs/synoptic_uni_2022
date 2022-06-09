# Synoptic 2022 
![hi!](https://c.tenor.com/XO-D_kXtswQAAAAC/eren-rumbling-eren-yeager.gif)

## Running

 1. Git clone the project (or download the zip)
 2. Open two terminals
 3. `cd` into the cloned directory on both
 4. Once inside, the directory should appear as follows (for now):
 ``` 
 - public
 - src
 .gitignore
 README.md
 ```
5. 
| Terminal 1 | Terminal 2 |
|--|--|
| 1. `cd` into `src`.| 1. `cd` into `public`. |
| 2. Run `npm install` in order to install the necessary dependencies. This might have already been done in which case a `package-lock.json` file and a `node_modules`	 folder will be present in the directory.  | 2. Run `npm install` in order to install the necessary dependencies. This might have already been done in which case a `package-lock.json` file and a `node_modules`	 folder will be present in the directory. |
| 3. Run the command `npm start`. This command will automatically run the command `nodemon ./index.js` as it is an built in script inside `package.json`. `nodemon` works essentially the same as `node` but allows the server to constantly refresh after a change instead of running it manually each time.| 3. Run the command `npm start`. This command will automatically run the command `react-scripts start` as it is an built in script inside `package.json`. This will automatically open a browser running `localhost:3000` and display the app. |
| The server side is now running! | The terminal will display react telling you it has compilled sucessfully. The client side is now running! |

## Functionality 
## Possible Vulnerabilities & Testing 
