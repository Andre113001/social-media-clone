import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import './Profile.css' 
import Rightbar from '../../components/rightbar/Rightbar'

function Profile() {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profile-right">
            <div className="profile-right-top">
              <div className="profile-cover">
              <img className='profile-cover-img' src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <img className='profile-user-img' src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Festival_des_Vieilles_Charrues_2018_-_Liam_Gallagher_-_013.jpg" alt="" />
            </div>
            <div className="profile-info">
              <h4 className="profile-info-name">
                Liam Gallagher
              </h4>
              <span className="profile-info-desc">
                1 minute is 60 seconds
              </span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
