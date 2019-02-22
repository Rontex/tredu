function ala(kanta,korkeus)
{
    if (kanta == null || kanta == undefined || korkeus == null || korkeus == undefined)
    {
        throw new Error("Väärä argumentti");
    }
    tulos = (Number(kanta) * Number(korkeus)) / 2;
    if (Number.isNaN(tulos))
    {
        throw new Error("Ei luku");
    }
    return tulos;
    
}
module.exports = ala;
