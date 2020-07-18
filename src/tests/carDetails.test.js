import React from 'react';
import CarDetails from '../components/CarDetails';
import { render, fireEvent } from '@testing-library/react';

describe('CarDetails', () => {
    it("should apply styles on click", () => {
        const { renderedComponent } = render(<CarDetails />);
        const favorite = renderedComponent.root.findByProps({ "data-testid": "favorite" });
        fireEvent.click(favorite);
        expect(favorite.props.className).toMatch("details-top__icon-red");
    });
});