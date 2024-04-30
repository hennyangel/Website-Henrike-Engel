let buttons = undefined;
let sections = undefined;

function initializeSideScroll() {
    buttons = document.getElementById('sidescroll').getElementsByTagName('a');

    sections = [
        document.getElementById('logos'),
        document.getElementById('graphics'),
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
    let activeSectionIndex = findActiveSectionIndex();

    for (let i = 0; i < buttons.length; ++i) {
        buttons[i].classList.remove('sidescroll--active');
        if (i === activeSectionIndex) {
            buttons[i].classList.add('sidescroll--active');
        }
    }
}
