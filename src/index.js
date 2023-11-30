function displayPoem(response){
    console.log("poem generated");
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1, 
        cursor: "", 
      });
}





function generatePoem(event){
    event.preventDefault();
 
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "e602btcc82bb3e55aadf7c74bob92d32";
    let context = "You are a Charles Baudelaire poems in prose admirer who loves to read everything about him, especially his poems in prose. Your mission is to generate few lines from any of his poems in prose ONLY in English, in basic HTML, separating each line by a <br/>. Make sure to follow the user instructions. Write the title of the poem in prose, without writing the words 'title' and 'user instructions' in it.";
    let prompt = `User instructions: Generate a poem in prose from Charles Baudelaire about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="blink-effect>⌛ Generating the poem in prose about ${instructionsInput.value}</div>`


    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiUrl).then(displayPoem);


   

}



let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem)