//board

let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

//bird avatar
let birdWidth = 34;
let birdHeight = 24;
let birdX = boardWidth/8;
let birdY = boardHeight/2;
let birdImg

let bird = {
    x : birdX,
    y : birdY,
    width : birdWidth,
    height : birdHeight
}

//pipes
let pipeArray = [];
let pipeWidth = 64;
let pipeHeight = 512;
let pipeX = board.Width;
let pipY = board.Height;

let topPipeImg;
let bottomPipeImg;

//physics
let velocityX = -2; //pipes moving left
let velocityY = 0; //bird jump speed
let gravity = 0.4;

let gameOver = false;
let score = 0;

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d") 

    //draw flappy bird && placeholder for variable
    //context.fillstyle = "green";
    //context.fillRect(bird.x, bird.y,bird.width,bird.height);

    //load img
    birdImg = new Image();
    birdImg = "./flappybird.png";
    birdImg.onload = function() {
    context.drawImage(birdImg, bird.x.bird.y, bird.width, bird.height);
    }

    topPipeImg = new Image();
    topPipeImg.src = "./toppipe.png";

    bottomPipeImg = new Image()
    bottomPipeImg.src = "./bottompipe.png";


    requestAnimationFrame(update);
    setInterval(placePipes, 1500); //about 1.5 secs
    document.addEventListener("keydown", moveBird);
}
    function update () {
        requestAnimationFrame(update)
        context.clearRect(0,0,board.width,board.height);

        //bird
        velocityY += gravity;
        bird.y += velocityY;
        context.drawImage(birdImg,bird.x,bird.y,board.width,board.height);
        
        //pipes
        for (let  i = 0; i < pipearray.length; i++) {
            let pipe = pipeArray[i];
            pipe.x += velocityX;
            context.drawimage(pipe.img,pipe.x,pipe.y,pipe.width,pipe.height);
            
            if(!pipe.passed && bird.x > pipe.x + pipe.width){
                score += 0.5; // 1 point for each 2 pipes crossed
                pipe.passed = true;
            }
        }

    }

    function placePipes() {
        
        let randomPipeY = PipeY - pipeHeight/4 - Math.random()*(pipeHeight/2);
        let OpeningSpace = board.height/4;

        let topPipe = {
            img :  topPipeImg,
            x :pipeX,
            y: pipeArray,
            width : pipeWidth,
            height : pipeHeight,
            passed :false
        }
        
        pipeArray.push(topPipe);

        let bottomPipe = {
            img : bottomPipeImg,
            x : pipeX,
            y : randomPipeY + pipeHeight + openingSpace,
            width : pipeWidth,
            height : pipeHeight,
            passed: false
        }

            pipeArray.push(bottomPipe);
    

    }

    function moveBird(e) {
        if (e.code == "Space" || e.code == "KeyX") {
            //jump
            velocityY = -6



        }

    }