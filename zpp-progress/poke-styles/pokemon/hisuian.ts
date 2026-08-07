//make sure hisuian overrides come after normal dex
/// <reference path="natdex.ts" />

var hisui = ["Caninos", "Arcanin", "Voltorbe", "Électrode", "Typhlosion", "Qwilfish", "Farfuret", "Clamiral", "Fragilady", "Zorua", "Zoroark", "Guériaigle", "Colimucus", "Muplodocus", "Séracrawl", "Archéduc"];

addStyles(hisui, (p, i) => ".hisui .pokesprite." + dexClean(p) + " img { background-image:url('../img/pokemon-hisui.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em!important; }");
addStyles(hisui, (p, i) => ".hisui .dexEntry .pokesprite." + dexClean(p) + " img, .pokesprite.hisui." + dexClean(p) + " img { background-image:url('../img/pokemon-hisui-large.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em !important; }");

addStyles(hisui, (p, i) => ".hisui .shiny .dexEntry .pokesprite." + dexClean(p) + " img, .pokesprite.hisui.shiny." + dexClean(p) + " img { background-image:url('../img/pokemon-hisui-large-shiny.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em!important; }");