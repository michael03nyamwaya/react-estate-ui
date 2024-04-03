import Chart from "../../components/chat/Chat";
import Lists from "../../components/myList/Lists";
import "./profilePage.scss";

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </span>
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>
              E-mail: <b>john@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <Lists />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <Lists />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chart/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;