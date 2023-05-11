// créer un élement DIV
const injectElement = document.createElement('div');  
  injectElement.className = 'test-element';
  injectElement.innerHTML = '' 
  document.body.appendChild(injectElement);
  
 const myBtn1 = document.createElement('button');
myBtn1.innerHTML= '30 minutes'
myBtn1.id = 'mybtn1'
injectElement.appendChild(myBtn1)

const myBtn2 = document.createElement('button');
myBtn2.innerHTML= '60 minutes'
myBtn2.id = 'mybtn2'
injectElement.appendChild(myBtn2)

const myBtn3 = document.createElement('button');
myBtn3.innerHTML= '120 minutes'
myBtn3.id = 'mybtn3'
injectElement.appendChild(myBtn3)


const myBtnpause = document.createElement('button');
myBtnpause.innerHTML= 'Pause'
myBtnpause.id = 'mybtnp'
//myBtnpause.disabled='disabled'
injectElement.appendChild(myBtnpause)

 const timeremaining = document.createElement('div');
timeremaining.innerHTML= ''
timeremaining.id = 'timeremaining'
injectElement.appendChild(timeremaining)

const timerEnding = document.createElement('div');
timerEnding.innerHTML= ''
timerEnding.id = 'timerEnding'
injectElement.appendChild(timerEnding)

let timerInterval;
let timerPaused = false;

function startCountdown(durationInSeconds) {

  let timer = durationInSeconds; 
  const countdownInterval = setInterval(function () {
    if (!timerPaused){
    const minutes = Math.floor(timer / 60);
    const seconds = Math.floor(timer % 60);
    
    const remainingTime = document.getElementById("timeremaining");
    remainingTime.innerText = minutes+":"+seconds
    //console.log(`${minutes}:${seconds}`);    
    timer--;

    if (timer < 0) {
      fetch('https://api.api-ninjas.com/v1/bucketlist', {
        method: 'GET',
        headers: {
          'X-Api-Key': 'Sb92WYfy+/JwV46RaHJ6lg==SGIDAbGZebsa0pAj',
        },
      })
      .then(response => {const data = response.json();
      return data
      })
      .then((data) => {
        timerEnding.innerText = 'Idea for your bucketlist: ' + `${data.item}`
      })
      .catch(err => console.error(err));
      
      clearInterval(countdownInterval);
      const timerEnding = document.getElementById("timerEnding")
      timerEnding.innerText = ""
      
    } 
    }
  }, 1000);
  
  timerInterval = countdownInterval;
} 

/*function arret() 
		{	
      console.log('test');
				window.clearTimeout(timeremaining); // arrêter le temps
				document.parametre.lance.disabled = "";
				document.parametre.pause.disabled = "";
				document.parametre.zero.disabled = "";
				document.parametre.interme.disabled = "";
		};*/


    const boxPause= document.getElementById('mybtnp');
const box = document.getElementById('mybtn1');
const box1 = document.getElementById('mybtn2');
const box2 = document.getElementById('mybtn3');

box.addEventListener('click', () => {
startCountdown(5);
box.remove();
box1.remove();
box2.remove();  
box.remove();  

});

box1.addEventListener('click', () => {
startCountdown(3600);
box.remove();
box1.remove();
box2.remove();
box1.remove();  

});

box2.addEventListener('click', () => {
startCountdown(7200);
box.remove();
box1.remove();
box2.remove();
box.remove();  

});

boxPause.addEventListener('click', ()=> {
  if (!timerPaused) {
clearInterval(timerInterval);
    timerPaused = true;
    myBtnpause.innerText = "Resume";
    } else {
      //const tabTemp=(document.getElementById("timeremaining").innerText).split(':');
      //console.log(document.getElementById("timeremaining").innerText);
    startCountdown(parseInt(document.getElementById("timeremaining").innerText)*60);
    timerPaused = false;
    myBtnpause.innerText = "Pause";
  }
});