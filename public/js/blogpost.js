const commentBtn = document.querySelector('#commentBtn');


commentBtn.addEventListener('click', async function(event){
    event.preventDefault();
    console.log(document.querySelector('#comments-content'))
    const comment_content = document.querySelector('#comments-section');
    const blogpost_id = document.querySelector('.card-title').id;
    console.log(blogpost_id)
    
    const comment_data = await fetch('/api/comments/', {
        method: 'POST',
        body: JSON.stringify( {
            comment_content: comment_content.value,
            
            blog_id: blogpost_id,

        }),
        headers: {
            'Content-Type': 'application/json',
        },

    })
    if (comment_data.ok) {
        document.location.reload();
    } else {
        alert("Comment not added!")
    }
})
