import { useState } from "react";
import Form from "./components/Form";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [profileData, setProfileData] = useState(null);
  const handleFormSubmit = (data) => {
    setProfileData(data);
  };

  return (
    <div className="app-container">
      {!profileData ? (
        <Form onSubmit={handleFormSubmit} />
      ) : (
        <ProfileCard formData={profileData} />
      )}
    </div>
  );
}

export default App;
