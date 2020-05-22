import React from 'react';

export function FormModal(props) {
    return (
        <div id={props.id} className="modal fade" role="dialog" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    {props.children}
                </div>
            </div>
         </div>
        )
}

export function ModalHeader({ children }) {
    return (
        <div className="modal-header text-center">
            <h4>
                {children}
            </h4>
        </div>
    )
}

export function ModalFooter({ children }) {
    return <div className="modal-footer">{children}</div>;
}

export function ModalBody({ children }) {
    return <div className="modal-body">{children}</div>;
}

export function CloseBtn(props) {
    return (
    <button className="btn bg-dark text-light" data-dismiss="modal" {...props} >
        Close
    </button>
    ) 
}

export function SubmitBtn(props) {
    return (
    <button
        className="btn bg-primary text-light"
        data-dismiss="modal"
        {...props}
    >
        {props.action}
    </button>
    )
}