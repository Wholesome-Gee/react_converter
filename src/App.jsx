import { useState } from 'react'
import './App.css'
import Time from './component/time/Time'

function DistanceConverter() {
  return (
    <div>
      <h3>거리 변환기</h3>
    </div>
  )
}
function App() {
  const [value, setValue] = useState(0)
  const [inverted, setInverted] = useState(false)
  const [type, setType] = useState('none')

  function onChangeCategory (e) {
    setType(e.target.id);
  }
  return (
    <div className='container'>
      <h1 className='main-title'>단위 변환기</h1>
      <ul className='categories'>
        <li onClick={onChangeCategory} className={type==='category-time' ? 'clicked' : null} id='category-time'>시간</li>
        <li onClick={onChangeCategory} className={type==='category-distance' ? 'clicked' : null} id='category-distance'>거리</li>
        {/* <li onClick={onChangeCategory} className={ ? 'clicked' : null}id='category-area'>면적</li> */}
      </ul>
      {type === 'category-time' ? <Time props={[value,setValue,inverted,setInverted]}/> : null }

    </div>
  )
}

export default App
