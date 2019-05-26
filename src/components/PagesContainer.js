import React, { PureComponent } from 'react';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;
export default class PagesContainer extends PureComponent {
    render() {
        return (
            <div className={"pages-container"}>
                <Tabs defaultActiveKey="home" >
                    <TabPane tab="Tab 1" key="home">
                   Home
                    </TabPane>
                    <TabPane tab="Tab 2" key="cars">
                    Cars
                    </TabPane>
                    <TabPane tab="Tab 3" key="company">
                    Company
                    </TabPane>
                    <TabPane tab="Tab 3" key="order">
                    Order
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
