const Footer = () => (
  <div className="p-5 max-w-lg mx-auto">
      <div className="p-2">
        <h3 className="font-bold mb-1 text-center">Subscribe to our NewsLetter</h3>
        <p className="text-sm text-center mb-2">Sign up free and be the first to get notified about new posts.</p>
        <div className="text-center flex">
           <input type="text" placeholder="Your email adress" className="w-full border border-gray-300 px-3 py-2 rounded-full shadow-sm focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-200" />
        <button className="bg-red-500">Subscribe</button> 
        </div>
      
      </div>
      <div>
        <span>Facebook</span>
        <span>Twitter</span>
        <span>Instagram</span>
        <span>Youtube</span>
      </div>
  </div>
)
  


export default Footer;