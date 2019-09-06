(function () {
  var date = new Date;
  var avatarNode = document.getElementById('avatar');
  var avatarImgNode = document.getElementById('avatar-img');
  var switchNode = document.getElementById('nightmode-switch');
  var triggerNode = document.getElementById('switch-trigger');
  var switchClicked = false;
  var body = document.body;

  function removeBounce() {
    triggerNode.classList.remove('active');
  }

  function toggleNightmode() {
    body.classList.toggle('nightmode');
  }

  function enableNightmode() {
    body.classList.add('nightmode');
  };

  function disableNightmode() {
    body.classList.remove('nightmode');
  };

  function toggleSwitch() {
    avatarNode.classList.toggle('active');
  }

  switchNode.addEventListener('click', function() {
    console.log('User clicked Nightmode switch...');

    switchNode.classList.toggle('active');
    switchClicked = true;
    toggleNightmode();
  });

  avatarImgNode.addEventListener('click', function() {
    removeBounce();
    toggleSwitch();
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
    }, 60000);
  }

  checkForNightmode();
}());

