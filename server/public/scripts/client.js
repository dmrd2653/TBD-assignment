console.log('linked');


fetch('/messages')
.then((response) => {
    // console.log('Success', response);
    return response.json()
})
.then((messages) => {
    let messageDiv = document.querySelector('#display');
    for (let message of messages) {
        messageDiv.innerHTML += `
            <p>Title: ${message.title}, Text: ${message.text}, @${message.timestamp}</p>
        `;
    }
})
.catch((error) => {
    console.log('Error', error);
});