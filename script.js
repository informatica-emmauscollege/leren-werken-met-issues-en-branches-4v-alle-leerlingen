/* Game opdracht - Pong voorbeeld game
   Versie 20190407GEE, voor Emmauscollege Rotterdam
*/

/* globale variabelen die je gebruikt in je game
   */
console.log("start variabelen declareren"); // berichtje voor debuggen
var balX = 0; // x-coordinaat midden van bal
var balY = 0; // y-coordinaat midden van bal
var balTempoX = 2; // snelheid in x-richting van bal
var balTempoY = 2; // snelheid in y-richting van bal
var plankX = 0; // x-coordinaat linkerkant van plank

/* functies die je gebruikt in je game
   */
// we gebruiken in dit voorbeeld geen functies
// Vraag: hoe kun je met functies de leesbaarheid van je code verbeteren?

/* setup
   de code in deze functie wordt één keer uitgevoerd door de p5 library, 
   zodra het spel geladen is in de browser
   */
function setup() {
  createCanvas(800, 450); // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  background("blue"); // Kleur de achtergrond blauw, zodat je het kunt zien
  console.log("setup klaar"); // berichtje voor debuggen
}

/* draw
   de code in deze functie wordt meerdere keren per seconde uitgevoerd door de p5 library, 
   nadat de setup functie klaar is
   */
function draw() {
  console.log("start draw"); // berichtje voor debuggen

  /* teken het speelveld, gebruik de globale variabelen
   */
  // achtergrond
  fill("blue");
  rect(0, 0, 800, 450);
  fill("black");
  rect(0 + 10, 0 + 10, 800 - 2 * 10, 450 - 2 * 10);
  
  
  // voeg naam toe: Gijs Arnold
  fill(255, 0, 0);
  text("Witold was hier", balX + 10, balY + 10);
  text("Quinten was hier ni", 100, 150);
  text("Caitlin", 100,100);
  text("Olivier", 150, 150);
  text("Jamie", 200, 150);
  text("Precia", 200, 100);
  text("Ayoub was hier", balX + 30, balY + 45)
  text("Frederique was hier", 200, 200)
  text("Lisanne was hier", 200, 250)
  text("Volkan", 300,200)
  text("Naomi was hier", 540, 200);
  text("b0ris,", 333, 333);
  text("ChRiS",419,421);
  text("Rajiv",250,300);
  text("lars", 300, 300);
  text("DiRk", 300, 100);
  text("Alessandra", 50, 50);
text("Thomas", balX - 30, balY - 30);
  // bal
  fill("white");
  ellipse(balX, balY, 20, 20);
  // plank
  rect(plankX, 410, 100, 20);

  /* verwerk een stap in de tijd: 
     pas de waarden van de globale variabelen aan
   */
  // stapje van bal
  balX = balX + balTempoX;
  balY = balY + balTempoY;

  // botsing bal tegen schermrand
  if ((balX > 800) || (balX < 0)) {
    balTempoX = balTempoX * -1;
  }
  if ((balY > 450) || (balY < 0)) {
    balTempoY = balTempoY * -1;
  }

  // botsing bal tegen plank
  if ((balY > 410) &&
    (balX > plankX) && (balX < plankX + 100)) {
    balTempoY = balTempoY * -1;
  }

  /* verwerk invoer van toetsenbord / muis / touchscreen:
     pas de waarden van de globale variabelen aan
    */

  plankX = mouseX;

  /* controlleer of het spel klaar is
   */
  // het spel blijft nu altijd doorgaan
  // vraag: Wanneer zou het spel moeten stoppen? 

}
