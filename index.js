
const http = require("http");

const data = {
    name: "Abhijeet",
    role: "Node.js Developer",
    skills: ["Node.js", "JavaScript", "React.js"]
};

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });

    res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>JSON Data</title>
      </head>
      <body>
        <h1>JSON Data</h1>
        <pre>${JSON.stringify(data, null, 2)}</pre>
      </body>
    </html>
  `);
});

server.listen(4500, () => {
    console.log("Server running at http://localhost:4500");
});
