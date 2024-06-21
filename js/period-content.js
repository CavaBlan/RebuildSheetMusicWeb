
const periodLists = document.querySelectorAll('.period-lists a');
const periodPages = document.querySelectorAll('.period-page');

periodLists.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        let targetId = link.getAttribute('data-target');

        periodPages.forEach(function(page) {
            if (page.id === targetId) {
                page.classList.remove('hidden');
            } else {
                page.classList.add('hidden');
            }
        });
    });
});



const composers = [
    { name: 'Frédéric Chopin', href: '#' },
    { name: 'Franz Schubert', href: '#' },
    { name: 'Robert Schumann', href: '#' },
    { name: 'Hector Berlioz', href: '#' },
    { name: 'Franz Liszt', href: '#' },
    { name: 'Richard Wagner', href: '#' },
    { name: 'Johannes Brahms', href: '#' }
];


const romamComposer = document.querySelector('#Romantic .composers');
let composersHTML = '<ul>';
composers.forEach(({ name, href }) => {
    composersHTML += `<li><a href="${href}">${name}</a></li>`;
});
composersHTML += '</ul><div><a class="more-link" href="">More</a></div>';
romamComposer.innerHTML = composersHTML;
