import React, { useEffect } from 'react'
import "../../Styles/ShowSection.css"
import { CursorAnim } from '../../Animations/CursorAnim'

export default function ShowSection() {
    useEffect(()=>{
        CursorAnim()
    },[])
  return (
    <section className='show-section'>
        <div className="show-content">
            <span className='cursor-scale'>show</span>
            <span className='cursor-scale'>case</span>
        </div>
    </section>
  )
}
