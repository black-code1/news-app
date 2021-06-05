const News = ({urlToImage,source, title, description, publishedAt}) => (

  <div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-full bg-white">
      <img 
      src={urlToImage}  
      alt={title}
      className="w-full" />
      <button className="bg-red-500 text-white text-sm mt-6 ml-2 py-1 px-2 rounded">{source.name}</button>
      <h1 className="ml-2 mt-1 font-bold">{title}</h1>
      <p className="ml-2 mt-2 text-sm text-gray-500">{description}</p>
      <div className="ml-2 mt-1 flex items-center">
      <img 
      src={urlToImage}  
      alt={title}
      className="h-8 w-8 rounded-full object-cover" />
        <span className="text-xs ml-1">David Smith</span>
        <span className="ml-1 h-1 w-1 bg-red-500 rounded-full"></span>
        <span className="text-xs ml-1">{publishedAt}</span>
      </div>
    </div>
    
  </div>



);


export default News;