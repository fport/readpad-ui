import React from 'react'
import styles from './modal.module.css'
import { X } from 'react-feather'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { create } from '@redux/actions/blogAction'

export default function Modal(props) {
    const p = props
    const dispatch = useDispatch()
    const userInfoData = useSelector((state) => state.userInfo)
    const { name, id } = userInfoData?.userInfo

    const formik = useFormik({
        validationSchema: Yup.object({
            title: Yup.string().required('Required'),
            summary: Yup.string().required('Required'),
            content: Yup.string().required('Required')
        }),
        initialValues: {
            title: '',
            summary: '',
            content: ''
        },
        onSubmit: (values, { resetForm }) => {
            createBlog(values), resetForm()
        }
    })

    const createBlog = (formData) => {
        dispatch(
            create({
                ...formData,
                author: name,
                id: id
            })
        )
    }

    return (
        <>
            {p.showModal ? (
                <>
                    <div className={styles.container}>
                        <header className={styles.header}>
                            <button onClick={() => p.changeShowModal()}>
                                <X />
                            </button>
                        </header>
                        <div className={styles.content}>
                            <div className={styles.blogWrapper}>
                                <form className={styles.formWrapper} onSubmit={formik.handleSubmit}>
                                    <label htmlFor="Title">Baslik</label>
                                    <input
                                        id="title"
                                        name="title"
                                        type="text"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.title}
                                        className={styles.inputWrapper}
                                    />
                                    {formik.touched.title && formik.errors.title ? (
                                        <div>{formik.errors.title}</div>
                                    ) : null}
                                    <label htmlFor="summary">Aciklama</label>
                                    <input
                                        id="summary"
                                        name="summary"
                                        type="text"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.summary}
                                        className={styles.inputWrapper}
                                    />
                                    {formik.touched.summary && formik.errors.summary ? (
                                        <div>{formik.errors.summary}</div>
                                    ) : null}
                                    <label className="mt-5" htmlFor="content">
                                        Icerik
                                    </label>
                                    <textarea
                                        id="content"
                                        name="content"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.content}
                                        className={styles.inputWrapper}
                                        rows={4}
                                    />
                                    {formik.touched.content && formik.errors.content ? (
                                        <div>{formik.errors.content}</div>
                                    ) : null}
                                    <button className={styles.btnWrapper} type="submit">
                                        Yazi ekle
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    )
}
