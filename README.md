# partEmatch - datingapp
Basic webapp that runs on Nodejs and uses EJS as templating engine.

_Check out the app [here](https://partematch.herokuapp.com/) its live!_

## Description
partEmatch is a dating-app that focusses on people that are visiting festivals and looking for other people that attend to the same festival. Each user can specify festivals they attend. Some users are looking for a romance where other just want to start friendships or find people to share festival experiences with.

## Supported Features
Within the app users are able to:
- Register a profile
- Login a registerd account
- Upload an img
- Change user information (profile)
- Find matches (based on festivals/partys attending)
- Specify preferences (looking for love/friendship, looking for male/female/no preference)
- Delete an account
- See other users profile

## Database model

User-data is stored in the database like this:
- `_id : ObjectId(String)(genereated by mongoose)`
- `firstName : String`
- `lastName : String`
- `email : String`
- `password : String (hashed met Bcrypt)`
- `img: {url: String, alt: String}`
- `gender : String`
- `bio : String`
- `events : {festival : [String], party : [String]}`
- `prefs : {pref : String (male, female, nopref), relation : String (friendship, love, no pref)}`
- `dob : Date`

## Installation
### 1. Clone the partEmatch repo
To clone the repo use the `git clone` command in youre favorite CLI:

`git clone https://github.com/Mokerstier/partEmatch-datingApp.git`

### 2. Install dependencies
Install al the required dependencies to be able to run the app on youre server:

`npm install`

### 3. Configuration
Before you can use a `mongoDB` - database locally you'll have to make some configurations on pre hand:
create a `.env` - configure `DB_NAME`, `DB_HOST` and a `DB_PORT`
#### Open your CLI and run the following commands
_For local setups:_
1. `touch .env`
2. `echo "DB_NAME=your_db_name" >> .env`
3. `echo "DB_PORT=your_db_port" >> .env`
4. `echo "DB_HOST=your_db_host" >> .env` => usually `localhost`
5. `echo "PORT=your_port_number" >> .env` => usually `8080`
6. `echo "MONGODB_URI='mongodb://'+process.env.DB_HOST+':'+process.env.DB_PORT+'/'+process.env.DB_NAME`

_For live setups_
1. `touch .env`
2. `echo "MONGODB_URI=<YOUR_DB_URL>:<YOUR_DB_PORT>/<YOUR_DB_NAME>"`

You are now able to run the application using `npm start`
if everything is set up the right way youre terminal will log:

`server is gestart op port "your_specified_port"`

`Now connected to MongoDB on database: "your_db_name"`

### Usage nodemon

U run nodemon with the `npm run dev` command in the terminal

each time you save your .js file nodemon will run the file in the terminal. 
GGWP! No need to drag your index.html with script tags to the browser. EZ-life!

Mokerstier/partEmatch-datingApp is licensed under the
#### MIT License
© 2019 Wouter van der Heijde
