import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import Home from '../src/Home'

configure({ adapter: new Adapter() })


test('Testing props', () => {
    const wrapper = shallow(<Home data='props data' />).props()
    // console.log(wrapper.children[1].props.children[1])
    expect(wrapper.children[1].props.children[1]).toEqual('props data')
})

describe('App test', () => {

    // console.log(wrapper.state().data)
    test('Testing state', () => {
        let wrapper = shallow(<Home />)
        expect(wrapper.state().data).toEqual('data added...')
    })

    test('testing button', () => {

        let wrapper = shallow(<Home />)

        expect(wrapper.find('#refreshButton')).toHaveLength(1);

        let btn = wrapper.find('#refreshButton')
        btn.props().onPress()

        expect(wrapper.state().count).toEqual(1)

    })

})
