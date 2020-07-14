import React, { PureComponent } from 'react';
import { Select, Button } from "antd";
import { makesAndModels, bodyStyles } from "../dummyData";

const { Option } = Select;
export default class Search extends PureComponent {
    state = {
        byMake: true,
        byStyle: false,
        selectedMake: undefined,
        selectedModel: undefined,
        selectedBodyStyle: undefined,
    }

    updateSelectedOption = (value, key) => this.setState({ [key]: value });

    switchTab = (key1, key2) => {
        if (this.state[key1] === false) {
            this.setState({[key1]: true, [key2]: false})
        }
    }
    onSearchClick = () => {
        this.props.changeTab("cars");
    }

    onSeeAllClick = () => {
        this.props.changeTab("cars");
    }

    render() {
        const { byMake, byStyle, selectedMake, selectedModel, selectedBodyStyle } = this.state;
        const models = selectedMake && makesAndModels.find(record => record.make === selectedMake).models;
        return (
            <div data-testid="search">
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
                <div className="search__body">
                    {byMake ? (
                        <div className="search__selector-wrap">
                            <Select
                                className="search__selector"
                                placeholder="Select a Make"
                                value={selectedMake}
                                onChange={(value => this.updateSelectedOption(value, "selectedMake"))}
                            >
                                {makesAndModels.map(item => (
                                    <Option key={item.make} value={item.make}>
                                        {item.make}
                                    </Option>
                                ))}
                            </Select>
                            <Select
                                className="search__selector"
                                placeholder="Select a Model"
                                value={selectedModel}
                                onChange={(value => this.updateSelectedOption(value, "selectedModel"))}
                            >
                                {selectedMake && models.map(model => (
                                    <Option key={model} value={model}>
                                        {model}
                                    </Option>
                                ))}
                            </Select>
                        </div>
                    ) : (
                        <div className="search__selector-wrap">
                            <Select
                                className="search__selector"
                                placeholder="Select a Body Style"
                                value={selectedBodyStyle}
                                onChange={(value => this.updateSelectedOption(value, "selectedBodyStyle"))}
                            >
                                {bodyStyles.map(item => (
                                    <Option key={item} value={item}>
                                        {item}
                                    </Option>
                                ))}
                            </Select>
                        </div>
                    )}
                    <Button type="primary" onClick={this.onSearchClick}>Search</Button>
                    <Button className="search__see-all-button" onClick={this.onSeeAllClick} data-testid="see-all">See All Cars</Button>
                </div>
            </div>
        );
    }
}