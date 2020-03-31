// Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript/jQuery
// prendo lo zip che dopo vi allego e senza toccare l’HTML faccio funzionare l’hamburger menù;
// primo click, appare il menù;
// se cliccko che è già visibile, invece scompare


 // Seleziono/identifico l'Hamburger bar da cliccare
var barHamburger = $("a i");
// identifico l'hamburger menu
var menuHamburger = $(".hamburger-menu")
// identifico l'elemento da cliccare per chiudere
var closeHamburger = $(".close")
// quando clicco la barra hambuger deve succedere qualcosa
barHamburger.click( function(){
  // viene mostrato l'interno della barra
  menuHamburger.show();
});
// quando clicco la barra chiusura deve succedere qualcosa
closeHamburger.click(function(){
  //  viene nascosto il menu hambuger
  menuHamburger.hide();
})
