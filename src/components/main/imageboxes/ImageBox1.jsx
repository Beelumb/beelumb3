import './Imageboxes.css'

export default function ImageBox1({...props}){
    return(
        <div className={`imageBox1 ${props.className}`}>
            <img src={props.src} alt="" />
            <h2>{props.h2}</h2>
            <p>{props.p}</p>
        </div>
    )
}