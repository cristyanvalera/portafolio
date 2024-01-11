// const skill = document.querySelector('skill');

// let menuVisible = false;

// const skills = [
//     { path: 'img/Bash.svg', name: 'Bash' },
//     { path: 'img/php.svg', name: 'PHP' },
//     { path: 'img/laravel.svg', name: 'Laravel' },
//     { path: 'img/livewire.svg', name: 'Livewire' },
//     { path: 'img/js.svg', name: 'Javascript' },
// ];

// let str = '';

// for (const sk of skills) {
//     str += `
//     <div class="skill">
//         <div class="overlay">
//             <h3>${sk.name}</h3>
//         </div>

//         <img src="${sk.path}" alt="${sk.name}">
//     </div>
//     `;
// }

// // console.log(str);
// // skill.innerHTML = str;

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