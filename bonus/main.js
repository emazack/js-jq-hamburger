var hamburger = $("img");
var contenutoHamburger = $(".contenuto-hamburger")
var activation = "no";

hamburger.click(function(){
  if (activation === "no") {
    contenutoHamburger.show();
    activation = "yes";
  } else if (activation === "yes") {
    contenutoHamburger.hide();
    activation = "no";
  }
})
