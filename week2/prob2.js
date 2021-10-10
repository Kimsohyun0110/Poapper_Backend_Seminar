const fs = require('fs')

let textbook = 
{
    "title": "Data Structures, Algorithms, and Applications in C(2nd Ed.)",
    "author": "Michael T. Goodrich et al",
    "publisher": "John Wiley & Sons",
    "publication year": 2011,
}

let json = JSON.stringify(textbook);

fs.writeFileSync("textbook.json", json)
