



function generateTable() {
    let userInputZeilen = document.getElementById('zeilenFeld').value
    let userInputSpalten = document.getElementById('spaltenFeld').value
    let result = document.getElementById('result');

    let table = document.createElement('table');
    let tableBody = document.createElement('tbody');
    table.appendChild(tableBody);

    for (var i = 0; i < userInputZeilen; i++) {
        let tr = document.createElement('tr');
        tableBody.appendChild(tr);

        for (var j = 0; j < userInputSpalten; j++) {
            let td = document.createElement('TD');
            td.width = '75';
            td.appendChild(document.createTextNode("  " + i + "," + j));
            tr.appendChild(td);
        }
    }
    result.appendChild(table);
}
