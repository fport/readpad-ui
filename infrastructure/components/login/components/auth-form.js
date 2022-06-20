import React from 'react'
import { useFormik } from 'formik'
import styles from './auth-form.module.css'
import Router from 'next/router'
import { login } from '@redux/actions/userAction'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'

export default function AuthForm() {
    const dispatch = useDispatch()
    const userInfoData = useSelector((state) => state.userInfo)
    const { isSuccesful } = userInfoData

    const formik = useFormik({
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required')
        }),
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            submitLogin(values)
        }
    })

    const submitLogin = (loginData) => {
        dispatch(login(loginData))
    }

    return (
        <div className={styles.authformWrapper}>
            <form className={styles.formWrapper} onSubmit={formik.handleSubmit}>
                <label className="mt-5" htmlFor="email">
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="input input-bordered my-8 input-info w-full max-w-xs"
                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
                <label htmlFor="password">Parola</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className="input input-bordered my-8 input-info w-full max-w-xs"
                />
                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}
                <button type="submit">Giris Yap</button>
            </form>
            {/* <button onClick={() => register()}>Uye Ol</button> */}
        </div>
    )
}
