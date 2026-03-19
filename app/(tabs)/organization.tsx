import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { api } from '../../services/api';
import { organizationStyles as styles } from '../../styles/organization.styles';

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

