process.env.NODE_ENV = 'test';

var http = require('http');
var request = require('request').defaults({followRedirect: false});
var assert = require('assert');

describe('redirect defaults', function() {
    // start the server
    before(function() {
        this.server = require('../server')().listen(8000);
    });

    after(function () {
        this.server.close();
    });

    it('should redirect the page', function (done) {
        request.get('http://localhost:8000', function (err, res, body){
            assert.equal(301, res.statusCode);
            assert.equal('http://example.com', res.headers['location']);
            done();
        });
    });
});

describe('redirect given status code and url', function() {
    // start the server
    before(function() {
        this.server = require('../server')({
            'redirectUrl' : 'http://www.example.org',
            'redirectStatusCode': 302
        }).listen(8000);
    });

    after(function () {
        this.server.close();
    });

    it('should redirect the page', function (done) {
        request.get('http://localhost:8000', function (err, res, body){
            assert.equal(302, res.statusCode);
            assert.equal('http://www.example.org', res.headers['location']);
            done();
        });
    });
});


describe('redirect keeping request path', function() {
    // start the server
    before(function() {
        this.server = require('../server')({
            'keepRequestPath': true
        }).listen(8000);
    });

    after(function () {
        this.server.close();
    });

    it('should redirect the page', function (done) {
        request.get('http://localhost:8000/path?example=property', function (err, res, body){
            assert.equal(301, res.statusCode);
            assert.equal('http://example.com/path?example=property', res.headers['location']);
            done();
        });
    });
});
