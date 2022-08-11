import React, { useState } from 'react'
import styles from './styles.module.scss'
import Switch from "react-switch"

export function Header() {
    const [subscription, setSubscription] = useState(false)

    const toggleSubscriptionType = () => {
        setSubscription(subscription == true ? false : true)
        console.log("You changed the subscription!")
    }
    return (
        <>
            <div className={styles.container}>
                <h1>Pricing Plans</h1>
                <p>Try it now for free</p>
            </div>
            <div className={styles.wrapper}>
                <span>Monthly</span>
                <Switch
                    onChange={() => { toggleSubscriptionType() }}
                    checked={subscription}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    offColor="#5e5e5e"
                    onColor="#2f2f2f"
                />
                <span>Annually</span>
                <p className={styles.subtitle}>(15% off)</p>
            </div>
        </>

    )
}