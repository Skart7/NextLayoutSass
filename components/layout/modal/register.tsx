import React from 'react';
import { ContainedButton, OutlinedInput, TabPanel } from '../../../customUI';

import styles from '../../../styles/layout/modal/authorization.module.sass'
import AuthProviders from './authProviders';

const Register = () => {

    return (
        <TabPanel value="2">
            <form className={styles.form}>
                <OutlinedInput
                    color="primary"
                    label="User name"
                    type="text"
                    inputSize="medium"
                    fullWidth
                    error={false}
                    value=""
                />
                <OutlinedInput
                    color="primary"
                    label="Email"
                    type="email"
                    inputSize="medium"
                    fullWidth
                    error={false}
                    value=""
                />
                <OutlinedInput
                    color="primary"
                    label="Password"
                    type="password"
                    inputSize="medium"
                    fullWidth
                    error={false}
                    value=""
                />
                <ContainedButton
                    type="submit"
                    fullWidth
                    className={styles.submitButton}
                >Register</ContainedButton>
            </form>
            <AuthProviders />
        </TabPanel>
    )
}

export default React.memo(Register)