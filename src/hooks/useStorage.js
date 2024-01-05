import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStorage = () => {
  const getItem = async (key) => {
    try {
      const passwords = await AsyncStorage.getItem(key)
      return JSON.parse(passwords) || []
      
    } catch (error) {
      alert('Error')
      return []
    }
  }

  const saveItem = async (key, value) => {
    try {
      let passwords = await getItem(key)

      passwords = [...passwords, value]

      await AsyncStorage.setItem(key, JSON.stringify(passwords))

    } catch (error) {
      alert('Error')
    }
  }

  const deleteItem = async (key, item) => {
    try {
      const passwords = await getItem(key)
      
      const myPasswords = passwords.filter((password) => {
        return (password !== item)
      })

      await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
      return myPasswords

    } catch (error) {
      alert('Error')
    }
  }

  return {
    getItem,
    saveItem,
    deleteItem
  }
}