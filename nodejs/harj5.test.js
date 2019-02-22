const tuote = require('./harj5');

test('Alennettu hinta 100-200', () => 
{
    expect(tuote(150)).toBe(142.5)
});

test('Alennettu hinta 201-500', () => 
{
    expect(tuote(250)).toBe(225)
});

test('Alennettu hinta alle 100', () => 
{
    expect(tuote(95)).toBe(95)
});

test('Alennettu hinta yli 500', () => 
{
    expect(tuote(550)).toBe(467.5)
});




test('Väärä argumentti', () => 
{
    expect(() => {tuote()}).toThrow("Väärä argumentti");
});

test('Luku on NaN', () => 
{
    expect(() => {tuote("kymmenen")}).toThrow("Ei luku");
});



