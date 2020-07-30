"use stict";

function hamburger_line(){
    document.getElementById('line_1').classList.toggle('line_1')
    document.getElementById('line_2').classList.toggle('line_2')
    document.getElementById('line_3').classList.toggle('line_3')
    document.getElementById('nav_hamburger').classList.toggle('in');
}

document.getElementById('hamburger_line').addEventListener('click', function () {
    hamburger_line();
});