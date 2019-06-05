import React, { PureComponent } from 'react';
import { Tabs } from 'antd';
import Home from '../components/Home';
import Header from '../components/Header';
import Company from '../components/Company';

const TabPane = Tabs.TabPane;
export default class PagesContainer extends PureComponent {
    render() {
        return (
            <div className={"pages-container"}>
                <Header/>
                <Tabs className={"pages-container__tabs"} defaultActiveKey="home" >
                    <TabPane className={"pages-container__tab"} tab="Home" key="home">
                        <Home/>
                    </TabPane>
                    <TabPane className={"pages-container__tab"} tab="Cars" key="cars">
                    Cars
                    </TabPane>
                    <TabPane className={"pages-container__tab"} tab="Company" key="company">
                        <Company/>
                    </TabPane>
                    <TabPane className={"pages-container__tab"} tab="Order" key="order">
                    Order
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
