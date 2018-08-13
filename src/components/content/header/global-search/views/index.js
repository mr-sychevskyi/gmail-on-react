// @flow

import React, {Component} from 'react';

import './style.styl';
import ButtonIcon from '../../../../common/button-icon';

class GlobalSearchView extends Component {
    state = {
        value: '',
        filterData: []
    };

    onInputChange = e => {
        if (e) {
            const value = e.target.value;
            const {messages, currSection, filterMessages} = this.props;

            const filterData = messages.filter(message => {
                const subject = message.subject.toLowerCase();
                const body = message.body.toLowerCase();

                return subject.includes(value.toLowerCase()) || body.includes(value.toLowerCase());
            });

            this.setState({
                value,
                filterData
            }, () => filterMessages(`messages-${currSection}`, this.state.filterData));
        }
    };

    render() {
        return (
            <form className="global-search">
                <ButtonIcon class="global-search__button btn-search" type="search"/>
                <input
                    className="global-search__input"
                    type="text"
                    placeholder="Search"
                    value={this.state.value}
                    onChange={this.onInputChange}
                />
                <ButtonIcon class="global-search__button btn-mic" type="mic"/>
            </form>
        );
    }
}

export default GlobalSearchView;
