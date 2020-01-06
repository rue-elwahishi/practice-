const http = require("http");

const todos = [
  { id: 1, text: "todo One" },
  { id: 2, text: "todo Two" },
  { id: 3, text: "todo Three" }
];
const server = http.createServer((req, res) => {
  res.writeHead(404, { "content-type": "application/json" });
  let body = [];
  req
    .on("data", chunk => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();
      console.log(body);
    });

  res.end(
    JSON.stringify({
      success: false,
      error: "not found",

      data: null
    })
  );
});
const PORT = 5000;

server.listen(PORT, () => console.log("server listening on 5000"));
