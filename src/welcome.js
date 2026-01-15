console.log('Hello World!!!')

const sectionUsers = document.getElementById("users");
const nameUser = document.getElementById("name")


const users = []
const newUsers = []
async function allUsers () {
    const dados = await fetch("http://localhost:3000/users/");
    const dadosJason = await dados.json();
    console.log(dadosJason)
    
    dadosJason.forEach((el) => users.push(el));
    

    usersName(users);
    showUsers(users)
};

allUsers();

function usersName (array) {
    console.log(array)
    array.forEach(e => {
        console.log(e)
        console.log(e.name)
    });
};

function showUsers (array) {
    if (!array) {
        const alert = document.createElement("h2")
        alert.textContent = "Usuário não encontrado!"
        nameUser.appendChild(alert)
    }

    array.forEach((e) => {
        /*const div = document.createElement('div')
        div.id = `user-${e.id}`
        const spanName = document.createElement('span')
        spanName.textContent = `Nome: ${e.name}`
        const spanNickname = document.createElement('span')
        spanNickname.textContent = `Nickname: ${e.nickName}`*/
        nameUser.textContent = e.nickName
        /*const br = document.createElement('br')
        div.appendChild(spanName)
        div.appendChild(br)
        div.appendChild(spanNickname)
        sectionUsers.appendChild(div)*/ 
    })
}

//document.appendChild()

//usersName(users)
   
/*
const users = fetch("http://localhost:3000/users/")
.then(mensagem => {
   return mensagem.json()
})
.then(dado => {
    console.log(dado)
})
.catch((err) => {
    console.log(err)
})
*/


