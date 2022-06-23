import { useFormik } from 'formik'
import styles from './auth-form.module.css'
import Router from 'next/router'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '@redux/actions/userAction'
import { useEffect } from 'react'

export default function AuthForm() {
    const dispatch = useDispatch()
    const userInfoData = useSelector((state) => state.userInfo)
    const { isSuccesful } = userInfoData

    const formik = useFormik({
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
            lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required')
        }),
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phoneNumber: ''
        },
        onSubmit: (values, { resetForm }) => {
            login(values), resetForm()
        }
    })

    const login = (formData) => {
        dispatch(register(formData))
    }

    useEffect(() => {
        if (isSuccesful) {
            Router.push('/login')
        }
    }, [isSuccesful])

    return (
        <div className={styles.authformWrapper}>
            <form className={styles.formWrapper} onSubmit={formik.handleSubmit}>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    placeholder="Isim"
                    className={styles.inputWrapper}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                ) : null}
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    className={styles.inputWrapper}
                    placeholder="Soyisim"
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div>{formik.errors.lastName}</div>
                ) : null}
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
                <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                    className={styles.inputWrapper}
                    placeholder="Telefon Numarası"
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <div>{formik.errors.phoneNumber}</div>
                ) : null}
                <button className={styles.btnLoginWrapper} type="submit">
                    Uye Ol
                </button>
            </form>
        </div>
    )
}
