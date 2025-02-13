import React, { useEffect, useState } from "react";
import md5 from "blueimp-md5";
import fallBackImg from "../assets/user-image.png";
import "../ui/css/ProfileCard.css";
import Loader from "./Loader";

function ProfileCard({ formData }) {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchProfile() {
    const hash = md5(formData.email.trim().toLowerCase());
    const gravatarUrl = `https://en.gravatar.com/${hash}.json`;

    try {
      // fetching user gravatar details
      const response = await fetch(gravatarUrl);
      if (!response.ok) throw new Error("No Gravatar profile found");

      const data = await response.json();
      const gravatarProfile = data.entry[0];

      setProfileData({
        avatar: gravatarProfile.thumbnailUrl || fallBackImg,
        fullName: gravatarProfile.displayName || formData.fullName,
        username: gravatarProfile.preferredUsername || formData.username,
        location: gravatarProfile.currentLocation || formData.location,
        email: gravatarProfile.emails[0].value || formData.email,
        phone: gravatarProfile.phoneNumbers[0].value || formData.phone,
        bio: gravatarProfile.aboutMe || formData.bio,
        website: gravatarProfile.accounts[0].url || formData.website,
      });
    } catch (error) {
      // if email is not registered with gravatar then setting profile data with form data itself
      setProfileData({
        ...formData,
        avatar: fallBackImg, // using fallBackImage
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProfile();
  }, [formData.email]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="profile-card">
      <img
        src={profileData.avatar}
        alt="Profile"
        className="profile-card__avatar"
      />
      <h2 className="profile-card__name">{profileData.fullName}</h2>
      <p className="profile-card__username">@{profileData.username}</p>
      <p className="profile-card__location">
        <i className="fa-solid fa-location-dot"></i>
        {profileData.location}
      </p>
      <p className="profile-card__email">
        <i className="fa-solid fa-envelope"></i>
        {profileData.email}
      </p>
      <p className="profile-card__phone">
        <i className="fa-solid fa-phone"></i>
        {profileData.phone}
      </p>
      <p className="profile-card__bio">{profileData.bio}</p>
      {profileData.website && (
        <a
          href={profileData.website}
          className="profile-card__website"
          target="_blank"
        >
          Visit Website
        </a>
      )}
    </div>
  );
}

export default ProfileCard;
