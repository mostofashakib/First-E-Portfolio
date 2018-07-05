var counter = 0;
function changeBG(){
    var imgs = [
        "url(https://i.imgur.com/iaGC4H8.jpg)",
        "url(https://i.imgur.com/C3FCRff.jpg)",
        "url(https://i.imgur.com/PdZnlcE.jpg)",
        "url(https://i.imgur.com/oD48vpn.jpg)",
        "url(https://i.imgur.com/2K63CmN.jpg)",
        "url(https://i.imgur.com/Ym9aw1s.jpg)",
        

      ]
    
    if(counter === imgs.length) counter = 0;
    $("body").css("background-image", imgs[counter]);

    counter++;
}
  
  setInterval(changeBG, 2000);
