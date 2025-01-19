const cells = document.querySelectorAll('.cell');
const turn = document.querySelector('.turn');
const clean = document.querySelector('.clean');
const again = document.querySelector('.again');
let currentPlayer = 'X';
turn.textContent = 'Очередь игрока: X';
let stepCount = 0;
let gamecondition = true


function getWinnerCombo() {
    const winSteps = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7], 
        [2, 5, 8],
        [0, 4, 8], 
        [2, 4, 6]             
    ]
    
    for (let i=0; i<winSteps.length; i++) {
        const combination = winSteps[i];
        const [firstStep, secondStep, thirdStep] = combination;
        if (cells[firstStep].textContent &&  cells[firstStep].textContent === cells[secondStep].textContent && cells[firstStep].textContent === cells[thirdStep].textContent) {
            return cells[firstStep].textContent
        }
     }
   return 
}
        
cells.forEach(cell => {
    cell.addEventListener('click',() => {
        if (cell.textContent === '' && gamecondition) {
            turn.textContent = 'Очередь игрока X'
            cell.textContent = currentPlayer;
            const winner = getWinnerCombo()
            if (winner) {
                turn.textContent = `Игрок ${winner} победил`;
                again.innerHTML= '<span>Сыграть заново?</span>';
                gamecondition = false;
                return
            }
             if (stepCount === 9) {
            turn.textContent = 'Ничья';
            again.innerHTML= '<span>Сыграть заново?</span>';
            gamecondition = false
        }
            if (currentPlayer === 'X') {
                turn.textContent = 'Очередь игрока: O'
                currentPlayer = 'O';
                stepCount ++;
            }
            else {
             turn.textContent = 'Очередь игрока: X';
             currentPlayer = 'X';
             stepCount ++;
            }
        }    
    })
    clean.addEventListener('click',() => {
        cell.textContent = '';
        turn.textContent = 'Очередь игрока: X';
        stepCount = 0;
        again.innerHTML = '';
        gamecondition = true;
    })
cell.style.cssText = 'display: flex; justify-content: center; align-items: center'
})

