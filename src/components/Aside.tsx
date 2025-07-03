import { FaFolder, FaUser } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import './css/aside.css'

const Aside = () => {
    return (
        <aside className='aside-bar'>
            <p>Logo</p>
            <FaFolder className='folder'/>
            <FaUser className='icon'/>
            <IoMdSettings className='icon'/>
        </aside>
    )
}

export default Aside