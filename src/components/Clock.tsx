import { useEffect, useState } from 'react';

const Clock = () => {

  const [showTime, setShowTime] = useState(<div>TODAY: {new Date().toLocaleString()}</div>);
  useEffect(() => {
    setInterval(() => {
      setShowTime(<div>{new Date().toLocaleString().replaceAll("/","-")}</div>);

    }, 1000);

    return () => {

    }
  }, [showTime])

  return (


    <div style={{ justifyContent: "center", margin: 10, display: "flex", color: 'black' }}>

      {showTime}
    </div>
  )
}


export default Clock;