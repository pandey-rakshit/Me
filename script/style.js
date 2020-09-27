function reRun() {
    document.querySelector('.fa-dragon').classList.remove('spin-animation')
    document.querySelector('.fa-dragon').classList.remove('move-animation')
    setTimeout(function() {
      document.querySelector('.fa-dragon').classList.add('spin-animation')
    },300)
  }
  
  function move() {
    document.querySelector('.fa-dragon').classList.remove('spin-animation')
    document.querySelector('.fa-dragon').classList.remove('move-animation')
    setTimeout(function() {
      document.querySelector('.fa-dragon').classList.add('move-animation')
    },300)
  }
  
reRun();
move();