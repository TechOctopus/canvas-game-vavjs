/**
 * u1 - Heorhi Davydau
 */

const CELLSIZE = 10;

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
const titleElement = document.querySelector('.container > .row');

function initCanvas() {
  canvas.style = 'border: 1px solid black;';
  canvas.width = (xFields - 1) * CELLSIZE;
  canvas.height = (yFields - 1) * CELLSIZE;
  const game = document.getElementById('game');

  game.innerHTML = '';
  game.appendChild(canvas);
}

initCanvas();

displayPoint = function (x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x * CELLSIZE, y * CELLSIZE, CELLSIZE, CELLSIZE);
};

// deletePoint = function (x, y) {
//   displayPoint(x, y, 'white');
// };

// # pridanie debug vypisov v debugovacom mode
let debug = false;

const debugButton = document.createElement('button');
debugButton.innerText = 'ON debug';
debugButton.addEventListener('click', () => {
  debug = !debug;
  debugButton.innerText = debug ? 'OFF debug' : 'ON debug';
});
titleElement.appendChild(debugButton);

function log(text) {
  if (debug) console.log('DEBUG:', text);
}

// TODO: # pridanie zmeny ovladania klavesnicou
document.addEventListener('keydown', (event) => {
  switch (event.code) {
    case 'KeyA': {
      rotateShip(-1);
      break;
    }
    case 'KeyD': {
      rotateShip(1);
      break;
    }
    default:
      break;
  }
});

// TODO: # pridanie tlacidla reset, ktore resetuje stav hry

const resetGameButton = document.createElement('button');
resetGameButton.innerText = 'Restart game';
resetGameButton.addEventListener('click', () => {
  endGame();
  speed = 1000;
  window.dispatchEvent(new Event('start'));
});
titleElement.appendChild(resetGameButton);

// #sound

// Source: https://opengameart.org/content/magic-space
// License(s): CC0

const soundtrack = document.createElement('audio');
soundtrack.src =
  'https://opengameart.org/sites/default/files/audio_preview/magic%20space_0.mp3.ogg';
document.body.appendChild(soundtrack);

let isPlaying = false;
const soundtrackButton = document.createElement('button');
soundtrackButton.innerText = 'ON Audio';

soundtrackButton.addEventListener('click', () => {
  isPlaying = !isPlaying;
  soundtrackButton.innerText = isPlaying ? 'OFF Audio' : 'ON Audio';
  isPlaying ? soundtrack.play() : soundtrack.pause();
});

titleElement.appendChild(soundtrackButton);

// # pridanie zobrazeni a aktualneho skore a rychlosti

// ## score
const scoreElement = document.createElement('p');
scoreElement.innerText = 'score: 0';
titleElement.appendChild(scoreElement);

const oldIncrementScore = incrementScore;
incrementScore = (...args) => {
  scoreElement.innerText = `score: ${score}`;
  log(`score: ${speed}`);
  oldIncrementScore(...args);
};

// ## speed

const speedElement = document.createElement('p');
speedElement.innerHTML = `speed: ${speed}`;
titleElement.appendChild(speedElement);

function cheakSpeed() {
  const intervalId = setInterval(() => {
    clearInterval(intervalId);
    speedElement.innerHTML = `speed: ${speed}`;
    log(`spped: ${speed}`);
    cheakSpeed();
  }, speed);
}

cheakSpeed();

//# dynamicke pouzitie obrazkov z externych zdrojov (http...) a ich vykreslovanie ako policok pomocou JS funkcii (u obrazkov musite udat zdroj a licenciu)

const imagesSrcs = [
  // Source: https://opengameart.org/content/spaceship-1
  // License(s): http://www.gnu.org/licenses/gpl-3.0.html
  'https://opengameart.org/sites/default/files/styles/medium/public/pitrizzo-SpaceShip-gpl3-opengameart-24x24-prev.png',
  // Source: https://opengameart.org/content/brown-asteroid
  // License(s): CC-BY 4.0, CC-BY 3.0, CC-BY-SA 4.0, CC-BY-SA 3.0
  'https://opengameart.org/sites/default/files/styles/medium/public/Asteroid%20Brown.png',
  // Source: https://opengameart.org/content/snowball-pixel-art
  // License(s): CC
  'https://opengameart.org/sites/default/files/styles/medium/public/snowball.png',
];

async function loadImage(src) {
  const image = new Image();
  image.src = src;
  return new Promise((res) => {
    image.onload = () => {
      res(image);
    };
  });
}

Promise.all(
  imagesSrcs.map(async (src) => {
    return await loadImage(src);
  }),
).then((images) => {
  let i = 0;

  //## draw ship

  const spaceShipImage = images[i++];

  displayShip = function () {
    drawRotatedImage(
      spaceShipImage,
      xShip * CELLSIZE - CELLSIZE,
      yShip * CELLSIZE - CELLSIZE,
      3 * CELLSIZE,
      3 * CELLSIZE,
      (rShip % 8) * 45,
    );
  };

  displayShip();

  deleteShip = function () {
    // with margin
    ctx.clearRect(
      xShip * CELLSIZE - 2 * CELLSIZE,
      yShip * CELLSIZE - 2 * CELLSIZE,
      5 * CELLSIZE,
      5 * CELLSIZE,
    );
  };

  // TODO: THIS IS MODIFICATED FUNCTION FROM: http://creativejs.com/2012/01/day-10-drawing-rotated-images-into-canvas/
  function drawRotatedImage(image, dx, dy, dWidth, dHeight, angle) {
    ctx.save();
    ctx.translate(dx, dy);
    ctx.translate(dWidth / 2, dHeight / 2);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.drawImage(image, -(dWidth / 2), -(dHeight / 2), dWidth, dHeight);
    ctx.restore();
  }

  // ## draw missiles

  const asteroidImage = images[i++];

  displayMissiles = function () {
    missiles.forEach((missile) => {
      ctx.drawImage(
        asteroidImage,
        missile.x * CELLSIZE,
        missile.y * CELLSIZE,
        CELLSIZE,
        CELLSIZE,
      );
    });
  };

  deleteMissiles = function () {
    missiles.forEach((missile) => {
      ctx.clearRect(
        missile.x * CELLSIZE,
        missile.y * CELLSIZE,
        CELLSIZE,
        CELLSIZE,
      );
    });
  };

  // ## draw lLasers

  const snowBallImage = images[i++];

  displayLasers = function () {
    lasers.forEach((laser) => {
      ctx.drawImage(
        snowBallImage,
        laser.x * CELLSIZE,
        laser.y * CELLSIZE,
        CELLSIZE,
        CELLSIZE,
      );
    });
  };
});
