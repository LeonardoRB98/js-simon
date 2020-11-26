// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri
// che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri
// sono stati ricordati.




$(document).ready(
  function() {
    var randomNumbers = [];

    for (var i = 0; i < 5; i++) {
    randomNumbers.push(randomNumber(100, 1));
    }
    console.log('numeri casuali computer', randomNumbers);
    // alert con tutti i numeri casuali precedentemente creati
    alert('Saimon Says:\n' + randomNumbers);

    // setTimeout
    var matchedNumber = [];
    var userNumbers = [];

    setTimeout(function() {
      for(var i = 0; i < 5; i++) {
        var userNumber = parseInt(prompt('inserisci i numeri che ricordi'));
        var checker = checkForDuplicates(userNumber, randomNumbers);
        if (checker == true) {
          userNumbers.push(userNumber);
          matchedNumber.push(userNumber);
        } else {
          userNumbers.push(userNumber);
        }
      }
    }, 1000);
    alert('hai ricordato', matchedNumber.length, )

    console.log('numeri ricordati', matchedNumber);
    console.log('numeri utente', userNumbers);




  }
);

/*-------------------------FUNCTIONS----------------------------------------------------------*/
// numero casuale compreso tra max e min
function randomNumber(max, min) {
  return Math.floor(Math.random() * max) + min;
}

// controllo num  è in un array
function checkForDuplicates(numero, array) {
  var duplicates = false;
  for(var i = 0; i < array.length; i++) {
    if (numero == array[i]) {
      duplicates = true;
      return duplicates;
    } else {
      duplicates = false;
    }
    return duplicates;
  }
}
