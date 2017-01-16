document.addEventListener("DOMContentLoaded", function(event) {

  var firstButton = document.querySelector("#container button:nth-of-type(1)");
  var secondButton = document.querySelector("#container button:nth-of-type(2)");
  var wrapper = document.querySelector("#wrapper");
  var navEx = document.querySelector("nav i");

  function slidePush () {
    wrapper.className = "closed-push";
      firstButton.addEventListener("click", function(){
        if (wrapper.className === "opened-push") {
          wrapper.className = "closed-push";

        } else {
          wrapper.className = "opened-push";

        }
      });
  }

  function slideOverlay() {
    wrapper.className = "closed-overlay";
      secondButton.addEventListener("click", function(){
        if (wrapper.className === "opened-overlay") {
          wrapper.className = "closed-overlay";

        } else {
          wrapper.className = "opened-overlay";

        }
      });
  }

  function navClose() {
    navEx.addEventListener("click", function(){
      wrapper.className = "closed-push";
    });
  }

  function autoHeight() {
    var body = document.body;
    var scrollHeight = body.scrollHeight;
    var nav = document.querySelector("nav");
    window.addEventListener("scroll", function(){
      nav.style.height = scrollHeight + "px";
  });
}

  navClose();
  slidePush();
  slideOverlay();
  autoHeight();

});
