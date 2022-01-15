class Player {
    constructor(name, hitsPerMinute) {
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      this.balloonCount = 100;
    }
    
  
    status() {
      console.log(`Player: ${this.name} -- Balllons Left: ${this.balloonCount}`)
    }
  }

  const balloonAttack = (player1, player2) => {
    for (let i = 0; i<=10;i++){
    player2.balloonCount -= player1.hitsPerMinute;
    player1.balloonCount -= player2.hitsPerMinute;
    player1.status();
    player2.status();
    }
    if(player1.balloonCount > player2.balloonCount){
        return player1.name;
    }
    if(player2.balloonCount > player1.balloonCount){
        return player2.name;
    }
    if(player1.balloonCount = player2.balloonCount){
        console.log('Tie!')
            }
        };
const p1 = new Player('p1', 5);
const p2 = new Player('p2', 8);
console.log(balloonAttack(p1, p2));

