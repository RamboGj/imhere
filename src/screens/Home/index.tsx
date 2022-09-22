import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native"
import { Participant } from "../../components/Participant"
import { styles } from './styles'

export function Home() {
  const participants = ['João', 'André', 'Gustavo', 'Thiago', 'Ana', 'Miguel', 'Isa', 'Elisa', 'Miso', 'Hihu']

  function handleAddParticipant(name: string) {
    console.log(name)
  }

  function handleRemoveParticipant(name: string) {
    console.log(`remove ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>
      <Text style={styles.eventDate}
      >
        Sexta, 4 de Novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleAddParticipant('Eu')}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item} 
            name={item} 
            onRemove={() => handleRemoveParticipant(item)}
        />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>Ainda não há participantes no evento.</Text>
        )}
      />
        
    </View>
  )
}