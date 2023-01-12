import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import {CSSTransition} from 'react-transition-group';

const Alert = () => {
  const {alert, hide} = useContext(AlertContext);
  alert.visible && setTimeout(() => hide(), 2000);
  return (
    <CSSTransition
      in={alert.visible}
      timeout={500}
      classNames={'alert'}
      mountOnEnter
      unmountOnExit
    >
      <div className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`}>
        <strong>Внимание!</strong> {alert.text}
        <button
          onClick={hide}
          type="button"
          className="btn-close"
          aria-label="Close"
        ></button>
      </div>
    </CSSTransition>
  )
}

export default Alert;
