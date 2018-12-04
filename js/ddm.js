'use strict';

var dropdownMenu = document.getElementsByClassName('wrapper-dropdown')[0];

dropdownMenu.onclick = active;

function active() {
    this.classList.toggle('active');
}