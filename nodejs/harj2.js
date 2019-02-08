function osamaara(a, b = 1)
{
    if(a == null || a == undefined)
    {
        throw new Error("Invalid argument");
    }
    a = Number(a);
    b = Number(b);
    if(Number.isNaN(a))
    {
        throw new Error("Ei ole luku!");
    }
    if (b == 0)
    {
        throw new Error("Nollalla ei voi jakaa");
    }
    
    jaannos = a / b;
    return jaannos;  
}
module.exports = osamaara;