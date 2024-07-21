let display=document.getElementById("display")
let buttons=document.getElementsByTagName("button")
for(i=0;i<buttons.length;i++){
    buttons[i].onclick=function(){
    let input=this.innerText
    fuck(input)
    }
}
function fuck(input){
    if(display.innerText=="0")
    {
        if(input!="Clear"&&input!="Del"&&input!="="){
            display.innerText=""
            display.innerText=input
        }
    }
    else{
        if(input!="Clear"&&input!="Del"&&input!="="){
            display.innerText+=input
        }
        if(input=="Del"){
            display.innerText=display.innerText.substring(0,display.innerText.length-1)
        }
        if(input=="="){

            display.innerText=eval(display.innerText)
        }
        if(input=="Clear")
        {
            display.innerText=""
        }
    }
}


