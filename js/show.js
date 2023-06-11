function showNumber(i,j,randNumber){
    var dynastyList = {
        2: '夏',
        4: '商',
        8: '周',
        16: '秦',
        32: '汉',
        64: '晋',
        128: '隋',
        256: '唐',
        512: '宋',
        1024: '元',
        2048: '明',
    }
    var numberCell=$("#number-cell-"+ i +"-" + j);
    numberCell.css('background-color',getNumberBackgroundColor(randNumber));
    numberCell.css('color',getNumberColor(randNumber));
    numberCell.text(dynastyList[randNumber]);

    numberCell.animate({
        width:cellSideLength,
        height:cellSideLength,
        top:getPosTop(i,j),
        left:getPosLeft(i,j)
    },50);

}
function showMoveAnimation(fromx,fromy,tox,toy){
    var numberCell=$("#number-cell-"+fromx+"-"+fromy);
    numberCell.animate({
        top:getPosTop(tox,toy),
        left:getPosLeft(tox,toy)
    },200);

}
function updateScore(score){
    $("#score").text(score);

}

