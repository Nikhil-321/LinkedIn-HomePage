var i=0;

function read(){
    if(!i){
        document.querySelector("#more").style.
        display = "inline";
        document.querySelector("#seeMoreButton").innerHTML = "See Less";
        i=1;
    }else{
        document.querySelector("#more").style.
        display = "none";
        document.querySelector("#seeMoreButton").innerHTML = "See More";
        
        i=0;
    }
}