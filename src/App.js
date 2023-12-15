import userContext from './contexts/userContext'
import useGetStorage from "./HOOKS/usegetStorage/useGetStorage";
import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import LeftSideHome from "./components/LeftSideHome/LeftSideHome";
import RightSideHome from "./components/RightSideHome/RightSideHome";
import router from "./routes/router";

function App() {
  const routes = useRoutes(router)
  const [userData, setUserData] = useState('')
  const [userToken] = useGetStorage('user-token')

  useEffect(() => {
    fetch('http://localhost:8080/api/user', {
      headers: {
        jwt: userToken
      }
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        // console.log(data)
        setUserData(data[0])
      })
      .catch(err => console.log(err.message))
  }, [userToken])

  return (
    <>
      <userContext.Provider value={{
        userData, setUserData
      }}>
        <LeftSideHome />
        {routes}
        <RightSideHome />
      </userContext.Provider>
    </>
  );
}

export default App;
