


import  {useEffect,useState} from "react"
import axios from 'axios'
import { useParams } from 'react-router-dom';


const Details = () => {


     const [itemDetails,setItemDetails]=useState(null)
     const [comments,setComments]=useState(null)
     const {id} = useParams();

     console.log(comments)

    useEffect(() => {
       
        const fetchNews = async () => {
            const url = `http://hn.algolia.com/api/v1/items/${id}`;
            try {
              const response = await axios.get(url);
              const data = response.data;
              // Uncomment the line below to limit the number of items in your response.
              // data.hits.length = 10;
             
             setItemDetails(data);
             setComments(data?.children.slice(0, 10));

            } catch (error) {
              // Handle errors here
              console.error('Error fetching news:', error);
            }
          };
    
        fetchNews()
        
      }, [id])
    return ( 
    <>{itemDetails 
        &&
        <div>
        <p>
            {itemDetails.points}
        </p>
        <p>{itemDetails.title}</p>
        </div>
        
        }
        <div>
            <h1>All comments</h1>
        { comments?.map((comment,i)=>{
            return <p key={i}>{comment.text}</p>

        })}
        </div>
        
        
    </> );
}
 
export default Details;