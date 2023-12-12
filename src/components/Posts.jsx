import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const Posts = ({ largeTitle, query, items }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Update loading state when items are present
    if (items.length > 0) {
      setLoading(false);
    }
  }, [items]);

  return (
    <div className="bg-white">
      <article className="container mx-auto my-3 lg:max-w-4xl px-5">
        <p className="text-gray-600">
          Category:{" "}
          <span className="font-bold text-gray-400 capitalize">{query}</span>
        </p>
      </article>

      <section className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 container mx-auto lg:max-w-4xl">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          items.map((item) => {
            const { author, created_at, objectID, title } = item;

            return (
              <article
                key={objectID}
                className="bg-slate-100 shadow-md rounded p-3 transition-all duration-150"
              >
                <h3 className="font-semibold text-teal-500 text-xl mb-3">
                  {title}
                </h3>
                <article className="flex items-center justify-between">
                  <p className="text-gray-600">
                    By <em>{author}</em>
                  </p>
                  <Link to={`/details/${objectID}`}>Read more...</Link>
                </article>
                <p className="text-gray-400 mt-10">
                  {/* Format date using the `format` method from `date-fns` */}
                  {format(new Date(created_at), "dd MMM yyyy")}
                </p>
              </article>
            );
          })
        )}
      </section>
    </div>
  );
};

export default Posts;
