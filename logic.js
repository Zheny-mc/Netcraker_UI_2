function check_arg() {
    doc = document.getElementsByTagName('input');
    let a = Number(doc.num1.value); //для поля ввода a
    let b = Number(doc.num2.value); //для поля ввода b
    let c = Number(doc.num3.value); //для поля ввода c
    let x1 = Number(doc.x1.value); //для поля вывода х1
    let x2 = Number(doc.x2.value); //для поля вывода х2

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        doc.x1.value = "не числа";
        doc.x2.value = "не числа";
    }
    else if (a === 0 || b === 0|| c === 0) {
        doc.x1.value = "уже решено";
        doc.x2.value = "уже решено";
    }
    else {
        square_equation(a, b, c, x1, x2);
    }
}

function square_equation(a, b, c, x1, x2) {
    d = b * b - 4 * a * c;

    if (d < 0) {
        doc.x1.value = "Корней нет";
        doc.x2.value = "Корней нет";
    }
    else if (d == 0) {
        x = (-b + Math.sqrt(d)) / (2 * a);
        x = x.toFixed(3); 
        doc.x1.value = x;
        doc.x2.value = x;
    }
    else {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        x1 = x1.toFixed(3);
        x2 = x2.toFixed(3);
    
        doc.x1.value = x1;
        doc.x2.value = x2;
    }
}