
  const injectElement = document.createElement('div');
  // créer un élement DIV
  injectElement.className = 'test-element';
  injectElement.innerHTML = ''
  //`${minutes}:${seconds}`
  // ajout div dans body
  document.body.appendChild(injectElement);
  // faire naitre dans le body notre élément

 // puis on appèle notre fonction

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

 const timeremaining = document.createElement('div');
timeremaining.innerHTML= ''
timeremaining.id = 'timeremaining'
injectElement.appendChild(timeremaining)

const timerEnding = document.createElement('div');
timerEnding.innerHTML= ''
timerEnding.id = 'timerEnding'
injectElement.appendChild(timerEnding)



function startCountdown(durationInSeconds) {
  let timer = durationInSeconds;
  const countdownInterval = setInterval(function () {
    const minutes = Math.floor(timer / 60);
    const seconds = Math.floor(timer % 60);
    
    const remainingTime = document.getElementById("timeremaining")
    remainingTime.innerText = minutes+":"+seconds
    
    console.log(`${minutes}:${seconds}`);

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
  }, 1000);
  

} 

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