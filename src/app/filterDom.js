//referencia elementos a manipular del HTML
const $search = document.getElementById('search');
const $listChats = document.querySelector(".chats ul")


const chatsData = [
{
    name:"Rodri",
    lastMessage:"Afuera",
    avatar:"https://picsum.photos/seed/picsum/200/300"
},
{
    name:"Matias Ezequiel",
    lastMessage:"que haces hoy?",
    avatar:"https://picsum.photos/536/354"
},
{
    name:"Raquel",
    lastMessage:"Comiste?",
    avatar:"https://picsum.photos/id/237/200/300"
}
]
const renderChats = (list) =>{
    $listChats.innerHTML = ""
    list.forEach((chat)=>{
        $listChats.innerHTML += `
            <li class="user-chat">
              <img src="${chat.avatar}" alt="foto de perfil de maría lópez" />
              <div>
                <h3>${chat.name}</h3>
                <p>${chat.lastMessage}</p>
              </div>
            </li>
        `
    })
}

const searchChats = () => {
  const nameSearch = $search.value.toLowerCase();
  const $chats = document.querySelectorAll('.user-chat')
 for (let i = 0; i < $chats.length; i++) {
    const $chat = $chats[i];
    const $titleTag = $chat.querySelector('h3');
    const name = $titleTag.textContent.toLowerCase();

    //el método includes() sirve para verificar si un valor existe dentro de una cadena de texto o dentro de un array. Devuelve true o false
    if (name.includes(nameSearch)) {
      $chat.style.display = 'flex';
    } else {
      $chat.style.display = 'none';
    }
  }
  //VALIDAR LA LONGITUD DE CHAT
  
};

$search.addEventListener('input', searchChats);
renderChats(chatsData); 