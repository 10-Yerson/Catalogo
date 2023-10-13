import { NavLink } from "react-router-dom"


const Navbar = () => {
    const activeStyle = ' underline underline-offset-4'

    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light bg-gray-100 mt-0">
            <ul className="flex items-center gap-3">

                <li className="font-semibold text-lg gap-3" >
                    <NavLink to='/'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Catalogo
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Contacto
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/*'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Not Found
                    </NavLink>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar