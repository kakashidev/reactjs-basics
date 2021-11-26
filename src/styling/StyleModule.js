import React from 'react'
import Stylesheet from './Stylesheet'
import styles from './appStyle.module.css';

function StyleModule() {
    return (
        <div>
            <h1 className = 'error'> Error in module</h1>
            <h1 className = {styles.success}> Success in module</h1>
        </div>
    )
}

export default StyleModule
