class MasterMind {

    static codeLength = 4;
    
    static codePegs =  [
        { name: "Green", color: "\u{1F7E2}" },
        { name: "Blue", color: "\u{1F535}" },
        { name: "Red", color: "\u{1F534}" },
        { name: "Yellow", color: "\u{1F7E1}" },
        { name: "Brown", color: "\u{1F7E4}" },
        { name: "Orange", color: "\u{1F7E0}" }
    ];

    static keyPegBlack = { name: "Black", color: "\u{26AB}" };
    static keyPegWhite = { name: "White", color: "\u{26AA}" };

    constructor(name) {
        this.name = name
        this.buildPegSelectors()
    }

    buildPegSelectors () {
        for (let i = 0; i < MasterMind.codeLength; ++i) {

            var pegSelectColumn = document.createElement("td");

            var pegSelect = document.createElement("select");
            $(pegSelect).attr("id", "slot" + i);

            $(pegSelect).append($("<option>", {
                value: -1,
                selected: "selected",
                text: "(select a color)"
            }));

            for (var p in MasterMind.codePegs) {

                var peg = MasterMind.codePegs[p];

                $(pegSelect).append($("<option>", {
                    value: p,
                    text: peg["color"] + " (" + peg["name"] + ")"
                }));

            }

            $(pegSelectColumn).append(pegSelect);
            $("#pegslots").append(pegSelectColumn);

        }

    }

    test() {
        var p = document.createElement("p");
        $(p).text("jQuery Version: " + $().jquery);
        $("#output").append(p);
    }
}

$(document).ready(function() {
    let myGame = new MasterMind("name")
    const btn = $("#submit_button")
    btn.on("click", () => myGame.test());
});
