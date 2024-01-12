const skillsTech = document.querySelector('skills-tech');

const skills = [
    { path: 'img/linux.svg', name: 'Linux' },
    { path: 'img/terminal.svg', name: 'Terminal' },
    { path: 'img/Bash.svg', name: 'Bash' },
    { path: 'img/php.svg', name: 'PHP' },
    { path: 'img/laravel.svg', name: 'Laravel' },
    { path: 'img/livewire.svg', name: 'Livewire' },
    { path: 'img/js.svg', name: 'Javascript' },
];

let str = '';

for (const skill of skills) {
    str += '<p>Hola</p>';
}

skillsTech.innerHTML = str;

