import './CustomButton.css'
const CustomButton = (props) =>{
    return(
        <button className='btn'>
            {props.children}
        </button>
    )
}


export default CustomButton