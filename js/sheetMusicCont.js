// Local
const sheetMusicInfo = {
    name: 'Cello Sonata No.1, Op.38',
    wikiUrl: 'https://en.wikipedia.org/wiki/Cello_Sonata_No._1_(Brahms)',
    image: 'images/composers/Cello Sonata No.1, Op.38.jpg',
    downPDF: 'download/Brahms_Sonate_Op_38_Violoncello.pdf',
    downIMG: 'download/Brahms_Sonate_Op_38_Violoncello.jpg',
    downZIP: 'download/Brahms_Sonate_Op_38_Violoncello.zip',
    youtubeUrl: 'https://www.youtube.com/embed/WZTRwXvq82w?si=FgEG-ba7mA8aIUwp',
    introLine1: 'The Cello Sonata No.1 in E minor, Op. 38, entitled "Sonate für Klavier und Violoncello", was written by Johannes Brahms in 1862–65.',
    introLine2: 'Brahms composed the first two movements during the summer of 1862, as well as an Adagio which was later deleted. The final movement was composed in 1865. The sonata is entitled "Sonate für Klavier und Violoncello" (for piano and cello) and the piano "should be a partner - often a leading, often a watchful and considerate partner - but it should under no circumstances assume a purely accompanying role".'
};

document.title = `${sheetMusicInfo.name}`;

//Left side
const sheetDown = document.querySelector('.sheet-download');
sheetDown.innerHTML = `
    <img src="${sheetMusicInfo.image}" alt="Sheet Music">
    <h2></h2>
    <ul>
        <li><a id="pdf-link" href="${sheetMusicInfo.downPDF}">PDF</a></li>
        <li><a id="img-link" href="${sheetMusicInfo.downIMG}">IMG</a></li>
        <li><a id="zip-link" href="${sheetMusicInfo.downZIP}">ZIP</a></li>
    </ul>
`;

//Right side
const infoContent = document.querySelector('.sheet-info');
infoContent.innerHTML = `
    <h2>${sheetMusicInfo.name}<a href="${sheetMusicInfo.wikiUrl}"> (Wikipedia)</a></h2>
    <iframe width="560" height="315" 
        src="${sheetMusicInfo.youtubeUrl}" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
    </iframe>   
    <p>${sheetMusicInfo.introLine1}</p> 
    <p>${sheetMusicInfo.introLine2}</p>
`







//Server
// function getSheetMusicInfo(name, composerName) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         const url = `http://localhost:3005/api/sheetMusicInfo?name=${encodeURIComponent(name)}&composerName=${encodeURIComponent(composerName)}`;
//         xhr.open('GET', url);

//         xhr.onload = () => {
//             resolve(JSON.parse(xhr.responseText));
//         };

//         xhr.onerror = () => reject(new Error('Network error'));

//         xhr.send();
//     });
// }

// getSheetMusicInfo('Cello Sonata No.1, Op.38', 'Johannes Brahms').then(sheetMusicInfos => {
//     // Suppose the result returned is an array, take the first element
//     if (sheetMusicInfos.length > 0) {
//         const sheetMusicInfo = sheetMusicInfos[0];

//         // Render page content
//         document.title = `${sheetMusicInfo.name}`;

//         // Left Side
//         const sheetDown = document.querySelector('.sheet-download');
//         sheetDown.innerHTML = `
//             <img src="${sheetMusicInfo.image}" alt="Sheet Music">
//             <h2></h2>
//             <ul>
//                 <li><a id="pdf-link" href="${sheetMusicInfo.downloads.pdf}">PDF</a></li>
//                 <li><a id="img-link" href="${sheetMusicInfo.downloads.img}">IMG</a></li>
//                 <li><a id="zip-link" href="${sheetMusicInfo.downloads.zip}">ZIP</a></li>
//             </ul>
//         `;

//         // Right Dide
//         const infoContent = document.querySelector('.sheet-info');
//         infoContent.innerHTML = `
//             <h2>${sheetMusicInfo.name}<a href="${sheetMusicInfo.wikiUrl}"> (Wikipedia)</a></h2>
//             <iframe width="560" height="315" 
//                 src="${sheetMusicInfo.youtubeUrl}" 
//                 title="YouTube video player" 
//                 frameborder="0" 
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
//                 referrerpolicy="strict-origin-when-cross-origin" 
//                 allowfullscreen>
//             </iframe>   
//             <p>${sheetMusicInfo.introLine1}</p> 
//             <p>${sheetMusicInfo.introLine2}</p>
//         `;
//     } else {
//         console.error('No matching sheet music found.');
//     }
// }).catch(error => {
//     console.error('Error fetching data:', error);
// });