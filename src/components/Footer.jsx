import './Footer.css'
// import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='footer '>
           <div className='fcom'>
            <ul>
              <li className='font-bold mb-3 '><a href='#'>Hobbycue</a></li>
              <li className='hover:underline'><a href='#'>About Us</a></li>
              <li className='hover:underline'><a href='#'>Our Services</a></li>
              <li className='hover:underline'><a href='#'>Work with Us</a></li>
              <li className='hover:underline'><a href='#'>FAQ</a></li>
              <li className='hover:underline'><a href='#'>Contact Us</a></li>
            </ul>
           </div>

           <div className='fcomp'>
            <ul>
              <li className='font-bold mb-3 '><a href='#'>How Do I</a></li>
              <li className='hover:underline'><a href='#'>Sign Up</a></li>
              <li className='hover:underline'><a href='#'>Add a Listing</a></li>
              <li className='hover:underline'><a href='#'>Claim Listing</a></li>
              <li className='hover:underline'><a href='#'>Post a Query</a></li>
              <li className='hover:underline'><a href='#'>Add a Blog Post</a></li>
              <li className='hover:underline'><a href='#'>Other Queries</a></li>
            </ul>
           </div>

           <div className='fcomp'>
            <ul>
              <li className='font-bold mb-3 hover:underline'><a href='#'>Quick Links</a></li>
              <li className='hover:underline'><a href='#'>Listings</a></li>
              <li className='hover:underline'><a href='#'>Blog Posts</a></li>
              <li className='hover:underline'><a href='#'>Shop / Store</a></li>
              <li className='hover:underline'><a href='#'>Community</a></li>
            </ul>
           </div>

           <div className='fcomp'>
            <ul>
              <li className='font-bold mb-3 '><a href='#'>Social Media</a></li>
              <li className='flex'>
              <a href='#'><img className='' src='/104498_facebook_icon 1.png'/></a>
              <a href='#'><img className='ml-3' src='/Group 61.png'/></a>
              <a href='#'><img className='ml-3' src='/Group 62.png'/></a>
              <a href='#'><img className='ml-3' src='/Group 63.png'/></a>
              <a href='#'><img className='ml-3' src='/Group 59.png'/></a>
              <a href='#'><img className='ml-3' src='/Group 58.png'/></a>
              <a href='#'><img className='ml-3' src='/Group 57.png'/></a>
              <a href='#'><img className='ml-3' src='/Group 56.png'/></a>
              </li>
              <li className='font-bold mt-8'><a href='#'>Invite Friends</a></li>
              <li>
              <div className="flex items-center mt-3">
      <input
        type="email"
        placeholder="Email Id"
        className="p-2 w-56 border border-gray-300 rounded-md focus:outline-none"
      />
      <button
        className="invite-btn text-white bg-fuchsia-600 focus:outline-none p-2 "
      >
        invite
      </button>
    </div>
              </li>
              <li></li>
              <li></li>
            </ul>
           </div>

      </div>

      <div className='last-comp'>
        <h1 className='pt-3 pb-3'>© Purple Cues Private Limited</h1>
      </div>
      
    </>
  )
}

export default Footer