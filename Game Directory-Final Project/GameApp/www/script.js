const API = "https://gameapp.sbunker.workers.dev/";
fetch(API)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayGames(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));

  function displayGames(data) {
   let length = data.length;
   let gamesHTML = "";
   const gamesDiv = document.getElementById("games");
  //  console.log("inside displayGames");
  // loops through json data and displays each game as a card
  for (var i = 0, l = data.length; i < l; i++){
      gamesHTML += '<div class="card-4 margin white"><div class="container"><h3><b>' + data[i].name + '</b></h3></div><div class="container"><p>'+ data[i].description +'</p></div></div><hr>';
      // console.log("inside for Loop");
  }
  // console.info(gamesHTML);
   gamesDiv.innerHTML = gamesHTML;
  } 

