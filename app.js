const express = require("express");
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.static(`${__dirname}/game/build`));
app.listen(PORT, () => console.log(`Server is on port: ${PORT}`));
