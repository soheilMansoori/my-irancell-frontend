import { useContext, useEffect, useState } from 'react'
import './LeftMenu.css'
import userContext from '../../../contexts/userContext'

export default function LeftMenu() {
    const { userData } = useContext(userContext)
    const [services, setServices] = useState('')
    useEffect(() => {
        fetch('http://localhost:8080/api/services/1')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setServices(data)
            })
            .catch(err => console.log(err.message))

    }, [])
    return (
        <div className='sim-card-charge-box'>
            <div className='sim-card-charge-title'> شارژ باقی مانده سیمکارت </div>

            <div className="flex flex-column align-items-center">
                <div className="charge-progress progress-10">
                    <div className="overlay">{userData && userData.charge} تومان</div>
                </div>

                <button className="charge-btn lalezar-font">
                    سیم کارتت رو شارژ کن !
                </button>
            </div>


            <h1 className='service-title'> خدمات فعال </h1>
            {services && services.map(servic => (
                <div className='active-service-box vazir-fb ' key={servic.id}>
                    <span className='active-service-icon '>
                        <i className={servic.icon} />
                    </span>
                    <div className="avtice-service-box-desc">
                        <h4> {servic.title} </h4>
                        <h6> {servic.max_date} </h6>
                    </div>
                </div>

            ))}

            <div className="download-app-box flex align-items-center ">
                <h1> اپیلیکیشن مارو دانلود کنید ! </h1>
                <img src="./img/myirancell.png" />
            </div>

        </div>

    )
}
