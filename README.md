# http-redirect

[![Build Status](https://travis-ci.org/mvanduijker/http-redirect.svg)](https://travis-ci.org/mvanduijker/http-redirect)
[![Coverage Status](https://coveralls.io/repos/mvanduijker/http-redirect/badge.svg?branch=master)](https://coveralls.io/r/mvanduijker/http-redirect?branch=master)
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

Lots of hosting companies offer a redirect service, which most of the time cost a little bit of money.
Now for free if you spin up a free dyno on heroku with this little app.

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

## Starting that ...

You can run locally with
```
npm start
```

Running test suite
```
npm test
```

Create coverage report
```
npm run-script coverage
```

# Shipit on Heroku

Click [![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy) to create heroku app. After app has been created, add config variable in the settings tab of your application with `REDIRECT_URL` and value where you want the app to
redirect to. Then configure your custom domains https://devcenter.heroku.com/articles/custom-domains. Off you go! 
