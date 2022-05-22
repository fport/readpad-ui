import React from 'react';
import { useFormik } from 'formik';
import styles from './auth-form.module.css'

export default function AuthForm() {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const login = (values) => {
    console.log(values)
  }
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
    login(values)
    },
  });
  return (
  <div className={styles.authformWrapper}>
    <form className={styles.formWrapper} onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      className="input input-bordered my-8 input-info w-full max-w-xs"
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      className="input input-bordered my-8 input-info w-full max-w-xs"
      />

      <label className="mt-5" htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      className="input input-bordered my-8 input-info w-full max-w-xs"
      />

      <button type="submit">Submit</button>
    </form>
</div>
  );
}
