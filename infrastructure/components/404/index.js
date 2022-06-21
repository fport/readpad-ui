import styles from './index.module.css'
import { useRouter } from 'next/router'

function ErrorComponent() {
    const router = useRouter()

    return (
        <div className={styles.error}>
            <span className={styles.errorText}>Aradığınız bulunamadı</span>
        </div>
    )
}

export default ErrorComponent
