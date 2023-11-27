let input = document.getElementById('input').value;
let output = document.querySelector('[data-result]');

function ageToDays() {
    let input = document.getElementById('input').value;
    let result = input * 365
    document.querySelector('[data-result]').textContent = `${result} days old`
}

let convert = document.querySelector('[data-btn]')
convert.addEventListener('click', ageToDays)