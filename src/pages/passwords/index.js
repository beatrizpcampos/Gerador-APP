import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '@/src/hooks/useStorage'

export function Passwords(){
    const [listPasswords, setListPasswords] = useState([])
    const focussed = useIsFocused()
    const { getItem } = useStorage()
    
    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem("@pass")
            setListPasswords(passwords)
        }

        loadPasswords()
    }, [focussed])

    return(
        <SafeAreaView style={{ flex: 1, }}>
        <View style={styles.header}>
            <Text style={styles.title}>Minhas senhas</Text>
        </View>

        <View style={styles.content}>
          <FlatList
            data={listPasswords}
            keyExtractor={ (item) => String(item) }
            renderItem={ ({item}) => <Text>{item}</Text> }
          />
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    header:{

    },
    content: {

    }
})