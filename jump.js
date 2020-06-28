const jumpSize = 4;

function dojump() {
    let element = document.getElementById("numjump");
    let currentArr = element.value;
    let newArr = [];
    
    for (let i = 0; i < currentArr.length; i++) {
        newArr.push(currentArr[(i + jumpSize) % currentArr.length]);
    }

    /*let jump = jumpSize % element.innerText.length;

    element.innerText = element.innerText.slice(jump, element.innerText.length) +
        element.innerText.slice(0, jump);*/

    element.value = newArr.join('');
}