//document.getElementById("mybtn1").addEventListener("click",startCountdown(1800) );
//document.getElementById("mybtn2").addEventListener("click",startCountdown(3200) );
 
function startCountdown(durationInSeconds) {
    let timer = durationInSeconds;
    const countdownInterval = setInterval(function () {
      const minutes = Math.floor(timer / 60);
      const seconds = Math.floor(timer % 60);
  
      console.log(`${minutes}:${seconds}`);
  
      timer--;
  
      if (timer < 0) {
        clearInterval(countdownInterval);
        console.log('Time is up!');
      }
    }, 1000);
  } 

const box = document.getElementById('mybtn1');
box.addEventListener('click', () => {
  startCountdown(1800);
  box.remove();
});
  // USER CHOISIT DANS MENU 30MIN,60MIN,1H ET LE JS VA CONVERTIR EN SECONDE ET RENTRER LA DEMANDE EN PARAMÈTRE DE LA FONCTION
  // HTML = 30MN, 60MN, 120MN, ETC
  // => JS = 1800S, 3600S, 7200S
  
 // La fonction startCountdown prend en paramètre la durée totale du timer en secondes. 
 //Elle initialise une variable timer à cette valeur et crée un intervalle de temps (setInterval) 
 //qui se répète toutes les secondes (grâce au délai de 1000ms passé en dernier paramètre).

 //À chaque itération, la fonction calcule le nombre de minutes et de secondes restantes en divisant le temps restant par 60.
 // Elle affiche ensuite ces informations dans la console avec console.log().

 //La variable timer est décrémentée de 1 à chaque itération jusqu'à atteindre 0.
 // Lorsque timer atteint 0, l'intervalle est nettoyé avec clearInterval() et un message "Time is up!" est affiché dans la console.
//if (document.getElementById('30') 
