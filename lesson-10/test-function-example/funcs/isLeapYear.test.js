/*
1. Given year as integer and return true if leap year and false if no.
2. If given not valid argument throw error with corrent message.

2008 - true
2003 - false
1900 - false
2000 - true

41 - error 'argument must me 42 or more'
2008.4 - error 'argument must be integer'
() - error 'argument must be exist'
'2008' - error 'argument must be number'
null - error 'argument must be number'
false - error 'argument must be number'
true - error 'argument must be number'
()=>{} - error 'argument must be number'
{} - error 'argument must be number'
[] - error 'argument must be number'
*/

const isLeapYear = require("./isLeapYear");

describe("test isLeapYear function", ()=> {
    test("2008 - true", ()=> {
        const result = isLeapYear(2008);
        expect(result).toBe(true);
        /*
        const expect = result => {
            return {
                result,
                toBe(value) {
                    return this.result === value;
                }
            }
        }
        */
    })

    test("2003 - false", ()=> {
        expect(isLeapYear(2003)).toBe(false);
    });

    it("1900 - false", ()=> {
        expect(isLeapYear(1900)).toBe(false);
    })

    test("2000 - true", ()=> {
        expect(isLeapYear(2000)).toBe(true);
    })

    test("41 - error 'argument must me 42 or more'", ()=> {
        expect(() => isLeapYear(41)).toThrow('argument must me 42 or more')
    })

    test("2008.4 - error 'argument must be integer'", ()=> {
        expect(() => isLeapYear(2008.4)).toThrow('argument must be integer')
    })

    test("() - error 'argument must be exist'", ()=> {
        expect(() => isLeapYear()).toThrow('argument must be exist')
    })

    test("'2008' - error 'argument must be number'", ()=> {
        expect(() => isLeapYear('2008')).toThrow('argument must be number')
    })

    test("null - error 'argument must be number'", ()=> {
        expect(() => isLeapYear(null)).toThrow('argument must be number')
    })

    test("false - error 'argument must be number'", ()=> {
        expect(() => isLeapYear(false)).toThrow('argument must be number')
    })

    test("true - error 'argument must be number'", ()=> {
        expect(() => isLeapYear(true)).toThrow('argument must be number')
    })

    test("()=>{} - error 'argument must be number'", ()=> {
        expect(() => isLeapYear(()=>{})).toThrow('argument must be number')
    })

    test("{} - error 'argument must be number'", ()=> {
        expect(() => isLeapYear({})).toThrow('argument must be number')
    })

    test("[] - error 'argument must be number'", ()=> {
        expect(() => isLeapYear([])).toThrow('argument must be number')
    })
})