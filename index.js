//Imports de los módulos
import fs from 'fs/promises'
import path from 'path'

const usersPath = path.resolve('users.json')
const helloPath = path.resolve('hello.txt')

export const readFileUsers = () => {
    //Imprimir en consola el arreglo de usuarios
    fs.readFile(usersPath, 'utf8')
        .then(data => console.log(data))
        .catch(err => console.log(err))
};

export const writeHelloWorld = () => {
    //Escribir hello world! en el archivo hello.txt
    fs.writeFile(helloPath, "hello world!")
    .then(console.log("Se escibió eso"))
    .catch(err => console.log(err))
};

export const addUser = (username) => {
    fs.readFile(usersPath, 'utf-8')
    .then(data => {

        const wuwu = [...JSON.parse(data)]
        wuwu.push(username)
        console.log(username)
        fs.writeFile(usersPath, JSON.stringify(wuwu))
            .then(console.log(username + " agregado"))
            .catch(err => console.log(err))

    })
    .catch(err => console.log(err))   
};

/* export const addUser = async (username) => {
    fs.readFile(usersPath, 'utf-8')
    .then(data => {
        try{
            const wuwu = [...JSON.parse(data)]
            wuwu.push(username)
            console.log(username)
            fs.writeFile(usersPath, JSON.stringify(wuwu))
                .then(console.log(username + " agregado"))
                .catch(err => console.log(err))
        }catch(err){
            console.log(err)
        }
    })
    .catch(err => console.log(err))   
}; */

/* const addUser = async (username) => {
    try{    
        fs.readFile(usersPath1, 'utf-8')
            .then(data => console.log(data + "??"))
    }catch (err){
        console.log(err + " !!!")
        console.log("eeerros")
    }
} */

//No hace falta ejecutar las funciones

//readFileUsers()
//writeHelloWorld()
//addUser("Academlo22")

