import React from 'react';
import {mount} from 'enzyme';
import ButtonIcon from '../index';

describe('Button-icon component', () => {
    it('Should render button-icon without crashing', () => {
        const btnIcon = mount(<ButtonIcon/>);
        expect(btnIcon.exists(
            <a>
                <i/>
            </a>
        )).toBe(true);
    });

    it('Should be empty <i> tag if no icon type', () => {
        const btnIcon = mount(
            <ButtonIcon class="test-class"/>
        );

        expect(btnIcon.props().type).toEqual(undefined);
        expect(btnIcon.props().action).toEqual(undefined);
        expect(btnIcon.find('.material-icons').text()).toEqual('');
    });

    it('Should render with only icon type as props', () => {
        const btnIcon = mount(
            <ButtonIcon type="test-type"/>
        );

        expect(btnIcon.props().class).toEqual(undefined);
        expect(btnIcon.props().action).toEqual(undefined);
        expect(btnIcon.exists(
            <a className="btn">
                <i className="material-icons">test-type</i>
            </a>
        )).toBe(true);
    });

    it('Should render with classname and icon type as props', () => {
        const btnIcon = mount(
            <ButtonIcon class="test-class" type="test-type"/>
        );

        expect(btnIcon.props().class).toEqual('test-class');
        expect(btnIcon.props().type).toEqual('test-type');
        expect(btnIcon.exists(
            <a className="btn test-class">
                <i className="material-icons">test-type</i>
            </a>
        )).toBe(true);
    });

    it('Should render with all possible props', () => {
        const clickAction = jest.fn(() => 'click');

        const btnIcon = mount(
            <ButtonIcon class="test-class" type="test-type" action={clickAction}/>
        );

        expect(btnIcon.exists(
            <a className="btn test-class" onClick={clickAction}>
                <i className="material-icons">test-type</i>
            </a>
        )).toBe(true);
    });
});
