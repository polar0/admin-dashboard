const content = document.querySelector('.content');
const header = document.querySelector('.header');
const walletMenu = document.querySelector('.wallet');
const walletItem = walletMenu.querySelectorAll('.wallet-menu > div');
const blurEffect = document.querySelector('#blur-container');

const sidebarGrid = document.querySelectorAll('.sidebar > div > *');
const sidebarArray = [];
let index;

sidebarGrid.forEach((item) => {
  sidebarArray.push(item);
});

sidebarGrid.forEach((item) => {
  item.addEventListener('mouseover', showSidebarLink);
  item.addEventListener('mouseout', hideSidebarLink);
  item.addEventListener('click', getSidebarLink);
});

walletMenu.addEventListener('mouseover', showWallet);
walletMenu.addEventListener('mouseout', hideWallet);

walletItem.forEach((item) => {
  item.addEventListener('click', copyWalletSelection);
});

function showSidebarLink() {
  // Blur other content
  blurEffect.setAttribute('class', 'blur');
  index = sidebarArray.indexOf(this);
  // Don't highlight if an empty cell is selected
  if (index === 1 || index === 12 || index === 7 || index === 18) {
    return;
  }
  // Highlight the selection if mouse is on icon
  if (index < sidebarArray.length / 2) {
    sidebarGrid[index].style.background = '#a06cd5';
    sidebarGrid[index + 11].style.background = '#a06cd5';
    // Highlight the selection if mouse is on caption
  } else if (index < sidebarArray.length) {
    sidebarGrid[index].style.background = '#a06cd5';
    sidebarGrid[index - 11].style.background = '#a06cd5';
  }
}

function hideSidebarLink() {
  // Remove blur effect
  blurEffect.setAttribute('class', 'unblur');
  index = sidebarArray.indexOf(this);
  if (index === 1 || index === 12 || index === 7 || index === 18) {
    return;
  }
  if (index < sidebarArray.length / 2) {
    sidebarGrid[index].removeAttribute('style');
    sidebarGrid[index + 11].removeAttribute('style');
  } else if (index < sidebarArray.length) {
    sidebarGrid[index].removeAttribute('style');
    sidebarGrid[index - 11].removeAttribute('style');
  }
}

function getSidebarLink() {
  index = sidebarArray.indexOf(this);
  let link;
  if (index === 1 || index === 12 || index === 7 || index === 18) {
    return;
    // Get the caption link if icon is clicked
  } else if (index < sidebarArray.length / 2) {
    link = sidebarGrid[index + 11].getAttribute('href');
  } else {
    link = this.getAttribute('href');
  }
  window.open(link, '_self');
  changeFocus(link);
}

function changeFocus(link) {
  for (const item of sidebarGrid) {
    if (item.getAttribute('id')) {
      item.removeAttribute('id');
    }

    if (
      item.getAttribute('href') === link &&
      item.getAttribute('value') !== 'Dashboard'
    ) {
      index = sidebarArray.indexOf(item);
      sidebarGrid[index - 11].setAttribute('id', 'location-target');
    }
  }
}

function showWallet() {
  blurEffect.setAttribute('class', 'blur');
  header.style.zIndex = null;
  walletMenu.style.zIndex = '10';
}

function hideWallet() {
  blurEffect.setAttribute('class', 'unblur');
  header.style.zIndex = '1';
  walletMenu.style.zIndex = null;
}

function copyWalletSelection() {
  if (this.getAttribute('class') !== 'adress') {
    return;
  } else {
    navigator.clipboard
      .writeText(this.getAttribute('value'))
      .then(() => {
        // tell it's been copied
      })
      .catch((err) => {
        // tell error
      });
  }
}
