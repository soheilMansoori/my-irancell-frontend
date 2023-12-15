import React, { useEffect, useState } from 'react'
import './Packets.css'
import useGetStorage from '../../HOOKS/usegetStorage/useGetStorage'
export default function Packets() {
    const [packets, setPackets] = useState('')
    const [userToken] = useGetStorage('user-token')
    useEffect(() => {
        fetch('http://localhost:8080/api/user-buy', {
            headers: {
                jwt: userToken
            }
        })
            .then(res => res.json())
            .then(data => {
                setPackets(data)
            })
            .catch(err => console.log(err.message))
    }, [])
    return (
        <main class="main">
            <section class="recommend-packets">
                <h1 class="recommend-packets-title lalezar-font">خرید های من</h1>

                <table class="recommend-packets-table">
                    <thead>
                        <tr class="vazir-fb">
                            <th>تاریخ خرید</th>
                            <th>تاریخ انقضای بسته</th>
                            <th>نام بسته</th>
                            <th>تخفیف</th>
                            <th>قیمت</th>
                        </tr>
                    </thead>
                    <tbody>
                        {packets && packets.map(packet => (
                            <tr class="vazir-fb">
                                <td>{packet.buy_date}</td>
                                <td>{packet.max_date}</td>
                                <td>{packet.title}</td>
                                <td>{packet.off}</td>
                                <td>$ {packet.price}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </section>
        </main>
    )
}
