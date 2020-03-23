let sign = 'x';
let display = document.getElementById('player');

function printx(number)
{
    let isko = document.getElementById("r"+number);
    console.log(isko);
    
    if(isko.innerHTML == ''){
        isko.innerHTML = sign;
        checksign();
        
        winner();
    }else{
        alert("not");
    }

    
}
function checksign(){
    if(sign == 'x')sign = "0";
    else sign = "x";
}

// get complete box with id
function getbox(no)
{
    return document.getElementById("r"+no).innerHTML;

}
function checkmove(a,b,c,m)
{
    if(getbox(a)==m && getbox(b)==m && getbox(c)==m)
        return true;
    else  
        return false;
}
function winner() 
{
    if(checkmove(1,2,3,"x") || checkmove(4,5,6,"x") || checkmove(7,8,9,"x") 
    || checkmove(1, 4, 7, "x") || checkmove(2, 5, 8, "x") || checkmove(3, 6, 9, "x")
    ||checkmove(1, 5, 9, "x") || checkmove(3, 5, 7, "x") || checkmove(7, 8, 9, "x")){
        display.innerHTML = "<center>"  + " X win" + "<center>";
        for(let i = 1; i < 9; i++){
            document.getElementById('r'+i).innerHTML = "";
        }
        //throw "game over";
    }
    if (checkmove(1, 2, 3, "0") || checkmove(4, 5, 6, "0") || checkmove(7, 8, 9, "0")
        || checkmove(1, 4, 7, "0") || checkmove(2, 5, 8, "0") || checkmove(3, 6, 9, "0")
        || checkmove(1, 5, 9, "0") || checkmove(3, 5, 7, "0") || checkmove(7, 8, 9, "0")) {
        display.innerHTML = "<center>" + " 0 win" + "<center>";
        for (let i = 1; i < 9; i++) {
            document.getElementById('r' + i).innerHTML = "";
        }
        //throw "game over";
    }
    else{
        if (getbox(1) != "" && getbox(2) != "" && getbox(3) != "" && getbox(4) != "" && getbox(5) != "" && getbox(6) != "" && getbox(7) != "" && getbox(8) != "" && getbox(9) != ""){
            display.innerHTML = "<center>" + " game tie" + "<center>";
        }
    }
}