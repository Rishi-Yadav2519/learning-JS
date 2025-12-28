const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", function (val) {
    /*
    if (val.target.id === "grey") {
      body.style.backgroundColor = val.target.id;
    } else if (val.target.id === "white") {
      body.style.backgroundColor = val.target.id;
    } else if (val.target.id === "blue") {
      body.style.backgroundColor = val.target.id;
    } else if (val.target.id === "yellow") {
      body.style.backgroundColor = val.target.id;
    }
    */

    switch (val.target.id) {
        case "grey":
            body.style.backgroundColor = val.target.id;
            break;
        case "white":
            body.style.backgroundColor = val.target.id;
            break;
        case "yellow":
            body.style.backgroundColor = val.target.id;
            break;
        case "blue":
            body.style.backgroundColor = val.target.id;
            break;
    
        default:
            break;
    }
  });
});
