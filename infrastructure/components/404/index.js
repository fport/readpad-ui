import styles from './index.module.css'
import { useRouter } from 'next/router'

function ErrorComponent() {
    const router = useRouter()

    return (
        <div className={styles.error}>
            <p className={styles.errorText}>Aradığınız bulunamadı</p>
        </div>
    )
}

export default ErrorComponent
