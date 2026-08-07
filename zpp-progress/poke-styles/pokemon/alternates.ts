//make sure alternate overrides come after normal dex
/// <reference path="natdex.ts" />

class Alternate {
    image: string;
    constructor(public baseMon: string, public modifier: string, useFolder: boolean = false, imageFormat = "png") {
        this.image = "../img/alternate/";
        if (useFolder) this.image += modifier + "/" + baseMon;
        else this.image += baseMon + "-" + modifier;
        this.image += "." + imageFormat;
        this.image = this.image.toLowerCase();
        this.baseMon = baseMon.toLowerCase();
        this.modifier = modifier.toLowerCase();
    }
}

var alternates: Alternate[] = [

    new Alternate("Dracaufeu", "MegaX"),
    new Alternate("Dracaufeu", "MegaY"),
    new Alternate("Raichu", "MegaX"),
    new Alternate("Raichu", "MegaY"),
    new Alternate("Mewtwo", "MegaX"),
    new Alternate("Mewtwo", "MegaY"),
    new Alternate("Absol", "MegaZ"),
    new Alternate("Carchacrok", "MegaZ"),
    new Alternate("Lucario", "MegaZ"),

    new Alternate("Tauros", "Paldea-Flamboyant"),
    new Alternate("Tauros", "Paldea-Aquatique"),

    new Alternate("Zarbi", "T"),

	new Alternate("Kyogre", "Primo"),
    new Alternate("Groudon", "Primo"),

    new Alternate("Deoxys", "Attaque"),
    new Alternate("Deoxys", "Defense"),

    new Alternate("Sancoki", "Orient"),
    new Alternate("Tritosor", "Orient"),

    new Alternate("Motisma", "Helice"),
    new Alternate("Motisma", "Froid"),
    new Alternate("Motisma", "Chaleur"),
    new Alternate("Motisma", "Tonte"),
    new Alternate("Motisma", "Lavage"),

    new Alternate("Dialga", "Origine"),

    new Alternate("Arceus", "Insecte"),
    new Alternate("Arceus", "Feu"),

    new Alternate("Bargantua", "Bleu"),
    new Alternate("Bargantua", "Blanc"),

    new Alternate("Vivaldaim", "Ete"),
    new Alternate("Vivaldaim", "Automne"),
    new Alternate("Vivaldaim", "Hiver"),

    new Alternate("Haydaim", "Ete"),
    new Alternate("Haydaim", "Automne"),
    new Alternate("Haydaim", "Hiver"),

    new Alternate("Boréas", "Totemique"),
    new Alternate("Fulguris", "Totemique"),
    new Alternate("Démétéros", "Totemique"),

    new Alternate("Kyurem", "Blanc"),
    new Alternate("Kyurem", "Noir"),

    new Alternate("Keldeo", "Decide"),

    new Alternate("Prismillon", "Metropole"),

    new Alternate("Floette", "Eternelle"),

    new Alternate("Couafarel", "Kabuki"),

    new Alternate("Banshitrouye", "Mini"),
    new Alternate("Banshitrouye", "Maxi"),
    new Alternate("Banshitrouye", "Ultra"),

    new Alternate("Zygarde", "Pourcent10"),

    new Alternate("Lycanroc", "Minuit"),

    new Alternate("Plumeline", "Pom-Pom"),
    new Alternate("Plumeline", "Hula"),
    new Alternate("Plumeline", "Buyo"),

    new Alternate("Necrozma", "Couchant"),
    new Alternate("Necrozma", "Aurore"),
    new Alternate("Necrozma", "Ultra"),

    new Alternate("Salarsen", "Grave"),

    new Alternate("Charmilly", "Matcha-Ruban"),

    new Alternate("Zacian", "Supreme"),
    new Alternate("Zamazenta", "Supreme"),
	
    new Alternate("Ursaking", "Vermeille"),

    new Alternate("Famignol", "Quatre"),

    new Alternate("Ogerpon", "Puits"),
    new Alternate("Ogerpon", "Fourneau"),
    new Alternate("Ogerpon", "Pierre"),
	
    new Alternate("Terapagos", "Teracristal"),
    new Alternate("Terapagos", "Stellaire"),

];

addStyles(alternates, (a: Alternate) => ".pokesprite." + a.baseMon + "." + a.modifier + ' img { background-image:url("' + a.image + '")!important; background-position: center!important; background-size: 1em !important; }');