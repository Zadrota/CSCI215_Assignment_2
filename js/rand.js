window.onload = randpic;

var lst = new Array('img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg');

function randpic() {
    var randint = Math.floor(Math.random() * lst.length);
//    console.log(randint);
    document.getElementById("pic").src = lst[randint];
}