let chess = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
];
function draw(){
    let out = '';
    let m =0;
    for(let i=0; i<chess.length; i++){ //цикл рисует горизонтальные строки
        let arr = chess[i];
        for (let k = 0; k < arr.length; k++) {
            out +='<div class ="chess-block"></div>';
        }
    }
    document.querySelector('#field').innerHTML = out;
}

draw();