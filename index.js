const container = document.querySelector('#container');

//removes the previous blocks
function reset() {
    const gridReset = document.querySelectorAll(".grid");
    for(i=0; i < gridReset.length; i++){
        gridReset[i].remove();
    }
};

//draws an num by num square of blocks in the container and adds an event listener
function draw(numBlocks = 8, color = "white") {
    const sideLength = numBlocks;
    const blockDimensions = 100 / numBlocks;
    for (i = 0; i < sideLength**2; i++){
        const divBlock = document.createElement("div");
        divBlock.className = "grid";

        divBlock.style.width = `${blockDimensions}%`;
        divBlock.style.height = `${blockDimensions}%`;

        container.appendChild(divBlock);

        divBlock.addEventListener("mouseenter", () => {
            let element;
            if(typeof color == "function"){
                element = color();
                divBlock.style.backgroundColor = element;
                return;
            }
            divBlock.style.backgroundColor = color;
        })
    }
};
//returns a rgb element with three random color components
function multiColors(){
    const rainbowColorOne = Math.floor(Math.random() * 256);
    const rainbowColorTwo = Math.floor(Math.random() * 256);
    const rainbowColorThree = Math.floor(Math.random() * 256);
    return `rgb(${rainbowColorOne}, ${rainbowColorTwo}, ${rainbowColorThree})`;
};
//returns a string with a random color from the rainbow
function rainbowColors(){
    let rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
    let index = Math.floor(Math.random() * rainbow.length);
    return rainbow[index];
}

//resets the number of blocks per side
const btnReset = document.querySelector("#reset")
btnReset.addEventListener("click", () =>{
    reset();
    const sideLength = prompt("How big of a grid would you like to draw on?");
    const lengthLimit = Math.min(Math.max(sideLength, 1), 100);
    draw(lengthLimit);
});
//resets the number of blocks per side and changes the color of blocks once they are active
const btnMulti = document.querySelector("#multi");
btnMulti.addEventListener("click", () => {
    reset();
    const sideLength = prompt("How many blocks per side do you want?");
    const lengthLimit = Math.min(Math.max(sideLength, 1), 100);
    draw(lengthLimit, multiColors);
})
//resets the number of blocks per side and changes teh color of the blocks to a rainbow pattern
const btnRainbow = document.querySelector("#rainbow");
btnRainbow.addEventListener("click", () => {
    reset();
    const sideLength = prompt("How many blocks per side do you want?");
    const lengthLimit = Math.min(Math.max(sideLength, 1), 100);
    draw(lengthLimit, rainbowColors);
})

draw();
