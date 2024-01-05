import { useState, useEffect, useCallback } from 'react'
import { View, Text, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles'
import { useStorage } from '../../hooks/useStorage'
import { useIsFocused } from '@react-navigation/native'
import { PasswordItem } from './components/PasswordItem'

export const Passwords = () => {
  const { getItem, deleteItem } = useStorage()
  const focused = useIsFocused()
  const [listPasswords, setListPasswords] = useState([])

 
  useEffect(() => {
    const loadPasswords = async () => {
      const passwords = await getItem("@pass")
      setListPasswords(passwords)
    }

    loadPasswords()
  }, [focused])

  const handleDeletePassword = async (item) => {
    const passwords = await deleteItem("@pass", item)
    setListPasswords(passwords)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas Senhas</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          data={listPasswords}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => <PasswordItem data={item} removePassword={() => {handleDeletePassword(item)}} />}
        />
      </View>
    </SafeAreaView>
  )
}
