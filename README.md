Node Koa Mongo Swig Seed
=============

> Node-Koa-Mongo-Swig boilerplate app; readily deployable to Heroku for instant lulz.

### Running Locally

Make sure you have `node 0.11.x` installed, as [Koa](http://koajs.com/) requires generators. Also, make sure you have [mongoDB](http://docs.mongodb.org/manual/installation/) installed. Afterwards, run the following commands:

```
$ git clone git@github.com:lambtron/node-koa-mongo-swig-seed.git
$ cd node-koa-mongo-swig-seed
$ make
```

You should see:

```
listening on port 3000
```

Then, point your browser to `localhost:3000`.

### Deploying to Heroku

Make sure you have a [Heroku](http://www.heroku.com) account and you have Heroku's [CLI](https://toolbelt.heroku.com/) installed. Afterwards, run the following commands.

```
$ heroku create
Creating polar-escarpment-5726... done, stack is cedar-14
https://polar-escarpment-5726.herokuapp.com/ | git@heroku.com:polar-escarpment-5726.git
Git remote heroku added
$ git push heroku master
```

Then, point your browser to `https://polar-escarpment-5726.herokuapp.com/`.

### App structure

```
.
+-- bin
|   +-- server
+-- lib
|   +-- models.js
|   +-- render.js
|   +-- twitter.js
+-- server
|   +-- routes.js
|   +-- tweet.js
+-- views
|   +-- index.html
|   +-- layout.html
+-- .gitignore
+-- LICENSE
+-- Makefile
+-- package.json
+-- Procfile
+-- README.md
```

This is the basic structure of the Node-Koa app. Logic is separated out between `bin` (configuration of the server), `lib` (setting up libraries for any area of the app to use), `server` (server-side logic), `views` (front-end templating), and the `Makefile`. We will dive deeper into the aforementioend directories, but first a high level overview of the top-level files.

#### [.gitignore](https://github.com/lambtron/node-koa-mongo-swig-seed/blob/master/.gitignore)

This tells git which files to ignore. For node apps, the most common are `node_modules` (the app's dependencies), `.DS_Store` (tells the computer how to format the directory's icons—completely useless in coding), and `logs` (error or debug logs). Other people working on the repo derive no value in seeing these settings, which is why it is best that git ignores them.

[More about .gitignore](http://git-scm.com/docs/gitignore).

#### [LICENSE](https://github.com/lambtron/node-koa-mongo-swig-seed/blob/master/LICENSE)

A software license that describes how your code can be used by others.

#### [Makefile](https://github.com/lambtron/node-koa-mongo-swig-seed/blob/master/Makefile)

Once upon a time, software was tedious to compile and run, especially when you had to include several source files and execute a series of commands each time. The emergence of `Makefile`s simplifies this process dramatically.

The `Makefile` defines a series of instructions that will build and derive the target program, which can be executed within a set of defined commands.

In our `Makefile`, we define `make clean` (remove non-checked-in depedencies), `make debug` (run in debug mode), `make run` (run the server), and `make server` (run the server with nodemon for development purposes). The default setting, which is called when you just call `make`, will call `make run`.

[More about Makefiles](http://en.wikipedia.org/wiki/Make_(software)).

#### [package.json](https://github.com/lambtron/node-koa-mongo-swig-seed/blob/master/package.json)

This file holds all the metadata related to your app or project. This file is used to give information to [`npm`](http://www.npmjs.org) that allows it to identify the project and its dependencies. This also contains other metadata around the app's description, version, license, and configuration data.

All of the dependencies are located in the `dependencies` property. When you call `npm install`, those are the dependencies and their versions that are installed locally under `node_modules`.

[More information about package.json](https://docs.nodejitsu.com/articles/getting-started/npm/what-is-the-file-package-json).

#### [Procfile](https://github.com/lambtron/node-koa-mongo-swig-seed/blob/master/Procfile)

This is a Heroku specific file that tells Heroku how to run the app. Heroku has various workers, one of them being `web`, which we have to provide the command to initiate the server. In our case, the server can be started with the `make` command, which is why our Procfile is just `web: make`. In other cases, it can be `web: node server.js` or `web: rails s`, etc.

[More information about Procfiles](https://devcenter.heroku.com/articles/procfile).

#### [README.md](https://github.com/lambtron/node-koa-mongo-swig-seed/blob/master/README.md)

This arguably the most important file, as it is the first piece of information a new programmer interacts with to understand your software. For guides to write great readmes, check out the below:
- [How to write a great README](http://robots.thoughtbot.com/how-to-write-a-great-readme)
- [How to write a Readme worth reading](https://orchestrate.io/blog/2014/07/16/how-to-write-a-readme-worth-reading/)

#### [bin/server](https://github.com/lambtron/node-koa-mongo-swig-seed/tree/master/bin)

The `make run`, `make server`, and `make debug` commands all call `--harmony bin/server`. The first line of `bin/server` has `#!/usr/bin/env node`, which tells the computer how to execute the rest of the file.

The [`server`](https://github.com/lambtron/node-koa-mongo-swig-seed/blob/master/bin/server) file is for setting up the server. Here you'll see the `PORT` being defined, the various [middleware](https://github.com/lambtron/node-koa-mongo-swig-seed/blob/master/bin/server#L19-L24) that the server will use, [configuring the routes](https://github.com/lambtron/node-koa-mongo-swig-seed/blob/master/bin/server#L26-L32), and finally [initializing the server](https://github.com/lambtron/node-koa-mongo-swig-seed/blob/master/bin/server#L38).

#### [lib](https://github.com/lambtron/node-koa-mongo-swig-seed/tree/master/lib)

This folder contains all files that have "helper" code that any other area of the code base can use, which normally is:
- [to connect to the database](https://github.com/lambtron/node-koa-mongo-swig-seed/blob/master/lib/models.js)
- [to connect to templating engine](https://github.com/lambtron/node-koa-mongo-swig-seed/blob/master/lib/render.js)
- [to connect to any wrapper libraries](https://github.com/lambtron/node-koa-mongo-swig-seed/blob/master/lib/twitter.js)

In [`models.js`](https://github.com/lambtron/node-koa-mongo-swig-seed/blob/master/lib/models.js), it is important to replace the address to the mongo database, as well as recognize that `process.env.MONGOHQ_URL` is the environmental variable that Heroku sets when you use [mongoHQ](https://addons.heroku.com/mongohq) as an add on.

Also, the [`YOUR_MODEL`](https://github.com/lambtron/node-koa-mongo-swig-seed/blob/master/lib/models.js#L10) name should be the object that you are saving in the database, while the file name should be plural of said object. For example, if you are saving users in your database, the model name should be `user` and the filename be `users.js`.

In [`render.js`](https://github.com/lambtron/node-koa-mongo-swig-seed/blob/master/lib/render.js), ...

In [`twitter.js`](https://github.com/lambtron/node-koa-mongo-swig-seed/blob/master/lib/twitter.js), we are initializing the library, setting the credentials, and then exposing a 'thunkified' instance. Note that twitter.js is just an example; any wrapper library can be added here, but the main intent is just to initialize (with credentials) and expose it so that any other file that `requires` the file can use it immediately.

#### [server](https://github.com/lambtron/node-koa-mongo-swig-seed/tree/master/server)

This folder contains all files that uphold the back end logic. Whereas the `bin` folder focused on configuring the server and the `lib` folder just made available libraries for other files to use, the `server` folder has the main business logic.

In [`routes.js`](https://github.com/lambtron/node-koa-mongo-swig-seed/blob/master/server/routes.js), 

In [`tweet.js`](https://github.com/lambtron/node-koa-mongo-swig-seed/blob/master/server/tweet.js),

#### [views](https://github.com/lambtron/node-koa-mongo-swig-seed/tree/master/views)

This folder contains all of the front-end [`swig`](http://paularmstrong.github.io/swig/) templates that will be populated by data sent from `routes.js` (with this [command](https://github.com/lambtron/node-koa-mongo-swig-seed/blob/master/server/routes.js#L21)).

Refer to the `swig` [documentation](http://paularmstrong.github.io/swig/docs/) for more information.

## License (MIT)

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

Copyright (c) 2014

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
