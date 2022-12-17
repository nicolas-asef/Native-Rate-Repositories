import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";


export default function RepositoriesItem({props}){

    return (
        <View style={style.container} key={props.id}>
            <StyledText fontSize='subheading' fontWeight='bold'>Name: {props.fullName}</StyledText>
            <StyledText>Description: {props.description}</StyledText>
            <StyledText>Language: {props.language}</StyledText>
            <RepositoryStats {...props} />
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    strong:{
        fontWeight: 'bold',
        color: '#09f',
    }
})