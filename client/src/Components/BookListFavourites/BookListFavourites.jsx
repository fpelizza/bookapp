import axios from 'axios'
import React, {useContext, useEffect, useState} from 'react'
import { useGlobalContext } from '../../context'
import '../BookDetails/Bookdetails.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const BookListFavourites = () => {

    const [data, setData] = useState([])
    const {booksFavourites} = useGlobalContext()

    useEffect(()=> {
        const getData = async () => {
            try {
                const url = 'http://localhost:5000/favouritesBooks';
                const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiZmVybWlucGVsaXp6YSIsImVtYWlsIjoiZnBlbGl6emF0ZXN0QGdtYWlsLmNvbSIsImlkIjoiNjRjY2Y3ZGMwYzg5OWE3YjczYWVlNjZlIn0sImlhdCI6MTY5MTE2NDE5NSwiZXhwIjoxNjkxMTY1OTk1fQ.AgKAQdjHV2EikiB6iLmRIHhGe84ZAqH_-3VIuA8sjsg'; 
                const user = {
                    username: 'test1',
                    email: 'test1@gmail.com',
                };
                const response = await axios.post(url, user, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                      },
                } )
                setData(response.data)
            } catch (e) {
                console.error(e)
            }
        }
        getData()
    },[])
    

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', padding: '30px' }}>
        {data.map((item,index)=> {
            return (
                <Card sx={{ maxWidth: 345, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px'  }}>
                    <CardMedia
                        sx={{ height: 0, paddingTop: '56.25%', backgroundSize: 'contain' }}
                        image={item.cover_img}
                        title={item.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {item?.title}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                        {item?.year}
                        </Typography>
                    </CardContent>
                </Card>
            )
        })}

    </div>)
}

export default BookListFavourites