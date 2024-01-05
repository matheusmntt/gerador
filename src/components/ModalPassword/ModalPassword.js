import { Text, View, TouchableOpacity, Pressable } from 'react-native'
import * as Clipboard from 'expo-clipboard'
import { styles } from './styles'
import { useStorage } from '../../hooks/useStorage'

export const ModalPassword = ({ password, handleClose }) => {
  const { getItem, saveItem, deleteItem } = useStorage()

  const handleCopyPassword = async () => {
    await Clipboard.setStringAsync(password)
    await saveItem('@pass', password)
    
    alert('Senha copiada com sucesso')

    handleClose()
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}> 
        <Text style={styles.title}>Senha Gerada</Text>

        <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
          <Text style={styles.text}>{password}</Text>
        </Pressable>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword}>
            <Text style={styles.buttonSaveText}>Salvar senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}