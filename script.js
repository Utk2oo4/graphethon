const text = "Remove ransomware and protect your Windows, Android, Mac, or iOS device with Avast Free Antivirus — the award-winning, 100% free anti-ransomware tool. Stop dangerous ransomware and other threats before they can harm your files.";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("intro-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

window.onload = typeEffect;



// When scan button is clicked
document.getElementById("scan-btn").addEventListener("click", function () {
    window.location.href = "scan.html";
});


document.getElementById('file-upload').addEventListener('change', function(event) {
  const fileNameElement = document.getElementById('selected-file-name');
  if (this.files && this.files.length > 0) {
    fileNameElement.textContent = this.files[0].name;
    fileNameElement.classList.add('glow');
  } else {
    fileNameElement.textContent = 'No file selected';
    fileNameElement.classList.remove('glow');
  }
});

function setActiveTab(tab) {
  // Update active tab
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(t => t.classList.remove('active'));
  event.currentTarget.classList.add('active');
  
  // Show active content section
  const contentSections = document.querySelectorAll('.content-section');
  contentSections.forEach(section => section.classList.remove('active'));
  document.getElementById(`${tab}-section`).classList.add('active');
  
  // Update footer text for specific tabs
  const footer = document.querySelector('.footer');
  if (tab === 'file') {
    footer.innerHTML = 'By submitting data above, you are agreeing to our <a href="#">Terms of Service</a> and <a href="#">Privacy Notice</a>, and to the <span class="glow">sharing of your Sample submission with the security community</span>. Please do not submit any personal information; we are not responsible for the contents of your submission. <a href="#">Learn more</a>.';
  } else if (tab === 'url') {
    footer.innerHTML = 'By submitting data above, you are agreeing to our <a href="#">Terms of Service</a> and <a href="#">Privacy Notice</a>, and to the <span class="glow">sharing of your URL submission with the security community</span>. Please do not submit any personal information; we are not responsible for the contents of your submission. <a href="#">Learn more</a>.';
  } else {
    footer.innerHTML = 'By submitting data above, you are agreeing to our <a href="#">Terms of Service</a> and <a href="#">Privacy Notice</a>. Please do not submit any personal information; we are not responsible for the contents of your submission. <a href="#">Learn more</a>.';
  }
}