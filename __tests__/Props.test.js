import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import Home from '../src/Home'

configure({ adapter: new Adapter() })


test('Testing props', () => {
    const wrapper = shallow(<Home data='props data' />).props()
    console.log(wrapper.children[1].props.children[1])
    expect(wrapper.children[1].props.children[1]).toEqual('props data')
})
