let navLinks = document.querySelector('.links');
let navContainer = document.querySelector('.links-container');

console.dir(navLinks);
const openProfile = () => {
  navContainer.classList.add('open');
};

const closeNavbar = () => {
  navContainer.classList.remove('open');
};

[...navLinks.children].map((child) =>
  child.addEventListener('click', (e) => {
    closeNavbar();
  })
);
