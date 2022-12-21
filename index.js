let target = document.getElementById("counter");

setTimeout(() => {
  target.innerHTML = "9";
  setTimeout(() => {
    target.innerHTML = "8";
    setTimeout(() => {
      target.innerHTML = "7";
      setTimeout(() => {
        target.innerHTML = "6";
        setTimeout(() => {
          target.innerHTML = "5";
          setTimeout(() => {
            target.innerHTML = "4";
            setTimeout(() => {
              target.innerHTML = "3";
              setTimeout(() => {
                target.innerHTML = "2";
                setTimeout(() => {
                  target.innerHTML = "1";
                  setTimeout(() => {
                    target.innerHTML = "Happy Independence Day!";
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
