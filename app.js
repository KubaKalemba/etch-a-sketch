const gridContainer = document.querySelector('.grid-container');
const darkOrangeButton = document.querySelector(".dark-orange-button");
const lightOrangeButton = document.querySelector(".light-orange-button");
const lightNavyButton = document.querySelector(".light-navy-button");
const darkNavyButton = document.querySelector(".dark-navy-button");
const colorButtons = [
    darkOrangeButton, lightOrangeButton, lightNavyButton, darkNavyButton
];
const resetButton = document.querySelector(".reset-button");
const resetInput = document.querySelector(".reset-input");
let selectedColor = "#ed7966";
let gridDim = 16;

function drawGrid() {
    gridContainer.innerHTML = "";
    gridContainer.style.gridTemplateColumns = "repeat(" + gridDim.toString() +  ", auto)";
    for (let i = 0; i < Math.pow(gridDim, 2); i++) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('grid-item');
            newDiv.setAttribute("id", i.toString());
            newDiv.addEventListener('mouseover', function changeColor() {
                newDiv.style.backgroundColor = selectedColor;
            });
            gridContainer.appendChild(newDiv);
        console.log(i);
    }
}
drawGrid();

function changeColor() {
    for(let i = 0; i < colorButtons.length; i++) {
        colorButtons[i].addEventListener("click", () => {
            selectedColor = colorButtons[i].id.toString();
        });
    }
}
changeColor();

resetButton.addEventListener("click", function reset() {
    let input = resetInput.value;
    if(+input>0) {
        gridDim = +input;
    }
    else {
        gridDim = 16;
    }
    drawGrid();
});








