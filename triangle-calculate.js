// calculating the triangle

function triangleCalculator (){
    const triangleBaseInput = document.getElementById('triangle-base-input'); // step one, get the value of of the base input.

    //calculation the base
    const BaseInputValue = triangleBaseInput.value;
    const baseValue = parseFloat(BaseInputValue);
    // console.log(baseValue)

    // calculating the height
    const triangleHeightInput = document.getElementById('triangle-height-input');
    const heightInputValue = triangleHeightInput.value;
    const heightValue = parseFloat(heightInputValue);
    // console.log(heightValue)

    //returning the result
    const triangleArea = 0.5 * baseValue * heightValue;
    // 
    
    const triangleAreaReturn = document.getElementById('triangle-area');

    triangleAreaReturn.innerHTML = triangleArea;
    console.log(triangleAreaReturn)
}