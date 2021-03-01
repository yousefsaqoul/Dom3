



function generateTable() {
    let userInputZeilen = document.getElementById('zeilenFeld').value
    let userInputSpalten = document.getElementById('spaltenFeld').value
    let result = document.getElementById('result');





    let table = document.createElement('TABLE');
    table.border = '1';

    let tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    for (var i = 0; i < userInputZeilen; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);

        for (var j = 0; j < userInputSpalten; j++) {
            var td = document.createElement('TD');
            td.width = '75';
            td.appendChild(document.createTextNode("  " + i + "," + j));
            tr.appendChild(td);
        }
    }
    result.appendChild(table);
}
