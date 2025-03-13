import { useEffect, useState } from "react"
import './Time.css'

export default function Time() {
  const [value, setValue] = useState(0)
  const [minuteToHour, setMinuteToHour] = useState(true)

  function onChangeValue(e) { 
    if(e.target.value < 100000) {
      setValue(e.target.value) 
    } else {
      alert('99999 이상 입력할 수 없습니다.')
      reset()
    }
  }
  function reset() { setValue('') }
  

  useEffect(()=>{
    reset()
  },[])
  function onChangeType() {
    setMinuteToHour((minuteToHour)=>!minuteToHour)
    reset()
  }
  return (
    <div className="time-container">
      <form>
        <div className="devider">
          <label className={`checkbox ${minuteToHour===true ? 'clicked' : null }`}>
            <input onChange={onChangeType}  type="radio" name='option' checked={minuteToHour}></input>
            <span>분 → 시</span>
          </label>
          {
            minuteToHour ? 
              <div className="contents">
                <input id="minute" type="number" placeholder="ex) 60" value={value} onChange={onChangeValue} max='99999'/>
                <p>분은 {Math.floor(value/60)}시간 {value%60}분입니다.</p>
              </div>
            :
              null
          }
        </div>
        <div className="devider">
          <label className={`checkbox ${minuteToHour===true ? null : 'clicked' }`}>
            <input onChange={onChangeType}  type="radio" name='option' checked={!minuteToHour}></input>
            <span>시 → 분</span>
          </label>
          {
            minuteToHour ? 
              null : 
              <div className="contents">
                <input id="minute" type="number" placeholder="ex) 24" value={value} onChange={onChangeValue} max='99999'/>
                <p>시간은 {value*60}분입니다.</p>
              </div>
          }
        </div>
      </form>
    </div>
  )
}