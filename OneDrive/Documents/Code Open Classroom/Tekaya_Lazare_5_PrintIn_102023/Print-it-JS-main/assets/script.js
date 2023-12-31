const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



const PremiereImage = document.querySelector(".banner-img");
const ChangeTexte = document.querySelector("#banner p");
const Dots = document.querySelectorAll(".dot")
const FlecheDroite = document.querySelector("#banner .arrow_right");
const FlecheGauche = document.querySelector("#banner .arrow_left");

let i = 0;

FlecheDroite.addEventListener("click", () => {
	i++;

	if (i >= slides.length) {
		i = 0;
	}

	for (let j = 0; j < Dots.length; j++) {
		Dots[j].classList.remove("dot_selected");
	}

	PremiereImage.src = slides[i].image;
	ChangeTexte.innerHTML = slides[i].tagLine;
	Dots[i].classList.add("dot_selected");
});

FlecheGauche.addEventListener("click", () => {
	i--;
	if (i < 0) {
		i = slides.length - 1;
	}


	for (let j = 0; j < Dots.length; j++) {
		Dots[j].classList.remove("dot_selected");
	}

	PremiereImage.src = slides[i].image;
	ChangeTexte.innerHTML = slides[i].tagLine;
	Dots[i].classList.add("dot_selected");
});