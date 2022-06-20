import { useFormik } from 'formik'
import styles from './auth-form.module.css'
import Router from 'next/router'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '@redux/actions/userAction'

export default function AuthForm() {
    const dispatch = useDispatch()
    const userInfoData = useSelector((state) => state.userInfo)
    const { userInfo } = userInfoData

    const login = (formData) => {
        dispatch(register(formData))
    }

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
        onSubmit: (values) => {
            login(values)
        }
    })

    return (
        <div className={styles.authformWrapper}>
            <form className={styles.formWrapper} onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">Isim</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    className="input input-bordered my-8 input-info w-full max-w-xs"
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                ) : null}
                <label htmlFor="lastName">Soyisim</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    className="input input-bordered my-8 input-info w-full max-w-xs"
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div>{formik.errors.lastName}</div>
                ) : null}
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
                <label htmlFor="lastName">Parola</label>
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
                <label className="mt-5" htmlFor="email">
                    Telefon Numarası
                </label>
                <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                    className="input input-bordered my-8 input-info w-full max-w-xs"
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <div>{formik.errors.phoneNumber}</div>
                ) : null}
                <button type="submit">Uye Ol</button>
            </form>
        </div>
    )
}
