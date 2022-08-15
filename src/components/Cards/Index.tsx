import styles from './styles.module.scss'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function Cards(subscription: any) {

    const [info, setInfo] = useState<any>([])

    const getData = async () => {
        const response = await axios.get("http://localhost:3000/planos")
        setInfo(response.data)
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className={styles.container}>
            {
                info.map((resp: any) => (
                    <div className={resp.id != "2" ? styles.card : styles.principal} key={resp.id}>
                        <h1>{resp.name}</h1>
                        <div className={styles.text}>
                            {subscription.subscription ?
                                <div>
                                    <p style={{ color: "#540bfd" }}>{resp.discountprice}</p>
                                </div>
                                :
                                <p>{resp.price}</p>
                            }
                            <ul>
                                <li>{resp.repositories}</li>
                                <li>{resp.members}</li>
                                <li>{resp.storage}</li>
                                <li>{resp.support}</li>
                            </ul>
                        </div>
                        <a target="blank" href="https://monest.com.br/">  <button>{resp.buttontext}</button> </a>
                    </div>
                ))
            }
        </div >
    )
}