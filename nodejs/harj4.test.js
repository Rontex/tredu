const ala = require('./harj4');

test('Kolmion pinta-ala', () => 
{
    expect(ala(10,2)).toBe(10)
});

test('Väärä argumentti', () => 
{
    expect(() => {ala()}).toThrow("Väärä argumentti");
});

test('Luku on NaN', () => 
{
    expect(() => {ala("toni","tino")}).toThrow("Ei luku");
});



