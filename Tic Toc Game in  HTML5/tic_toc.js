let sign = "x";
let display = document.getElementById('player');
function print(number)
{
    let printnumber = document.getElementById("r"+number);
    //console.log(printnumber);

    if(printnumber.innerHTML == ''){
        printnumber.innerHTML = sign;
        CheckSign();
        Winner();

    }else{
        alert("not");
    }
}

function CheckSign(){
    if(sign == 'x')
        sign = "0";
    else
        sign = "x";
}

function getBox(no){
    return document.getElementById("r"+no).innerHTML;
}
function CheckMove(a,b,c,m){
    if(getBox(a)==m && getBox(b)==m && getBox(c)==m)
    return true;
    else
    return false;
}

function Winner(){
    if (CheckMove(1, 2, 3, "x") || CheckMove(4, 5, 6, "x") || CheckMove(7, 8, 9, "x")
        || CheckMove(1, 4, 7, "x") || CheckMove(2, 5, 8, "x") || CheckMove(3, 6, 9, "x")
        || CheckMove(1, 5, 9, "x") || CheckMove(3, 5, 7, "x") || CheckMove(7, 8, 9, "x")) {
            display.innerHTML = "<center>" + "x win" + "</center>";
            for(let i = 1; i < 9; i++){
                document.getElementById('r'+i).innerHTML = "";
            }
        }

    if (CheckMove(1, 2, 3, "0") || CheckMove(4, 5, 6, "0") || CheckMove(7, 8, 9, "0")
        || CheckMove(1, 4, 7, "0") || CheckMove(2, 5, 8, "0") || CheckMove(3, 6, 9, "0")
        || CheckMove(1, 5, 9, "0") || CheckMove(3, 5, 7, "0") || CheckMove(7, 8, 9, "0")) {
        display.innerHTML = "<center>" + " 0 win" + "<center>";
        for (let i = 1; i < 9; i++) {
            document.getElementById('r' + i).innerHTML = "";
        }
        //throw "game over";
    }

    else{
        if (getBox(1) != "" && getBox(2) != "" && getBox(3) != "" && getBox(4) != "" && getBox(5) != "" && getBox(6) != "" && getBox(7) != "" && getBox(8) != "" && getBox(9) != "") {
            display.innerHTML = "<center>" + " game tie" + "<center>";
            for (let i = 1; i < 9; i++) {
                document.getElementById('r' + i).innerHTML = "";
            }
        }
    }
}