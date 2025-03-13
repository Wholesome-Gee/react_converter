import { useEffect, useState } from "react"
import './Distance.css'
import { FaChevronDown } from "react-icons/fa";

export default function Distance() {
    const [value, setValue] = useState(0)
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
  const [beforeValue, setBeforeValue] = useState('before-mm')
  const [afterValue, setAfterValue] = useState('after-cm')
  function onChangeSelectBefore (e) {
    setBeforeValue(e.target.value)
    // console.log(1,e.target.value);
  }
  function onChangeSelectAfter (e) {
    setAfterValue(e.target.value)
    // console.log(1,e.target.value);
  }
  return (
    <div className="distance-container">
      <div className="devider">
          <select className="distance-before" value={beforeValue} onChange={onChangeSelectBefore} name="distance-before" id="distance-before">
            <option value="before-mm">mm</option>
            <option value="before-cm">cm</option>
            <option value="before-m">m</option>
            <option value="before-km">km</option>
          </select>
        를
          <select className="distance-after" value={afterValue} onChange={onChangeSelectAfter} name="distance-after" id="distance-after">
            <option value="after-mm">mm</option>
            <option value="after-cm">cm</option>
            <option value="after-m">m</option>
            <option value="after-km">km</option>
          </select>로 변환
      </div>
      <div className="devider">
        <input value={value} onChange={onChangeValue} type="number" placeholder="ex) 100" />
        {
          beforeValue === 'before-mm' 
          ?
            <span>
              mm는
                {
                  afterValue === 'after-mm' 
                  ?
                    ` ${value}mm 입니다.`
                  :
                    afterValue === 'after-cm'
                    ?
                      ` ${value/10}cm 입니다.`
                    :
                      afterValue === 'after-m'
                      ?
                        ` ${value/1000}m 입니다.`
                      :
                        afterValue === 'after-km'
                        ?
                          ` ${value/1000000}km 입니다.`
                        :
                          null
                }
            </span>
          :
            beforeValue === 'before-cm'
            ?
              <span>
                cm는
                  {
                    afterValue === 'after-mm' 
                    ?
                      ` ${value*10}mm 입니다.`
                    :
                      afterValue === 'after-cm'
                      ?
                        ` ${value}cm 입니다.`
                      :
                        afterValue === 'after-m'
                        ?
                          ` ${value/100}m 입니다.`
                        :
                          afterValue === 'after-km'
                          ?
                            ` ${value/100000}km 입니다.`
                          :
                            null
                  }
              </span>
            :
              beforeValue === 'before-m'
              ?
                <span>
                  m는
                    {
                      afterValue === 'after-mm' 
                      ?
                        ` ${value*1000}mm 입니다.`
                      :
                        afterValue === 'after-cm'
                        ?
                          ` ${value*100}cm 입니다.`
                        :
                          afterValue === 'after-m'
                          ?
                            ` ${value}m 입니다.`
                          :
                            afterValue === 'after-km'
                            ?
                              ` ${value/1000}km 입니다.`
                            :
                              null
                    }
                </span>
              :
                beforeValue === 'before-km'
              ?
                <span>
                  km는
                    {
                      afterValue === 'after-mm' 
                      ?
                        ` ${value*1000000}mm 입니다.`
                      :
                        afterValue === 'after-cm'
                        ?
                          ` ${value*100000}cm 입니다.`
                        :
                          afterValue === 'after-m'
                          ?
                            ` ${value*1000}m 입니다.`
                          :
                            afterValue === 'after-km'
                            ?
                              ` ${value}km 입니다.`
                            :
                              null
                    }
                </span>
              :
                null
        }
      </div>
    </div>
  )
}