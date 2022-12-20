import React from "react";
import {Text, View} from "react-native"
import Constants from "expo-constants"
import RepositoriesList from "./RepositoriesList";
import AppBar from "./AppBar";
import { Routes, Route } from "react-router-native";

export default function Main (){
    return (
        <View style={{ flex:1}}>
            <AppBar />
            <Routes>
                <Route path='/' exact element={<RepositoriesList/>} />
                <Route path='/signin' exact element={<Text>Working in it</Text>} />
            </Routes>
        </View>
    )
}