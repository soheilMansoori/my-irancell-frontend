import { useEffect, useState } from 'react'
import useGetStorage from '../../HOOKS/usegetStorage/useGetStorage'
import './CenterSideHome.css'
import Chart from './Chart/Chart'
export default function CenterSideHome() {
  const [userToken] = useGetStorage("user-token")
  const [packets, setPackets] = useState('')
  useEffect(() => {
    fetch('http://localhost:8080/api/recommend-packs', {
      headers: {
        jwt: userToken
      }
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setPackets(data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <main className="main">
        <h1 className="main-title lalezar-font">صفحه اصلی</h1>

        <section className="main-overlay flex flex-column">
          <h1 className="lalezar-font">اینهمه بسته بی سابقست !</h1>
          <button>اینجا چه خبره!</button>
        </section>

        <section className="chart">
          <h1 className="lalezar-font">نمودار میزان مصرف کل</h1>
          <Chart />
        </section>

        <section className="recommend-packets">
          <h1 className="recommend-packets-title">بسته های پیشنهادی مخصوص خود شما</h1>

          <table className="recommend-packets-table">
            <thead>
              <tr className="vazir-fb">
                <th>تاریخ انقضای بسته</th>
                <th>نام بسته</th>
                <th>تخفیف</th>
                <th>قیمت</th>
              </tr>
            </thead>

            <tbody>
              {packets && packets.map(packet => (
                <tr key={packet.id}>
                  <td>{packet.max_date}</td>
                  <td>{packet.title}</td>
                  <td>{packet.off} %</td>
                  <td>{packet.price}</td>
                  <td>
                    <button className='buy-packet-btn lalezar-font'> خرید </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </section>
      </main>
    </>
  )
}
