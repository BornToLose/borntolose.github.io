//make sure alolan overrides come after normal dex
/// <reference path="natdex.ts" />

var alola = ["Rattata", "Rattatac", "Raichu", "Sabelette", "Sablaireau", "Goupix", "Feunard", "Taupiqueur", "Tripikeur", "Miaouss", "Persian", "Racaillou", "Gravalanch", "Grolem", "Tadmorv", "Grotadmorv", "Noadkoko", "Ossatueur"];

addStyles(alola, (p, i) => ".alola .pokesprite." + dexClean(p) + " img { background-image:url('../img/pokemon-alola.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em !important;}");
addStyles(alola, (p, i) => ".alola .dexEntry .pokesprite." + dexClean(p) + " img, .pokesprite.alola." + dexClean(p) + " img { background-image:url('../img/pokemon-alola-large.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em !important; }");

addStyles(alola, (p, i) => ".alola .shiny .dexEntry .pokesprite." + dexClean(p) + " img, .pokesprite.alola.shiny." + dexClean(p) + " img { background-image:url('../img/pokemon-alola-large-shiny.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em !important; }");