const sidebar = document.querySelector('.sidebar');
const icon = document.querySelector('.sidebar > div');
const content = document.querySelector('.content');
const header = document.querySelector('.header');
const sidebarCaption = document.querySelectorAll('.sidebar span');

console.log(icon.offsetWidth);
sidebar.addEventListener('mouseover', function () {
  for (const caption of sidebarCaption) {
    caption.style.display = 'block';
  }
});

header.addEventListener('mouseover', hideSidebar);
content.addEventListener('mouseover', hideSidebar);

function hideSidebar() {
  for (const caption of sidebarCaption) {
    //if (caption.hasAttribute('style')) {
    //}
  }
}
