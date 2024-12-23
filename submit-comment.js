import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { name, comment } = req.body;
        if (!name || !comment) {
            return res.status(400).json({ error: 'Name and Comment are required' });
        }

        const filePath = path.resolve('.', 'comments.txt');
        const newComment = `Tên: ${name}, Comment: ${comment}\n`;

        // Ghi dữ liệu vào comments.txt
        try {
            fs.appendFileSync(filePath, newComment);
            res.status(200).json({ message: 'Đã lưu comment' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Lỗi khi lưu comment' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
