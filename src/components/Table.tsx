import './css/table.css'
import { BsThreeDots } from 'react-icons/bs'
import { useEffect, useRef, useState } from 'react';
import type {clientDataType} from '../Types';

const Table = ({data, setData, pageNumber}: clientsDataType) => {

    const [statusActionVisible, setStatusActionVisible] = useState<number | null>(null);
    const inputRef = useRef(null);
    
    
    const projectsPerPage: number = 5;
    let currentPage: clientDataType[]

    if(pageNumber === 1){
        currentPage = data.filter((dataEl, i) => i < projectsPerPage);
    }

    else if(pageNumber === 2){
        currentPage = data.filter((dataEl, i) => i >= projectsPerPage && i < 10);
    }

    else{
        currentPage = data.filter((dataEl, i) => i >= 10);
    }

    
    
    const isCompleted = () => {
        document.querySelectorAll('.iscompleted').forEach( div =>{
            div.classList.remove('completed');
            div.dataset.progress === '100%' && div.classList.add('completed');
        });
    };

    useEffect(() => {
        isCompleted();
    });

    const updateProgess = (i: number) => {
        let inputValue: string = inputRef.current!.value;

        if(!inputValue.includes("%")){
            inputValue += "%";
        }
        console.log(i);
        setData(prev => prev.map((dataEl, index) =>{

            if(inputValue === '100%'){
                return i === index? {...dataEl, progress : inputValue, status: 'Completed'} : dataEl;
            }

            if(inputValue !== '100%' && dataEl.progress === '100%'){
                return i === index? {...dataEl, progress : inputValue, status: 'In Progress'} : dataEl;
            }

            return i === index? {...dataEl, progress : inputValue} : dataEl;
        }));
        setStatusActionVisible(null);
    };

    const indexShifter = (i: number) => {
        if(pageNumber === 1){
            updateProgess(i);
        }

        else if(pageNumber === 2){
            updateProgess(i + 5);
        }

        else{
            updateProgess(i + 10)
        }
    };

    return (
        <section>
            <table className='table-page'>
                <thead>
                    <tr>
                        <th className='row-h-d img-header'>Image</th>
                        <th className='row-h-d'>Name</th>
                        <th className='row-h-d'>Country</th>
                        <th className='row-h-d'>Email</th>
                        <th className='row-h-d'>Project Name</th>
                        <th className='row-h-d'>Task Progress</th>
                        <th className='row-h-d'>Status</th>
                        <th className='row-h-d'>Date</th>
                        <th className='row-h-d img-header'>Action</th>
                    </tr>
                </thead>
                <tbody>
                {currentPage!.map((d, i) => (
                    <tr key={i}>
                        <td className='row-b-d img-block'>
                            <img className='img' src={d.image} alt={d.client} />
                        </td>
                        <td className='row-b-d'>{d.client}</td>
                        <td className='row-b-d'>{d.country}</td>
                        <td className='row-b-d'>{d.email}</td>
                        <td className='row-b-d'>{d.project}</td>
                        <td className='row-b-d row-gauge'>
                            <div className="gauge-container">
                                <div className="gauge" style={{width: d.progress}}></div>
                            </div>
                        </td>
                        <td className='row-b-d completed-block'>
                            <div className="iscompleted" data-progress={d.progress}>{d.status}</div>
                        </td>
                        <td className='row-b-d'>{d.date}</td>
                        <td className='row-b-d'>
                            <BsThreeDots onClick={() => setStatusActionVisible(prev => prev === i? null : i)} className='dots'/>
                            {statusActionVisible === i && <div className="make-0">
                                <div className='update-progess'>
                                    <input className='status-input' type="text" placeholder='Progress(0% - 100%)' ref={inputRef}/>
                                    <button onClick={() => indexShifter(i)} className='status-btn'>Update</button>
                                </div>
                            </div>}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    )
}

export default Table