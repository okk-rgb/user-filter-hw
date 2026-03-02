import React from 'react'
import { MdContentPasteSearch } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Header = ({find, setFind}) => {
  return (
    <header>
      {/* <Link>Logo</Link> */}

      <nav>
        <ul>
          <li>
            {/* <Link>Contact</Link> */}
          </li>
          <li>
            {/* <Link>About us</Link> */}
          </li>
          <li>
            {/* <Link>Privacy</Link> */}
          </li>
          <li>
            {/* <Link>Group</Link> */}
          </li>
        </ul>
      </nav>

      <div className="search">
        <input
        value={find}
        onChange={(e) => setFind(e.target.value)}

         type="text" placeholder='Find recipe...' />

         <button>
          <MdContentPasteSearch/>
         </button>

      </div>
    </header>
  )
}

export default Header
