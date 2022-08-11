import styles from './styles.module.scss'

export function Cards() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1>Free</h1>
                <h3>R$ 0,00</h3>
                <ul>
                    <li>2 repositories</li>
                    <li>5 members</li>
                    <li>10 GB storage</li>
                </ul>
                <button>Get Started</button>
            </div>
            <div className={styles.card}>
                <h1>Plus</h1>
                <p>R$ 9,99</p>
                <ul>
                    <li>10 repositories</li>
                    <li>15 members</li>
                    <li>50GB storage</li>
                    <li>24/7 support</li>
                </ul>
                <button>Try it Now</button>
            </div>
            <div className={styles.card}>
                <h1>Pro</h1>
                <p>R$ 400,00</p>
                <ul>
                    <li>Unlimited repositories</li>
                    <li>Unlimited members</li>
                    <li>1TB storage</li>
                    <li>24/7 support</li>
                </ul>
                <button>Try it Now</button>
            </div>
        </div>
    )
}