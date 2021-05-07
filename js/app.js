// Variables
const sendBtn = document.getElementById('sendBtn');

//Event Listeners

eventListeners();

function eventListeners() {
    //App Init
    document.addEventListener('DOMContentLoaded', appInit);
}

//Functions

//Aapp Initialization
function appInit() {
    //disable the send button on load
    sendBtn.disabled = true;
}
