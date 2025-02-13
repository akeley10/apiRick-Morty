document.addEventListener('DOMContentLoaded', function() {
    async function getData() {
        const url = "https://rickandmortyapi.com/api/character/";
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
          const text = document.getElementById("text");
          const json = await response.json();
          // Iterar sobre json.results (los personajes)
          let charactersList = '';  // Cadena para almacenar los datos de los personajes
          for (let i = 0; i < json.results.length; i++) {
            const characterName = json.results[i].name;
            const characterImage = json.results[i].image;
            charactersList += `<div class="box">`; 
            charactersList += `<p>${characterName}</p>`;  
            charactersList += `<img src="${characterImage}" alt="Imagen Personaje" width="200" />`;
            charactersList += `</div>`; 
          }
    
          // Mostrar los nombres de los personajes en el DOM
          text.innerHTML = charactersList;
          console.log(json);
        } catch (error) {
          console.error(error.message);
        }
      }
      getData();
});