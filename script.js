document.getElementsByClassName("slide");
document.querySelector("active");


// Tutte le slides in un array
let slides = document.getElementsByClassName("slide");
let containers = document.querySelectorAll('.imgcontainer');

let immagineAttiva = 0;
let prossimaSlide;

document.getElementById("btnNext").addEventListener("click", function(){
// Tutto il codice per il bottone
for (let i = 0; i < slides.length; i++) {

    const slide = slides[i];
    console.log(i, slide);

    if( slide.classList.contains("active")) {
        // se ce l'ha, rimuovo active
        slide.classList.remove("active");
        containers[i].classList.remove("active");

        immagineAttiva = i;
        console.log("Active rimosso",i)

    }
    
}

// Slide attuale ma + 1 

prossimaSlide = immagineAttiva + 1;

// Reset alla fine delle slide
if( prossimaSlide >= slides.length ) {
    prossimaSlide = 0;
}

slides[prossimaSlide].classList.add("active");
containers[immagineAttiva].classList.add("active");

console.log("L'immagine attiva era: ", immagineAttiva);

})

// Bottone Prev

document.getElementById("btnPrev").addEventListener("click", function(){
    // Tutto il codice per il bottone
    for (let i = 0; i < slides.length; i++) {
    
        const slide = slides[i];
        console.log(i, slide);
    
        if( slide.classList.contains("active")) {
            // se ce l'ha, rimuovo active
            slide.classList.remove("active");
            containers[i].classList.remove("active");
    
            immagineAttiva = i;
            console.log("Active rimosso",i)
    
        }
        
    }
    
    // Slide attuale ma + 1 
    
    prossimaSlide = immagineAttiva - 1;
    
    // Reset alla fine delle slide
    if( prossimaSlide < 0 ) {
        prossimaSlide = slides.length - 1;
    }
    
    slides[prossimaSlide].classList.add("active");
    containers[immagineAttiva].classList.add("active");
    
    console.log("L'immagine attiva era: ", immagineAttiva);
    
    })

