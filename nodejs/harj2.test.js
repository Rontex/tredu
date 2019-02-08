const osamaara = require('./harj2');

test('Parametrit oikein annettuna', () => 
{
    expect(osamaara(10,5)).toBe(2);
});

test('Ei nollaa jakajana', () => 
{
    expect(() => {osamaara(5, 0)}).toThrow("Nollalla ei voi jakaa");
});

test('Ei merkkijonoa parametriin', () => 
{
    expect(() => {osamaara("toniplays", 0)}).toThrow("Ei ole luku!");
});


test('Ei argumenttia', () => 
{
    expect(() => {osamaara()}).toThrow("Invalid argument");
});



