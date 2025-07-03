import { useState } from 'react'
import './css/sort.css'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { BiSort } from 'react-icons/bi'
import { sortPropType } from '../Types'

const Sort = ({sortProjects}: sortPropType) => {
    const [showSorts, setShowSorts] = useState<boolean>(false)

    const handleClicks = (option: string) =>{
        sortProjects(option);
        setShowSorts(false);
    }
    return (
        <div className='h'>
            <button onClick={() => setShowSorts(!showSorts)} className="sort">
                <BiSort className='mr'/> Sort 
                {!showSorts? <AiOutlineDown className='ml'/> : <AiOutlineUp className='ml'/>}
            </button>

            {showSorts && <section className='sorts'>
                <button onClick={() => handleClicks('client')} className='sort-btn'>Name</button>
                <button onClick={() => handleClicks('country')} className='sort-btn'>Country</button>
                <button onClick={() => handleClicks('date')} className='sort-btn'>Date</button>
            </section>}
        </div>
    )
}

export default Sort