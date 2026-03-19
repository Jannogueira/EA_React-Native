import { View, Text, StyleSheet } from 'react-native';

export default function OrganizationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de Organización</Text>
      <Text style={styles.subtitle}>Aquí puedes gestionar la organización.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});
