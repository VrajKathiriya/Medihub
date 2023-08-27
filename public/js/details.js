const backButton = document.querySelector('.back');

backButton.addEventListener('click', (e) => {
  e.preventDefault();
  const url = location.href;
  const ROLE = url.split('=')[1];
  if (ROLE == 'patient') window.location.href = 'http://127.0.0.1:8000';
  else location.href = 'http://127.0.0.1:8000/getAllPatients';
});

const showReportBtn = document.querySelector('#showReport');
const reportBox = document.querySelector('.reportBox');

showReportBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // const target = showReportBtn.closest('button');
  // const reportName = target.getAttribute('data-report');
  reportBox.classList.toggle('hidden');
  window.scrollTo(0, 500);
  // window.location = `${location.href}#goTo`;
});
