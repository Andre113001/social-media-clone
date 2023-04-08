import { CardGiftcard } from '@mui/icons-material'
import './Rightbar.css'
import Friends from './Friends/Friends'
import { Users } from '../../dummyData'

function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbar-wrapper">
        <div className="birthday-container">
          <CardGiftcard className='birthday-icon'/>
          <span className="birthday-text">
            <b>Andre Genorga</b> and  <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className='rightbar-ad' src="https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <h4 className="rightbar-title">
          Online Friends
      </h4>
      <ul className="rightbar-friend-list">
        {Users.map((u) => (
          <Friends key={u.id} user={u} />
        ))}
      </ul>
    </div>
  )
}

export default Rightbar
