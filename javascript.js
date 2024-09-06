var curr_yy = 0;

function rotateYY() {
    var w = document.documentElement.clientHeight;
    var h = document.documentElement.clientWidth;

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


    

    // for (let i = 0; i < og_pos.length; i++) {

    // }

    let ben = Math.floor(Math.random() * 10);

    if (ben == 9)
    {
        let img = document.createElement("img");
        img.src = "images/benShapiro.jpg";
        img.width = '90px';
        img.height = '51px';
        img.style.position = 'absolute';
        img.style.left = Math.floor(Math.random() * w + 1) + 'px';
        img.style.top = Math.floor(Math.random() * h + 1) + 'px';
        img.style.zIndex = '0';
        document.body.appendChild(img);
    }


    


}

