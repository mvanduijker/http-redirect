var http = require('http');

module.exports = function(opts) {
    opts = opts || {};

    var redirectUrl        = opts.redirectUrl || 'http://example.com';
    var redirectStatusCode = opts.redirectStatusCode || 301;
    var keepRequestPath    = opts.keepRequestPath || false;

    var redirector = function (req, res) {
        var targetUrl = redirectUrl;
        if (keepRequestPath && req.url) {
            targetUrl += req.url;
        }

        res.writeHead(
            redirectStatusCode,
            {
                'Location'     : targetUrl,
                'Content-Type' : 'text/html'
            }
        );
        // fallback on clients who don't understand redirects
        res.end(
            '<!DOCTYPE HTML>' +
            '<html lang="en-US">' +
            '<head>' +
            '<meta charset="UTF-8">' +
            '<meta http-equiv="refresh" content="1;url=' + targetUrl + '">' +
            '<script type="text/javascript">' +
            '   window.location.href = "' + targetUrl + '"' +
            '</script>' +
            '<title>Page Redirection</title>' +
            '</head>' +
            '<body>' +
            'If you are not redirected automatically, follow the <a href="'+ targetUrl +'">link</a>' +
            '</body>' +
            '</html>'
        );
    };

    return http.createServer(redirector);
};
