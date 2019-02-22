const sum = require('./demo1');

test('suorittaa yhteenlaskun 1 + 2, tulos 3', () => 
{
    expect(sum(5,5)).toBe(10);
});

test('Väärä argumentti', () => 
{
    expect(() => {sum()}).toThrow("Nolla tai muu parametri annettu");
});

test('Väärä argumentti', () => 
{
    expect(() => {sum("toni")}).toThrow("Ei luku");
});

test('suorittaa yhteenlaskun 1 + 2, tulos 3', () => 
{
    expect(sum("5")).toBe(5);
});


