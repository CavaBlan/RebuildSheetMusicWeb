const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
    if (req.url.startsWith('/api/sheetMusicInfo')) {
        const queryObject = url.parse(req.url, true).query;
        const filePath = path.join(__dirname, 'sheetMusicInfo.json');

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.end(JSON.stringify({ error: 'Error reading file' }));
                return;
            }

            let sheetMusicData = JSON.parse(data);

            // Filter data
            if (queryObject.name) {
                sheetMusicData = sheetMusicData.filter(item => item.name === queryObject.name);
            }
            if (queryObject.composerName) {
                sheetMusicData = sheetMusicData.filter(item => item.composerName === queryObject.composerName);
            }

            res.end(JSON.stringify(sheetMusicData));
        });
    } else {
        res.end('Cannot find Path');
    }
});

server.listen(3005, () => {
    console.log('Server is running at http://localhost:3005');
});