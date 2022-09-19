let count = 1

document.getElementById("radio1").checked = true;
setInterval(function(){
    nextImage();
}, 2000)

function nextImage(){
    count++;
    if(count>4){
        count=1;
    }
    document.getElementById("radio"+count).checked = true
}

var video1 = document.querySelector('video1');

setTimeout(function(){
    video1.play();
},2000);
