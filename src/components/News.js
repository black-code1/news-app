const News = ({urlToImage,source, title, description, publishedAt}) => {

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  const publishedAtDateFormat = new Date(publishedAt)
  const publishedAtDateFormatFullYear = publishedAtDateFormat.getFullYear();
  const publishedAtDateFormatMonth = monthNames[publishedAtDateFormat.getMonth()]
  const publishedAtDateFormatDate = publishedAtDateFormat.getDate()

  return (
  <div>
    <div className="px-6 py-8 max-w-sm rounded-xl shadow-xl bg-white">
      <img 
      src={urlToImage}  
      alt={title}
      className="-mt-16 rounded-xl shadow-xl transform transition duration-500 hover:scale-110" />
      <button className="bg-red-500 text-white text-xs mt-6 ml-2 py-1 px-2 rounded-2xl">{source.name}</button>
      <h1 className="mt-1 font-bold">{title}</h1>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
      <div className="mt-1 flex items-center">
      <img 
      src={urlToImage}  
      alt={title}
      className="h-8 w-8 rounded-full object-cover" />
        <span className="text-xs ml-1">David Smith</span>
        <span className="ml-1 h-1 w-1 bg-red-500 rounded-full"></span>
        <span className="text-xs ml-1">{publishedAtDateFormatMonth + " " + publishedAtDateFormatDate + ", " + publishedAtDateFormatFullYear} </span>
      </div>
    </div>
    
  </div>
  )
}

export default News;