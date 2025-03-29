import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({children, authentication = true}){
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);

    useEffect(() => {

        // if we want to check just with authStatus
        // if(authStatus === true){
        //     navigate("/");
        // } else if(authStatus === false){
        //     navigate("/login");
        // }

        if(authentication && authStatus !== authentication){
            navigate("/login");
        } else if(!authentication && authStatus === authentication){
            navigate("/");
        }
        setLoader(false);
    }, [authStatus, authentication, navigate])

    return loader ? <h1>Loading...</h1>: <>{children}</>
}

/*
This Protected component is a higher-order wrapper that protects specific routes based on authentication status. It ensures that:

✅ Authenticated users can access protected pages.

✅ Unauthenticated users are redirected to the login page.

✅ Already logged-in users cannot access pages like /login (prevents unnecessary login attempts).

✅ Shows a loading state while checking authentication.

 1. Protecting Authenticated Routes (Dashboard, Profile, etc.)

        <Protected authentication={true}>
        <Dashboard />
        </Protected>

If the user is NOT logged in, they get redirected to /login.
If the user is logged in, they can access the page normally.

🔹 2. Protecting Public Routes (Login, Signup, etc.)

            <Protected authentication={false}>
            <Login />
            </Protected>

If the user is logged in, they get redirected to / (home page).
If the user is NOT logged in, they can access the login page normally.
*/