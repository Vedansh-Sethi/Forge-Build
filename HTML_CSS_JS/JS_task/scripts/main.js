const theme_btn = document.getElementById("theme_button");
const form_btn = document.getElementById("form_button");
const text_btn = document.getElementById("text_changer");
const head = document.querySelector("head");
const body = document.querySelector("body");
const heading = document.querySelector("h1");
const form_container = document.getElementById("form_container");
const form = document.querySelector("form");

theme = "bright";
counter = 0;

theme_btn.addEventListener("click", () => {
  if (theme === "bright") {
    theme = "dark";
    document.body.style.setProperty("--background-color", "#121212");
    document.body.style.setProperty("--header-background-color", "#121212");
    document.body.style.setProperty("--heading-color", "#F0F0F0");
    document.body.style.setProperty(
      "--button-background-color",
      "rgb(243, 191, 97)"
    );
    document.body.style.setProperty(
      "--button-border-color",
      "rgb(184, 73, 73)"
    );
    document.body.style.setProperty("--form-background-color", "#272727ff");
    document.body.style.setProperty("--form-font-color", "#F0F0F0");
  } else {
    theme = "bright";
    document.body.style.setProperty("--background-color", "white");
    document.body.style.setProperty("--header-background-color", "white");
    document.body.style.setProperty("--heading-color", "black");
    document.body.style.setProperty("--button-background-color", "wheat");
    document.body.style.setProperty("--button-border-color", "brown");
    document.body.style.setProperty("--form-background-color", "white");
    document.body.style.setProperty("--form-font-color", "black");
  }
});

form_btn.addEventListener("click", () => {
  if (
    form_container.style.display === "none" ||
    form_container.style.display === ""
  ) {
    form_container.style.display = "block";
  } else {
    form_container.style.display = "none";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.style.display = "none";
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const enrol = document.getElementById("enrol").value;
  document.getElementById("output").textContent = 
  `Your Name is ${name} \nYour Age is ${age} \nYour Enrollment No. is ${enrol}`;
  document.getElementById("output").style.display = "block";
  document.getElementById("output").style.minHeight = "300px";
  form_btn.textContent = "Show Submission";
});

text_btn.addEventListener("click", () => {
    text_btn.textContent = `counter: ${counter}`;
    counter++;
    if(counter > 20) {
        counter = 0;
    }
})
