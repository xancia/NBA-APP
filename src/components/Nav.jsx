import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className="flex justify-evenly bg-gray-600 text-white p-4 w-full">
            <Link to='/'> 
                <div>Home</div>
            </Link>
            <Link to='/teams'>
                <div>Teams</div>
            </Link>
            <Link to='/contact'>
                <div>Contact</div>
            </Link>
        </div>
    )
}