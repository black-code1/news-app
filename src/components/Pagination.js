const Pagination = ({articlesPerPage, totalArticles, paginate}) => {
  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++){
    pageNumbers.push(i);
  }
  return (
      
        <ul className="mt-6 max-w-xs mx-auto">
        {pageNumbers.map(number => (
          <li className="inline-block ml-3 " key={number}>
            <a className="bg-red-500 text-white text-center inline-block h-10 w-10 pt-2 rounded-full" onClick={() => paginate(number)} href="!#">{number}</a>
          </li>
        ))}
        </ul>
  )
}

export default Pagination;