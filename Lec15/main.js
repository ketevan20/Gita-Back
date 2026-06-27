// შექმენი შენი სერვერი express-ის დახმარებით. ააწყე User-ის CRUD, რომელსაც ექნება:დამატება,წაშლა,აფდეითი,id-ის მიხედვით ინფორმაციის წამოღება,ფეჯინეიშენი,სექრეთ როუტი, age და name იყოს აუცილებელი ფილდი, ხოლო email და eyecolor ოფშენალი. ასევე არუნდა შეეძლოს 30 წელზე მეტის დარექვესთება და 10 წელზე ნაკლების.
const express = require('express')
const app = express()

app.use(express.json())

const PORT = 8080

const users = [
  {
    "id": 1,
    "name": "Ketevani",
    "age": 21,
    "email": "ketevani@example.com",
    "eyeColor": "Brown"
  },
  {
    "id": 2,
    "name": "Giorgi",
    "age": 25
  },
  {
    "id": 3,
    "name": "Nino",
    "age": 22,
    "email": "nino@example.com"
  },
  {
    "id": 4,
    "name": "Luka",
    "age": 28,
    "eyeColor": "Blue"
  },
  {
    "id": 5,
    "name": "Mariam",
    "age": 24,
    "email": "mariam@example.com",
    "eyeColor": "Green"
  },
  {
    "id": 6,
    "name": "Saba",
    "age": 20
  },
  {
    "id": 7,
    "name": "Ana",
    "age": 23,
    "email": "ana@example.com"
  },
  {
    "id": 8,
    "name": "Dato",
    "age": 30,
    "eyeColor": "Hazel"
  },
  {
    "id": 9,
    "name": "Tako",
    "age": 19
  },
  {
    "id": 10,
    "name": "Irakli",
    "age": 27,
    "email": "irakli@example.com",
    "eyeColor": "Gray"
  }
]

app.get('/',  (req, res) => {
    res.json('hello world')
})

app.get('/users', (req, res) => {
    let { page=1, take=3 } = req.query
    take > 3 ? take = 3 : take
    res.json(users.slice((take-1)*page, page*take))
})

app.get("/users/:id", (req, res) => {
    const { id } = req.params
    const findUser = users.find(el => el.id === Number(id))
    if(!findUser) {
        res.status(400).json({message: 'user not found'})
    }
    res.json(findUser)
})

app.post('/users', (req ,res) => {
    const { age, name, email, eyeColor } = req.body
    if(!age && !name) {
        res.json.status(400).json({message: "age and name are required fields"})
    }
    if( age > 30 || age < 10 ) {
        res.json.status(400).json({message: "age must bebetter then 10 and less then 30"})
    }
    const lastId = users[users.length - 1]?.id || 0
    const newObj = {
        id: lastId + 1,
        name, 
        age, 
        email, 
        eyeColor 
    }
    users.push(newObj)
    res.json({message: "user added successfully", data: users})
})

app.delete('/users/:id', (req, res) => {
    const { id } = req.params
    const findIndex = users.findIndex(el => el.id === Number(id))
    if(findIndex === -1) {
        res.status(400).json({message: "user not found"})
    }
    const deletedUser = users.splice(findIndex, 1)
    res.json({message: "user deleted successfully", data: deletedUser})
})

app.put("/users/:id", (req, res) => {
    const { id } = req.params
    const { name, age, email, eyeColor } = req.body
    const index = users.findIndex(el => el.id === Number(id))
    users[index] = {
        ...users[index], 
        name: name || users[index].name,
        age: age || users[index].age,
        email: email || users[index].email,
        eyeColor: eyeColor || users[index].eyeColor
    }
    res.json({message: 'user updated successfully'})
})

app.get('/secret', (req, res) => {
  const secretKey = req.headers.secretKey
  if(!secretKey || secretKey !== "1234") {
        return res.status(400).json({message: "unAuth", data: "action unavailable"})
    }
    res.json("hello")
})

app.listen(PORT, () => {
    console.log('server is listening to http://localhost:8080')
})