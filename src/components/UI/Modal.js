import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

//  Backdrop and ModalOverlay are two other components in the same file as Modal bec
//  they are only ever used w Modal or something.
const Backdrop = props => {
    return <div className={classes.backdrop} />
};

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop />, portalElement)}
        {ReactDOM.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            portalElement
        )}
    </Fragment>
};

export default Modal;