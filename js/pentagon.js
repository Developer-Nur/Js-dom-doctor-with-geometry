// calculating pentagon

function calculatePentagon(){
    const perimeter = getInputValues('pentagon-perimeter');
    const apothem = getInputValues('pentagon-apothem');

    // formula of calculating pentagon
    const pentagonArea = 0.5 * perimeter * apothem;
    
    setInnerTextById('pentagon-area-return', pentagonArea);

}

// getting the value of the input for pentagon
function getInputValues(inputValue){
    const inputFild = document.getElementById(inputValue);
    const inputText = inputFild.value;
    const inputValues = parseFloat(inputText);
    return inputValues;

}

function setInnerTextById(theElement, area){
    const innerContent = document.getElementById(theElement);
    innerContent.innerText = area;
}