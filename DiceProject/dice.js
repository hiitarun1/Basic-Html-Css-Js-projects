var random1=Math.floor((Math.random()*6)+1);
var random2=Math.floor((Math.random()*6)+1);
var concat1="dice"+random1+".png";
var concat2="dice"+random2+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",concat1);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",concat2);
if(random1>random2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}else if(random1<random2){
    document.querySelector("h1").innerHTML="Player 2 wins";
}else{
    document.querySelector("h1").innerHTML="Draw";
}