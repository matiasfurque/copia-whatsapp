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

    if(list.length===0
    ){
        $listChats.innerHTML = "<li class= 'empty'> No hay chats para mostrar</li>"
    }
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
//filter es un bucle
// callback funcion que se ejecuta desp de que pasa algo
  const filteredChats = chatsData.filter((chat)=> chat.name.toLowerCase().includes(nameSearch))
  renderChats(filteredChats)
};

$search.addEventListener('input', searchChats);
renderChats(chatsData); 