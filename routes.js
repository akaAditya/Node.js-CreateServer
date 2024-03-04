const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    fs.readFile("Hello.txt", "utf-8", (err, data) => {
      if (err) throw new Error();
      res.write("<html>");
      res.write("<head><title></title></head>");
      res.write(
        `<body><h3>${data}</h3><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>`
      );
      res.write("</html>");
      return res.end();
    });
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunks) => {
      body.push(chunks);
    });

    return req.on("end", () => {
      const parsedData = Buffer.concat(body).toString();
      const data = parsedData.split("=")[1];
      fs.writeFile("Hello.txt", data, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
};
// 1
// module.exports= requestHandler;

// 2
exports.handlers = requestHandler;
exports.text = 'Code is successfully executed';

// 3
// module.exports.handlers = requestHandler;
// module.exports.text = 'Code is successfully executed';

// 4
// module.exports = {
//     handlers: requestHandler,
//     text: 'Code is successfully executed'
// }

