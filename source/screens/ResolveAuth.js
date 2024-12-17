import { useEffect, useContext } from "react";
import { Context as AuthContext } from "../context/authContext";

const ResolveAuth = () => {
    const {tryLocalSignIn} = useContext(AuthContext);

    useEffect(()=> {
        tryLocalSignIn();
    }, []);

    return null;
}


export default ResolveAuth;