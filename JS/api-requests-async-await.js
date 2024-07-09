// Aşağıda tarifinden anlayacağınız istekleri https://jsonplaceholder.typicode.com/ URL'ine atın. her bir isteği 1 kere then, 1 kere de async/await yöntemi ile atın. isteklerinizi fonksiyon içerisinde tanımlayın.
//getCommentById, getAllComments, postComment, deleteComment, updateCommentPatch, updateCommentPut


//THEN

const getCommentByIdThen = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(response => response.json())
        .then(comment => {
            console.log(comment);
            return comment;
        })
}
getCommentByIdThen(1);

const getAllCommentsThen = () => {
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(comments => {
            console.log(comments);
            return comments;
        })
}
getAllCommentsThen();


const postCommentThen = (comment) => {
    return fetch('https://jsonplaceholder.typicode.com/comments', {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    })
    .then(response => response.json())
    .then(newComment => {
        console.log(newComment);
        return newComment;
    });
}
postCommentThen({ postId: 1, name: 'hivda', email: 'hivda@hivda', body: 'yenisi' });



const deleteCommentThen = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            console.log('Silindi');
            return true;
        } else {
            console.error('Hata');
        }
    });
}
deleteCommentThen(2);


const updateCommentPatchThen = (id, updateData) => {
    return fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(updateData),
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
    })
    .then(response => response.json())
    .then(updatedComment => {
        console.log(updatedComment);
        return updatedComment;
    });
}
updateCommentPatchThen(1, {body: "güncellenen body"});


const updateCommentPutThen = (id, updatedComment) => {
    return fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedComment),
        headers: {'Content-type': 'application/json; charset=UTF-8' }
    })
    .then(response => response.json())
    .then(updatedCommentResponse => {
        console.log(updatedCommentResponse);
        return updatedCommentResponse;
    });
}
updateCommentPutThen(1, { id: 1, name: 'hivda', email: 'hivda@hvd', body: 'güncellendi' });




//ASYNC

const getCommentByIdAsync = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
    const comment = await response.json();
    console.log(comment);
    return comment;
}
getCommentByIdAsync(1);


const getAllCommentsAsync = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await response.json();
    console.log(comments);
    return comments;
}
getAllCommentsAsync();

const postCommentAsync = async (comment) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: { 'Content-type': 'application/json; charset=UTF-8'}
    });
    const newComment = await response.json();
    console.log(newComment);
    return newComment;
}
postCommentAsync({ postId: 1, name: 'hivda', email: 'hivda@hivda', body: 'yenisi' });


const deleteCommentAsync = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        console.log('Silindi');
        return true;
    } else {
        console.error('Hata');
    }
}
deleteCommentAsync(2);


const updateCommentPatchAsync = async (id, updateData) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(updateData),
        headers: {'Content-type': 'application/json; charset=UTF-8' }
    });
    const updatedComment = await response.json();
    console.log(updatedComment);
    return updatedComment;
}
updateCommentPatchAsync(1, {body: "güncellenen body"});


const updateCommentPutAsync = async (id, updatedComment) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedComment),
        headers: {'Content-type': 'application/json; charset=UTF-8' }
    });
    const updatedCommentResponse = await response.json();
    console.log(updatedCommentResponse);
    return updatedCommentResponse;
}
updateCommentPutAsync(1, { id: 1, name: 'hivda', email: 'hivda@hvd', body: 'güncellendi' });
