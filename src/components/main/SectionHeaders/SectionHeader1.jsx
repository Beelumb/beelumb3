import './sectionHeaders.css'

export default function SectionHeader1({p,h1,description}){


    return(
    <div className='text-center sectionHeader1'>
        <p className='purple-p'>{p}</p>
        <h1>{h1}</h1>
        <p className='description-p'>{description}</p>
    </div>
    )
}