function ikatesti(ika)
{
    ika = Number(ika);
    if (ika >= 18)
    {
        return true;
    }
    else 
    {
        return false;
    }
   
}
module.exports = ikatesti;