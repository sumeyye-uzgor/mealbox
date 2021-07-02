import { Toast } from "react-bootstrap"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeToast } from "../redux/actions"


function ToastNotify() {
    const toastMessage = useSelector((state) => state.toastMessage)
    const isToastOpen = useSelector((state) => state.isToastOpen)
    const dispatch = useDispatch()
    return (
        <div>
            isToastOpen &&
            (<Toast onClose={() => dispatch(closeToast())} show={isToastOpen} delay={3000} autohide
                style={{
                    position: 'fixed',
                    top: "90px",
                    right: "30px",
                    zIndex: 7,
                    border: "1px solid black",
                }}
            >
                <Toast.Header closeButton={false}>
                    <strong className="mr-auto">{toastMessage}</strong>
                    {/* <small>just now</small> */}
                </Toast.Header>

            </Toast>)
        </div>
    );
}




export default ToastNotify;
