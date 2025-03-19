// script.js
document.addEventListener('DOMContentLoaded', function() {
    const bookList = document.getElementById('book-list');
    const showFormBtn = document.getElementById('show-form-btn');
    const addBookForm = document.getElementById('add-book-form');
    const bookForm = document.getElementById('book-form');
    const cancelFormBtn = document.getElementById('cancel-form-btn');

    showFormBtn.addEventListener('click', function() {
        addBookForm.style.display = 'block';
    });

    cancelFormBtn.addEventListener('click', function(){
        addBookForm.style.display = 'none';
    })

    bookForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const description = document.getElementById('description').value;

        if (title && author && description) {
            addBook(title, author, description);
            bookForm.reset();
            addBookForm.style.display = 'none';
        }
    });

    function addBook(title, author, description) {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        bookCard.innerHTML = `
            <h2><strong>Title:</strong>${title}</h2>
            <p><strong>Author:</strong> ${author}</p>
            <p><strong>Short Description:</strong>${description}</p>
        `;

        bookList.appendChild(bookCard);
    }
});