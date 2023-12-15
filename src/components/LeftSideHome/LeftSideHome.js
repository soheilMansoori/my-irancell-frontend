import LeftMenu from './LeftMenu/LeftMenu'
// import './LeftSideHome.css'
import ProfileBox from './ProfileBox/ProfileBox'

export default function LeftSideHome() {
  return (
    <>
      <div className="left-side lalezar-font">
        <ProfileBox />
        <LeftMenu />
      </div>
    </>
  )
}
