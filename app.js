
var board =[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160];
const player1_button = document.getElementById("player-1");
const player2_button = document.getElementById("player-2");
console.log(player1_button);
console.log(player2_button);
player1_button.addEventListener('click',rollDice_1);
player2_button.addEventListener('click',rollDice_2);
var player1 =["prograd1",0,100];
var player2 = ["prograd2",0,100];
function rollDice_1(){
    let position = Math.floor(Math.random()*6)+1;
    console.log("playes one rolls and position is",position);
    ChangePosition_1(player1[1],position);
}

    function ChangePosition_1(old,currentPos){
        var newPosition = old + currentPos;
        player1[1] = newPosition;
        console.log(player1[1]);
        updateMoney_1(player1[1]);
    }

    function updateMoney_1(p1){
        var updateMoney = 0;
        if(p1<board.length)
        updateMoney=player1[2]-board[p1-1];
        
        else{
            p1=p1%15;
            updateMoney=updateMoney=player1[2]-board[p1-1];

        }
        

        console.log(updateMoney);
    }


    function rollDice_2(){
        let position = Math.floor(Math.random()*6)+1;
        console.log("playes one rolls and position is",position);
        ChangePosition_2(player2[1],position);
    }
    
        function ChangePosition_2(old,currentPos){
            var newPosition = old + currentPos;
            player2[1] = newPosition;
            console.log(player2[1]);
            updateMoney_2(player2[1]);
        }
    
        function updateMoney_2(p2){
            var updateMoney = 0;
            if(p2<board.length)
            updateMoney=player2[2]-board[p2-1];
            
            else{
                p2=p2%15;
                updateMoney=player2[2]-board[p2-1];
    
            }
            
    
            console.log(updateMoney);
        }