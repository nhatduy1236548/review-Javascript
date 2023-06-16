window.onload = function () {
    let inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", function () {
        validateInput(inputs[i]);
      });
    }
    
    document.getElementById("myForm").addEventListener("submit", function (event) {
      event.preventDefault();
      for (let i = 0; i < inputs.length; i++) {
        validateInput(inputs[i]);
      }
    });
  };

  function validateForm() {
    let inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
      validateInput(inputs[i]);
    }
  }
  const button = document.getElementById('submit');
  function validateInput(input) {  
      if (input.id === 'email') {
        validateEmail(input);
      }
      if (input.id === 'pwd') {
        validatePassword(input);
      }
      if (input.id === 'tel') {
        validateTel(input);
      }
      if (input.id === 'fname') {
        validateFname(input);
      }
      if (input.id === 'lname') {
        validateLname(input);
      }
      if (input.id === 'bio') {
        console.log('bio');
        validateBio(input);
      }
  }
  
  function validateEmail(input) {
    const validatEmail = document.getElementById('validateEmail');
    let email = input.value;
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regex.test(email)) {
      validatEmail.textContent = "Email must be a valid address, e.g.example@example.com";
      invalid(input);
    } else {
        valid(input);
        validatEmail.textContent = "";
    }
  }
  
  function validatePassword(input) {
    const validatPassword = document.getElementById('validatePassword');
    let password = input.value;
    let regex = /^[\w\-\s]+.{5,20}$/;
    if (!regex.test(password)) {
        validatPassword.textContent="Password must be alphanumeric{@,_and-are also allowed} and between 6-20 characters";
        invalid(input);
    } else {
        valid(input);
        validatPassword.textContent="";
    }
  }

  function validateTel(input) {
    const validatTel = document.getElementById('validateTelephone');
    let tel = input.value;
    let regex = /^\d{3}-\d{3}-\d{4}|\d{11}$/;
    if (!regex.test(tel)) {
        validatTel.textContent = "A valid Telephone number {11 digits and 333-333-3334}";
        invalid(input);
    } else {
        valid(input);
        validatTel.textContent = "";
    }
  }

  function validateFname(input) {
    const validatFname = document.getElementById('validateFistName');
    let fname = input.value;
    let regex = /^([a-zA-Z0-9_-]){3,16}$/;
    console.log(!regex.test(fname));
    if (!regex.test(fname)) {
        validatFname.textContent = "First name must be alphanumeric and cotain 3 - 16 characters";
        invalid(input);
    } else {
        valid(input);
        validatFname.textContent = "";
    }
  }

  function validateLname(input) {
    const validatLname = document.getElementById('validateLastName');
    let lname = input.value;
    let regex = /^([a-zA-Z0-9_-]){3,16}$/;
    if (!regex.test(lname)) {
        validatLname.textContent = "Last name must be alphanumeric and cotain 3 - 16 characters";
        invalid(input);
    } else {
        valid(input);
        validatLname.textContent = "";
    }
  }

  function validateBio(input) {
    const validatBio = document.getElementById('validateBio');
    let bio = input.value;
    let regex = /^[a-z\-]+.{8,50}$/;
    if (!regex.test(bio)) {
        validatBio.textContent = "Bio must contain only lowercase letters, underscores, hyphens and be 8-50 characters";
        invalid(input);
    } else {
        valid(input);
        validatBio.textContent = "";
    }
  }

  function valid(input) {
    button.disabled = false;
    input.style.border = "2px solid green";
  }

  function invalid(input) {
    button.disabled = true;
    input.style.border = "2px solid red";
  }
  