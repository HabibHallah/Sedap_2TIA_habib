import { BiUserCircle } from "react-icons/bi"; 
import { MdOutlinePeopleAlt } from "react-icons/md"; 
import { MdOutlineReorder } from "react-icons/md"; 
import { BiHome } from "react-icons/bi"; 
import { NavLink } from "react-router-dom";

export default function ListMenu (){
    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${isActive ? 
            "text-hijau bg-green-200 font-extrabold" : 
            "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`
    return(
        <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
            <li>
                <NavLink id="menu-1" to="/" className={menuClass}><BiHome className="mr-1 text-xl"/>   Dashboard</NavLink>
              </li>
            <li>
                <NavLink id="menu-2" to="/orders" className={menuClass}><MdOutlineReorder className="mr-4 text-xl"/>   Orders</NavLink>
              </li>
              <li>
                <NavLink id="menu-3" to="/customers"className={menuClass}><MdOutlinePeopleAlt className="mr-4 text-xl"/>   Customers</NavLink>
              </li>
              <li>
                <NavLink id="menu-4" to="/error400"className={menuClass}><MdOutlinePeopleAlt className="mr-4 text-xl"/>   Error 400</NavLink>
              </li>
              <li>
                <NavLink id="menu-5" to="/error401"className={menuClass}><MdOutlinePeopleAlt className="mr-4 text-xl"/>   Error 401</NavLink>
              </li>
              <li>
                <NavLink id="menu-6" to="/error403"className={menuClass}><MdOutlinePeopleAlt className="mr-4 text-xl"/>   Error 403</NavLink>
              </li>
              <li>
                <NavLink id="menu-7" to="/users" className={menuClass}><BiUserCircle className="mr-4 text-xl" /> Users</NavLink>
              </li>
        </ul>
    </div>
    )
}