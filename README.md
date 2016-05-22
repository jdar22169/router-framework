# maddiekev-router
Homework for Router Framework

```js
var http = require('http')
var Router = require('maddiekev-router')
var router = new Router()

router.get('/', function (req, res) {
  res.send('Hello World')
})

http.createServer(router.route()).listen(3000);

```

## Installation

```bash
$ npm install maddiekev-router
```

## Features

  * Creates routes for each REST request.
  * Makes routes object for easy routing access.


## Tests

  To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## People
  * Maddie Mow
  * Kevin Chuang
