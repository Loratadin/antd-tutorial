import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../components/Search';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Search/>, div)
})
it("renders button correctly", () => {
    const { getByTestId } = render(<Search />)
    expect(getByTestId('see-all')).toHaveTextContent("See All Cars")
})
it("renders search component correctly", () => {
    const { getByTestId } = render(<Search />)
    expect(getByTestId('search')).toHaveTextContent("Search")
})
it("matches snapshot", () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
})