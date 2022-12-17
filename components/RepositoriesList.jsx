import React from "react"
import { View, Text, FlatList } from "react-native"
import repositories from "./data/repositories"
import RepositoriesItem from "./RepositoriesItem"

export default function RepositoriesList(){
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <Text></Text>}
            renderItem = {({item : repo}) => (
                <RepositoriesItem props={repo}/>
            )}
        />
    )
}