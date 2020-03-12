    var link = document.querySelector(".button-write-us");
	var popup = document.querySelector(".modal");
	var close = document.querySelector(".modal-close");
	
    
    var form = popup.querySelector(".write-us-form");
    var name = form.querySelector("[name=username]");
    var email = form.querySelector("[name=email]");

    var isStorageSupport = true;
    var storage = "";
    
   

    try {
      storage = localStorage.getItem("login");
    } catch (err) {
      isStorageSupport = false;
    }
    
	link.addEventListener("click", function(evt) {
		evt.preventDefault();
        popup.classList.add("modal-show");
        if (storage) {
            login.value = storage;
          }
    });
    
	close.addEventListener("click", function(evt) {
		evt.preventDefault();
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
    });

    form.addEventListener("submit", function(evt) {
        if (!name.value || !email.value) {
        
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
        } else {
            if (isStorageSupport) {
            localStorage.setItem("name", name.value);
        }
        }
    });
    
	window.addEventListener("keydown", function(evt) {
		if (evt.keyCode === 27) {
			if(popup.classList.contains("modal-show")) {
				evt.preventDefault();
				popup.classList.remove("modal-show");
			}
		}
    });

   


    
    