import React, { PureComponent } from 'react';
export default class Search extends PureComponent {
    state = {
        byMake: true,
        byStyle: false,
    }
    switchTab = (key1, key2) => {
        if (this.state[key1] === false) {
            this.setState({[key1]: true, [key2]: false})
        }
    }

    render() {
        const { byMake, byStyle } = this.state;
        return (
            <React.Fragment>
                <div className="search__tabs">
                    <div
                        className={`search__tab ${byMake && "search__tab-active"}`}
                        onClick={() => this.switchTab("byMake", "byStyle")}
                    >
                        Search By Make
                    </div>
                    <div
                        className={`search__tab ${byStyle && "search__tab-active"}`}
                        onClick={() => this.switchTab("byStyle", "byMake")}
                    >
                        Search By Body Style
                    </div>
                </div>
                <div className="search__body"></div>
            </React.Fragment>
        );
    }
}