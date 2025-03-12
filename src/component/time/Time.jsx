import { useState } from "react"
import './Time.css'

export default function Time({props}) {
  const [value,setValue,inverted,setInverted] = props
  const [type, setType] = useState(false)
  function onChangeValue(e) {
    setValue(e.target.value)
  }
  function reset() {
    setValue('')
  }
  function invert() {
    setInverted((preFlipped)=>!preFlipped)
    reset()
  }
  function onFocusInput() {
    setValue('')
  }
  function onChangeType() {
    setType((preType)=>!preType)
  }
  return (
    <div className="form-container">
      <form>
        <div className="devider">
          <label className={type===true ? null : 'clicked'}>
            <input onChange={onChangeType}  type="radio" name='option' checked={!type}></input>
            <span>분 → 시</span>
          </label>
          {
            type ? 
              null : 
              <>
                <label htmlFor="minute">분을 입력하세요.</label>
                <input id="minute" type="number" placeholder="분을 입력하세요."/>
                <p>n분은 n시 n분입니다.</p>
              </>
          }
        </div>
        <div className="devider">
          <label className={type===true ? 'clicked' : null}>
            <input onChange={onChangeType} type="radio" name='option'></input>
            <span>시 → 분</span>
          </label>
          {
            type ? 
              <>
                <label htmlFor="hour">시를 입력하세요.</label>
                <input id="hour" type="number" placeholder="분을 입력하세요."/>
                <p>n분은 n시 n분입니다.</p>
              </> :
              null
          }
        </div>
      </form>
      
      

      {/* {
        inverted ? 
          <>
            <input 
              id='Hours' 
              value={inverted ? value : Math.round(value/60)} 
              onChange={onChangeValue}
              placeholder={inverted ? '시를 입력하세요' : null}
              type='number' 
              disabled={!inverted}
            />
          </>
        : 
          <>
            <input 
              id='Minutes' 
              value={inverted ? value*60 : value} 
              onChange={onChangeValue}
              onFocus={onFocusInput}
              placeholder={!inverted ? '분을 입력하세요' : null}
              type='number' 
              disabled={inverted}
            />
            <p>{value}분은 {Math.floor(value/60)}시간 {value%60}분입니다.</p>
          </>
      }  */}


      {/* <button onClick={reset}>Reset</button>
      <button onClick={invert}>{inverted?'분→시':'시→분'}</button> */}
    </div>
  )
}