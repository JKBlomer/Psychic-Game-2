
document.addEventListener("DOMContentLoaded", function(event) { 

    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessesMade = [];
    var computerArray = [];
   

    
    function startDoc() {
        guessesLeft = 10;
        guessesMade = [];
        computerArray = [];
        document.getElementById("guessesLeft-text").innerText = "Guesses Left: " +  guessesLeft;
        document.getElementById("guessesMade-text").innerText = "Guesses Made: " + guessesMade;
        document.getElementById("wins-text").innerText = "Wins: " +  wins;
        document.getElementById("losses-text").innerText = "Losses: " +  losses;

        for(var i = 65; i < 91; i++)
        {
        computerArray.push(i);
                   
        }
           
         computerGuess = computerArray[Math.floor(Math.random() * computerArray.length)];
         
         console.log("Start doc: computer guess:" + computerGuess); 
         console.log("start doc fired");
        }
    
    startDoc();

   
         
    
    document.onkeyup = function(event) {
        

        if(guessesLeft < 2) {
            alert("You have no guesses left. Loose one point");
            losses++;
            
            if(losses > 4) {  
                alert("You lost 5 times.  Game Over");
                location.reload();
            }
            
            else {
               
                startDoc();
                return;
            }
        }
        
        if((event.which < 65) || (event.which > 90) ) {
            return false;
        }

        var userGuess = event.key;
        console.log("user guess: " + event.which);
            
        guessesMade.push(userGuess.toUpperCase());
            
        
        guessesLeft--;
       

        document.getElementById("guessesMade-text").innerText = "Guesses Made: " + guessesMade;
       
        document.getElementById("guessesLeft-text").innerText = "Guesses Left: " +  guessesLeft;
        
            
        if(event.which === computerGuess) {
                wins++;
                
                alert("You win one point");
                if(wins > 4) {
                    
                    alert("YOU WIN THE GAME!");
                    location.reload();
                }
                
                startDoc();
            }
        };
    
      });
    
    