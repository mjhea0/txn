##MPR

###What

mpr is an app that experiments with using the Javascript language for the (most - database will be SQL) stack; and that opens up merchant profitability reporting with an open and RESTful API.

###Stack

- Javascript library:			[jQuery](http://api.jquery.com/)
- Templating engine:			[handlebars.js](http://handlebarsjs.com/)
- MVC framework:				[express](http://expressjs.com/api.html)
- Server side language:			[node.js](http://nodejs.org/api/)
- Object-relational mapping: 	[sequlize.js](https://github.com/sequelize/sequelize/wiki/API-Reference)
- Database:  					[PostgreSQL](http://www.postgresql.org/docs/9.3/static/index.html)

###Install

Clone the repository

	$ git clone https://github.com/skilbjo/mpr.git
	
Install modules and dependencies
	
	$ npm install
	
Add secret API keys from the super secret email
	
	$ vim config/auth.js
	
Configure the database (assuming `postgres` is running at `/usr/local/var/postgres`)


	$ postgres -D /usr/local/var/postgres
	
Ensure the following query returns a resultset: 
	
	select 
		datname 
	from 
		pg_database
	where
		datistemplate = false;
		
or run the following:

	$ psql
	
	> skilbjo=# \list
	
Configuration is now done... time to run the app :D

	$ node server.js
	
Then view the app your browser:  `http://localhost:8080`

###Deploy

```
heroku config:push --env=prod.env
```

###Useful tricks

If for some reason you get something like this:

```
events.js:72
        throw er; // Unhandled 'error' event
              ^
Error: listen EADDRINUSE
```

there are likely two `node` servers running. Close a terminal window and start again. But in case that doesn't work... `$ killall node`


Another issue gets you this error:
```
events.js:72
        throw er; // Unhandled 'error' event
              ^
Error: failed to connect to [localhost:27017]
```

Just run this: `$ mongod --fork` or `$ postgres -D /usr/local/var/postgres` to start the database (and to kill the database process, run `$ killall mongod`)