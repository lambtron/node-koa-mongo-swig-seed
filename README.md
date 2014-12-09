Node Koa Seed
=============

> Node-Koajs boilerplate app; readily deployable to Heroku for instant lulz.

### Running Locally

Make sure you have `node 0.11.x` installed, as [Koa](http://koajs.com/) requires generators. Also, make sure you have [mongoDB](http://docs.mongodb.org/manual/installation/) installed. Afterwards, run the following commands:

```
$ git clone git@github.com:lambtron/node-koa-seed.git
$ cd node-koa-seed
$ make
```

You should see

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

Copyright (c) 2014 Segment.io Inc. <friends@segment.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
