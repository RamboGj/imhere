import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
    padding: 24
  },
  eventDate: {
    color: '#6B6B6B', 
    fontSize: 16,
  },
  eventName: {
    marginTop: 58,
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    height: 56,
    flex: 1,
    backgroundColor: '#1F1E25',
    borderRadius: 5,

    color: '#FFF',
    padding: 16,
    marginRight: 12,

    fontSize: 16,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42
  },
  emptyListText: {
    color: '#6B6B6B',
    fontWeight: 'bold',
    fontSize: 14
  }
})