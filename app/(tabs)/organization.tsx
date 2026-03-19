import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { api } from '../../services/api';

export default function OrganizationScreen() {
  const [organizations, setOrganizations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect( //Esto hace que cada vez que accedemos a la pestaña, ejecute la accion de getOrganizaciones.
    useCallback(() => {
      let isActive = true;
      const fetchOrganizations = async () => {
        setLoading(true);
        try {
          const data = await api.getOrganizaciones();
          if (isActive) setOrganizations(data);
        } catch (error) {
          console.error('Error al cargar organizaciones:', error);
        } finally {
          if (isActive) setLoading(false);
        }
      };

      fetchOrganizations();

      return () => {
        isActive = false;
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestión de Organizaciones</Text>
      <View style={styles.separator} />

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />
      ) : organizations.length === 0 ? (
        <Text style={styles.subtitle}>No hay organizaciones registradas.</Text>
      ) : (
        <FlatList
          data={organizations}
          keyExtractor={(item) => item._id?.toString()}
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardSubtitle}>
                Usuarios: {item.usuarios ? item.usuarios.length : 0}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    width: '90%',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 20,
  },
  list: {
    width: '100%',
    marginTop: 10,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderLeftWidth: 5,
    borderLeftColor: '#ff9500',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 4,
    width: '100%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
