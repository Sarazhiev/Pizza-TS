import React from 'react';
import styles from './NotFoundInfo.module.scss'

const NotFoundInfo: React.FC = () => {
    return (
        <div className={styles.root}>
            <h1>😕 Ничего не найдено :(</h1>
            <p className={styles.p}>К сожалению данная страница отсутствует</p>
        </div>
    );
};

export default NotFoundInfo;