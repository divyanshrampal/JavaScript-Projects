let colorOne = document.getElementById('color-one');
let colorTwo = document.getElementById('color-two');
let outputCode = document.getElementById('code');
let currentDirection = "to top";

function setdirection(value,_this){
    let direction = document.querySelectorAll('.buttons button');
    direction.forEach(e => {
        e.classList.remove('active');
    });
    _this.classList.add('active');
    currentDirection = value;
}
function generate(){
    outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value});`;
    document.getElementById('body').style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
}
function copy(e){
  e.clipboardData.setData("text/plain", outputCode);
}