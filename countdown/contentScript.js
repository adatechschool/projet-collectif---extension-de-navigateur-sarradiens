const init = function() {
    const injectElement = document.createElement('div');
    
    // créer un élement DIV
    injectElement.className = 'test-element';

    injectElement.innerHTML = 'djshfgskfhslvk';
    
    // ajout div dans body
    document.body.appendChild(injectElement);
    // faire naitre dans le body notre élément
}
init() // puis on appèle notre fonction

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
        clearInterval(countdownInterval);
        const timerEnding = document.getElementById("timerEnding")
        timerEnding.innerText = 'Time is up!'
        console.log('Time is up!');
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
  });
  
  box1.addEventListener('click', () => {
  startCountdown(3600);
  box.remove();
  box1.remove();
  box2.remove();
  });
  
  box2.addEventListener('click', () => {
  startCountdown(7200);
  box.remove();
  box1.remove();
  box2.remove();
  });