const bussilippu = require('./harj4');

test('Ei merkkijonoja parametrina', () => 
{
    expect(bussilippu(32)).toBe(3)
});

test('Ei argumenttia', () => 
{
    expect(() => {bussilippu()}).toThrow("Ei argumenttia");
});

test('Ika < 7', () => 
{
    expect(bussilippu(6)).toBe(0)
});

test('Ika < 16', () => 
{
    expect(bussilippu(15)).toBe(1)
});

test('16 < ika < 25', () => 
{
    expect(bussilippu(17)).toBe(1.5)
});

test('ika > 65', () => 
{
    expect(bussilippu(66)).toBe(1.5)
});

test('Ika < "16"', () => 
{
    expect(bussilippu("15")).toBe(1)
});
test('Ei argumenttia', () => 
{
    expect(() => {bussilippu("tfy")}).toThrow("Ei luku");
});



