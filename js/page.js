const hamburger = document.getElementById("hamburger");
const navItems = document.querySelector(".nav-items");
const navTitle = document.querySelector(".nav-title");
const name = document.getElementById("name");
const email = document.getElementById("email");
const form = document.querySelector("form");
const time = document.getElementById("time");
const errorMessage = document.getElementById("error-message");

// Open nav bar
hamburger.addEventListener("click", () => {
  navItems.classList.toggle("active");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const validEmail = () => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const value = email.value;
    const final = regex.test(value);

    if (final == false) {
      errorMessage.textContent = `Please enter valid email address`;
    }
  };

  const validName = () => {
    if (name.value == "") {
      errorMessage.textContent = `Please enter valid name`;
    }
  };

  validEmail();
  validName();
});
