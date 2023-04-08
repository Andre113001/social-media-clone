import './Sidebar.css'
import { AutoAwesome, Feed, TrendingUp, Whatshot, LocalLibrary } from '@mui/icons-material'
import CloseFriend from '../closefriend/CloseFriend'
import { Users } from '../../dummyData'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <Feed className='sidebar-list-icon' />
            <span className="sidebar-list-text">
              Feed
            </span>
          </li>
          <li className="sidebar-list-item">
            <AutoAwesome className='sidebar-list-icon' />
            <span className="sidebar-list-text">
              Discover
            </span>
          </li>
          <li className="sidebar-list-item">
            <Whatshot className='sidebar-list-icon' />
            <span className="sidebar-list-text">
              Trending
            </span>
          </li>
          <li className="sidebar-list-item">
            <LocalLibrary className='sidebar-list-icon' />
            <span className="sidebar-list-text">
              Communities
            </span>
          </li>
        </ul>
        <button className="sidebar-button">
          Show More
        </button>
        <hr className='sidebar-hr'/>
        <ul className="sidebar-friend-list">
          {Users.map((u) => (
            <CloseFriend key={u.id} user ={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
