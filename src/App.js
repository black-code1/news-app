import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

import News from "./components/News";

function App() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_NEWS_API}`
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
      <Nav />
      <div className="mt-5 mx-auto p-12 bg-gray-100">
        <div className="grid grid-cols-3 grid-rows-3 gap-12">
          {articles.length > 0 && articles.slice(0,9).map((article,index) => <News key={index} {...article} />)}
        </div>
          
      </div>
      
        <Footer/>
      
      
     
    </>
   
  );
}

export default App;
