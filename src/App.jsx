import { useState } from 'react'
import './App.css'
import Time from './component/time/Time'
import Distance from './component/distance/Distance'

function App() {
 
  const [type, setType] = useState('category-time')
  function onChangeCategory (e) { setType(e.target.id); }

  return (
    <div className='container'>
      <h1 className='main-title'>단위 변환기!</h1>
      <ul className='categories'>
        <li onClick={onChangeCategory} className={type==='category-time' ? 'clicked' : null} id='category-time'>시간</li>
        <li onClick={onChangeCategory} className={type==='category-distance' ? 'clicked' : null} id='category-distance'>거리</li>
        {/* <li onClick={onChangeCategory} className={ ? 'clicked' : null}id='category-area'>면적</li> */}
      </ul>
      {type === 'category-time' ? <Time/> : null }
      {type === 'category-distance' ? <Distance/> : null }
    </div>
  )
}

export default App