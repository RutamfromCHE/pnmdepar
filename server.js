// server.js
const http = require('http');
const { add, subtract } = require('./math'); // Импортируем функции

const server = http.createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Пример использования функций
res.write(`3 + 4 = ${add(3, 4)}\n`);
res.write(`7 - 2 = ${subtract(7, 2)}\n`);

res.end();
});

server.listen(3000, () => {
console.log('Server is running on port 3000');
});
