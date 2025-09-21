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
        this.buildPegSelectors();
        this.slots = [];
        this.set_slots();
        this.guess_count = 0;
        this.guesses = {slot0: null, slot1: null, slot2: null, slot3: null};
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
                    value: peg["name"],
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
        this.set_guesses();
        this.guess_count++;
        var p = document.createElement("p");
        $(p).text("jQuery Version: " + $().jquery);
        $("#output").append(p);
    }

    set_slots() {
        for (let i = 0; i < MasterMind.codeLength; i++) {
            let current_slot = $("#slot" + i);
            console.log(current_slot);
            this.slots.push(current_slot);
        }
    }

    set_guesses() {
        this.slots.forEach((slot, i) => {
            this.guesses["slot" + i] = slot.val();
        });

    }

    valid_guesses() {
        return this.slots.every(slot => slot.val() != "-1");
    }
}

$(document).ready(function() {
    let myGame = new MasterMind("name")
    const btn = $("#submit_button")
    btn.on("click", () => myGame.submit_guess());
});
