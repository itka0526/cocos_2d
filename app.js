const express = require("express");
const PORT = process.env.PORT || 4000;
const app = express();
const path = require("path");
const fs = require("fs");

app.get("/", async (_, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(path.join(__dirname, "/demo/index.html")).pipe(res);
});

try {
    const demo_home_directory = fs.readdirSync(path.join(__dirname, "/demo"));

    const files = demo_home_directory
        .map(
            (dir) =>
                !dir.includes(".") &&
                fs
                    .readdirSync(path.join(__dirname, `/demo/${dir}`))
                    .map((file) => `/${dir}/${file}`)
        )
        .flat(1);

    const map_to_endpoint = (file_path) => {
        if (!file_path) return;
        app.get(file_path, (_, res) => {
            if (file_path.endsWith(".wasm.gz")) {
                res.writeHead(200, {
                    "Content-Encoding": "gzip",
                    "Content-Type": "application/wasm",
                });
            } else if (file_path.endsWith(".gz")) {
                res.writeHead(200, {
                    "Content-Encoding": "gzip",
                    "Content-Type": "application/javascript",
                });
            } else if (file_path.endsWith(".wasm.br")) {
                res.writeHead(200, {
                    "Content-Encoding": "br",
                    "Content-Type": "application/wasm",
                });
            } else if (file_path.endsWith(".br")) {
                res.writeHead(200, {
                    "Content-Encoding": "br",
                    "Content-Type": "application/javascript",
                });
            }

            fs.createReadStream(path.join(__dirname, "/demo", file_path)).pipe(
                res
            );
        });
    };

    files.map(map_to_endpoint);
} catch (error) {
    console.error(error);
    return null;
}

app.listen(PORT, () => console.log(`Server is on port: ${PORT}`));
