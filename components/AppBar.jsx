import React from "react";
import { ViewPropsTypes, StyleSheet, View, TouchableWithoutFeedback, ScrollView} from "react-native";
import StyledText from "./StyledText";
import Constants from "expo-constants"
import theme from "./theme";
import { Link, useLocation } from "react-router-native";

export default function AppBar(){
    
    const AppBarTab = ({ children, to }) => {
        const {pathname} = useLocation()
        
        const active = pathname === to

        const textStyles=[
            styles.text,
            active && styles.active
        ]

        return (
            <Link to={to} component={TouchableWithoutFeedback}>
                <StyledText fontWeight='bold' style={textStyles}> 
                    {children}
                </StyledText>
            </Link>
        )
    }
    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll} showsHorizontalScrollIndicator={false}>
                <AppBarTab to='/'> Repositories </AppBarTab>
                <AppBarTab to='/signin'> Sign In</AppBarTab>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        flexDirection:'row',
        paddingLeft:10
    },
    text:{
        color: theme.appBar.secondaryText,
        paddingRight: 10
    },
    scroll:{
        paddingBottom:15
    },
    active:{
        color: theme.appBar.primaryText
    }
})