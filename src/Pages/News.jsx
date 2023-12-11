import SearchBar from "../components/SearchBar";
import Posts from "../components/posts";
import { useEffect,useState } from "react";
import axios from 'axios';


const News = () => {

    const [items, setItems] = useState([])
    const [query, setQuery] = useState("programming")
    const [text, setText] = useState("")
    const [largeTitle, setLargeTitle] = useState([])
    const [isLoading, setIsLoading] = useState(true) 

    let props = {
        items,
        query,
        text,
        largeTitle,
        setItems,
        setQuery,
        setLargeTitle,
        setText



        }

    useEffect(() => {
        setIsLoading(true)
    
        const fetchNews = async () => {
            const url = `https://hn.algolia.com/api/v1/search?query=${query}`;
            try {
              const response = await axios.get(url);
              console.log(response)
              const data = response.data;
             
              // Uncomment the line below to limit the number of items in your response.
              // data.hits.length = 10;
              setItems(data.hits);
              setLargeTitle(data.hits[0]);
            } catch (error) {
              // Handle errors here
              console.error('Error fetching news:', error);
            }
          };
    
        fetchNews()
        setIsLoading(false)
      }, [query])
    return ( 
        <>
        <main>
        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          <>
            {/* Search form */}
           <SearchBar {...props}/>
            {/* End of search form */}

           <Posts {...props}/>
          </>
        )}
      </main>
        {/* <SearchBar/>
        <Posts/> */}
        </>
     );
}
 
export default News;