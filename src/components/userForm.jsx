import { useDispatch, useSelector } from "react-redux"

import UserSignupForm from "./UserSignupForm"
import { toggleForm } from "../Redux/slices/userSlice"

import styles from "../styles/user.module.css"

const UserForm = () => {
    const dispatch = useDispatch()
    const { showForm } = useSelector(({user})=> user)

    const closeForm = ()=>{dispatch(toggleForm(false))}
    
    return showForm ? (
        <>
          <div className={styles.overlay} 
               onClick={closeForm}
          />
          <UserSignupForm />
        </>
    )   :  (<> </>)
}

export default UserForm