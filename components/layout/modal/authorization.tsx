import React from 'react'
import dynamic from 'next/dynamic'

import styles from '../../../styles/layout/modal/authorization.module.sass'

import { Modal, IconButton, TabProvider, TabList } from '../../../customUI'

import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { setModalLogin, selectWindows } from '../../../redux/slices/windows'
import Login from './login'
import Register from './register'

const CloseRoundedIcon = dynamic(() => import('@mui/icons-material/CloseRounded'))

const Authorization = () => {

    const dispatch = useAppDispatch()
    const windows = useAppSelector(selectWindows)

    const [listArray] = React.useState([
        { value: "1", "label": "Login" },
        { value: "2", "label": "Register" }
    ])

    const onCloseAuthorization = React.useCallback(() => {
        dispatch(setModalLogin(false))
    }, [])

    return (
        <Modal open={windows.login} onClose={onCloseAuthorization} className={styles.modal} animate="fade">

            <div className={styles.header}>
                <IconButton onClick={onCloseAuthorization}><CloseRoundedIcon /></IconButton>
            </div>

            <div className={styles.wrapper}>
                <TabProvider>
                    <TabList listArray={listArray} />
                    <Login/>
                    <Register/>
                </TabProvider>
            </div>

        </Modal>
    )
}

export default React.memo(Authorization)