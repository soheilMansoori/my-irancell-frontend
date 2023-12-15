import { useContext, useEffect, useState } from 'react'
import './ProfileBox.css'
import useGetStorage from '../../../HOOKS/usegetStorage/useGetStorage'
import userContext from '../../../contexts/userContext'

export default function ProfileBox() {
    const { userData } = useContext(userContext)

    return (
        <>

            <div className="profile-box flex align-items-center">
                <div className="profile-wrapper flex">
                    <img
                        src="img/profile.jpg"
                        alt="Profile"
                        className="user-profile"
                    />
                </div>
                <div className="profile-box-desc flex flex-column">
                    <h1 className="user-name"> سلام ,{userData && userData.firstname} {userData && userData.lastname} </h1>
                    <h5 className="user-number">{userData && userData.phone}</h5>
                </div>
            </div>


        </>
    )
}
