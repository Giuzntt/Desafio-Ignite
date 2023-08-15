import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { CheckBox } from "react-native-btr";

interface ParticipantsProps {
  name: string;
  onRemove: () => void;
  isChecked: boolean;
  setIsChecked: (param: boolean) => void;
}

export function Participants({
  name,
  onRemove,
  isChecked,
  setIsChecked,
}: ParticipantsProps) {
  const toggleCheckBox = (param: boolean) => {
    setIsChecked(param);
  };
  return (
    <View style={styles.container}>
      <CheckBox
        checked={isChecked}
        color={isChecked ? "#5E60CE" : "#4EA8DE"}
        disabled={isChecked}
        onPress={() => toggleCheckBox(true)}
      />

      {isChecked ? (
        <Text style={styles.nomeRiscado}>{name}</Text>
      ) : (
        <Text style={styles.nome}>{name}</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Icon name="trash-outline" size={20} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
