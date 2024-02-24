let length;
let width;
function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;
    return area
}


function calculateAndDisplayArea() {
    let area = calculateArea();
    document.getElementById('result').innerText = `The area of the rectangle is ${area}`;
}