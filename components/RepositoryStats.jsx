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
                <StyledText align='center'>{parseThousand(props.stargazersCount)}</StyledText>
                <StyledText fontWeight='bold' color='primary'>Stars</StyledText>
            </View>
            <View>
                <StyledText align='center'>{parseThousand(props.forksCount)}</StyledText>
                <StyledText fontWeight='bold' color='primary'>Forks</StyledText>
            </View>
            <View>
                <StyledText align='center'>{props.reviewCount}</StyledText>
                <StyledText fontWeight='bold' color='primary'>Reviews</StyledText>
            </View>
            <View>
                <StyledText align='center'>{props.ratingAverage}</StyledText>
                <StyledText fontWeight='bold' color='primary'>Rating</StyledText>
            </View>
        </View>
    )
}

export default RepositoryStats