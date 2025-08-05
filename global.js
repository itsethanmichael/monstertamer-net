function widthHeight() { document.body.style.width = screen.innerWidth; document.body.style.height = screen.innerHeight; window.addEventListener("resize", widthHeight);}
window.addEventListener("resize", widthHeight);

function goTo(x) {

  switch (x) {

    case 0:

      window.location.href = "https://www.youtube.com/@MonsterTamer2D/?sub_confirmation=1";
      break;
      
  }

}
