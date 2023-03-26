import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstName: 'Pridhvi', lastName: 'Muthuraju', handle: '@pridhvi',
    profilePicture: '/images/owner.jpg', bannerPicture: '/images/banner.png',
    bio: 'I\'m a passionate cybersecurity graduate student with solid software development skills and a keen interest in network security.',
    website: 'pridhvi.net',
    location: 'Boston, MA', dateOfBirth: 'March 27, 1998', dateOfBirthbkp: '3/27/1998',dateJoined: 'April 2018', dateJoinedbkp: '4/2018',
    followingCount: 878, followersCount: 1185
}

const ProfileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {}
});

export const { } = ProfileSlice.actions

export default ProfileSlice.reducer