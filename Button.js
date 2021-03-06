AFRAME.registerComponent("create-buttons", {
  init() {
    const button1 = document.createElement("button");
    button1.innerHTML = "Rate Us";
    button1.setAttribute("id", "rtg-btn");
    button1.setAttribute("class", "button button-warning");

    const button2 = document.createElement("button");
    button2.innerHTML = "Order Now";
    button2.setAttribute("id", "ord-btn");
    button2.setAttribute("class", "button button-warning");

    const buttons = document.getElementById("button-div");
    buttons.appendChild(button1);
    buttons.appendChild(button2);
  },
});
