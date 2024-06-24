const composer = {
    name: 'Johannes Brahms',
    image: 'images/composers/JohannesBrahms.jpg',
    bio: 'Johannes Brahms (7 May 1833 – 3 April 1897) was a German composer, pianist, and conductor of the mid-Romantic period. Born in Hamburg into a Lutheran family, he spent much of his professional life in Vienna. He is sometimes grouped with Johann Sebastian Bach and Ludwig van Beethoven as one of the "Three Bs" of music, a comment originally made by the nineteenth-century conductor Hans von Bülow.',
    compositions: [
        { name: 'Ave Maria, Op.12(NULL)', href: '#' },
        { name: 'Cello Sonata No.1, Op.38 (Click This One)', href: 'sheetMusicPage.html' },
        { name: 'Cello Sonata No.2, Op.99(NULL)', href: '#' },
        { name: 'Piano Concerto No.1, Op.15(NULL)', href: '#' },
        { name: 'Piano Sonata No.1, Op.1(NULL)', href: '#' },
        { name: 'Violin Concerto, Op.77(NULL)', href: '#' },
        { name: 'String Quartet No.1, Op.51 No.1(NULL)', href: '#' },
        { name: 'String Quartet No.2, Op.51 No.2(NULL)', href: '#' },
        { name: 'Symphony No.1, Op.68(NULL)', href: '#' },
        { name: 'Symphony No.2, Op.73(NULL)', href: '#' },
        { name: 'Symphony No.3, Op.90(NULL)', href: '#' },
        { name: 'Symphony No.4, Op.98(NULL)', href: '#' },
    ]
};

document.title = `${composer.name}`
document.querySelector('.composer-intro img').src = composer.image;
document.querySelector('.composer-intro h2').innerText = composer.name;
document.querySelector('.composer-intro p').innerText = composer.bio;

const CompositionList = document.querySelector('.compositions ul');
let itemsNum = 1;
let CompositionHTML = '';
composer.compositions.forEach(({name, href}) => { 
    // Only the first 12 compositions are displayed
    if (itemsNum <= 12) {
        CompositionHTML += `<li><a href="${href}">${name}</a></li>`;
        itemsNum++;
    }
});
CompositionList.innerHTML = CompositionHTML;