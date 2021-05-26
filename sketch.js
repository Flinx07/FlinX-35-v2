var ball;
var FLinX;
var database;
function setup(){
    createCanvas(500,500);
    database=firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballyt=database.ref("ball/position")
    ballyt.on("value",readPosition,showerror)
}

function draw(){
    background("white");
    if (FLinX!==undefined){

    
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
}
function changePosition(x,y){
database.ref("ball/position").set(
    {
        'x':FLinX.x+x,
        'y':FLinX.y+y
    }
)

}
function readPosition(data){
    FLinX=data.val()
ball.x=FLinX.x;
ball.y=FLinX.y;


}
function showerror(){
console.log("im FlinX")
}
