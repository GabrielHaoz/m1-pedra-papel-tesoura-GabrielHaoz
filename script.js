/* Desenvolva seu código abaixo */
//console.log("Primeira entrega!");

const handForms = {
   rock: "Pedra",
   paper: "Papel",
   scissor: "Tesoura",
};
function playRockPaperScissor(player1, player2) {
   if (player1 === handForms.rock && player2 === handForms.scissor) {
      return "Jogador 1 venceu!";
   }
   if (player1 === handForms.rock && player2 === handForms.paper) {
      return "Jogador 2 venceu!";
   }
   if (player1 === handForms.paper && player2 === handForms.rock) {
      return "Jogador 1 venceu!";
   }
   if (player1 === handForms.paper && player2 === handForms.scissor) {
      return "Jogador 2 venceu!";
   }
   if (player1 === handForms.scissor && player2 === handForms.paper) {
      return "Jogador 1 venceu!";
   }
   if (player1 === handForms.scissor && player2 === handForms.rock) {
      return "Jogador 2 venceu!";
   }
   return "Empate!";
}
