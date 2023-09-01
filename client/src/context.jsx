/* eslint-disable react/prop-types */
import axios from 'axios';
import React, {useState, useContext, useEffect} from 'react';
import { useCallback } from 'react';
const URL = "http://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("the lost world");
    const [books, setBooks] = useState([]);
    const [booksFavourites, setBooksFavourites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");
    const [token, setToken] = useState('')

    const fetchBooks = useCallback(async() => {
        setLoading(true);
        try{
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            const {docs} = data;   
            console.log(docs);

            if(docs){
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    const {key, author_name, cover_i, edition_count, first_publish_year, title} = bookSingle;

                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title
                    }
                });

                setBooks(newBooks);

                if(newBooks.length > 1){
                    setResultTitle("Your Search Result");
                } else {
                    setResultTitle("No Search Result Found!")
                }
            } else {
                setBooks([]);
                setResultTitle("No Search Result Found!");
            }
            setLoading(false);
        } catch(error){
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    const setUserToken = (token) => {
        setToken(token)
    }

    const addFavourite = async (book) => {
        console.log(book)
        const url = 'http://server:8080/addFavouriteBook';
        const bookToAdd = {
            "username": "test1",
            "title": book.title,
            "authors": book.author,
            "year": book.first_publish_year,
            "cover_img": book.cover_img
        }
        const response = await axios.post(url, bookToAdd, {
            headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
        })
        setBooksFavourites([...booksFavourites, book])
    }

    return (
        <AppContext.Provider value = {{
            loading, books, setSearchTerm, resultTitle, setResultTitle,addFavourite, booksFavourites, setUserToken, token
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};