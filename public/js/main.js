const socket = io();

socket.on('message', msg => {
    console.log(msg);
    addMessageToChat(msg);
})

const chatForm = document.querySelector('#chat-form');

chatForm.addEventListener('submit', e => {
    e.preventDefault();

    const message = document.getElementById('msg').value;
    // console.log(message);

    // emit the message to server
    socket.emit('chatMessage', message);

    document.getElementById('msg').value = '';

});

// Add Message to DOM
const addMessageToChat = msg => {

    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">Brad <span>9:12pm</span></p>
    <p class="text">
        ${msg}
    </p>`;

    document.querySelector('.chat-messages').appendChild(div);

    // const chatMsgList = document.querySelector('.chat-messages');

    // chatMsgList.innerHTML += (`<div class="message">
    //     <p class="meta">Brad <span>9:12pm</span></p>
    //     <p class="text">
    //         ${msg}
    //     </p>
    // </div>`);


};
