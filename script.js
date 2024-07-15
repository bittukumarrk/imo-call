const Services = document.querySelector("#Services")
const  dropSerises = document.querySelector(".dropSerises")

const Connect = document.querySelector("#Connect")
const  contactform = document.querySelector(".contact-form")

const about = document.querySelector("#about")
const  dropabout = document.querySelector(".dropabout")


const buttonLanguage = document.querySelector(".buttonLanguage")
const  language = document.querySelector(".language")



Services.addEventListener("mouseover", () => {
    dropSerises.style.display = "block";
    
});

Services.addEventListener("mouseout", () => {
    dropSerises.style.display = "none";
});

Connect.addEventListener("mouseover", () => {
    contactform.style.display = "block";
    
});

Connect.addEventListener("mouseout", () => {
    contactform.style.display = "none";
});


about.addEventListener("mouseover", () => {
    dropabout.style.display = "block";
    
});

about.addEventListener("mouseout", () => {
    dropabout.style.display = "none";
});

buttonLanguage.addEventListener("mouseover", () => {
    language.style.display = "block";
    
});

buttonLanguage.addEventListener("mouseout", () => {
    language.style.display = "none";
});



