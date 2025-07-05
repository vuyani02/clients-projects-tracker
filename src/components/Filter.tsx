import { useState } from 'react'
import './css/sort.css'
import './css/filter.css'
import { BiFilter } from 'react-icons/bi'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import type { filterPropType } from '../Types'

const Filter = ({filterProjects}:filterPropType) => {

    const [showFilters, setShowFilters] = useState<boolean>(false);
    return (
        <div className='h'>
            <button onClick={() => setShowFilters(!showFilters)} style={{marginLeft: 0}}                 className="sort">
                <BiFilter className='mr'/> Filter 
                {!showFilters? <AiOutlineDown className='ml'/> : <AiOutlineUp className='ml'/>}
            </button>

            {showFilters && <div className='filters'>
                <input onChange={filterProjects} name='name' className='input-filter' type="text" placeholder='Filter by name'/>

                <input onChange={filterProjects} name='country' className='input-filter' type="text" placeholder='Filter by country'/>

                <input onChange={filterProjects} name='email' className='input-filter' type="text" placeholder='Filter by email'/>

                <input onChange={filterProjects} name='project' className='input-filter' type="text" placeholder='Filter by project'/>

                <input onChange={filterProjects} name='status' className='input-filter' type="text" placeholder='Filter by status'/>
            </div>}
        </div>
    )
}

export default Filter