const country = document.querySelector(`.country`);
const mentee = document.querySelector(`.mentee`);
const mentor = document.querySelector(`.mentor`);
const menteeBox = document.querySelector(`.mentee-box`);
const mentorBox = document.querySelector(`.mentor-box`);
const mentorCard = document.querySelectorAll(`.mentor-card`);



function flipMentorCard() {
  mentorCard.forEach((card, i) => {
    if (i % 2 === 0) {
      card.classList.toggle(`hide`)
    }
  })
}

setInterval(flipMentorCard, 2700);


const splide = new Splide('#slider1', {
  type: 'loop',
  drag: 'free',
  focus: 'center',
  pagination: false,
  arrows: false,
  perPage: 6,
  gap: '2rem',
  mediaQuery: 'max',
  breakpoints: {
    480: {
      perPage: 2,
    },
    900: {
      perPage: 5,
    },
  },
  autoScroll: {
    speed: 2,
    pauseOnHover: false,
  },
});
splide.mount(window.splide.Extensions);

splideLeft = new Splide('#slider2', {
  type: 'loop',
  drag: 'free',
  focus: 'center',
  pagination: false,
  arrows: false,
  perPage: 2,
  mediaQuery: 'max',
  breakpoints: {
    480: {
      perPage: 1,
    },
    980: {
      perPage: 1.5,
    },
  },
  autoScroll: {
    speed: 1,
    pauseOnHover: false,
  },
});
splideLeft.mount(window.splide.Extensions);

splideLeft = new Splide('#slider3', {
  type: 'loop',
  drag: 'free',
  focus: 'center',
  pagination: false,
  arrows: false,
  perPage: 2,
  mediaQuery: 'max',
  breakpoints: {
    480: {
      perPage: 1,
    },
    980: {
      perPage: 1.5,
    },
  },
  autoScroll: {
    speed: -1,
    pauseOnHover: false,
  },
});
splideLeft.mount(window.splide.Extensions);

const countries = [];
let countryOptions;
const countryApi = "https://restcountries.com/v2/all"
fetch(countryApi)
  .then(blob => blob.json())
  .then(data => {
    data.forEach(item => {
      countries.push(item.name)
    });
    for (let i = 0; i < 50; i++) {
      countryOptions += `
            <option value="${i}">${countries[i]}</option>
            `
    }
    country.innerHTML += countryOptions;
  });

function switchView(e) {
  if (!this.classList.contains('active')) {
    mentor.classList.toggle('active');
    mentee.classList.toggle('active');
    mentorBox.classList.toggle('show');
    menteeBox.classList.toggle('show');
  }
}

mentee.addEventListener('click', switchView);
mentor.addEventListener('click', switchView);



