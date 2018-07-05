var counter = 0;
function changeBG(){
    var imgs = [
        "url(https://i.imgur.com/J0NMQdO.jpg)",
        "url(https://i.imgur.com/YjIsel6.jpg)",
        "url(https://i.imgur.com/K4CUN8H.jpg)"
      ]
    
    if(counter === imgs.length) counter = 0;
    $("body").css("background-image", imgs[counter]);

    counter++;
}
  
  setInterval(changeBG, 2000);
