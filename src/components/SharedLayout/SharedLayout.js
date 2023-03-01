import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import css from './shared-layout.module.css'

export const SharedLayout = () => { 
    return (
        <>
            <header>
                <nav className={css.nav }>
                    <NavLink to='/' className={css.link}>Home</NavLink>
                    <NavLink to='movies' className={css.link}>Movies</NavLink>
                </nav>

        </header>
                  
            

            <Suspense>
                <Outlet />
                </Suspense>
        
        </>
        
    )
}