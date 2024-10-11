// query selector variables go here 👇
var mainImg = document.querySelector('#main-img')
var mainTitle = document.querySelector('#main-title')
var mainQuote = document.querySelector('#main-quote')
var randomPosterBtn = document.querySelector('#show-random-poster-btn')
var createOwnPosterBtn = document.querySelector('#show-form-btn')
var mainPoster = document.querySelector('.main-poster')
var posterForm = document.querySelector('.poster-form')
var takeMeBackBtn = document.querySelector('.show-main')
var allSavedPosters = document.querySelector('.saved-posters')
var showMyPosterBtn = document.querySelector('.make-poster')
var showSavedPostersBtn = document.querySelector('#show-saved')
var backToMainBtn = document.querySelector('.back-to-main')
var imgUrlInput = document.querySelector('#poster-image-url')
var titleInput = document.querySelector('#poster-title')
var quoteInput = document.querySelector('#poster-quote')
var savePosterBtn = document.querySelector('#save-poster')
var savedPostersGrid = document.querySelector('.saved-posters-grid')

var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;

// event listeners go here 👇
window.addEventListener('load', updatePoster) 
randomPosterBtn.addEventListener('click', updatePoster)
createOwnPosterBtn.addEventListener('click', showForm)
takeMeBackBtn.addEventListener('click', takeMeBack)
showMyPosterBtn.addEventListener('click', createYourOwnPoster)
showSavedPostersBtn.addEventListener('click', showSavedPosters)
backToMainBtn.addEventListener('click', takeMeBack)
savePosterBtn.addEventListener('click', saveThisPoster)

// functions and event handlers go here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomElement(array) {
  return array[getRandomIndex(array)];
}

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote}
}

function updatePoster() {
  mainImg.src = getRandomElement(images);
  mainImg.alt = 'Random motivational image';
  mainTitle.innerText = getRandomElement(titles);
  mainQuote.innerText = getRandomElement(quotes);

  currentPoster = createPoster(mainImg.src, mainTitle.innerText, mainQuote.innerText);
}

function showAndHidePage(view, hide) {
  view.classList.remove('hidden')
  hide.classList.add('hidden')
}

function showForm() {
  showAndHidePage(posterForm, mainPoster)
}

function takeMeBack () {
  showAndHidePage(mainPoster, posterForm)
}

function createYourOwnPoster(event) {
  event.preventDefault();

  var newImageUrl = imgUrlInput.value;
  var newTitle = titleInput.value;
  var newQuote = quoteInput.value;

  mainImg.src = newImageUrl;
  mainImg.alt = 'User-made motivational image';
  mainTitle.innerText = newTitle;
  mainQuote.innerText = newQuote;

  var newPoster = createPoster(newImageUrl, newTitle, newQuote)

  currentPoster = newPoster

  images.push(newImageUrl);
  titles.push(newTitle);
  quotes.push(newQuote);

  posterForm.classList.add('hidden');
  mainPoster.classList.remove('hidden');
}

function saveThisPoster() {
  if (savedPosters.includes(currentPoster) === false) {
    savedPosters.push(currentPoster);

  console.log('This poster was saved')
  console.log('saved poster array:', savedPosters)
  }
}

function showSavedPosters() {

  savedPosters.forEach(savedPoster => {
    savedPostersGrid.innerHTML += `
    <article class = "mini-poster">
    <img class = "mini-poster img" src=${savedPoster.imageURL} alt ="">
    <h1>${savedPoster.title}</h1>
    <h3>${savedPoster.quote}</h3>
    </article>
    `;
  })
  mainPoster.classList.add('hidden');
  posterForm.classList.add('hidden');
  allSavedPosters.classList.remove('hidden');
}


