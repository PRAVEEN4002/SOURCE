import React from 'react'

const pagination = ({restPerPage,totalRest,paginate}) => {
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalRest/restPerPage);i++)
    {
        pageNumbers.push(i)
    }
    return (
        <nav className='container navbar-fixed-bottom' style={{textAlign:"center"}}>
            
            <ul className='pagination pagination-primary pagination-lg'>
                {
                    pageNumbers.map((number)=>{
                        return(
                             
                            <li  className='page-item ' >
                                <a href='#' onClick={()=>paginate(number)} className='page-link'>{number}</a>
                            </li>
                        )
                    })
                }
            </ul>
            

        </nav>
    )
}

export default pagination
