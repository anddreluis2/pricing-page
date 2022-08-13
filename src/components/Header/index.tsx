import styles from './styles.module.scss'
import Switch from "react-switch"

interface IHeaderProps {
    subscription: boolean | undefined,
    setSubscription: any,
    toggleSwitch: any,
}

export const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
    const { subscription, setSubscription, toggleSwitch } = props

    return (
        <div>
            <div className={styles.container}>
                <h5 style={{ color: "#2b2b2b", fontWeight: "600", fontStyle: "italic", marginBottom: "12px" }}>Pricing Plans:</h5>
                <h2>Try it now for free</h2>
            </div>
            <div className={styles.wrapper}>
                <span>Monthly</span>
                <Switch
                    onChange={(value) => toggleSwitch(value)}
                    checked={!!subscription}
                    height={10}
                    width={40}
                    handleDiameter={20}
                    onHandleColor="#b393ff"
                    offHandleColor='#b393ff'
                    checkedIcon={false}
                    uncheckedIcon={false}
                    offColor="#7740f9"
                    onColor="#7740f9"
                />
                <span>Annually</span>
                <span className={styles.subtitle}>(15% off)</span>
            </div>
        </div>

    )
}