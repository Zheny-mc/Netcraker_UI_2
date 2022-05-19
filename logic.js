window.onload = function() {
    printHistory();
};

var doc = document.getElementsByTagName('input');

function printHistory() {
    // localStorage.clear();

    var html = '<table>';
    html += '<tr>';
    html += '<td>' + 'a' + '</td>';
    html += '<td>' + 'b' + '</td>';
    html += '<td>' + 'c' + '</td>';
    html += '<td>' + 'x1' + '</td>';
    html += '<td>' + 'x2' + '</td>';
    html += '</tr>';

    for (i = 0; i < localStorage.length; i++) {
      var k = String(localStorage.getItem(i)).split(',');
      html += '<tr>';
      html += '<td>' + k[0] + '</td>';
      html += '<td>' + k[1] + '</td>';
      html += '<td>' + k[2] + '</td>';
      html += '<td>' + k[3] + '</td>';
      html += '<td>' + k[4] + '</td>';
      html += '</tr>';
    }
    html += '</table>';
    document.querySelector('.history').innerHTML = html;
}

function check_arg() {
    let a = Number(doc.num1.value); //для поля ввода a
    let b = Number(doc.num2.value); //для поля ввода b
    let c = Number(doc.num3.value); //для поля ввода c

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        doc.error.value = "a или b или c не являются числа";
    }
    else if (a === 0 && b === 0 && c === 0) {
        doc.error.value = "Уравнение уже решено";
        doc.x1.value = 0;
        doc.x2.value = 0;
    }
    else {
        square_equation(a, b, c);
    }

    localStorage.setItem(localStorage.length, 
        [a, b, c, doc.x1.value, doc.x2.value]);
}

function square_equation(a, b, c) {
    d = b * b - 4 * a * c;

    if (d < 0) {
        doc.error.value = "Корней нет";
        doc.x1.value = 0;
        doc.x2.value = 0;
    }
    else if (d == 0) {
        doc.error.value = "";
        x = (-b + Math.sqrt(d)) / (2 * a);
        x = x.toFixed(3);
        
        doc.x1.value = x;
        doc.x2.value = x;
    }
    else {
        doc.error.value = "";
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        x1 = x1.toFixed(3);
        x2 = x2.toFixed(3);
    
        doc.x1.value = x1;
        doc.x2.value = x2;
    }

    localStorage.setItem(localStorage.length, 
        [a, b, c, doc.x1.value, doc.x2.value]);
}