//make sure galarian overrides come after normal dex
/// <reference path="natdex.ts" />

var galar = ["Miaouss", "Ponyta", "Galopa", "Ramoloss", "Flagadoss", "Canarticho", "Smogogo", "M. Mime", "Artikodin", "Électhor", "Sulfura", "Roigada", "Corayon", "Zigzaton", "Linéon", "Darumarond", "Darumacho", "Tutafeh", "Limonde"];

addStyles(galar, (p, i) => ".galar .pokesprite." + dexClean(p) + " img { background-image:url('../img/pokemon-galar.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em !important; }");
addStyles(galar, (p, i) => ".galar .dexEntry .pokesprite." + dexClean(p) + " img, .pokesprite.galar." + dexClean(p) + " img { background-image:url('../img/pokemon-galar-large.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em !important; }");

addStyles(galar, (p, i) => ".galar .shiny .dexEntry .pokesprite." + dexClean(p) + " img, .pokesprite.galar.shiny." + dexClean(p) + " img { background-image:url('../img/pokemon-galar-large-shiny.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em !important; }");