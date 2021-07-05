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
        <div className="flex flex-col items-center space-y-20 lg:grid-cols-3 lg:grid-rows-3 md:space-y-0 md:grid md:gap-12  md:grid-cols-2">
          {articles.length > 0 && articles.slice(0,9).map((article,index) => <News key={index} {...article} />)}
        </div>
          
      </div>
      
        <Footer/>
      
      
     
    </>
   
  );
}

export default App;
