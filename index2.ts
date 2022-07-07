import game  from './chessBoardStates.json';

let  games = [game.game1, game.game2, game.game3];
let arr:any= [[], [], [], [], [], [], [], []];

for(let g=0; g<games.length;g++){
    let array = (Object.values(games[g]));
    startGame(array);
    printGame();
    console.log('*************************************')
}

function startGame(array:any){
  let a=0;
  while(a<array.length){
  for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){ 
           if(array[a] === 'P'|| array[a] === 'p' || array[a] === 'R' || array[a] === 'r' || array[a] === 'N' || array[a] === 'n' || array[a] === 'B' || array[a] === 'b' || array[a] === 'Q' || array[a] === 'q' || array[a] === 'K' || array[a] === 'k'){
              arr[i][j] = array[a]; 
              
           }
           else {
            let number = parseInt(array[a]);
            for(let k=0;k<number-1;k++){
             arr[i][j] = ' ';
             j++;
             }
           }

           a++;
            
        }
    }

}
}
function printGame(){
    for (const row of arr) {
		const line = row.join(' | ');
		console.log(line);
		console.log('--------------------------- ');
	}
}
