import React from 'react'
import renderer from 'react-test-renderer'

import Home from '../src/Home'


test('Snapshot', () => {
    const snap = renderer.create(<Home />).toJSON()

    expect(snap).toMatchSnapshot()
})

test('method testing', () => {
    const Homedata = renderer.create(<Home />).getInstance()
    // console.log(Homedata)

    // expect(Homedata.change(5)).toEqual(25)

    Homedata.change(2)
    expect(Homedata.state.data).toEqual(10)
})

let findElement = function (tree, elemet) {
    // console.warn(tree.children)
    // for (let node in tree.children) {
    //     console.log(tree.children[node].type)
    // }

    let res = ''
    for (let x of tree.children) {
        if (x.props.testID == elemet) {
            res = true
        }
        return res
    }
}

test('element testing', () => {
    const Homedata = renderer.create(<Home />).toJSON()
    // console.log(Homedata)

    expect(findElement(Homedata, 'username')).toBeDefined()

})
