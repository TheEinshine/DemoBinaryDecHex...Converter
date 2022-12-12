const from = document.getElementById('from');
const to = document.getElementById('to');
const inputNumber = document.getElementById('input-number');
const resultBox = document.getElementById('result-box');

document.getElementById('convert').addEventListener('click', () => {
    //check from
    let fromValue = from.value;
    //check to
    let toValue = to.value;
    //check input number
    let inputValue = inputNumber.value;
    //convert 
    let result = convertBase(fromValue, toValue, inputValue);
    //show the result in result box
    resultBox.innerText = result;

})

const convertBase = (fromBase, toBase, num) => {
    let d = parseInt(num, fromBase) // converting number into base*10
    let res = d.toString(toBase) // converting base*10 to required
    return res
}

document.getElementById('swap').addEventListener('click', () => {
    //grab value from
    let temp = from.value;
    //grab value to 
    from.value = to.value;
    to.value = temp;
})
