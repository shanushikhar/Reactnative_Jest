import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Users from './users'

export default class Home extends Component {
    state = {
        data: '',
        count: 0
    }

    componentDidMount() {
        Users.all().then(data => { })
        this.setState({
            data: 'data added...'
        })
    }

    change(x) {
        //  return x * 5  

        this.setState({ data: x * 5 })
    }

    refreshData = () => {
        console.log("download data from server placeholder");
        this.setState(
            (prevState, props) => {
                return { count: prevState.count + 1 };
            }
        );
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
                <Text>hey {this.props.data}</Text>
                <TextInput
                    testID={'password'}
                    onChangeText={(text) => this.setState(text)}
                    style={{ backgroundColor: 'grey', marginBottom: 15 }}
                    placeholder='Enter password'
                    placeholderTextColor='red'
                />
                <Button
                    id="refreshButton"
                    onPress={this.refreshData}
                    title="Refresh"
                    color="#000000"
                    accesibilityLabel="Refresh AQI data"
                    testID="refreshButton"
                />
            </View>
        )
    }
}
