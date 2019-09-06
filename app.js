(function () {
  var date = new Date;
  var avatarNode = document.getElementById('avatar');
  var avatarImgNode = document.getElementById('avatar-img');
  var switchNode = document.getElementById('nightmode-switch');
  var switchClicked = false;
  var body = document.body;

  function toggleNightmode() {
    body.classList.toggle('nightmode');
  }

  function enableNightmode() { body.classList.add('nightmode') };
  function disableNightmode() { body.classList.remove('nightmode') };

  switchNode.addEventListener('click', function() {
    console.log('User clicked Nightmode switch...');
    switchClicked = true;
    toggleNightmode();
    switchNode.classList.toggle('active');
  });

  avatarImgNode.addEventListener('click', function() {
    avatarNode.classList.toggle('active');
  });

  function checkForNightmode() {
    console.log('Checking time..');
    if (switchClicked) return;

    var hour = date.getHours();
    if (hour <= 6) {
      enableNightmode();
    } else if (hour >= 18) {
      enableNightmode();
    } else {
      console.log('Nightmode not needed..');
      disableNightmode();
    }

    setTimer();
  }

  function setTimer() {
    setTimeout(function(){
      checkForNightmode();
    }, 1000000);
  }

  checkForNightmode();
}());

