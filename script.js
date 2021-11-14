totalHead = 0;
totalTail = 0;


const initHeadCounter = 0;
const initHeadPercentage = 0;
const initTailCounter = 0;
const initTailPercentage = 0; 





let headCounter = document.querySelector('#head-Count');
let headPercentageCell = document.querySelector('#head-percentage');
let tailCounter = document.querySelector('#tail-Count');
let tailPercentageCell = document.querySelector('#tail-Percentage');
let statusUpdate = document.querySelector('.body-bag');

totalTail = parseInt(localStorage.getItem('totalTail'));
tailCounter.textContent = totalTail;


totalHead = parseInt(localStorage.getItem('totalHead'));
headCounter.textContent= totalHead;
headPercentageCell.textContent = Math.floor((totalHead / (totalHead + totalTail))* 100) + "%";
tailPercentageCell.textContent = Math.floor((totalTail / (totalHead + totalTail))* 100) + "%";

let pennyImage = document.querySelector('.penny-Tail');
let flipButton = document.querySelector('.flip-button');
flipButton.addEventListener('click', function(){
    let randomNum = Math.floor(Math.random()*2);
    
    
     if(randomNum === 0){
       pennyImage.setAttribute("src", "./penny-heads.jpg")
        totalHead++ ;
        headCounter.textContent= totalHead; 
        statusUpdate.textContent = "Flip Head!";
        localStorage.setItem('totalHead', totalHead)
        
    }
       
     else{
        pennyImage.setAttribute("src", "./penny-tails.jpg" )
        totalTail++ ;
        tailCounter.textContent = totalTail;
        statusUpdate.textContent = "Flip Tail!"
        localStorage.setItem('totalTail', totalTail);
     
        
      
    };
    
     

headPercentageCell.textContent = Math.floor((totalHead / (totalHead + totalTail))* 100) + "%";
tailPercentageCell.textContent = Math.floor((totalTail / (totalHead + totalTail))* 100) + "%";

    

})
let clearButton = document.querySelector('.reset-button')
    clearButton.addEventListener('click', function(){
    headCounter.textContent = initHeadCounter;
    localStorage.setItem('totalHead', initHeadCounter)
    totalHead = initHeadCounter;
    headPercentageCell.textContent = initHeadPercentage;
    tailCounter.textContent = initTailCounter;
    totalTail= initTailCounter;
    localStorage.setItem('totalTail', initTailCounter)
    tailPercentageCell.textContent = initTailPercentage;})



