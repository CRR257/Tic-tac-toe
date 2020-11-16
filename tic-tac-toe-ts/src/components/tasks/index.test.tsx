import React from 'react';
import { shallow } from 'enzyme';
import Tasks from './index';

describe("Tasks", () => {
    it('renders the heading', () => {
        const component = shallow(<Tasks/>);
        expect(component.find('p').text()).toBe('Tasks');
    });

    it('renders 3 buttons', () => {
        const component = shallow(<Tasks/>);
        expect(component.find('button').length).toEqual(1);
    });
})
