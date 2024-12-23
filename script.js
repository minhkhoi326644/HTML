document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const comment = document.getElementById("comment").value.trim();

    if (name && comment) {
        const commentData = `Tên: ${name}, Comment: ${comment}\n`;
        fetch('/save-comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ comment: commentData })
        })
        .then(response => {
            if (response.ok) {
                alert("Bình Luận Đã Được Gửi");
                document.getElementById("commentForm").reset();
            } else {
                alert("Có Lỗi Khi Lưu Bình Luận");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    } else {
        alert("Please fill in both fields.");
    }
});
