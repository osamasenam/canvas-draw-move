var can = document.getElementById('canv');
var ctx = can.getContext('2d');

var canTop = 0;
var canLeft = 0;
// console.log(canTop);
// console.log(canLeft);

var canBig = document.getElementById('canvBig');
var ctxBig = canBig.getContext('2d');

// console.log(ctx);

function drawBody(x1,y1,x2,y2) {
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}

ctx.strokeStyle = 'black';
ctx.lineWidth = 5;

var bodyX = [300,300,300,200,300,400,300,200,300,400,300];
var bodyY = [250,450,450,550,450,550,350,250,350,250,150];

// first time human draw appear
//head
ctx.arc(bodyX[10],bodyY[10],100,0,2*Math.PI);
ctx.stroke();
//body
drawBody(bodyX[0],bodyY[0],bodyX[1],bodyY[1]);
//legs
drawBody(bodyX[2],bodyY[2],bodyX[3],bodyY[3]);
drawBody(bodyX[4],bodyY[4],bodyX[5],bodyY[5]);
//arms
drawBody(bodyX[6],bodyY[6],bodyX[7],bodyY[7]);
drawBody(bodyX[8],bodyY[8],bodyX[9],bodyY[9]);


// ctx.clearRect(0, 0, canBig.width, canBig.height);
ctxBig.drawImage(can,0,0);

document.addEventListener("keydown", function(evt) {
  
    //update canvas frame position to move the whole canvas element
    if(evt.keyCode === 40) {
        canTop += 1;
        // can.style.top = canTop + 'px';
    }
    else if(evt.keyCode === 38) {
        canTop -= 1;
        // can.style.top = canTop + 'px';
    }
    else if(evt.keyCode === 39) {
        canLeft += 1;
        // can.style.left = canLeft + 'px';
    }
    else if(evt.keyCode === 37) {
        canLeft -= 1;
        // can.style.left = canLeft + 'px';
    }

    //clear the screen
    ctxBig.clearRect(0, 0, canBig.width, canBig.height);
    //  draw again 
    ctxBig.drawImage(can,canLeft,canTop);
    
})