//////////////////////menu
const menuContainer = document.querySelector(".menu");
const menuData = [
    { enText: "About", faText: "درباره من" },
    { enText: "Skills", faText: "مهارت ها" },
    { enText: "Portfolio", faText: "نمونه کارها" },
    { enText: "Contact", faText: "تماس با من" }
];

for (const items of menuData) {
    menuContainer.innerHTML += `
    <li>
     <a data-en="${items.enText}" data-fa="${items.faText}" href="#${items.enText.charAt(0).toLowerCase() + items.enText.slice(1)}">${items.enText}</a>
    </li>`;
};

const profileContainer = document.querySelector(".profile");
const profileImages = document.createElement("img");
profileImages.src = "/images/profile.jpeg";
profileImages.alt = "profile-image";
profileContainer.appendChild(profileImages);
//////////////////////////about
const aboutTxt = document.querySelector(".about-text");

const aboutTxtEn = `Hello, I Am Alireza Mansouri, 26 Years Old From Tehran,Iran. I Studied Information Technology Engineering At The University . After Entering University,
 I Became Interested In Front-End Programming And Started Learning. And I Am Also Familiar With Seo And Ui Ux. And I'm also trying to gain more experience in website design`

const aboutTxtFa = `سلام من علیرضا منصوری هستم 26 ساله از تهران ایران. من در دانشگاه
مهندسی فناوری اطلاعات خوانده ام. بعد از ورود به دانشگاه به برنامه نویسی Front-End علاقه مند شدم و شروع به یادگیری کردم و همچنین با Seo و Ui Ux نیز آشنا هستم و همچنین در تلاش برای کشب تجربیات بیشتر در طراحی وب سایت هستم`;

aboutTxt.textContent = aboutTxtEn;
aboutTxt.setAttribute("data-en", aboutTxtEn);
aboutTxt.setAttribute("data-fa", aboutTxtFa);

const degree = document.querySelector(".degree");
const degreeData = [{
    degree: "It Engineering Bachelors", uni: "azad university north tehran branch"
    , faDegree: "لیسانس مهندسی آی تی", faUni: "دانشگاه آزاد تهران شمال"
},
{
    degree: "It Management Msc", uni: "azad university Electronic branch"
    , faDegree: "ارشد مدیریت آی تی", faUni: "دانشگاه آزاد  الکترونیکی"
}];

for (const items of degreeData) {
    degree.innerHTML += `<div class="col-lg-5 col-md-8 col-sm-9 col-11 mt-3 edu d-flex flex-column justify-content-center align-items-center">
                          <h3 data-en="${items.degree}" data-fa="${items.faDegree}">${items.degree}</h3>
                          <p data-en="${items.uni}" data-fa="${items.faUni}">${items.uni}</p>
                   </div>`;
}
////////////////////////////skills

const skillsContainer = document.querySelector(".skills-container");

const skillsData = [{ skill: "HTML5", faId: "fa-html5", progressRange: 80 }, { skill: "CSS3", faId: "fa-css3-alt", progressRange: 70 },
{ skill: "Javascript", faId: "fa-square-js", progressRange: 50 }, { skill: "Bootstrap", faId: "fa-bootstrap", progressRange: 80 }];

for (const items of skillsData) {
    skillsContainer.innerHTML += `
      <div class="col-lg-3 col-md-4 col-6 d-flex flex-column justify-content-center align-items-center mt-4 res-skill">
              <i class="fa-brands ${items.faId} fa-8x"></i>
              <p>${items.skill}</p> 
              <progress id="file" value="${items.progressRange}" max="100"></progress>
      </div>
    `;
}
/////////////////////////portfolio
const portfolioData = [{ name: "persepolis" }, { name: "football" }, { name: "nissan" }, { name: "tera" }];
const swiperWrapper = document.querySelector(".swiper-wrapper");

for (const items of portfolioData) {
    swiperWrapper.innerHTML += `
            <div class="swiper-slide"><img class="col-lg-8 col-md-9 col-sm-10 col-11"
                           src="/images/portfolio Images/${items.name}.png" alt="${items.name}-portfolio-image">
            </div>
    `;
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
////////////////////////////contact

const social = document.querySelector(".social");

const socialData = [{ name: "instagram", link: "https://www.instagram.com/" },
{ name: "google", link: "mailto: alirezamansuri.ui@gmail.com" },
{ name: "linkedin", link: "https://www.linkedin.com/in/alireza-mansuri-7a99341a3/" },
{ name: "github", link: "https://github.com/alirezamansuri" },
{ name: "dribbble", link: "https://dribbble.com/alirezamansuri" }];

for (const items of socialData) {
    social.innerHTML += `
                 <a target="_blank" href="${items.link}"><i class="fa-brands fa-${items.name} fa-3x"></i> </a> 
              `;
}
////////////////////////////responsive menu
const resNavBtn = document.querySelector(".res-nav-btn");
const navbar = document.querySelector(".navbar");
resNavBtn.addEventListener("click", function (e) {
    e.preventDefault();
    navbar.classList.toggle("block");
})
///////////////language
const faLang = document.getElementById("fa-lang");
const enLang = document.getElementById("en-lang");
enLang.style.display = "none";

let isLang = localStorage.getItem("lang");
faLang.addEventListener("click", function () {
    changelang('fa');
    this.style.display = "none";
    enLang.style.display = "block";
})
enLang.addEventListener("click", function () {
    changelang('en');
    this.style.display = "none";
    faLang.style.display = "block";
});


const lang = document.documentElement.lang;

if (isLang) {
    changelang(isLang);
} else {
    isLang = document.documentElement.isLang || "en";

    localStorage.setItem("lang", isLang);
}
function changelang(lang) {
    console.log('Changing lang to ' + lang);
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
    let elements = document.documentElement.getElementsByTagName('*');

    for (var i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute('data-' + lang)) {
            elements[i].innerHTML = elements[i].getAttribute('data-' + lang);
        }
    }

}
