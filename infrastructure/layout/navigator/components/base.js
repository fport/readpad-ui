import React from 'react'
import routes from './routes.json'
import * as Icon from 'react-feather'
import Link from 'next/link'
import styles from './base.module.css'
import useAuth from '@hooks/useAuth'

export default function Base() {
    const [isAuthenticated] = useAuth()

    const renderNavigatorButton = () => {
        let buttons = []

        if (routes) {
            routes?.routes.map((route) => {
                const IconName = Icon[`${route.icon}`]
                if (
                    (route.permison === 'private' && isAuthenticated) ||
                    route.permison === 'public'
                ) {
                    return buttons.push(
                        <Link href={route.route}>
                            <div className={styles.btnWrapper}>
                                <button key={route.id}>
                                    <IconName />
                                </button>
                            </div>
                        </Link>
                    )
                }
            })
        }

        return buttons
    }
    return <div className={styles.container}>{renderNavigatorButton()}</div>
}
