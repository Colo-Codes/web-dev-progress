import React from 'react';
import styles from './styles/Button.module.css';

export default function Button(props) {
    return (
        <button
            className={`${styles.button} ${
                props.marginLeft && styles.marginLeft
            } ${props.marginRight && styles.marginRight}`}
            onClick={props.onClick}
            disabled={props.disabled}>
            {props.children}
        </button>
    );
}
