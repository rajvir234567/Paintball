AFRAME.registerComponent("player-movement", {
    init: function () {
      this.walk();
    },
    walk: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "w" || e.key === "a" || e.key === "s" || e.key === "d") {
          var noise = document.querySelector("#sound2")
          noise.components.sound.playSound()
        }
      });
    },
  });


  