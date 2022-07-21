  const API = "http://localhost:3000/games";
// POST on form submit
  const myForm = document.getElementById("addForm");

  myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var gameName = document.getElementById("gameName").value;
    var gameDes = document.getElementById("gameDes").value;
    console.log("gameName: " + gameName + " gameDes: " + gameDes);
    const formData = new URLSearchParams({"name":gameName,"description":gameDes});
    console.log("formData: " + formData);
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData
    })
      .then(data => {
          window.location.href = './index.html';
          console.log(data);
          displayGames(data)
      })
      .catch((error) => console.error("FETCH ERROR:", error))
  });