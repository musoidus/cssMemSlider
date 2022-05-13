const memes = [
  {
    src: './assets/meme-imgs/1.jpeg',
    alt: 'Michael',
    text: [
      'My boss congratulating me for my hard work and dedication',
      'Me doing the bare minimum',
    ],
  },
  {
    src: './assets/meme-imgs/2.jpeg',
    alt: 'Jim',
    text: ['This question won`t be on the exam', 'That question:'],
  },
  {
    src: './assets/meme-imgs/3.gif',
    alt: 'Michael gif',
    text: ['Waitress: enjoy your meal', 'Me: you too...', 'Me inside:'],
  },
  {
    src: './assets/meme-imgs/4.png',
    alt: 'Jim at the whiteboard',
    text: ['Jim Halpert Pointing to Whiteboard'],
  },
  {
    src: './assets/meme-imgs/5.jpeg',
    alt: 'Pam - same picture',
    text: [
      'Corporate needs you to find the difference between this picture and this picture',
    ],
  },
  {
    src: './assets/meme-imgs/6.gif',
    alt: 'Michael - surprised',
    text: [
      'me: *wakes up in the middle of the night*',
      'me: pls don`t be 6am',
      'clock: 2:30 am',
      'me:',
    ],
  },
];

let currentMeme = 0;

// CHANGE CONTENT

const imageContainer = document.querySelector('.img-container');
const textContainer = document.querySelector('.description-container');
const controls = document.querySelector('.controls-container');

controls.addEventListener('click', changeMeme);

function changeMeme(event) {
  let memeSelected = Number(event.target.dataset.memeid);
  setActiveControlBtn(memeSelected);
  changeMemeImg(memeSelected);
  changeMemeText(memeSelected);
}

function changeMemeImg(memeID) {
  let currentImg = document.querySelector('img');

  currentImg.classList.remove('slide-in');
  currentImg.classList.add('slide-out');

  setTimeout(() => {
    imageContainer.innerHTML = '';
    imageContainer.insertAdjacentHTML(
      'afterbegin',
      `<img class="slide-in" src="${memes[memeID].src}" alt="${memes[memeID].alt}">`
    );
  }, 1000);
}

function changeMemeText(memeID) {
  let currentText = document.querySelectorAll('p');

  currentText.forEach((el) => {
    el.classList.remove('fade-in');
    el.classList.add('fade-out');
  });

  setTimeout(() => {
    textContainer.innerHTML = '';
    for (let i = 0; i < memes[memeID].text.length; i++)
      textContainer.insertAdjacentHTML(
        'beforeend',
        `<p class="fade-in">${memes[memeID].text[i]}</p>`
      );
  }, 1000);
}

function setActiveControlBtn(number) {
  let selectedControl = document.querySelector(`[data-memeid='${number}']`);
  document.querySelectorAll('.control-btn').forEach((el) => {
    el.classList.remove('active');
    el.textContent = `\u25CF`;
  });
  selectedControl.classList.add('active');
  selectedControl.textContent = `\u25CB`;
}

// ADD CONTROLS

function createControlBtns() {
  for (let i = 0; i < memes.length; i++) {
    controls.insertAdjacentHTML(
      'beforeend',
      i === 0
        ? `<div class="control-btn active" data-memeid='${i}'>\u25CB</div>`
        : `<div class="control-btn" data-memeid='${i}'>\u25CF</div>`
    );
  }
}
createControlBtns();
