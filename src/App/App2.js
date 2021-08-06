import React, { useState, useEffect } from "react";

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            // console.log(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
        return (
    //     <div>Hello
          
    //       {console.log(items.id)}
    //   </div>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.thumbnailUrl} 
              {/* {item.description} */}
            </li>
          ))}
        </ul>
      );
    }
}

export default App;
