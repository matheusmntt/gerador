import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    marginBottom: 60
  }, 

  area: {
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 8,
  },

  slider: {
    height: 50,
  },

  button: {
    backgroundColor: '#343543',
    width: '80%',
    padding: 14,
    borderRadius: 8,
    marginBottom: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});
