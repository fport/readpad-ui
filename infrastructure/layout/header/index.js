import { LogoWrapper } from './components'
import styles from "./index.module.css";

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <LogoWrapper />
                <button className="btn btn-outline btn-primary">Info</button>
            </div>
        </div>
    )
}
