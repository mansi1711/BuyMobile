import React, {useContext} from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import '../styles/Login.css';
import UserProfile from './UserProfile';
import history from './history';
import MyContext from "./MyContext";

const validateUser = (values) => {
  if(values.email === 'abc@gmail.com' && values.password === 'Abc12345'){
    window.alert('Login Successful');
    UserProfile.setEmail(values.email);
    history.push('/');
  }
  else{
    window.alert('Invalid Credentials');
  }
}

function ValidateLoginForm() {
  const contextValue = useContext(MyContext);
  return( 
<Formik
                  initialValues={{ email: "", password: "" }}
                  onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                  contextValue.updateLoggedIn(true);
                  console.log("Logging in", values);
                  setSubmitting(false);
                  validateUser(values);
                  }, 500);
                  }}

                  validationSchema={Yup.object().shape({
                    email: Yup.string()
                      .email()
                      .required("Required"),
                    password: Yup.string()
                      .required("No password provided.")
                      .min(8, "Password is too short - should be 8 chars minimum.")
                      .matches(/(?=.*[0-9])/, "Password must contain a number.")
                  })}
                  >
                  {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <div className="login">
        <form onSubmit={handleSubmit} className='form'>
          <label htmlFor="email">Email</label>
          <input className='input' style={{width:'100%'}}
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <label htmlFor="email">Password</label>
          <input className='input' style={{width:'100%'}}
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </form>
        </div>
      );
    }}
              </Formik>
  )
}


export default ValidateLoginForm;