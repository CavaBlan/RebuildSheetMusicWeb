
const newsAddLinks = [
    { href: "https://example.com/page1-5", text: "News balabalabalabalabalabalabala 5" },
    { href: "https://example.com/page1-4", text: "News balabalabalabalabalabalabala 4" },
    { href: "https://example.com/page1-3", text: "News balabalabalabalabalabalabala 3" },
    { href: "https://example.com/page1-2", text: "News balabalabalabalabalabalabala 2" },
    { href: "https://example.com/page1-1", text: "News balabalabalabalabalabalabala 1" }
];

const latestAddLinks = [
    { href: "https://example.com/page2-5", text: "Johannes Brahms: Symphony No.5" },
    { href: "https://example.com/page2-4", text: "Johannes Brahms: Symphony No.4" },
    { href: "https://example.com/page2-3", text: "Johannes Brahms: Symphony No.3" },
    { href: "https://example.com/page2-2", text: "Johannes Brahms: Symphony No.2" },
    { href: "https://example.com/page2-1", text: "Johannes Brahms: Symphony No.1" }
];

const newsBar = document.querySelector("#news-box");
const latestAddBar = document.querySelector("#latestAdd-box");

// Latest additions content
latestAddLinks.forEach(function(link){
    let newList = document.createElement("li");
    let newLink = document.createElement("a");

    newLink.href = link.href;
    newLink.innerText = link.text;

    newList.appendChild(newLink);
    latestAddBar.appendChild(newList);
});

// News content
newsAddLinks.forEach(function(link){
    let newList = document.createElement("li");
    let newLink = document.createElement("a");

    newLink.href = link.href;
    newLink.innerText = link.text;

    newList.appendChild(newLink);
    newsBar.appendChild(newList);
});