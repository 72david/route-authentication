
import { useContext } from 'react'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'
import userContext from './UserContext'

const Nav = () => {

    const { setIsLogin } = useContext(userContext)
    const navigate = useNavigate()

    return (
        <>
            <nav className='py-2 px-4'>
                <ul className='d-flex gap-4 justify-content-end list-unstyled'>
                    <Link to="dashboard">
                        <li>
                            DashBoard
                        </li>
                    </Link>
                    <Link to="home">
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link to="contact">
                        <li>
                            Contact
                        </li>
                    </Link>
                    <Link to="about">
                        <li>
                            About
                        </li>
                    </Link>
                    <Link onClick={()=>{
                        setIsLogin(false)
                        sessionStorage.removeItem('isLogin');
                        navigate('/login')
                        
                    }}>
                        <li>
                            Logout
                        </li>
                    </Link>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Nav