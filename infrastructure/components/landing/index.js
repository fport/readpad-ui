import { useEffect } from 'react'
import styles from './index.module.css'
import { getAllBlogs } from '@redux/actions/blogAction'
import { useDispatch } from 'react-redux'

export default function Landing() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllBlogs())
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.landingHeader}>
                    <h1 className={styles.title}>Blog’un Yeni Dünyasına</h1>
                    <h1 className={styles.titleWelcome}>Hoşgeldiniz!</h1>
                    {/* <span className={styles.desc}>
                    
                    </span> */}
                </div>
                <img className={styles.langingBlogs} src="/blogs.png" />
                <img className={styles.langingBlogs} src="/blogs.png" />
            </div>
        </div>
    )
}
