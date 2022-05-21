import styles from "./index.module.css";

function Container({ children }) {
    <div className={styles.content}>
        {children}
    </div>
}

export default Container;