import React, { PureComponent } from 'react';
import { Icon } from 'antd';

export default class Header extends PureComponent {
    render() {
        return (
            <div className="header__container">
                <div className="header__logo-wrap">
                    <img src="./assets/wsa.svg" className="header__logo" alt="logo"/>
                </div>
                <div className="header__email">
                    <Icon type="mail" theme="filled" />
                    <div>wsa@wsa.com</div>
                </div>
                <div className="header__location">
                    <Icon type="pushpin" theme="filled" />
                    <div>Dallas, TX, 75215</div>
                </div>
                <div className="header__phone">
                    <Icon type="phone" theme="filled" />
                    <div>972-347-5584</div>
                </div>
            </div>
        )
    }
}