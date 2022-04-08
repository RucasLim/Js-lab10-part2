
let leftPos = 0;
let topPos = 800;
function runPuppy(){
    
    let puppy = document.getElementsByTagName("img")[0];
    
    puppy. style.visibility = "visible"
    puppy. style. left = leftPos + "px"
    puppy. style. top = topPos + "px"
    leftPos +=5;
}


