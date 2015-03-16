# http-redirect

[![Build Status](https://travis-ci.org/mvanduijker/http-redirect.svg)](https://travis-ci.org/mvanduijker/http-redirect)
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

http-redirect is a small, easily installable on heroku, nodejs redirect webapp. 
Lots of hosting companies offer a redirect service (which cost a little bit of money most of the time).
Now for free if you spin a free dyno on heroku.

## Installation

```
git clone https://github.com/mvanduijker/http-redirect.git
npm install
```

## Configuration

You can configure the following environment variables to setup your redirect:

With `REDIRECT_URL` you can configure the url where to redirect to (defaults to http://example.com)
```
REDIRECT_URL=http://example.com
```

With `REDIRECT_STATUS_CODE` you can configure the desired redirect status code (defaults to 301) 
```
REDIRECT_STATUS_CODE=301
```

With `REDIRECT_KEEP_REQUEST_PATH` you can configure if the request path must be stripped of (defaults to false)
For example incoming url `http://localhost/foo/bar?with=love` will be redirected to `http://example.com/foo/bar?with=love`
when turned on and `http://example.com` when turned off
```
REDIRECT_KEEP_REQUEST_PATH=1
```

You can run locally with
```
npm start
```

Running test suite
```
npm test
```
