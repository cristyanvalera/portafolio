let menuVisible = false;

const toggleShowMenu = () => {
    if (menuVisible) {
        select();
    } else {
        document.getElementById('nav').classList = 'responsive';
        menuVisible = true;
    }
}

const select = () => {
    document.getElementById('nav').classList = '';
    menuVisible = false;
}
