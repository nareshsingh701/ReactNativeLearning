import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Naresh4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            agr: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000);
        console.log("Constuctor");
    }
    componentWillMount() {
        console.log("Component will mount");
    }
    componentDidMount() {
        console.log("Component did mount");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("should Component update", nextProps, nextState);
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("Component will update", nextProps, nextState);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update", prevProps, prevState);
    }
    componentWillUnmount() {
        console.log("Component will unmount");
    }
    onMakeOlder() {
        this.setState({
            age: this.state.agr + 3
        });
    }
    render() {
        console.log("EmployeeA render Callig")
        return (
            <>
                <View>
                    <Text>hello EmployeeA</Text>
                </View>


            </>
        );
    }



}




export default Naresh4;