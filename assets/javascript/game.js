
$(document).ready(function() {


	
    // global variables
    var win = 0;
    var loss = 0;
    var computerNumber = 0;
    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;
    var crystalTotal = 0;
    
    
    //random Number Function
    function randomNumber(min,max){
            return Math.floor(Math.random()*(max-min+1)+min);
            }
    
    //restart game function
        function restart(){
            computerNumber = 0;
            crystal1 = 0;
            crystal2 = 0;
            crystal3 = 0;
            crystal4 = 0;
            crystalTotal = 0;
            $('#yourNum').text(0);
            startGame();
        };
    
    //compare score function
    function checkScore() {
            if (crystalTotal == computerNumber) {
                win++;
                $('#win').text(win);
                restart();
            }; 
    
            if (crystalTotal > computerNumber) {
                loss++;
                $('#loss').text(loss);
                restart();	
            }; 
    };	
    
    
    //start game
    
    function startGame(){
        //choose computerNumber
            var num1 = randomNumber(19,120);
            computerNumber = num1;
            $('#compNum').text(computerNumber);
    
        //choose crystal1 #
            var num2 = randomNumber(1,12);
            crystal1 = num2;
    
        //choose crystal2 #
            var num3 = randomNumber(1,12);
            crystal2 = num3;
    
        //choose crystal3 #
            var num4 = randomNumber(1,12);
            crystal3 = num4;
    
        //choose crystal4 #
            var num5 = randomNumber(1,12);
            crystal4 = num5;
        }
    
        //click crystal1
            $("#crystalimg1").click(function(){
                crystalTotal += crystal1;
                $('#yourNum').text(crystalTotal);
                $(this).effect("bounce", { times:2 }, 300);
                checkScore();
            }); 
    
        //click crystal2
            $("#crystalimg2").click(function(){
                crystalTotal += crystal2;
                $('#yourNum').text(crystalTotal);
                $(this).effect("bounce", { times:2 }, 300);
                checkScore();
            }); 
    
        //click crystal3
            $("#crystalimg3").click(function(){
                crystalTotal += crystal3;
                $('#yourNum').text(crystalTotal);
                $(this).effect("bounce", { times:2 }, 300);
                checkScore();
            }); 
    
        //click crystal4
            $("#crystalimg4").click(function(){
                crystalTotal += crystal4;
                $('#yourNum').text(crystalTotal);
                $(this).effect("bounce", { times:2 }, 300);
                checkScore();
            }); 
        
    startGame();
    
    //pop up directions
    $('#my_popup').popup();
    
    });
    