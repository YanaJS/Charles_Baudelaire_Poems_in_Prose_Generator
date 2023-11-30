
function generatePoem(event){
    event.preventDefault();


    let poemElement = document.querySelector("#poem");
    new Typewriter('#poem', {
        strings: "Qui aimes-tu le mieux, homme énigmatique, dis ? ton père, ta mère, ta sœur ou ton frère ?",
        autoStart: true,
        delay: 1, 
        cursor: "", 
      });

}



let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem)