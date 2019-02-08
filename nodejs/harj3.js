function bussilippu(ika)
{
    if (ika == null || ika == undefined)
    {
        throw new Error("Ei argumenttia");
    }
    ika = Number(ika);
    if (Number.isNaN(ika))
    {
        throw new Error("Ei luku");
    }
    if (ika < 7)
    {
        return 0;
    }
    else if (ika < 16)
    {
        return 1;
    }
    else if (ika > 16 && ika < 25)
    {
        return 1.5;
    }
    else if (ika < 65)
    {
        return 3;
    }
    else
    {
        return 1.5;
    }
}
module.exports = bussilippu;