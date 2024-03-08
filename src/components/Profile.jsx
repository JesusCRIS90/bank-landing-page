import ImageProfile from "./ImageProfile";

import "../styles/Profile.css";

function Profile({ ProfileData }) {
  const Image = ProfileData.Image;
  return (
    <div className="profile">
      <ImageProfile info={Image} />
      <div className="profile-data">
        <h6>{ProfileData.Name}</h6>
        <p>{ProfileData.Place}</p>
      </div>
    </div>
  );
}

export default Profile;
