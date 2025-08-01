const btna=document.querySelector(".btn");
btna.addEventListener("mouseover",(event)=>{
    const x=(event.pageX-btna.offsetLeft);
    const y=(event.pageY-btna.offsetTop);

    btna.style.setProperty("--xpos",x +"px");
    btna.style.setProperty("--ypos",y +"px");
});