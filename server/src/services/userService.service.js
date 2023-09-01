const User = require('../models/userModels.model')
const Book = require('../models/bookModel.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const registerUser = async (username, email, password) => {
    const userAvailable = await User.findOne({username, email})

    if (userAvailable){
        return 'User already registered'
    }

    const hashedPassword = await bcrypt.hash(password,10)
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })

    if (user){
        return `${user.id}`
    }

}

const loginUser = async (username, email, password) => {
    const user = await User.findOne({username, email})
    
    if (user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: "30m"}
        )
        return {
            status: 200,
            token: accessToken,
            msg: 'User login successful'
        }
    } else {
        return {
            status: 400,
            msg: 'User login failed'
        }
    }

}

const addBook = async (username,title, authors,year, cover_img) => {
    const user = await User.findOne({username})

    if (user) {
        const book = await Book.create({
            title,
            cover_img,
            authors,
            year
        })
        if (book){
            if (!user.favouritesBooks.includes(book)){
                user.favouritesBooks.push(book)
            }
        } else {
            return {
                status: 401,
                msg: 'Book cannot be created'
            }
        }

        await user.save();
        return {
            status: 200,
            msg: 'Book added successfully'
        }
    }
    else {
        return {
            status: 400,
            msg: 'User not found'
        }
    }

}

const getFavouritesBooks = async (username, email) => {
    const user = await User.findOne({username, email}).populate('favouritesBooks')
    //console.log(user)
    if (!user) {
        console.log('Usuario no encontrado');
        return;
    }
    console.log('Libros favoritos del usuario:', user.favouritesBooks);
    return user.favouritesBooks
}

module.exports = {
    registerUser,
    loginUser,
    addBook,
    getFavouritesBooks
}