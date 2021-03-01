// _________________________lev 2-5 table________________________________

function generateTable() {
    let userInputZeilen = document.getElementById('zeilenFeld').value
    let userInputSpalten = document.getElementById('spaltenFeld').value
    let result = document.getElementById('result');
    let table = document.createElement('table');
    let tableBody = document.createElement('tbody');
    table.appendChild(tableBody);

    for (var i = 1; i <= userInputZeilen; i++) {
        let tr = document.createElement('tr');
        tableBody.appendChild(tr);

        for (var j = 1; j <= userInputSpalten; j++) {
            let td = document.createElement('TD');
            td.width = '75';
            td.appendChild(document.createTextNode(i + "," + j));
            tr.appendChild(td);
        }
    }
    result.appendChild(table);
}
// _________________________lev 2-8 einkaufList________________________________

let speicherButton = document.querySelector('input[type="submit"]');
speicherButton.addEventListener('click', einkaufList);
let userInput = document.getElementById('userinput')
let ul = document.querySelector('ul')
function einkaufList() {
    let newList = document.createElement('li')
    userInputResult = document.createTextNode(userInput.value)
    newList.appendChild(userInputResult)
    ul.appendChild(newList)
}