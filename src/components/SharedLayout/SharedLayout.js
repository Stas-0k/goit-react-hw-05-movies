import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import css from './shared-layout.module.css'

export const SharedLayout = () => { 
    return (
        <>
            <header>
                <nav className={css.nav }>
                    <NavLink to='/goit-react-hw-05-movies' className={css.link}>Home</NavLink>
                    <NavLink to='/goit-react-hw-05-movies/movies' className={css.link}>Movies</NavLink>
                </nav>

        </header>
                  
            

            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
                </Suspense>
        
        </>
        
    )
}