console.log('linked');

// fetch GET
// turn into a function
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

// // fetch POST
// function sendMathProb(event) {
//     event.preventDefault();

//     let title = document.querySelector('#title').value;
//     let text = document.querySelector('#text').value;
//     let time = document.querySelector('#time_sent').value;
//     newMessage = {
//         title,
//         text,
//         time
//     };
//     // POST request to send object to server
//     fetch('/messageList', {
//         method: 'POST',
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(newMessage),
//     }).then((response) => {
//         console.log('POST Response:', response);
//         // Clear the form
//         document.querySelector('#title').value = '';
//         document.querySelector('#text').value = '';
//         document.querySelector('#time_sent').value = '';
//         getEquation();
//     }).catch((error) => {
//         console.log('OH No......', error);
//         alert('Something went wrong.');
//     });

// };