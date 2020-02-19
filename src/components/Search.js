import React, { PureComponent } from 'react';
export default class Search extends PureComponent {
    state = {
        byMake: true,
    }
    render() {
        const { byMake } = this.state;
        return (
            <React.Fragment>
                <div className="search__tabs">
                    <div className={byMake && "search__tab-active"}>
                        Search By Make
                    </div>
                    <div className="search__tab">
                        Search By Body Style
                    </div>
                </div>
                <div className="search__body"></div>
            </React.Fragment>
        );
    }
}