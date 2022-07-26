// Your code here

const dodger = document.getElementById('dodger');

dodger.style.backgroundColor = 'blue';

function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace ("px", "");
       const left = parseInt(leftNumbers,10);
    if (left > 0 ){
        dodger.style.left = `${left - 2}px`;
    }
}

function moveDodgerRight(){
    const leftNumbers= dodger.style.left.replace ("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left < 360){
        dodger.style.left= `${left + 2}px`;
    }


}
document.addEventListener('keydown',function(event){
    if (event.keyCode === 37){
       moveDodgerLeft();
    if (event.keyCode === 39){
        moveDodgerRight();
    }
    }
    
});


