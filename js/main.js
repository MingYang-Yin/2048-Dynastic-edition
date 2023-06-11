var board= new Array();
var score=0;
var hasConflicted =new Array();

var startx=0;
var starty=0;
var endx=0;
var endy=0;

$(document).ready(function () {

   prepareForMobile();
    newgame();
});
function prepareForMobile(){
    if(documentWidth>500){
        gridContainerWidth=500;
        cellSapce=20;
        cellSideLength=100;

    }

    $('#grid-container').css('width',gridContainerWidth-2*cellSapce);
    $('#grid-container').css('height',gridContainerWidth-2*cellSapce);
    $('#grid-container').css('padding',cellSapce);
    $('#grid-container').css('border-radius',0.02*gridContainerWidth);

    $('.grid-cell').css('width',cellSideLength);
    $('.grid-cell').css('height',cellSideLength);
    $('.grid-cell').css('border-radius',0.02*cellSideLength);
}

function newgame(){
    init();
    generateOneNumber();
    generateOneNumber();
}

function init(){

    for(var i= 0 ;i< 4; i++) {
        for (var j = 0; j < 4; j++) {
            var gridCell = $("#grid-cell-"+ i +"-" + j);
            gridCell.css('top', getPosTop(i, j));
            gridCell.css('left', getPosLeft(i, j));
        }

    }


    for(var i= 0 ;i<4;i++) {
        board[i]=new Array();
        hasConflicted[i]=new Array();
        for (var j = 0; j < 4; j++) {
            board[i][j]=0;
            hasConflicted[i][j]=false;
        }
    }
    updateBoardView();

    score=0;
}
