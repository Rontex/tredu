const ikatesti = require('./harj1');

test('Testaa täysi-ikäisyyttä', () => 
{
    expect(ikatesti(19)).toBeTruthy()
});

test('Testaa täysi-ikäisyyttä', () => 
{
    expect(ikatesti(15)).toBeFalsy()
});

test('Testaa täysi-ikäisyyttä', () => 
{
    expect(ikatesti("moi")).toBeFalsy()
});