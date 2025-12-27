const SCROLL_TOP_TOLERANCE = 3;

let buttons  = undefined;
let sections = undefined;
let scroll   = undefined;

function initializeSideScroll() {
    scroll  = document.getElementById('sidescroll');
    buttons = scroll.getElementsByTagName('a');

    sections = [
        document.getElementById('logos'),
        document.getElementById('socialmedia'),
        document.getElementById('cards'),
        document.getElementById('invitations'),
        document.getElementById('flyers'),
        document.getElementById('packaging'),
    ]

    updateSideScroll();
}

function findActiveSectionIndex() {
    for (let i = 0; i < sections.length; ++i) {
        const top = sections[i].getBoundingClientRect().top;
        const height =sections[i].getBoundingClientRect().height; 

        if (top >= height * (-3/4)) {
            return i;
        }
    }
    return 0;
}

function updateSideScroll() {
    if (scroll.getBoundingClientRect().top <= SCROLL_TOP_TOLERANCE) {
        scroll.classList.add("sidescroll-bg");
    } else {
        scroll.classList.remove("sidescroll-bg");
    }

    let activeSectionIndex = findActiveSectionIndex();

    for (let i = 0; i < buttons.length; ++i) {
        buttons[i].classList.remove('sidescroll--active');
        if (i === activeSectionIndex) {
            buttons[i].classList.add('sidescroll--active');
        }
    }
}
