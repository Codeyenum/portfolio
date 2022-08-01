let education = document.querySelector(".edu");
let certificate = document.querySelector(".cert");
let instituteSection = document.querySelector(".institute--section");
let certificateSection = document.querySelector(".certificate--section");



education.addEventListener("click", () => {
    education.classList.add("active");
    certificate.classList.remove("active");
    instituteSection.classList.remove("hide");
    certificateSection.classList.add("hide");
})

certificate.addEventListener("click", () => {
    education.classList.remove("active");
    certificate.classList.add("active");
    instituteSection.classList.add("hide");
    certificateSection.classList.remove("hide");
})