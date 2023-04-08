import { CardGiftcard } from '@mui/icons-material'
import './Rightbar.css'
import Friends from './Friends/Friends'
import { Users } from '../../dummyData'

function Rightbar({profile}) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthday-container">
          <CardGiftcard className='birthday-icon'/>
          <span className="birthday-text">
            <b>Andre Genorga</b> and  <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className='rightbar-ad' src="https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <h4 className="rightbar-title">
            Online Friends
        </h4>
        <ul className="rightbar-friend-list">
          {Users.map((u) => (
            <Friends key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className='right-bar-title' >
          User Information
        </h4>
        <div className="right-bar-info">
          <div className="right-bar-info-item">
            <span className="right-bar-info-key">
              City:
            </span>
            <span className="right-bar-info-value">
              Manchester, UK
            </span>
          </div>
          <div className="right-bar-info-item">
            <span className="right-bar-info-key">
              From:
            </span>
            <span className="right-bar-info-value">
              London
            </span>
          </div>
          <div className="right-bar-info-item">
            <span className="right-bar-info-key">
              Relationship:
            </span>
            <span className="right-bar-info-value">
              Single
            </span>
          </div>
        </div>
        <h4 className="right-bar-title">
          User Friends
        </h4>
        <div className="right-bar-followings">
          <div className="right-bar-following">
            <img className='right-bar-following-img' src="https://static.onecms.io/wp-content/uploads/sites/6/2013/01/billy-joe-armstrong_510x380.jpg" alt="" />
            <span className="right-bar-following-name">
              Billie Joe Armstrong
            </span>
          </div>
          <div className="right-bar-following">
            <img className='right-bar-following-img' src="https://static.onecms.io/wp-content/uploads/sites/6/2013/01/billy-joe-armstrong_510x380.jpg" alt="" />
            <span className="right-bar-following-name">
              Billie Joe Armstrong
            </span>
          </div>
          <div className="right-bar-following">
            <img className='right-bar-following-img' src="https://static.onecms.io/wp-content/uploads/sites/6/2013/01/billy-joe-armstrong_510x380.jpg" alt="" />
            <span className="right-bar-following-name">
              Billie Joe Armstrong
            </span>
          </div>
          <div className="right-bar-following">
            <img className='right-bar-following-img' src="https://static.onecms.io/wp-content/uploads/sites/6/2013/01/billy-joe-armstrong_510x380.jpg" alt="" />
            <span className="right-bar-following-name">
              Billie Joe Armstrong
            </span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbar-wrapper">
        <ProfileRightBar />
      </div>
    </div>
  )
}

export default Rightbar
