import { useState } from "react";
import {
  FlatList,
  ScrollView,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { styles } from "./styles";
import { Participants } from "./../../components/Participants/index";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState<string>("");

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      Alert.alert("Eita", "O participante já foi adicionado, tente outro nome");
    } else {
      setParticipants((oldParticipants) => [
        ...oldParticipants,
        participantName,
      ]);
      setParticipantName("");
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover ${name}?`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          Alert.alert("Removido", `${name} foi removido com sucesso`);
          setParticipants((oldParticipants) =>
            oldParticipants.filter((participant) => participant !== name)
          );
        },
        style: "destructive",
      },
    ]);
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("./../../../assets/logo.png")}
            style={styles.logo}
          />
        </View>

        <View style={styles.participantsContainer}>
          <TextInput
            value={participantName}
            onChangeText={setParticipantName}
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#555"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleParticipantAdd();
            }}
          >
            <Icon name="pluscircleo" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.listBackground}>
          <View style={styles.listContent}>
            <View style={styles.listHeader}>
              <View style={styles.listHeaderTitle}>
                <Text style={styles.listHeaderCreate}>Criadas</Text>
                <View style={styles.listHeaderCounter}>
                  <Text style={styles.listHeaderCounter}>0</Text>
                </View>
              </View>
              <View style={styles.listHeaderTitle}>
                <Text style={styles.listHeaderConclude}>Concluidas</Text>

                <View style={styles.listHeaderCounter}>
                  <Text style={styles.listHeaderCounter}>0</Text>
                </View>
              </View>
            </View>

            <View style={styles.divider} />
            <FlatList
              style={styles.participantsList}
              data={participants}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Participants
                  name={item}
                  onRemove={() => handleParticipantRemove(item)}
                />
              )}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() => (
                <Text style={styles.emptyList}>Nenhum participante</Text>
              )}
            />
          </View>
        </View>
      </View>
    </>
  );
}
