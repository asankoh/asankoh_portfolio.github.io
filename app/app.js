// JavaScript required for hamburger menu.
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const links = document.querySelector('.links');

openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)

links.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', close);
});

function show(){
  links.style.display = 'flex';
  links.style.top = '0';
  
}

function close(){
  links.style.top = '-100%'
}

const iconsAndLabels = [
  { icon: 'devicon-html5-plain', label: 'HTML5' },
  { icon: 'devicon-css3-plain', label: 'CSS3' },
  { icon: 'devicon-javascript-plain', label: 'JavaScript' },
  { icon: 'devicon-php-plain', label: 'PHP' },
  { icon: 'devicon-vuejs-plain', label: 'Vue' },
  { icon: 'devicon-jquery-plain-wordmark', label: 'jQuery' },
  { icon: 'devicon-mysql-plain-wordmark', label: 'mySQL' },
  { icon: 'devicon-sass-original', label: 'Sass' },
  // Add more entries as needed
];


function iconsAndLabels_loop(){
  const flexContainer = $('#flexContainer');
  
  function createIconElement(icon, label) {
    return $(`
    <div class="icon-wrapper">
    <div class="icon"><i class="${icon}"></i></div>
    <div class="icon-label">${label}</div>
    </div>
    `);
  }
  
  iconsAndLabels.forEach(({ icon, label }) => {
    const iconElement = createIconElement(icon, label);
    flexContainer.append(iconElement);
  });
}



/* `emailjs.init("7Sq14UgLg4xUzGRL-")` initializes the EmailJS library with the provided user ID. This
user ID is used to authenticate and authorize the client to send emails using the EmailJS service. */

emailjs.init("7Sq14UgLg4xUzGRL-")

$(document).ready(function() {
  $('.submitContact').click(function() {
    if (validateInputs()) {
      sendEmail();
    } else {
      Swal.fire(
        'Input Error',
        'Please fill in all the required fields.',
        'error'
      );
    }
  });

  function validateInputs() {
    const name = $(".nameInput").val();
    const email = $(".emailInput").val();
    const subject = $(".subjectInput").val();
    const message = $(".messageBox").val();

    // Check if any of the input fields is empty
    if (name === "" || email === "" || subject === "" || message === "") {
      return false;
    }
    return true;
  }

  function sendEmail() {
    const name = $(".nameInput").val();
    const email = $(".emailInput").val();
    const subject = $(".subjectInput").val();
    const message = $(".messageBox").val();

    emailjs.send("service_lpcn1ie", "template_8efq0pg", {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message
    }).then(function() {
      Swal.fire(
        'Thanks!',
        'You successfully sent an email!',
        'success'
      );
      $(".nameInput").val("");
      $(".emailInput").val("");
      $(".subjectInput").val("");
      $(".messageBox").val("");
    }, function(error) {
      Swal.fire(
        'Email Error',
        'Failure to send email. Please try again later.',
        'error'
      );
    });
  }
});

 $(document).ready(function () {
  iconsAndLabels_loop();
  sendEmail();
  show()
  close()
});