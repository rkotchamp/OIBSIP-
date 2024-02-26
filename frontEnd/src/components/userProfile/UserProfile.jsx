import profilepic from "/images/renderinImages/jeremie-aubut-mXu1SpzHq6w-unsplash.jpg";
import "./UserProfile.css";

function UserProfile() {
  return (
    <div className="profile__container">
      <h3>Admin Profile</h3>
      <div className="avatarAndName">
        <div className="avatar__container">
          <div className="firstCircle">
            <img src={profilepic} alt="" className="profileImage" />
          </div>
        </div>
        <p>Jones Adnan</p>
      </div>
      <form action="" className="userForm">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Jones Adnan"
            className="userName inputs"
          />
        </div>
        <div className="inputContainer">
          <input
            type="password"
            placeholder="Pass********"
            className="password inputs"
          />
        </div>
        <button className="userButton">Save Changes</button>
      </form>
    </div>
  );
}

export default UserProfile;
