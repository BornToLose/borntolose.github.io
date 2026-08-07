/// <reference path="natdex.ts" />
/// <reference path="../../data/Pokedex/natdex.ts" />
/// <reference path="../../data/Pokedex/regional.ts" />

var exists = (require('fs') as typeof import('fs')).existsSync;

var fakemon = [
    "Unidentified"
];

addStyles(fakemon, f => {
    var clean = dexClean(f).replace(/ /g, '');
    return ".pokesprite." + clean + ' img  { background-image:url("../img/fakemon/' + clean + '.png")!important; background-size: 1em!important; background-position: center!important; }';
});

function fixFakeForms(mons: string[]) {
    return mons.map((m, i, arr) => arr.findIndex(n => n == m) == i ? m : `${m}-${i}`);
}

addSingleStyle(fakemon.map(f => ".event.pokemon.pokesprite." + dexClean(f) + " img").join(", ") + " { background-size: 50%!important; background-position: center!important; }");

// Mega Evolution
addStyles(["Dracaufeu"], f => {
    const clean = dexClean(f).replace(/ /g, '');
    const path = `./img/alternate/dracaufeu-megax.png`;
    return `.mega .pokesprite.dracaufeu img { background-image:url(".${path}")!important; background-position: 0px -0em!important; background-size: 1em!important; background-position: center!important; }`;
});
addStyles(["Dracaufeu"], f => {
    const clean = dexClean(f).replace(/ /g, '');
    const path = `./img/alternate/dracaufeu-megay.png`;
    return `.mega .pokesprite.dracaufeu-42 img { background-image:url(".${path}")!important; background-position: 0px -0em!important; background-size: 1em!important; background-position: center!important; }`;
});
addStyles(["Raichu"], f => {
    const clean = dexClean(f).replace(/ /g, '');
    const path = `./img/alternate/raichu-megax.png`;
    return `.mega .pokesprite.raichu img { background-image:url(".${path}")!important; background-position: 0px -0em!important; background-size: 1em!important; background-position: center!important; }`;
});
addStyles(["Raichu"], f => {
    const clean = dexClean(f).replace(/ /g, '');
    const path = `./img/alternate/raichu-megay.png`;
    return `.mega .pokesprite.raichu-14 img { background-image:url(".${path}")!important; background-position: 0px -0em!important; background-size: 1em!important; background-position: center!important; }`;
});
addStyles(["Mewtwo"], f => {
    const clean = dexClean(f).replace(/ /g, '');
    const path = `./img/alternate/mewtwo-megax.png`;
    return `.mega .pokesprite.mewtwo img { background-image:url(".${path}")!important; background-position: 0px -0em!important; background-size: 1em!important; background-position: center!important; }`;
});
addStyles(["Mewtwo"], f => {
    const clean = dexClean(f).replace(/ /g, '');
    const path = `./img/alternate/mewtwo-megay.png`;
    return `.mega .pokesprite.mewtwo-71 img { background-image:url(".${path}")!important; background-position: 0px -0em!important; background-size: 1em!important; background-position: center!important; }`;
});