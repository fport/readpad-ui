import React from 'react'
import { useFormik } from 'formik'
import styles from './auth-form.module.css'
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
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className={styles.inputWrapper}
                    placeholder="Email"
                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className={styles.inputWrapper}
                    placeholder="Parola"
                />
                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}
                <button className={styles.btnLoginWrapper} type="submit">
                    Giris Yap
                </button>
            </form>
            <Link href={'/register'}>
                <button className={styles.btnWrapper}>Uye Ol</button>
            </Link>
        </div>
    )
}
