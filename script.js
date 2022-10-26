const country = document.querySelector(`.country`);
const mentee = document.querySelector(`.mentee`);
const mentor = document.querySelector(`.mentor`);
const menteeBox = document.querySelector(`.mentee-box`);
const mentorBox = document.querySelector(`.mentor-box`);


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



