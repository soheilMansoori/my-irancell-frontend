import './RightSideHome.css'
import { NavLink } from "react-router-dom";
export default function RightSideHome() {
  return (
    <>
      <div className="sidebar flex align-items-center flex-column">
        <h1 className="sidebar-brand flex align-items-center">
          <img src="img/logo.svg" alt="Logo" width="40" />
          <span className="lalezar-font">
            ایرانسل من
          </span>
        </h1>

        <div className="search-group flex align-items-center justify-content-between">
          <input type="text" className="search-input" placeholder="جست و جو" translate="no" autocomplete="off" />
          <span className="search-input-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>

        <ul className="sidebar-menu">
          <NavLink to='/'
            className={(page) => `sidebar-menu-item flex align-items-center ${page.isActive && "active"}`}
          >
            <span>
              <i className="fa-solid fa-house"></i>
            </span>
            <a href="#">صفحه اصلی</a>
          </NavLink>
          <li className="sidebar-menu-item-breaker">سرویس ها</li>
          <NavLink to='/packets'
            className={(page) => `sidebar-menu-item flex align-items-center ${page.isActive && "active"}`}
          >
            <span>
              <i className="fa-solid fa-chart-pie"></i>
            </span>
            <a href="packets.html">خرید های من</a>
          </NavLink>
          <li className="sidebar-menu-item flex align-items-center">
            <span>
              <i className="fa-solid fa-chart-column"></i>
            </span>
            <a href="#">کارکرد و فروش</a>
          </li>
          <li className="sidebar-menu-item flex align-items-center">
            <span>
              <i className="fa-solid fa-bell"></i>
            </span>
            <a href="#">خدمات</a>
          </li>
          <li className="sidebar-menu-item-breaker">مدیریت</li>
          <li className="sidebar-menu-item flex align-items-center">
            <span>
              <i className="fa-solid fa-bell"></i>
            </span>
            <a href="#">مدیریت خدمات</a>
          </li>
          <li className="sidebar-menu-item flex align-items-center">
            <span>
              <i className="fa-solid fa-bell"></i>
            </span>
            <a href="#">مدیریت سیمکارت</a>
          </li>

          <li className="sidebar-menu-item flex align-items-center space-top">
            <span>
              <i className="fa-solid fa-bell"></i>
            </span>
            <a href="#">سوالات متداول</a>
          </li>
          <li className="sidebar-menu-item flex align-items-center">
            <span>
              <i className="fa-solid fa-bell"></i>
            </span>
            <a href="#">ارتباط با ما</a>
          </li>

        </ul>
      </div >
    </>
  )
}
