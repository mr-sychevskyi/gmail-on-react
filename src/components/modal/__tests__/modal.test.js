import React from 'react';
import {mount} from 'enzyme';
import ModalParent from '../index';
import NewEmailHeader from '../new-email/new-email-header/index';
import NewEmailContent from '../new-email/new-email-content';
import NewEmailControls from '../new-email/new-email-controls/index';

describe('Modal', () => {
    const modal = mount(<ModalParent/>);
    const mailHeader = mount(<NewEmailHeader/>);
    const mailContent = mount(<NewEmailContent/>);
    const mailControls = mount(<NewEmailControls/>);

    it('Should render a modal without crashing', () => {
        expect(modal.exists(
            <div className="modal-overlay">
                <form className="new-email">
                    <NewEmailHeader/>
                    <NewEmailContent/>
                    <NewEmailControls/>
                </form>
            </div>)
        ).toBe(true);
    });

    it('Should check modal form header', () => {
        expect(mailHeader.find('h3').length).toEqual(1);
        expect(mailHeader.find('h3').text()).toEqual('New email');
        expect(mailHeader.find('a.btn-close').length).toEqual(1);
    });

    it('Should check modal form fileds', () => {
        expect(mailContent.find("input [placeholder='to@email.me']").length).toEqual(1);
        expect(mailContent.find("input [placeholder='cc@email.me']").length).toEqual(1);
        expect(mailContent.find("input [placeholder='bcc@email.me']").length).toEqual(1);
        expect(mailContent.find("input [placeholder='Subject']").length).toEqual(1);
        expect(mailContent.find("textarea [placeholder='Message body']").length).toEqual(1);
    });

    it('Should check modal form controls', () => {
        expect(mailControls.find('button.btn-form.btn-primary').length).toEqual(1);
        expect(mailControls.find('button.btn-form.btn-primary').text()).toEqual('Send');

        expect(mailControls.find('button.btn-form.btn-secondary').length).toEqual(1);
        expect(mailControls.find('button.btn-form.btn-secondary').text()).toEqual('Cancel');
    });

    it('Should change open state of modal', () => {
        mailHeader
            .find('.btn-close')
            .simulate('click');
        expect(modal.state().isOpen).toEqual(false);

        mailHeader
            .find('.btn-close')
            .simulate('click');
        expect(modal.state().isOpen).toEqual(false);

        mailControls
            .find('.btn-form.btn-secondary')
            .simulate('click');
        expect(modal.state().isOpen).toEqual(false);

        mailControls
            .find('.btn-form.btn-secondary')
            .simulate('submit');
        expect(modal.state().isOpen).toEqual(false);
    });
});
