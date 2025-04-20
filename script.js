// Typing animation for name
const nameText = "Hi, I'm Riban Kurbah";
let i = 0;
function typeWriter() {
  if (i < nameText.length) {
    document.getElementById("typed-name").innerHTML += nameText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Show current date/time in footer
function updateDateTime() {
  const now = new Date();
  document.getElementById("datetime").innerText = now.toLocaleString();
}
setInterval(updateDateTime, 1000);

// Dark/Light mode toggle
const toggleBtn = document.getElementById("toggle-theme");
let isDark = false;
toggleBtn.addEventListener("click", () => {
  isDark = !isDark;
  document.body.style.setProperty("--bg-color", isDark ? "#222" : "#f0f0f0");
  document.body.style.setProperty("--text-color", isDark ? "#fff" : "#333");
});

// Load projects dynamically
const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with HTML, CSS, and JavaScript.",
    link: "#"
  },
  {
    title: "To-Do App",
    description: "A simple to-do list app using local storage.",
    link: "#"
  }
];
const container = document.getElementById("project-container");
projects.forEach(proj => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${proj.title}</h3>
    <p>${proj.description}</p>
    <a href="${proj.link}" target="_blank">View Project</a>
  `;
  container.appendChild(card);
});

// Contact Form Validation
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("form-msg");

  if (!name || !email || !message) {
    msg.style.color = "red";
    msg.innerText = "Please fill in all fields.";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    msg.style.color = "red";
    msg.innerText = "Please enter a valid email.";
  } else {
    msg.style.color = "green";
    msg.innerText = "Message sent successfully!";
    form.reset();
  }
});
