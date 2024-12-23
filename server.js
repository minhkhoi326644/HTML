const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;


app.use(express.json());


app.post("/save-comment", (req, res) => {
    const { comment } = req.body;

    if (comment) {
        const filePath = path.join(__dirname, "comments.txt");
        fs.appendFile(filePath, comment, (err) => {
            if (err) {
                console.error("Error writing to file:", err);
                return res.status(500).send("Không lưu được bình luận.");
            }
            res.status(200).send("Đã lưu bình luận thành công!");
        });
    } else {
        res.status(400).send("Dữ liệu nhận xét không hợp lệ.");
    }
});

app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
