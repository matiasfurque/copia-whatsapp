
const $listMessage = document.querySelector(".messages")
const $message = document.getElementById("message")
const $formMessage = document.getElementById("formMessage")
const messages =[
    {
        id:1,
        text:"Q onda amigo todo bien?",
        hour:"14:12",
        me: false
    },
    {
        id:2,
        text:"Todo bien vos?",
        hour:"14:13",
        me: true
    },
    {
        id:3,
        text:"Sisi, vamos al gym?",
        hour:"14:14",
        me: false
    },
    {
        id:4,
        text:"Sisi, vamos al gym?",
        hour:"14:14",
        me: true
    }
 ]

const renderMessage = (list) => {
    $listMessage.innerHTML = ""
    list.forEach( message => {$listMessage.innerHTML += `<div class="message ${message.me === true ? "me":""}">
<p class="content">${message.text}</p>
<p class="time">${message.hour}</p>
</div>`
        
    });
}

const sendMessage = (event) =>{
    const now = new Date()
    if(event.key === "Enter"){
        const newMessage = {
            text: $message.value,
            hour: now.getHours() + ":"+now.getMinutes(),
            me:true
        }
    console.log(newMessage)}
}
$message.addEventListener("keydown", (e)=>{sendMessage(e)})
//$formMessage.addEventListener("submit", sendMessage)
renderMessage(messages)