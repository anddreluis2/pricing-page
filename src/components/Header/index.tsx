import styles from './styles.module.scss'
import Switch from "react-switch"

export function Header() {
    return (
        <>
            <div className={styles.container}>
                <h1>Pricing Plans</h1>
                <p>Try it now for free</p>
            </div>
            <div className={styles.wrapper}>
                <Switch
                    onChange={() => { console.log("Aaaaa") }}
                    checked={true}
                    checkedIcon={false}
                    uncheckedIcon={false}
                />
            </div>
        </>

    )
}