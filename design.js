function changeImage(){
    var pic= document.getElementById("bulb");
    var body= document.getElementById("bulb");

    if(pic.src.match("on")){
        console.log("on");
        pic.src="off.jpeg";
    }
    else{
        console.log("Off");
        pic.src="on.jpeg";


    }
}