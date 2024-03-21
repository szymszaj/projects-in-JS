const https = require('https');
const fs = require('fs');

function downloadFile(url, fileName) {
    https.get(url, (response) => {
        if (response.statusCode === 200) {
            const file = fs.createWriteStream(fileName);
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log("File downloaded:", fileName);
            });
        } else {
            console.error("Failed to download the file");
        }
    }).on('error', (err) => {
        console.error("An error occurred while downloading the file:", err.message);
    });
}

// Call the function, providing the URL to download and the desired file name
downloadFile("https://example.com/file_to_download.txt", "file_to_download.txt");


//{This script is capable of downloading any file, but handling large files or non-standard data types may require additional steps or tools, universal scheme}