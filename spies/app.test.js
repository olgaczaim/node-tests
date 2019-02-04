const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
      saveUser: expect.createSpy()
    };

    app.__set__('db', db);
   it('should call the spy correctly', () => {
       var spy = expect.createSpy();
       spy('Olgac', 32);
       expect(spy).toHaveBeenCalledWith('Olgac', 32);
   });

   it('should call saveUser with user object', () => {
      var email = 'olgac@live.com';
      var pass = '123';

      app.handleSignup(email, pass);
      expect(db.saveUser).toHaveBeenCalledWith({email, pass});
   });
});