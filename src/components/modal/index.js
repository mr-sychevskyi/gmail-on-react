// @flow

import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import './style.styl';

import ButtonIcon from '../common/button-icon/index';
import NewEmail from './new-email/index';

type PropsModal = { children: any }; // eslint-disable-line flowtype/no-weak-types

class Modal extends Component<PropsModal> {
    modalRoot: ?HTMLElement;

    constructor(props: PropsModal) {
        super(props);
        this.modalRoot = document.getElementById('modal-root');
    }

    render() {
        if (this.modalRoot) {
            return ReactDOM.createPortal(
                this.props.children,
                this.modalRoot,
            );
        } else {
            return null;
        }
    }
}

type State = {| isOpen: boolean |};

class ModalParent extends Component<{}, State> {
    state = {isOpen: false};

    toggleModal = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    render() {
        return (
            <Fragment>
                <ButtonIcon type="add" class="btn-newmail" action={this.toggleModal}/>
                {this.state.isOpen &&
                <Modal>
                    <div className="modal-overlay">
                        <NewEmail onClose={this.toggleModal}/>
                    </div>
                </Modal>
                }
            </Fragment>
        );
    }
}

export default ModalParent;
