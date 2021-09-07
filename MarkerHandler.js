AFRAME.registerComponent("marker-handler", {
  async init() {
    this.el.addEventListener("marker-found", () => {
      console.log("Pizza Marker Found");
      this.handleMarkerFound();
    });

    this.el.addEventListener("marker-lost", () => {
      console.log("Pizza Marker Lost");
      this.handleMarkerLost();
    });
  },
  handleMarkerFound() {
    const el = document.getElementById("button-div");
    el.style.display = "flex";
    const rtgBtn = document.getElementById("rtg-btn");
    const ordBtn = document.getElementById("ord-btn");
    rtgBtn.addEventListener("click", () => {
      swal({
        icon: "warning",
        title: "Rate Dish",
        text: "Work in Progress.",
      });
    });
    ordBtn.addEventListener("click", () => {
      swal({
        icon: "success",
        title: "Thanks for your Order!",
        text: "The order will be served soon at your desk.",
      });
    });
  },
  handleMarkerLost() {
    const el = document.getElementById("button-div");
    el.style.display = "none";
  },
});
