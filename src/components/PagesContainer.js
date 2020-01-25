import React, { PureComponent } from 'react';
import { Tabs } from 'antd';
import Header from '../components/Header';
import Home from '../components/Home';
import Company from '../components/Company';

const { TabPane } = Tabs;
export default class PagesContainer extends PureComponent {
    render() {
        return (
            <div className="pages-container">
                <Header />
                <Tabs defaultActiveKey="home" >
                    <TabPane tab="Home" key="home">
                        <Home/>
                    </TabPane>
                    <TabPane tab="Cars" key="cars">
                        Cars
                    </TabPane>
                    <TabPane tab="Company" key="company">
                        <Company/>
                    </TabPane>
                    <TabPane tab="Order" key="order">
                        Order
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
