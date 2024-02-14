// calculating the triangle

function triangleCalculator() {
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

// calculating the Rectangle

function rectangleCalculator() {

    //Rectangle width calculating
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const widthInputValue = rectangleWidthInput.value

    //Rectangle height calculating
    const rectangleHeightInput = document.getElementById('rectangle-height');
    const heightInput = rectangleHeightInput.value

    // calculation the rectangle area
    const rectangleArea = heightInput * widthInputValue;

    // returning the result to the  input
    const totalArea = document.getElementById('rectangle-total-area');
    totalArea.innerText = rectangleArea;
    console.log(totalArea)

}

// js event method mousemove, mouseout, utility function
 hoverInEffect('triangle-card', 'black')
 hoverInEffect('rectangle-card', 'black')

function hoverInEffect(elementId, color){
    const element = document.getElementById(elementId);

    element.addEventListener('mouseover', function(){
        this.style.backgroundColor = color;
        this.style.transition = '2s';

    })

    element.addEventListener('mouseout', function(){
        this.style.backgroundColor = '';
        this.style.transition = '2s';
    })

}

// this is manual

// const triangleCard = document.getElementById('triangle-card');
// triangleCard.addEventListener('mouseover', function(){
//     this.style.backgroundColor = '#FBBCED';
//     this.style.transition = '2s';
// })

// triangleCard.addEventListener('mouseout', function(){
//     this.style.backgroundColor = '';
//     this.style.transition = '2s';
// })

