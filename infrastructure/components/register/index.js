import styles from "./index.module.css";
import {AuthForm, Cover} from './components'

export default function SignUp() {
  return <div className={styles.bg}>
    <Cover />
    <AuthForm />
  </div>;
}
