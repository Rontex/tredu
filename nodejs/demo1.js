function sum(a, b = 0)
{
    if(a === undefined || a === null)
    {
        throw new Error("Nolla tai muu parametri annettu");
    }
    let summa = Number(a) + Number(b);
    if(Number.isNaN(summa))
    {
        throw new Error('Ei luku');
    }
    
    return summa;
}
module.exports = sum;