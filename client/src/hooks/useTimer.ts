import React, { useState, useEffect, useMemo } from 'react'

const initialTime = { min: 0, sec: 10 }

function useTimer() {
     const [time, setTime] = useState(initialTime);

     function timeOver() {
          resetTimer();
     }

     function resetTimer() {
          setTime({ ...initialTime })
          clearInterval(id)
     }

     function startTimer(): number {
          return setInterval(() => {
               if (time.sec === 0) {
                    if (time.min > 0) {
                         time.min--;
                         time.sec = 60
                    }
               }

               if (time.sec == 0 && time.min == 0) return timeOver();

               time.sec--;
               setTime({ min: time.min, sec: time.sec })

          }, 1000)
     }

     let id: number;

     const timeString = useMemo(() => {
          return `${time.min < 10 ? "0" + time.min : time.min} : ${time.sec < 10 ? "0" + time.sec : time.sec} `
     }, [time])


     return [timeString, startTimer, resetTimer] as [string, () => number, () => void]

}

export default useTimer