import React from "react"
import StyledText from "./StyledText"
import { View } from "react-native"

const parseThousand = value => {
    return value >= 1000
    ? `${Math.round(value / 100) / 10}k`
    : String(value)
}

const RepositoryStats = props => {
    return(
        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
            <View>
                <StyledText fontWeight='bold' color='primary'>Stars</StyledText>
                <StyledText align='center'>{parseThousand(props.stargazersCount)}</StyledText>
            </View>
            <View>
                <StyledText fontWeight='bold' color='primary'>Forks</StyledText>
                <StyledText align='center'>{parseThousand(props.forksCount)}</StyledText>
            </View>
            <View>
                <StyledText fontWeight='bold' color='primary'>Reviews</StyledText>
                <StyledText align='center'>{props.reviewCount}</StyledText>
            </View>
            <View>
                <StyledText fontWeight='bold' color='primary'>Rating</StyledText>
                <StyledText align='center'>{props.ratingAverage}</StyledText>
            </View>
        </View>
    )
}

export default RepositoryStats