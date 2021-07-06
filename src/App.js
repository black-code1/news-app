import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Pagination from './components/Pagination';

import News from "./components/News";

function App() {

  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(9);

  //fe81ab5fd99742d3b37c71dd20014868
  /*  axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_NEWS_API}`
      )*/
  useEffect(() => {
    axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=fe81ab5fd99742d3b37c71dd20014868"
      )
      .then(
        (data) => {
          //console.log(data.data.articles); 
          setArticles(data.data.articles)
          console.log(articles.length)
        })
      .catch(
        (error) => { 
          console.log(error)
        })
  },[])

  //Get current news
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
  /*{articles.length > 0 && articles.slice(0,9).map((article,index) => <News key={index} {...article} />)} */

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber)
  return (
    <>
      <Nav />
      <div className="mt-5 mx-auto p-12 bg-gray-100">
        <div className="flex flex-col items-center space-y-20 lg:grid-cols-3 lg:grid-rows-3 md:space-y-0 md:grid md:gap-12  md:grid-cols-2">
          {currentArticles.length > 0 && currentArticles.map((currentArticle,index) => <News key={index} {...currentArticle} />)}
        </div>

        <Pagination articlesPerPage={articlesPerPage} totalArticles={articles.length} paginate={paginate}/>
          
      </div>
      
        <Footer/>
      
      
     
    </>
   
  );
}

export default App;
