import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";

export const SharedLayout = () => { 
    return (
        <>
            <header>
                <nav>
                    <NavLink to='/goit-react-hw-05-movies'>Home</NavLink>
                    <NavLink to='/goit-react-hw-05-movies/movies'>Movies</NavLink>
                </nav>

        </header>
                  
            

            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
                </Suspense>
        
        </>
        
    )
}