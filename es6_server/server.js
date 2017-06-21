import http from 'http';

const PORT = 8080;

http.createServer((req, res) => {
  res.end(`url is ${req.url}`);
}).listen(PORT, ()=>{
  console.log("server is listening on ", PORT);
})
