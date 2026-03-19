import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { indexStyles as styles } from "../styles/index.styles";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Panel de Administración</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(tabs)/organization")}
      >
        <Text style={styles.buttonText}>Gestionar Organizaciones</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(tabs)/users")}
      >
        <Text style={styles.buttonText}>Gestionar Usuarios</Text>
      </TouchableOpacity>
    </View>
  );
}


