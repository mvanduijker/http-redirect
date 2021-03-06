var port               = process.env.PORT || 5000;
var redirectUrl        = process.env.REDIRECT_URL || 'http://example.com';
var redirectStatusCode = process.env.REDIRECT_STATUS_CODE || 301;
var keepRequestPath    = process.env.REDIRECT_KEEP_REQUEST_PATH || false;

var app = require('./server')({
    'redirectUrl' : redirectUrl,
    'redirectStatusCode': redirectStatusCode,
    'keepRequestPath': keepRequestPath
});

app.listen(port);

console.log('Server running on port ' + port);
