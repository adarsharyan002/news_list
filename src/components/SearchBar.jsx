

const SearchBar = ({setQuery,setText,text,query}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    
        if (!text) {
          console.log("Input is empty")
        } else {
          setQuery(text)
          setText("")
          
        }
      }
    return (
        <form
              onSubmit={handleSubmit}
              className="flex place-items-center container mx-auto lg:max-w-4xl mt-10 px-5"
            >
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Search for something..."
                autoComplete="off"
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full py-2 px-4 rounded bg-transparent border border-gray-700 focus:border-gray-600 transition-all duration-150 outline-none text-gray-700 placeholder-gray-700 text-xl lg:text-4xl lg:pb-4 mr-5"
              />
              
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-white border border-gray-700 text-xl lg:text-4xl py-2 px-6 rounded lg:pb-4 text-gray-700 hover:bg-transparent transition-all duration-150"
              >
                Search
              </button>
            </form>
    );
}
 
export default SearchBar;