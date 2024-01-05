import { useState } from 'react'
import { Image, Text, View, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider'
import Logo from '../../assets/logo.png'
import { ModalPassword } from '../../components/ModalPassword';

import { styles } from './styles'

export const Home = () => {
  const [size, setSize] = useState(6)
  const [password, setPassword] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012356789!@#$%&*'

  const generatePassword = () => {
    let password = ""

    for (let i = 0, n = charset.length; i < size; i++) {
      password+= charset.charAt(Math.floor(Math.random() * n))
    }

    setPassword(password)
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />

      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={styles.slider}
          minimumValue={6}
          maximumValue={20}
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
          maximumTrackTintColor='gray'
          minimumTrackTintColor='#343543'
          thumbTintColor='#343543'
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent>
        <ModalPassword password={password} handleClose={() => setModalVisible(false)} />
       </Modal>
    </View>
  );
}