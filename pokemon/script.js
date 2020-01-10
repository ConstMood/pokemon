var load_button = document.getElementById("load-button");
load_button.addEventListener("click", function() {
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(function(answer) {
      return answer.json();
    })
    .then(function(data) {
      var pokemon_names = document.getElementById("pokemon-names");
      pokemon_names.innerHTML = "";
      for (let i = 0; i < 20; i++) {
        var pokemon_name = document.createElement("p");
        pokemon_name.innerHTML += data.results[i].name;
        pokemon_names.appendChild(pokemon_name);

        var info_button = document.createElement("span");
        info_button.innerHTML = "Check Statuses";
        info_button.addEventListener("click", function() {
          pokemon_infos(data.results[i].name);
        });
        pokemon_names.appendChild(info_button);
      }
    });
});

function pokemon_infos(name) {
  var pokemon_info = document.getElementById("pokemon-info");
  pokemon_info.className = "visible";
  fetch("https://pokeapi.co/api/v2/pokemon/" + name)
    .then(function(answer) {
      return answer.json();
    })
    .then(function(data) {
      pokemon_info.innerHTML = "";
      var pokemon_id_header = document.createElement("h3");
      pokemon_id_header.innerHTML = "ID";
      pokemon_info.appendChild(pokemon_id_header);
      var pokemon_info_id = document.createElement("p");
      pokemon_info_id.innerHTML = data.id;
      pokemon_info.appendChild(pokemon_info_id);

      var pokemon_name_header = document.createElement("h3");
      pokemon_name_header.innerHTML = "Name";
      pokemon_info.appendChild(pokemon_name_header);
      var pokemon_info_name = document.createElement("p");
      pokemon_info_name.innerHTML = data.name;
      pokemon_info.appendChild(pokemon_info_name);

      var pokemon_height_header = document.createElement("h3");
      pokemon_height_header.innerHTML = "Height";
      pokemon_info.appendChild(pokemon_height_header);
      var pokemon_info_height = document.createElement("p");
      pokemon_info_height.innerHTML = data.height;
      pokemon_info.appendChild(pokemon_info_height);

      var pokemon_image_header = document.createElement("h3");
      pokemon_image_header.innerHTML = "Image";
      pokemon_info.appendChild(pokemon_image_header);
      var pokemon_info_image = document.createElement("img");
      pokemon_info_image.setAttribute("src", data.sprites.front_default);
      pokemon_info.appendChild(pokemon_info_image);
    });
}

var previous_button = document.getElementById("previous-button");
previous_button.addEventListener("click", function() {});

var next_button = document.getElementById("next-button");
next_button.addEventListener("click", function() {});
