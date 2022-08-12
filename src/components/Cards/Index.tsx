import styles from './styles.module.scss'

export function Cards() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 style={{marginTop: "8px", color: "#7740f9"}}>Free</h1>
                <div className={styles.text}>
                <p>R$ 0,00</p>
                <ul>
                    <li>2 repositories</li>
                    <li>5 members</li>
                    <li>10GB storage</li>
                    <li>Chatbot support</li>
                </ul>
                </div>
                <button>Get started</button>
            </div>
            <div className={styles.card}>
            <h1 style={{marginTop: "8px", color: "#7740f9"}}>Plus</h1>
                <div className={styles.text}>
                <p>R$ 9,99</p>
                <ul>
                    <li>10 repositories</li>
                    <li>15 members</li>
                    <li>50GB storage</li>
                    <li>24/7 support</li>
                </ul>
                </div>
                <button>Try it Now</button>
            </div>
            <div className={styles.card}>
            <h1 style={{marginTop: "8px", color: "#7740f9"}}>Pro</h1>
                <div className={styles.text}>
                <p>R$ 400,00</p>
                <ul>
                    <li>Unlimited repositories</li>
                    <li>Unlimited members</li>
                    <li>1TB storage</li>
                    <li>24/7 support</li>
                </ul>
                </div>
                <button>Try it Now</button>
            </div>
        </div>
    )
}