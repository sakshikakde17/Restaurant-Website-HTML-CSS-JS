
      var indexValue = 0;
      function slideShow(){
        setTimeout(slideShow, 2500);
        var x;
        const img = document.querySelectorAll("img");
        for(x = 0; x < 6; x++){
          img[x].style.display = "none";
        }
        indexValue++;
        if(indexValue > 6){indexValue = 1}
        img[indexValue -1].style.display = "block";
      }
      slideShow();
    