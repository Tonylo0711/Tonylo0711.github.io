const container = document.getElementById('puzzle-container');
const rows = 3;
const cols = 3;
const pieceWidth = 200;
const pieceHeight = 200;

let draggedPiece = null;
let start = document.querySelector("#challenge");
let display = document.querySelector('#time');

function startTimer(duration, display) {
  let timer = duration;
  const interval = setInterval(() => {
    if (isPuzzleComplete()) {
      clearInterval(interval);
      display.textContent = "You solved the jigsaw within the time limit!";
      setTimeout(() => { display.textContent = "Wait! Why does the image indicate \"failure\"?"; }, 2000);
      setTimeout(change_website, 5000);
      return;
    }
    if (--timer < 0) {
      clearInterval(interval);
      display.textContent = "Time is up! You lose the game...";
      setTimeout(change_website_fail, 2000);
      return;
    }
    const minutes = String(Math.floor(timer / 60)).padStart(2, '0');
    const seconds = String(timer % 60).padStart(2, '0');
    display.textContent = `Remaining time: ${minutes} : ${seconds}`;
  }, 1000);
}

start.addEventListener("click", () => {
  enableDragAndDrop();
  const countdown = 60;
  const minutes = String(Math.floor(countdown / 60)).padStart(2, '0');
  const seconds = String(countdown % 60).padStart(2, '0');
  display.textContent = `Remaining time: ${minutes} : ${seconds}`;
  startTimer(countdown, display);
});

function createPuzzle() {
  container.style.width = `${cols * pieceWidth}px`;
  container.style.height = `${rows * pieceHeight}px`;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const piece = document.createElement('div');
      piece.style.width = pieceWidth + 'px';
      piece.style.height = pieceHeight + 'px';
      piece.style.backgroundImage = 'url(fail.jpg)';
      piece.style.backgroundSize = `${cols * pieceWidth}px ${rows * pieceHeight}px`;
      piece.style.backgroundPosition = `-${col * pieceWidth}px -${row * pieceHeight}px`;
      piece.style.position = 'absolute';
      piece.style.left = `${Math.random() * (cols * pieceWidth - pieceWidth)}px`;
      piece.style.top = `${Math.random() * (rows * pieceHeight - pieceHeight)}px`;
      piece.classList.add('puzzle-piece');
      piece.draggable = true;
      container.appendChild(piece);
    }
  }
}

function enableDragAndDrop() {
  const pieces = document.querySelectorAll('.puzzle-piece');

  pieces.forEach((piece) => {
    piece.addEventListener('dragstart', (e) => {
      draggedPiece = e.target;
      e.dataTransfer.setData('text/plain', '');
    });

    piece.addEventListener('dragend', () => {
      draggedPiece = null;
      if (isPuzzleComplete()) {
        display.textContent = "You solved the jigsaw within the time limit!";
        setTimeout(() => { display.textContent = "Wait! Why does the image indicate \"failure\"?"; }, 2000);
        setTimeout(change_website, 5000);
      }
    });
  });

  container.addEventListener('dragover', (e) => e.preventDefault());

  container.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedPiece) {
      const containerRect = container.getBoundingClientRect();
      const offsetX = e.clientX - containerRect.left;
      const offsetY = e.clientY - containerRect.top;

      draggedPiece.style.left = `${Math.min(Math.max(0, offsetX - pieceWidth / 2), cols * pieceWidth - pieceWidth)}px`;
      draggedPiece.style.top = `${Math.min(Math.max(0, offsetY - pieceHeight / 2), rows * pieceHeight - pieceHeight)}px`;

      if (isPuzzleComplete()) {
        display.textContent = "You solved the jigsaw within the time limit!";
        setTimeout(() => { display.textContent = "Wait! Why does the image indicate \"failure\"?"; }, 2000);
        setTimeout(change_website, 5000);
      }
    }
  });
}

function isPuzzleComplete() {
  const pieces = document.querySelectorAll('.puzzle-piece');
  return Array.from(pieces).every((piece, index) => {
    const correctX = (index % cols) * pieceWidth;
    const correctY = Math.floor(index / cols) * pieceHeight;

    const currentX = parseInt(piece.style.left, 10);
    const currentY = parseInt(piece.style.top, 10);

    return Math.abs(currentX - correctX) < 20 && Math.abs(currentY - correctY) < 20;
  });
}

function change_website() 
{
  window.location.assign("fake_fail.html");
}

function change_website_fail()
{
  window.location.assign("real_fail.html");
}

createPuzzle();
