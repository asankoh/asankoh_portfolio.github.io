const iconsAndLabels = [
  { icon: 'devicon-html5-plain', label: 'HTML5' },
  { icon: 'devicon-css3-plain', label: 'CSS3' },
  { icon: 'devicon-javascript-plain', label: 'JavaScript' },
  { icon: 'devicon-php-plain', label: 'PHP' },
  { icon: 'devicon-angularjs-plain', label: 'Angular' },
  { icon: 'devicon-jquery-plain-wordmark', label: 'jQuery' },
  { icon: 'devicon-mysql-plain-wordmark', label: 'mySQL' },
  { icon: 'devicon-sass-original', label: 'Sass' },
  // Add more entries as needed
];

 $(document).ready(function () {

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
});