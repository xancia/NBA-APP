import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className=" bg-gray-600 flex justify-between items-center w-full h-20 p-10">
            <img className="w-7" src='/NBA.png' alt="" />
            <div className="flex justify-evenly w-screen mr-10">
            <Link to='/'> 
                <img className="w-40" src="/homebutton.png" alt="" />
            </Link>
            <Link to='/teams'>
                <img className="w-40" src="/teambutton.png" alt="" />
            </Link>
            <Link to='/contact'>
                <img className="w-40" src="/contactbutton.png" alt="" />
            </Link>
            </div>
        </div>
    )
}