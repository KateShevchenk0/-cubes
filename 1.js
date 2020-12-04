window.addEventListener('DOMContentLoaded', function () {

    function rollDice () {

        let diceSide1 = document.getElementById('side_1');
        let diceSide2 = document.getElementById('side_2');
        let status = document.getElementById('character');

        let side1 = Math.floor( Math.random() * 6 ) + 1;
        let side2 = Math.floor( Math.random() * 6 ) + 1;

        diceSide1.innerHTML = side1;
        diceSide2.innerHTML = side2;

        if(side1 > side2){
          status.innerHTML = ' Гравець 1 Виграв!';
      }
      else{
        status.innerHTML = 'Гравець 2 Виграв!';
      }

        if ( side1 === side2 ) {
            status.innerHTML = 'Нічия!';
        }

        if (side1 === side2){
          status.style.right = "255px";
        }
        else{
          status.style.right = "330px";
        }
    }

    let buttonRollDice = document.querySelector('.ll');
    buttonRollDice.addEventListener('click', rollDice, false);

}, false);
