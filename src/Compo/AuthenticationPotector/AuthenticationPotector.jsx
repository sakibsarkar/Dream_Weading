import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserAuth/UserAuth";

const AuthenticationPotector = ({ children }) => {
    const { user } = useContext(UserContext)
    return (
        <>
            {
                user ? <Navigate to={"/"}></Navigate> : children

            }
        </>
    );
};

export default AuthenticationPotector;