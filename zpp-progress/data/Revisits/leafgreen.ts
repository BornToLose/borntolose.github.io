/// <reference path="../tpp-data.ts" />
ZEvent2022.Runs.push(
    {
        RunName: "Vert Feuille (After-Party)",
        ColorPrimary: "#62ac1a",
        ColorSecondary: "#197d31",
        StartDate: "2022-09-12T00:00:00Z", // Estimate due to lack of VOD
        Duration: "2022-09-12T02:35:19Z", // Estimate due to lack of VOD
        HostName: "JJJJJJ",
        HostImage: "img/hosts/jjjjjj.png",
        // HostImageSource: "",
        Region: "Kanto",
        Generation: 3,
        Pokedex: "National",
        FinalStateLink: "./states/leafgreen-ap.json",
		AlwaysShowHOF,
        Events: [
		
			// Following timestamps are estimates due to lack of VOD
		
            {
                Group: "Elite Four", Name: "Agatha", Image: "img/trainers/firered/agatha.png",
                Time: "???", Attempts: 0
            },
            {
                Group: "Elite Four", Name: "Peter", Image: "img/trainers/firered/lance.png",
                Time: "???", Attempts: 0
            },
            {
                Group: "Champions", Name: "BAAAIJR", Image: "img/trainers/firered/blue.png",
                Time: "???", Attempts: 0
            },
			
            <TPP.HallOfFame>{
                Group: "Hall of Fame", Name: "Panthéon", Time: "2022-09-12T02:31:44Z", IDNo: "20543", Party: [
                    { Pokemon: "Lapras", Nickname: "FLOP", Level: 48, Gender: "Male", Number: 131, IDNo: "20543" },
                    { Pokemon: "Snorlax", Nickname: "BIDE", Level: 36, Gender: "Male", Number: 143, IDNo: "20543" },
                    { Pokemon: "Venusaur", Nickname: "FLORIZARRE", Level: 54, Gender: "Male", Number: 3, IDNo: "20543" },
                    { Pokemon: "Jolteon", Nickname: "A", Level: 54, Gender: "Female", Number: 135, IDNo: "20543" },
                    { Pokemon: "Pidgeot", Nickname: "AAAAAAAA", Level: 52, Gender: "Male", Number: 18, IDNo: "20543" },
                    { Pokemon: "Sandshrew", Nickname: "SABELETTE", Level: 12, Gender: "Male", Number: 27, IDNo: "20543" },
                ],
                Image: "img/ribbons/champion.png"
            },
			
        ],
        Revisit: { Collection: "ZEvent 2022", Run: "Vert Feuille" },
        CopyEvents: ["Vert Feuille"],
    }
);