import '../css/style.css'

export default function Header() {
    return (
        <div className="header">

            <div>
                <img className="header-img" src = {require('../images/Logo.png')} alt="Logo" />
            </div>

            <div> 
                <h4 className="header-project">React Course - Project 3 </h4>
            </div>
        </div>
    )
}