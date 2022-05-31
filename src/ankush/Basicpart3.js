import { connect } from 'react-redux';
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

//Custom Imports

import { increase, decrease } from '../ankush/redux/actions/counterAction';

class Basicpart3 extends Component {

    onPressClickMe = () => {
        this.props.increaseTheValue()
    }
    onPressGhataDoClickMe = () => {
        this.props.decreaseTheValue()
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.counterText}>{this.props.counter.value}</Text>
                <TouchableOpacity onPress={this.onPressClickMe} style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>+ press me</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPressGhataDoClickMe} style={styles.buttonGhataDoStyle}>
                    <Text style={styles.textStyle}>- press me</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseTheValue: () => {
            dispatch(increase());
        },
        decreaseTheValue: () => {
            dispatch(decrease());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Basicpart3);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: 16,
        alignItems: 'center'
    },
    buttonStyle: {
        height: 44,
        width: '100%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6200EA',
        marginTop: 200,
    },
    textStyle: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    },
    counterText: {
        color: 'black',
        fontSize: 25,
        fontWeight: '600',
        marginTop: 100
    },
    buttonGhataDoStyle: {
        height: 44,
        width: '100%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        marginTop: 20,
    }
})