const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

//it('should return hello world response', (done) => {
//    request(app)
//        .get('/')
//        .expect(200)
//        .expect('Hello World')
//        .end(done);
//});

//it('should return hello world response', (done) => {
//    request(app)
//        .get('/')
//        .expect({
//            error: 'Page not found'
//        })
//        .end(done);
//});

describe('Server', () => {
    describe('Get /', () => {

        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found'
                    });
                })
                .end(done);
        });
    });

    describe('Get /Users', () => {
        it('should return my user object', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name:'Olgac',
                        age: 32
                    });
                })
                .end(done);
        });
    });
});


