const express = require("express");
const app = express();
const PORT = process.env.PORT || 1234; /* NEW ADDITION */

app.get("/students", (req, res, next) => {
  res.status(200).json([{id: 1, name: "Axel"}, {id:2, name: "Chris"}, {id: 3, name: "Michelle"}]);
})

app.listen(PORT, () => { /* NEW ADDITION */
  console.log(`Listening on port ${PORT}!!!`);
})