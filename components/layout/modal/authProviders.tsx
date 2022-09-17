import React from 'react';
import { TextButton } from '../../../customUI';

import styles from '../../../styles/layout/modal/authorization.module.sass'

const AuthProviders = () => {

    return (
        <div className={styles.footer}>
            <TextButton fullWidth color="secondary">Google</TextButton>
            <TextButton fullWidth color="secondary">Facebook</TextButton>
        </div>
    )
}

export default React.memo(AuthProviders)