import styles from './container.module.css'

export default function Container(props) {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}