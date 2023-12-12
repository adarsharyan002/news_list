


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
        <>
          {itemDetails &&
            <div className="p-4 border border-gray-300 rounded mb-4">
              <p className="text-xl font-bold text-teal-500">{itemDetails.points}</p>
              <p className="text-lg">{itemDetails.title}</p>
            </div>
          }
      
          <div>
            <h1 className="text-2xl font-bold mb-4 m-2 text-teal-500">All comments</h1>
            <ul className="list-disc pl-4 m-3">
            {comments?.map((comment, i) => {
              return (
                <li key={i} className="mb-2">{comment.text}</li>
              );
            })}
            </ul>
          </div>
        </>
      );
      
}
 
export default Details;