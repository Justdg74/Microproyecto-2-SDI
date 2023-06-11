import React from "react";
import styles from "./Modal.module.css";

export const Modal = () => {
    return (
        <div>
            <div className = {styles.modalContainer}>
                <button className = {styles.modalButton}>
                    X
                </button>
            </div>
        </div>

    )

}


