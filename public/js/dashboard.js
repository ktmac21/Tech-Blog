const blogPostForm = document.querySelector('#blogpost-form');
const orderedList = document.querySelector('.list-group-numbered');

blogPostForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.querySelector('#blog-title');
    const contents = document.querySelector('#blog-content');

    const payload = JSON.stringify({
        title: title.value,
        contents: contents.value,
    });

    const blogPost = await fetch('/api/blogposts', {
        method: 'POST',
        body: payload,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (blogPost.ok) {
        document.location.href = '/dashboard';
    }

});

orderedList.addEventListener('click', async (e) => {
    console.log('orderedList'); 
    
    if (e.target.tagName === 'BUTTON') {
        const id = e.target.getAttribute('data-id');

        deleteBlogPost = await fetch (`/api/blogposts/${id}`, {
            method: 'DELETE',
        });

        if (deleteBlogPost.ok) {
            document.location.href = '/dashboard'; 
        } else {
            alert('Failed to delete!');
        }
    }
});

