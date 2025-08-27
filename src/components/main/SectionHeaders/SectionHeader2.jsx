import './sectionHeaders.css'

export default function SectionHeader1({p,h1,description,button, className}){


    return(
    <div className={`sectionHeader1 ${className}` }>
        <p className='purple-p'>{p}</p>
        <h1>{h1}</h1>
        <p className='description-p'>{description}</p>
        {button && (
            <button className='purpleButton'>
                {button}
            </button>
        )}
    </div>
    )
}