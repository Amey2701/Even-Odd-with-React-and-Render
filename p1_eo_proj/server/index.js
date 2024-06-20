const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/find", (req, res) => {
    let num = req.query.number;
    let n = parseInt(num);

    if (isNaN(n)) {
        return res.status(400).json({ error: "Invalid number" });
    }

    let r = n % 2 === 0 ? "Even" : "Odd";
    res.json({ number: n, result: r });
});

const port = 9000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
