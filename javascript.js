var curr_yy = 0;
var text = document.getElementsByClassName("text");
var thing = 0;
    
var w = window.innerWidth;
var h = window.innerHeight;


function rotateYY() {
    
    var w = window.innerWidth;
    var h = window.innerHeight;

    curr_yy = (curr_yy + 1) % 2;
    let element = document.getElementById("rdmiseButton");

    if (curr_yy == 1) {
        element.classList.remove("yangTop");
        element.classList.add("yinTop");
    }
    else {
        element.classList.remove("yinTop");
        element.classList.add("yangTop");
    }

}


function spawnBen() {
    
    let ben = Math.floor(Math.random() * 10);

    if (ben == 9)
    {
        let img = document.createElement("img");
        img.src = "images/benShapiro.jpg";
        img.width = '90';
        img.height = '51';
        img.style.position = 'relative';
        img.style.left = Math.floor(Math.random() * w + 1) + "px";
        img.style.top = Math.floor(Math.random() * h + 1) + "px";
        img.style.zIndex = '0';
        img.classList.add('text');
        document.body.appendChild(img);
    }

    
}


function rdmisePos() {
    
    if (curr_yy == 1)
    {
        while (curr_yy == 1)
        {
            for (let i = 0; i < text.length; i++) {
                // text[i].classList.add("new");
                text[i].style.position = "fixed";
                text[i].style.left = Math.floor(Math.random() * w + 1) + 'px';
                text[i].style.top = Math.floor(Math.random() * h + 1) + 'px';
            }
            sleep(3000);
        }
    
    }
    else
    {
        for (let i = 0; i < text.length; i++) {
            // text[i].classList.add("new");
            text[i].style.removeProperty("position");
            text[i].style.removeProperty("left");
            text[i].style.removeProperty("top");

        }
    }

}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
