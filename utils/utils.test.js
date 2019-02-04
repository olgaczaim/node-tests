const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);

            expect(res).toBe(44).toBeA('number');
            //if (res !== 44){
            //    throw new Error(`Expected 44 but got ${res}`);
            //}
        });
    });



    it('should asycadd two numbers', (done) => {
        //asenkron olunca sıkıntı mokaya bunun asenkron olduunu söylememiz lazım
        //done eklersek bitince çalıştır demek.
        utils.asyncAdd(4,3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });

    it('should square number' , () => {
        var res = utils.square(5);

        expect(res).toBe(25).toBeA('number');
        //if(res !== 25) {
        //    throw new Error(`Expected 25 but got ${res}`);
        //}
    });

    it('should squre async numbers', (done) => {
        utils.asyncSquare(6, (sq) => {
            expect(sq).toBe(36).toBeA('number');
            done();
        });
    });

    it('should expect some values', () => {
        //expect(12).toNotBe(12);
        //expect({name: 'Andrew'}).toNotEqual({name:'Olgac'});
        //expect([2,3,4]).toInclude(2); //toExclude
        expect({
            name: 'Olgac',
            age: 30,
            location: 'Ankara'
        }).toInclude({ //toexclude
            age:30
        })
    });

//https://github.com/mjackson/expect

//should verify first and last names are set
    it('should set firstname and lastname', () => {
        var user = {location: 'ankara', age: 30};
        var res = utils.setName(user, 'Olgac Zaim');

        //expect(user). toEqual(res);
        expect(res).toInclude({
            firstName: 'Olgac',
            lastName: 'Zaim'
        })
    });
});
