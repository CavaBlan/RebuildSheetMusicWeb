
const periodLists = document.querySelectorAll('.period-lists a');
const periodPages = document.querySelectorAll('.period-page');

periodLists.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        let targetId = link.getAttribute('data-target');

        //Added special effects to the period navigation bar
        periodLists.forEach(function(link) {
            link.classList.remove('active-link');
        });

        link.classList.add('active-link');

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
    { name: 'Frédéric Chopin(NULL)', href: '#' },
    { name: 'Franz Schubert(NULL)', href: '#' },
    { name: 'Robert Schumann(NULL)', href: '#' },
    { name: 'Hector Berlioz(NULL)', href: '#' },
    { name: 'Franz Liszt(NULL)', href: '#' },
    { name: 'Richard Wagner(NULL)', href: '#' },
    { name: 'Johannes Brahms', href: 'specComposerPage.html' }
];


const romamComposer = document.querySelector('#Romantic .composers');
let composersHTML = '<ul>';
composers.forEach(({ name, href }) => {
    composersHTML += `<li><a href="${href}">${name}</a></li>`;
});
composersHTML += '</ul><div><a class="more-link" href="">More</a></div>';
romamComposer.innerHTML = composersHTML;
