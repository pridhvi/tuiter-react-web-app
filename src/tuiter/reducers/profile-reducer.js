import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstName: 'Pridhvi', lastName: 'Muthuraju', handle: '@pridhvi',
    profilePicture: '/images/owner.jpg', bannerPicture: '/images/banner.png',
    bio: 'I\'m a passionate cybersecurity graduate student with solid software development skills and a keen interest in network security.',
    website: 'https://pridhvi.net/',
    location: 'Boston, MA', dateOfBirth: 'June 22, 1998', dateOfBirthbkp: '6/22/1998',dateJoined: 'April 2018', dateJoinedbkp: '4/2018',
    followingCount: 878, followersCount: 1185
}

const ProfileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        updateProfile(state, action) {
            return {
                ...state,
                ...action.payload
            }
        }
    }
});

export const { updateProfile } = ProfileSlice.actions

export default ProfileSlice.reducer