var Lab4 = (function () {

    const codeLength = 4;

    const codePegs = [
        { name: "Green", color: "\u{1F7E2}" },
        { name: "Blue", color: "\u{1F535}" },
        { name: "Red", color: "\u{1F534}" },
        { name: "Yellow", color: "\u{1F7E1}" },
        { name: "Brown", color: "\u{1F7E4}" },
        { name: "Orange", color: "\u{1F7E0}" }
    ];

    const keyPegBlack = { name: "Black", color: "\u{26AB}" };
    const keyPegWhite = { name: "White", color: "\u{26AA}" };

    return {

        test: function () {

            var p = document.createElement("p");
            $(p).text("jQuery Version: " + $().jquery);
            $("#output").append(p);

        },

        buildPegSelectors: function () {

            for (let i = 0; i < codeLength; ++i) {

                var pegSelectColumn = document.createElement("td");

                var pegSelect = document.createElement("select");
                $(pegSelect).attr("id", "slot" + i);

                $(pegSelect).append($("<option>", {
                    value: -1,
                    selected: "selected",
                    text: "(select a color)"
                }));

                for (var p in codePegs) {

                    var peg = codePegs[p];

                    $(pegSelect).append($("<option>", {
                        value: p,
                        text: peg["color"] + " (" + peg["name"] + ")"
                    }));

                }

                $(pegSelectColumn).append(pegSelect);
                $("#pegslots").append(pegSelectColumn);

            }

        }

    };

})();
