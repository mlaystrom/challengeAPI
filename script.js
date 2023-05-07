function fetchData() {
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let url = data.results[1].url;
      fetch(url)
        .then((res) => res.json())
        .then((poke) => console.log(poke));
      const html = data.results
        .map((pokemon) => {
          return `<p>Name: ${pokemon.name}</p> `;
        })
        .join("");
      console.log(html);
      document
        .querySelector("#pokeCatch")
        .insertAdjacentHTML("afterbegin", html);
    });
}

fetchData();

//second (workine one!)
/** 
function fetchData() {
  fetch("https://pokeapi.co/api/v2/pokemon/")
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

    //  pokemon.forEach((name, abilities) => {
    // console.log(`This ${name + 1} has these abilities ${abilities}`);
    // });
    console.log(data);
  });
 */
