// Home page ပြန်သွား/smoothly
const backToTop = document.getElementById("backToTop");
window.onscroll = () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
};
backToTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// အလင်း/အေမှာင်
const toggleButton = document.getElementById("toggleMode");

toggleButton.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  toggleButton.textContent = isDark ? "Light Mode" : "Dark Mode";
});

// ဆက်သွယ်
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if (!name.value || !email.value || !message.value) {
    alert("Please fill in all fields.");
  } else {
    alert("Message sent!");
    alert("Be patient for further email!");
    this.reset();
  }
});

// AOS
AOS.init();

// Dynamic progress bar
document.querySelectorAll('.update-skills').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();

    const html = button.getAttribute('data-skill-html');
    const css = button.getAttribute('data-skill-css');
    const js = button.getAttribute('data-skill-js');

    // Update progress bars
    const htmlBar = document.getElementById('htmlBar');
    const cssBar = document.getElementById('cssBar');
    const jsBar = document.getElementById('jsBar');

    htmlBar.style.width = html + '%';
    htmlBar.textContent = 'HTML';

    cssBar.style.width = css + '%';
    cssBar.textContent = 'CSS';

    jsBar.style.width = js + '%';
    jsBar.textContent = 'JavaScript';
  });
});
document.querySelectorAll('.update-skills').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault(); // Stop the default jump behavior

    // Scroll smoothly to the skills section
    document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });

    // Get skill data from button
    const html = this.dataset.skillHtml;
    const css = this.dataset.skillCss;
    const js = this.dataset.skillJs;

    // Update progress bars
    document.getElementById('htmlBar').style.width = html + '%';
    document.getElementById('cssBar').style.width = css + '%';
    document.getElementById('jsBar').style.width = js + '%';

    // Optionally update the inner text
    document.getElementById('htmlBar').textContent = 'HTML';
    document.getElementById('cssBar').textContent = 'CSS';
    document.getElementById('jsBar').textContent = 'JavaScript';
  });
});

function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.project-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Show the selected section
  const selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add('active');
}