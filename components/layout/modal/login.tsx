import React from 'react';
import { ContainedButton, OutlinedInput, TabPanel } from '../../../customUI';
import AuthProviders from './authProviders';

import styles from '../../../styles/layout/modal/authorization.module.sass'

const Login = () => {

    return (
        <TabPanel value="1">
            <form className={styles.form}>
                <OutlinedInput
                    color="primary"
                    label="Email"
                    type="email"
                    inputSize="medium"
                    fullWidth
                    value=""
                />
                <OutlinedInput
                    color="primary"
                    label="Password"
                    type="password"
                    inputSize="medium"
                    fullWidth
                    value=""
                />
                <ContainedButton
                    type="submit"
                    fullWidth
                    className={styles.submitButton}
                >LogIn</ContainedButton>
            </form>
            <AuthProviders />
        </TabPanel>
    )
}

export default React.memo(Login)