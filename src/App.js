import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

import News from "./components/News";

function App() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=fe81ab5fd99742d3b37c71dd20014868"
      )
      .then(
        (data) => {
          console.log(data.data.articles); 
          setArticles(data.data.articles)
        })
      .catch(
        (error) => { 
          console.log(error)
        })
  },[])
  return (
    <>
      
      <div className="mt-12 mx-auto p-12 bg-gray-100">
        <div className="grid grid-cols-3 grid-rows-3 gap-12">
          {articles.length > 0 && articles.slice(0,9).map((article,index) => <News key={index} {...article} />)}
        </div>
          
      </div>

      <Footer/>
     
    </>
   
  );
}

export default App;
