import "./profile.scss";
import Chart from "../../components/chat/Chart";
import Lists from "../../components/myList/Lists";

export default function Profile() {
  return (
    <div className="profile">
 <div className="details">
 <div className="wrapper">
  <div className="title">
    <h1>User Information</h1>
    <button>Update Profile</button>
  </div>
  <div className="info">
    <span>
      Avatar :<img src="avatar.jpg" alt=""/>
    </span>
    <span>Username: <b>Mike Dev</b></span>
    <span>Email: <b> mikedev@gmail.com</b></span>
  </div>
  <div className="title">
    <h1>My List</h1>
    <button>Create New Post</button>
  </div>
  <Lists/>
  <div className="title">
    <h1>Saved List</h1>
   
  </div>
  <Lists/>
 </div>
 </div>
 <div className="chatContainer">
  <div className="wrapper">
    <Chart/>
  </div>
 </div>
    </div>
  )
}
