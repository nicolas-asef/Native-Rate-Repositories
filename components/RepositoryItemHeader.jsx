import React from "react"
import { View, Image, Platform } from "react-native"
import { StyleSheet } from "react-native"
import StyledText from "./StyledText"
import theme from "./theme"

export default function RepositoryItemHeader({ ownerAvatarUrl, fullName, description, language}){
    return (
        <View style={{flexDirection:'row', paddingBottom:5}}>
            <View style={{justifyContent:'center'}}>
                <Image style={style.image} source={{uri:ownerAvatarUrl}}/> 
            </View>
            <View style={{flex:1 ,paddingLeft:10}}>
                <StyledText fontWeight='bold'>Name: {fullName}</StyledText>
                <StyledText color='secondary'>Description: {description}</StyledText>
                <StyledText style={style.language}>{language}</StyledText>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    language:{
        padding:4,
        color: theme.colors.white,
        backgroundColor: Platform.select({
            ios:theme.colors.primary,
            android:'red',
            default: 'orange'
        }), //ESTO ES PARA SELECCIONAR COMO SE VE SEGUN EL SISTEMA OPERATIVO
        alignSelf:'flex-start',
        borderRadius:4, //EN MUCHOS CASOS PARA QUE APAREZCA EL BORDER RADIUS ES NECES. PONER EL OVERFLOW HIDDEN
        overflow:'hidden' //EN MUCHOS CASOS PARA QUE APAREZCA EL BORDER RADIUS ES NECES. PONER EL OVERFLOW HIDDEN
    },
    image:{
        width:48,
        height:48,
        borderRadius:4,
        marginTop:4,
        marginBottom:4
    } //SI NO ESTILAMOS LA IMAGEN NO LA VA A MOSTRAR, PORQUE NO DETECTA QUE TAMAÑO TIENE
})
