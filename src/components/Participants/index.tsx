import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ParticipantsProps {
  name: string;
  onRemove: () => void;
}

export function Participants({ name, onRemove }: ParticipantsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.textButton}>X</Text>
      </TouchableOpacity>
    </View>
  );
}
