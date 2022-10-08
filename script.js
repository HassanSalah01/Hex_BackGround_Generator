
const hexColor = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

function rand(){
    return Math.floor(Math.random()*16);
}
function color(hexArr){
    let count = 0 ;
    let color = "#";
    while(count <=5){
        color+=hexArr[rand()];
        console.log()
        count++;
    }
    return color ;
}
function addStyle(){
    let fun = color(hexColor);
    document.body.style.backgroundColor = fun;
    document.getElementById("para").innerHTML = fun;
}

