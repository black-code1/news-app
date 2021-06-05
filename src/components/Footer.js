const Footer = () => (
  <div className="p-5 max-w-lg mx-auto">
      <div className="p-2">
        <h3 className="font-bold mb-1 text-center">Subscribe to our NewsLetter</h3>
        <p className="text-sm text-center mb-2">Sign up free and be the first to get notified about new posts.</p>
        <div className="text-center">
           <input type="text" placeholder="Your email adress" className="p-2 border-r-0 focus:outline-none focus:ring focus:border-gray-100" />
        <button>Subscribe</button> 
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