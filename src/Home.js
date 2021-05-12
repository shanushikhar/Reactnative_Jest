import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'
import Users from './users'

export default class Home extends Component {
    state = {
        data: ''
    }

    componentDidMount() {
       // Users.all().then(data => console.log(data))
    }

    change(x) {
        //  return x * 5  

        this.setState({ data: x * 5 })
    }

    render() {
        return (
            <View>
                <TextInput
                    testID={'username'}
                    onChangeText={(text) => this.setState(text)}
                    style={{ backgroundColor: 'grey', marginBottom: 15 }}
                    placeholder='Enter username'
                    placeholderTextColor='red'
                />
                <Text>hey</Text>
                <TextInput
                    testID={'password'}
                    onChangeText={(text) => this.setState(text)}
                    style={{ backgroundColor: 'grey', marginBottom: 15 }}
                    placeholder='Enter password'
                    placeholderTextColor='red'
                />
            </View>
        )
    }
}
