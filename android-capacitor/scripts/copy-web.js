const fs = require('fs');
const path = require('path');
const src = path.join(__dirname, '..', 'www');
if (!fs.existsSync(path.join(src, 'index.html'))) throw new Error('Missing www/index.html');
console.log('EXAMFLOW web assets are ready for Capacitor sync.');
