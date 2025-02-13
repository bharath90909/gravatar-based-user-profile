# Gravatar Profile App 

## Overview  
A **React-based** profile card generator that fetches user details from **Gravatar API** based on email input. If the user has no Gravatar profile, it falls back to the entered form data.  

## Features  
✅ Fetches user data from **Gravatar API**  
✅ Displays **profile picture, name, username, location, email, phone number, bio, and website**  
✅ Shows **loading skeleton** while fetching data  
✅ **Responsive UI** with modern styling  

## Tech Stack  
- **React (Vite)** – Frontend framework  
- **CSS** – For modern and maintainable styling
- **Gravatar API** – Fetches user profile details  
- **MD5 Hashing** – Converts email to Gravatar hash
- **React Hook Form** - For handling form data
- **Zod** - For form validation

## How It Works  
1. **User enters details** in the profile form  
2. The app **fetches Gravatar data** using the provided email  
3. If **Gravatar profile exists**, it is displayed; otherwise, **form data is used as fallback**  
4. **Profile card appears** with details + **"Visit Profile"** button  

## Demo & Deployment
- **Video Walkthrough** : https://youtu.be/vMnALOjtqrk
- **Live Deployment** : https://keen-cheesecake-b3ef29.netlify.app/

## Installation & Setup  
- Clone the repository and install dependencies:  
- git clone https://github.com/bharath90909/gravatar-based-user-profile.git
- cd gravatar-profile-app
- npm install
- npm install react-hook-form zod @hookform/resolvers
- npm install blueimp-md5
- npm start

