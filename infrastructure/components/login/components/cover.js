import Image from 'next/image'
import cover from './cover.jpeg'
import styles from './cover.module.css'

export default function Cover() {
    return (
        <div className={styles.imageWrapper}>
            <Image
                alt="cover"
                src={cover}
            />
        </div>
    )
}
