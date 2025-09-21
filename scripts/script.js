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

    constructor() {
        this.buildPegSelectors()
        this.guess_count = 0
    }

    buildPegSelectors () {
        for (let i = 0; i < MasterMind.codeLength; ++i) {

            var pegSelectColumn = document.createElement("td");

            var pegSelect = document.createElement("select");
            $(pegSelect).attr({id: "slot" + i, class: "guess"});

            $(pegSelect).append($("<option>", {
                value: -1,
                selected: "selected",
                text: "(select a color)"
            }));

            MasterMind.codePegs.forEach((peg) => {
                $(pegSelect).append($("<option>", {
                    value: peg,
                    text: peg["color"] + " (" + peg["name"] + ")"
                }));
            });
            
            $(pegSelectColumn).append(pegSelect);
            $("#pegslots").append(pegSelectColumn);

        }

    }

    submit_guess() {
        if (!(this.valid_guesses())) {
            alert("Must select a color for each slot");
            return;
        }
        this.guess_count++;
        var p = document.createElement("p");
        $(p).text("jQuery Version: " + $().jquery);
        $("#output").append(p);
    }

    valid_guesses() {
        for (let i = 0; i < MasterMind.codeLength; i++) {
            let current_slot = $("#slot" + i);

            if (current_slot.val() == "-1") {
                return false;
            }
        }
        return true;
    }
}

$(document).ready(function() {
    let myGame = new MasterMind("name")
    const btn = $("#submit_button")
    btn.on("click", () => myGame.submit_guess());
});
