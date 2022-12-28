import React from "react";
import { View, StyleSheet } from "react-native";
import RepositoryStats from "./RepositoryStats";
import theme from "./theme";
import RepositoryItemHeader from "./RepositoryItemHeader";


export default function RepositoriesItem({props}){

    return (
        <View style={style.container} key={props.id}>
            <RepositoryItemHeader {...props}/>
            <RepositoryStats {...props} />
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    }
})