// calculation the area of Parallelogram

function calculateRhombusArea(){
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');
    const area = base * height;
    console.log(area)

    // insted of this we can use a shared function.
    // const returnArea = document.getElementById('parallelogram-area-return');
    // returnArea.innerText = area;
    
    setInputValue('parallelogram-area-return', area)
}


// repeat function for input base and height
function getInputValueById(inputValue){
    const inputfild = document.getElementById(inputValue);
    const inputValueText = inputfild.value;
    const inputValues = parseFloat(inputValueText)
    return inputValues
}

function setInputValue (elementId, area){
    const inputValue = document.getElementById(elementId);
    inputValue.innerText = area;
}