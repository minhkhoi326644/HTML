document.getElementById('commentForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    if (!name || !comment) {
        alert('Vui lòng nhập tên và bình luận!');
        return;
    }

    try {
        const response = await fetch('/api/submit-comment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, comment }),
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message);
            document.getElementById('commentForm').reset();
        } else {
            alert(result.error || 'Có lỗi xảy ra!');
        }
    } catch (error) {
        console.error(error);
        alert('Không thể gửi bình luận.');
    }
});
