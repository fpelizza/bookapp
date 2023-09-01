const userService = require("../services/userService.service")

const userRegistration = async (req,res) => {
    try {
        const { username, email , password } = req.body
        if (!username || !email || !password){
            return res.json('Missing username email or password')
        }
        const response = await userService.registerUser(req.body.username, req.body.email, req.body.password)
        return res.json(response)
    } catch (e) {
        console.log(e)
    }
}

const userLogin = async (req,res) => {
    try {
        const { username, email, password } = req.body
        if (!username || !email || !password){
            return res.json('Missing username email or password')
        }
        const respose = await userService.loginUser(username, email, password)
        if (respose.status === 200){
            return res.status(200).json(respose)
        } else {
            return res.status(400).json('Not login')
        }
    } catch (error) {
        console.error(error)
    }
}

const addBook = async (req,res) => {
    try {
        console.log(req.body)
        const { username, title, authors, year, cover_img } = req.body;
        const response = await userService.addBook(username,title, authors, year, cover_img)
        return res.status(200).json(response)
    } catch (e) {
        console.error(e)
    }
}

const getFavouritesBooks = async (req,res) => {
    try {
        const { username, email } = req.body
        console.log(username)
        const response = await userService.getFavouritesBooks(username, email)
        return res.status(200).json(response) 
    }catch (e) {
        console.error(e)
    }
}

const currentUser = async (req,res) => {
    res.json(req.user)
}

module.exports = {
    userRegistration,
    userLogin,
    currentUser,
    addBook,
    getFavouritesBooks
}