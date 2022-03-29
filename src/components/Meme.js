import '../css/style.css'

export default function Meme() {
    return (
        <div> 
            <form className="form">
                <input className = "form-input" type="text" placeholder='top-text' />
                <input className = "form-input" type="text" placeholder = 'bottom-text' /> 

                <button className = "form-btn"> Get a New Meme Image </button>
            </form>
        </div>
    )
}