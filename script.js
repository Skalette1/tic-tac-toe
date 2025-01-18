const cells = document.querySelectorAll('.cell');
const turn = document.querySelector('.turn');
const clean = document.querySelector('.clean');
let currentPlayer = 'X'
turn.textContent = 'Очередь игрока: X'


cells.forEach(cell => {
    cell.addEventListener('click',() => {
        if (cell.textContent === '') {
            turn.textContent = 'Очередь игрока X'
            cell.textContent = currentPlayer
            if (currentPlayer === 'X') {
                turn.textContent = 'Очередь игрока: O'
                currentPlayer = 'O';
            }
            else {
             turn.textContent = 'Очередь игрока: X';
             currentPlayer = 'X'
            }
        }    
    })
    clean.addEventListener('click',() => {
        cell.textContent = '';
        turn.textContent = 'Очередь игрока: X';
    })
cell.style.cssText = 'display: flex; justify-content: center; align-items: center'
})

