
import styles from '../styles/user.module.css';

const UserSignupForm = () => {
   const [values, setValues] =  useState({
      name: "",
      email: "",
      password: "",
      avatar: ""
   })
   const handleChange = ({ target: {value, name}}) => {
      setValues({...value, [name]:value })
   }
    return (
        
        <div className={styles.wrapper}> 
            <div className={styles.close}>
                <svg>
                    <use></use>
                </svg>
            </div>
            <div className={styles.close}>
                Sign Up
            </div>
            <form className={styles.form}>
              <div  className={styles.group}>
                 <input type='email' 
                  placeholder='Your email'
                  name="email"
                  value={values.email}
                  autocomplete="off" 
                  onChange={()=>{handleChange}} 
                  required
                  />
                </div>

                <div  className={styles.pasword}>
                 <input type='name' 
                  placeholder='Your name'
                  name="name"
                  value={values.name}
                  autocomplete="off" 
                  onChange={()=>{}} 
                  required
                  />
                </div>

                <div  className={styles.group}>
                 <input type='pasword' 
                  placeholder='Your pasword'
                  name="pasword"
                  value={values.password}
                  autocomplete="off" 
                  onChange={()=>{handleChange}} 
                  required
                  />
                </div>

                <div  className={styles.group}>
                 <input type='avatar' 
                  placeholder='Your avatar'
                  name="avatar"
                  value={values.avatar}
                  autocomplete="off" 
                  onChange={()=>{handleChange}} 
                  required
                  />
                </div>
                <div  className={styles.link}>
                    I alredy have an account
                </div>
                <button type="submit"  className={styles.submit} >
                    createan account
                </button>

            </form>
        </div>


    )
}
export default  UserSignupForm