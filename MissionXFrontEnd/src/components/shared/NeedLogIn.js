import { Link } from "react-router-dom"

export default function NeedLogIn({ userType }) {
    return (
        <div>
        <h1>NEED TO LOG IN AS {userType}</h1>
            <button><Link to="/">Return to Home</Link></button>
            </div>
    )
}