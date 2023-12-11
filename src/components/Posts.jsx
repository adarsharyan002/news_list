
import { format } from "date-fns"
import { Link } from "react-router-dom";


const Posts = ({largeTitle,query,items}) => {

    
    return ( 
        <>
         <article className="my-10 flex flex-col items-center justify-center container lg:max-w-4xl mx-auto px-5">
              <h1 className="font-bold text-center text-4xl my-5 text-white lg:text-6xl">
                {largeTitle.title}
              </h1>
              <a
                href={largeTitle.url}
                target="_blank"
                rel="noreferrer"
                className="border-b border-gray-700 text-gray-600 text-lg hover:text-gray-400 hover:border-gray-400"
              >
                Read Full Story
              </a>
            </article>

            <article className="container mx-auto lg:max-w-4xl px-5">
              <p className="text-gray-600">
                Category:{" "}
                <span className="font-bold text-gray-400 capitalize">
                  {query}
                </span>
              </p>
            </article>

            <section className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 container mx-auto lg:max-w-4xl">
              {items.map((item) => {
                const { author, created_at, objectID, title } = item

                return (
                  <article
                    key={objectID}
                    className="bg-gray-800 rounded p-3 transition-all duration-150"
                  >
                    <h3 className="font-bold text-white text-lg mb-3">
                      {title}
                    </h3>
                    <article className="flex items-center justify-between">
                      <p className="text-gray-600">
                        By <em>{author}</em>
                      </p>
                      <Link to={`/details/${objectID}`}>Read more</Link>
                    </article>
                    <p className="text-gray-400 mt-10">
                      {/* Format date using the `format` method from `date-fns` */}
                      {format(new Date(created_at), "dd MMM yyyy")}
                    </p>
                  </article>
                )
              })}
            </section>
        </>
     );
}
 
export default Posts;