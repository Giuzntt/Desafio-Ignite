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
import { useEffect } from "react";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);
  const [tasksConcluidas, setTasksConcluidas] = useState(0);
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>(
    {}
  );

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      Alert.alert("Eita", "A tarefa já foi adicionada");
    } else {
      setParticipants((oldParticipants) => [
        ...oldParticipants,
        participantName,
      ]);
      setCompletedTasks((prevCompletedTasks) => ({
        ...prevCompletedTasks,
        [participantName]: false, // Initialize the new task as not completed
      }));
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
          Alert.alert("A tarefa", `${name} foi removida com sucesso`);
          setParticipants((oldParticipants) =>
            oldParticipants.filter((participant) => participant !== name)
          );

          if (completedTasks[name]) {
            setCompletedTasks((prevCompletedTasks) => {
              const updatedCompletedTasks = { ...prevCompletedTasks };
              delete updatedCompletedTasks[name]; // Remove the task from completedTasks
              return updatedCompletedTasks;
            });
            setTasksConcluidas(
              (prevTasksConcluidas) => prevTasksConcluidas - 1
            );
          }
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
            style={[
              styles.input,
              isFocused ? { borderColor: "#5E60CE" } : null,
            ]}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onFocus={handleFocus}
            onBlur={handleBlur}
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
                  <Text style={styles.listHeaderCounter}>
                    {participants.length}
                  </Text>
                </View>
              </View>
              <View style={styles.listHeaderTitle}>
                <Text style={styles.listHeaderConclude}>Concluidas</Text>

                <View style={styles.listHeaderCounter}>
                  <Text style={styles.listHeaderCounter}>
                    {tasksConcluidas}
                  </Text>
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
                  isChecked={completedTasks[item] || false}
                  setIsChecked={(isChecked) => {
                    setCompletedTasks((prevCompletedTasks) => ({
                      ...prevCompletedTasks,
                      [item]: isChecked,
                    }));
                    setTasksConcluidas((prevTasksConcluidas) =>
                      isChecked
                        ? prevTasksConcluidas + 1
                        : prevTasksConcluidas - 1
                    );
                  }}
                />
              )}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() => (
                <View style={styles.emptyList}>
                  <Image source={require("./../../../assets/Clipboard.png")} />

                  <Text style={styles.emptyListTextBold}>
                    Você ainda não tem tarefas cadastradas
                  </Text>
                  <Text style={styles.emptyListText}>
                    Crie tarefas e organize seus itens a fazer
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </>
  );
}
