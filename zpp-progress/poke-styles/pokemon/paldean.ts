//make sure paldean overrides come after normal dex
/// <reference path="natdex.ts" />

var paldea = ["Tauros", "Axoloto"];

addStyles(paldea, (p, i) => ".paldea .pokesprite." + dexClean(p) + " img { background-image:url('../img/pokemon-paldea.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em !important; }");
addStyles(paldea, (p, i) => ".paldea .dexEntry .pokesprite." + dexClean(p) + " img, .pokesprite.paldea." + dexClean(p) + " img { background-image:url('../img/pokemon-paldea-large.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em !important; }");

addStyles(paldea, (p, i) => ".paldea .shiny .dexEntry .pokesprite." + dexClean(p) + " img, .pokesprite.paldea.shiny." + dexClean(p) + " img { background-image:url('../img/pokemon-paldea-large-shiny.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em !important; }");