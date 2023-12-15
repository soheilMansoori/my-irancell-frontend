import { useEffect, useState } from "react";

export default function useGetStorage(key) {
    const [data,setData] = useState(JSON.parse(localStorage.getItem(key)))
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem(key)))
    },[key])
    return [data]
}
