/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState } from "react";


const Menu = () => {
 
 
  const [showDropdownStateBlog, setShowDropDownStateBlog] = useState(false);
  const [showDropdownStatePost, setShowDropDownStatePost] = useState(false);
  const [showDropdownStatePage, setShowDropDownStatePage] = useState(false);

  const showDropDownMenuBlog = (event) => {
      setShowDropDownStateBlog(true);
    }
   const hideDropDownMenuBlog = (event) => {
      

      setShowDropDownStateBlog(false);
    }

    const showDropDownMenuPost = (event) => {
      setShowDropDownStatePost(true);
    }
   const hideDropDownMenuPost = (event) => {
      

      setShowDropDownStatePost(false);
    }
  
    const showDropDownMenuPage = (event) => {
      setShowDropDownStatePage(true);
    }
   const hideDropDownMenuPage = (event) => {
      

      setShowDropDownStatePage(false);
    }
  return (

    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-2 items-center mt-5">
      <div className="justify-self-end space-x-4 text-sm font-semibold">
        <a className="hover:text-red-400 fill-current" href="#">Home<svg className="inline-block h-3 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
         
        </a>
        <span onMouseEnter={showDropDownMenuBlog} onMouseLeave={hideDropDownMenuBlog}>

        <a className="hover:text-red-400 fill-current relative" href="#">Blog<svg className="inline-block h-3 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
          <ul onMouseLeave={hideDropDownMenuBlog} className={(showDropdownStateBlog ? "visible":"invisible") +" absolute bg-white p-4 space-y-2 mt-4 ml-8 z-10 inset-x-0 w-max shadow-lg"} >
            <li className="text-black text-xs hover:text-red-400"><a href="#">Blog Grid</a></li>
            <li className="text-black text-xs hover:text-red-400"><a href="#">Blog Masonry</a></li>
            <li className="text-black text-xs hover:text-red-400"><a href="#">Blog List</a></li>
          </ul>
        </a>
        </span>
        <span onMouseEnter={showDropDownMenuPost} onMouseLeave={hideDropDownMenuPost}>
        <a className="hover:text-red-400 fill-current relative" href="#">Posts Features<svg className="inline-block h-3 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
        <ul onMouseLeave={hideDropDownMenuPost} className={(showDropdownStatePost ? "visible":"invisible") +" absolute bg-white p-4 space-y-2 mt-4 ml-8 z-10 inset-x-0 w-max shadow-lg"} >
            <li className="text-black text-xs hover:text-red-400"><a href="#">Post Default</a></li>
            <li className="text-black text-xs hover:text-red-400"><a href="#">Post Video</a></li>
            <li className="text-black text-xs hover:text-red-400"><a href="#">Post Auio</a></li>
            <li className="text-black text-xs hover:text-red-400"><a href="#">Post Gallery</a></li>
            <li className="text-black text-xs hover:text-red-400"><a href="#">Post No Sidebar</a></li>
            <li className="text-black text-xs hover:text-red-400"><a href="#">Post Left Sidebar</a></li>
          </ul>
        </a>
        </span>
        <span onMouseEnter={showDropDownMenuPage} onMouseLeave={hideDropDownMenuPage}>
        <a className="hover:text-red-400 fill-current relative" href="#">Pages<svg className="inline-block h-3 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
        <ul onMouseLeave={hideDropDownMenuPage} className={(showDropdownStatePage ? "visible":"invisible") +" absolute bg-white p-4 space-y-2 mt-4 ml-8 z-10 inset-x-0 w-max shadow-lg"} >
            <li className="text-black text-xs hover:text-red-400"><a href="#">About</a></li>
            <li className="text-black text-xs hover:text-red-400"><a href="#">Author</a></li>
            <li className="text-black text-xs hover:text-red-400"><a href="#">Login</a></li>
            <li className="text-black text-xs hover:text-red-400"><a href="#">Sign Up</a></li>
            <li className="text-black text-xs hover:text-red-400"><a href="#">Page 404</a></li>
          </ul>
        </a>
        </span>
        <a className="hover:text-red-400" href="#">Contact</a>
      </div>
      
        <div className="justify-self-end">
          <button className="bg-white border border-current w-12 h-5 p-3 rounded-full relative bottom-1 right-1">
            <span className="bg-black w-5 h-5 p-3 absolute inset-0 rounded-full"></span>
          </button>
          <a className="hover:text-red-400 fill-current" href="#">
            <svg className="inline-block h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
          </a>
          <a className="hover:text-red-400 fill-current" href="#">
            <svg className="inline-block h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a className="hover:text-red-400 fill-current" href="#">
            <svg className="inline-block h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </a>
          <a className="hover:text-red-400 fill-current" href="#">
            <svg className="inline-block h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
          </a>
          <a className="inline-block p-2 bg-red-400 rounded-full fill-current text-white" href="#">
            <svg className="inline-block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg>
          </a>
       
        </div>
       
    </div>
    </div>
    
  )
}

export default Menu;