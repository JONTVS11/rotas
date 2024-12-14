const express = require("express")
const app = express()

app.set("view engine", "ejs") //ele usa a página views
app.use(express.static("public"))

app.get("/",(req,res)=>{
    var nome = "Jonathan"
    res.render("aula",{
        nome: nome
    })
 })

 
//esse é o comando para iniciar o servidor
app.listen(8081,()=>{
    console.log("O servidor está em operação!")
})

// app.get("/blog",(requ, res)=>{
//     res.send("<br><hr><h1>Bem Vindx ao meu BLOG</h1> </hr> </br>")
// })
// app.get("/perfil",(requ, res)=>{
//     res.send("<hr><br><h1>Bem Vindx ao Perfil</h1> </br></hr>")
// })

