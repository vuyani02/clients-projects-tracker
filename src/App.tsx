import Aside from './components/Aside'
import './App.css'
import Table from './components/Table'
import Sort from './components/Sort'
import Filter from './components/Filter'
import { data } from './data'
import type { ChangeEvent } from 'react'
import { useState } from 'react'
import type { clientDataType } from './Types'

const Master = () => {
    
    const [projects, setProjects] = useState<clientDataType[]>(data);
    const [pageNumber, setPageNumber] = useState<number>(1)

    const sortProjects = (option: string) => {
        let sortedProjects: clientDataType[] = [...projects];

        if(option === 'client' || option === 'country' || option === 'date')
            sortedProjects.sort((a, b) => a[option] < b[option]? -1 : 1);
        
        setProjects(sortedProjects);
    };

    const filterProjects = (e: ChangeEvent<HTMLInputElement>) => {

        if(e.target.name === 'name'){
            setProjects(prev => prev.filter(proj => proj.client.toLowerCase().includes(e.target.value.toLowerCase())));
        };

        if(e.target.name === 'country'){
            setProjects(prev => prev.filter(proj => proj.country.toLowerCase().includes(e.target.value.toLowerCase())));
        };

        if(e.target.name === 'email'){
            setProjects(prev => prev.filter(proj => proj.email.toLowerCase().includes(e.target.value.toLowerCase())));
        };

        if(e.target.name === 'project'){
            setProjects(prev => prev.filter(proj => proj.project.toLowerCase().includes(e.target.value.toLowerCase())));
        };
        
        if(e.target.name === 'status'){
            setProjects(prev => prev.filter(proj => proj.status.toLowerCase().includes(e.target.value.toLowerCase())));
        };

    };

    return (
        <article className='master'>
            <Aside/>
            <div>
                <div className="sf">
                    <Sort sortProjects={sortProjects}/>
                    <Filter filterProjects={filterProjects}/>
                </div>
                <Table data={projects} setData={setProjects} pageNumber={pageNumber}/>
                <div className="btns">
                    <button disabled={pageNumber === 1} className='pagination-btn' onClick={() => setPageNumber(pageNumber - 1)}>Previous</button>
                    <p>Page {pageNumber} of 3</p>
                    <button disabled={pageNumber === 3} className='pagination-btn' onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
                </div>
            </div>
        </article>
    )
}

export default Master