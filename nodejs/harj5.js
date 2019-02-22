function tuote(hinta)
{
    if (hinta == null || hinta == undefined)
    {
        throw new Error("Väärä argumentti");
    }
    hinta = Number(hinta);
    if (Number.isNaN(hinta))
    {
        throw new Error("Ei luku");
    }
    

    if (hinta < 100)
    {
        return hinta;
    }
    else if (hinta >= 100 && hinta <= 200)
    {
        alennus = hinta * 0.95;
        return alennus;
    }
    else if (hinta > 200 && hinta < 500)
    {
        alennus = hinta * 0.90;
        return alennus;
    }
    else
    {
        alennus = hinta * 0.85;
        return alennus;
    }
}
module.exports = tuote;
