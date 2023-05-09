//fetching the url
function fetchData() {
  fetch("https://pokeapi.co/api/v2/pokemon/")
    //response received
    .then((res) => {
      //transforming the response to json
      return res.json();
    })
    //the readable data is received
    .then((data) => {
      let url = data.results[1].url; //not using this but it's fetching on line 12 information about Ivysaur which is [1]
      fetch(url)
        .then((res) => res.json())
        .then((poke) => console.log(poke)); //end of what not using

      //delaring where I'm wanting to look at data, then I'm mapping through the elements in array
      let html = data.results
        .map((pokemon) => {
          //returning a string that has template literals
          return `
         <p>Pokemon Name: ${pokemon.name} </br> API URL: ${pokemon.url} </p> 
          `;
        })
        //map still had the name in an array so added .join("")
        .join("");
      console.log(html);

      //could have used .innerHTML but picked .insertAdjacentHTML w/ "afterbegin" parameter so that the data enters how I'd like it
      document
        .querySelector("#pokeCatch")
        .insertAdjacentHTML("afterbegin", html); //the html is what was declared for pokemon name and url
    });
}

fetchData();

//second (workine one!)
/** 
function fetchData() {
  fetch("https://pokeapi.co/api/v2/pokemon/2/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.results);
      const html = data.results.map((pokemon) => {
        return `<p>Name: ${pokemon.name}</p> `;
      });
      console.log(html);
      document
        .querySelector("#pokeCatch")
        .insertAdjacentHTML("afterbegin", "<h1>hello</h1>"); //innerHTML is working
    });
}

fetchData();
*/
//original
/**
fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => res.json()) //Resolves the response
  .then((data) => {
    let url = data.results[1].url;
    fetch(url)
      .then((res) => res.json()) 
      .then((pokemon) => console.log(pokemon)); 

  
    console.log(data);
  });
 */
