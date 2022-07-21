// Import Express.js
import express from "express";
// Import body-parser (to handle parameters more easily)
import bodyParser from "body-parser";

// This variable defines the port of your computer where the API will be available
const PORT = 3000;

// This variable instantiate the Express.js library
const app = express();

// Indicate to Express.js that you're using an additional plugin to treat parameters
app.use(bodyParser.urlencoded({ extended: true }));

// Static variable containing your games taken from file
// import gameList from './games.json' assert {type: 'json'};
let gameList = [
      {
        "name":"Wingspan",
        "description": "You are bird enthusiasts—researchers, bird watchers, ornithologists, and collectors—seeking to discover and attract the best birds to your network of wildlife preserves"
      },
      {
          "name":"Azul",
          "description": "You are bird enthusiasts—researchers, bird watchers, ornithologists, and collectors—seeking to discover and attract the best birds to your network of wildlife preserves"
      },
      {
          "name":"Ark Nova",
          "description": "Plan and design a modern, scientifically managed zoo. With the ultimate goal of owning the most successful zoological establishment"
      },
      {
          "name":"Monopoly",
          "description": "Players take the part of land owners, attempting to buy and then develop their land"
      },
      {
          "name":"Cascadia",
          "description": "Take turns building out your own terrain area and populating it with wildlife.place habitat tiles to create matching terrain to create wildlife corridors"
      }
  ];
// console.log(gameList);


// The code below starts the API with these parameters:
// 1 - The PORT where your API will be available
// 2 - The callback function (function to call) when your API is ready
app.listen(PORT, () =>
  console.log(`The games API is running on: http://localhost:${PORT}.`)
);

// The code below creates a GET route with these parameters:
// 1 - The route where the code will be executed
// 2 - The function containing the code to execute
app.get("/", (request, response) => {
  // The string we want to display on http://localhost:3000
  response.send("Welcome on the games API! Take a breath and start using it!");
});

// Replace the route name
app.get("/games", (request, response) => {
  // The function will return your gameList in a JSON
  // Sample: { allgames: ["Make Time: How to Focus on what Matters Every Day", "The Power Of Habit"]}
  return response.json(gameList);
});

app.post("/games", (request, response) => {
  // We get the parameter 'name' from the body
  const gameToAdd = request.body.name;
  const gameDescription = request.body.description;

  console.log("gameToAdd: " + gameToAdd + " gameDes: " + gameDescription);

  // We check if the game list includes the new game
  // If it is, we return 'false'
  // console.log(gameToAdd);
  if (gameList.includes(gameToAdd)) return response.json({ success: false });

  // Otherwise, we add the new game in the list and return 'true'
  
  gameList.push({"name" : gameToAdd,"description": gameDescription});
  // gameList.push(gameDescription);
  return response.json({ success: true });
});

app.delete("/games", (request, response) => {
  // We get the parameter 'name' from the body
  const gameToDelete = request.body.name;

  // We create a new array with all elements different from the game to delete
  gameList = gameList.filter((game) => game !== gameToDelete);

  // We return the new list
  return response.json({ allgames: gameList });
});

app.put("/games", (request, response) => {
  // We get the parameters 'nameToUpdate' and 'updatedName' from the body
  const gameToUpdate = request.body.nameToUpdate;
  const updatedgame = request.body.updatedName;

  // We search if the game to update is in the list
  const indexOfgameToUpdate = gameList.findIndex(
    (game) => game === gameToUpdate
  );

  // If it is not a game from the list, we return 'false'
  if (indexOfgameToUpdate === -1) return response.json({ success: false });

  // Otherwise, we replace the name and return 'true'
  gameList[indexOfgameToUpdate] = updatedgame;
  return response.json({ success: true });
});