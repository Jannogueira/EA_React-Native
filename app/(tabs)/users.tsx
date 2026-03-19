import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { api } from '../../services/api';
import { usersStyles as styles } from '../../styles/users.styles';

export default function UsersScreen() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect( //Esto hace que cada vez que accedemos a la pestaña, ejecute la accion de getUsuarios.
    useCallback(() => {
      let isActive = true;
      const fetchUsers = async () => {
        setLoading(true);
        try {
          const data = await api.getUsuarios();
          if (isActive) setUsers(data);
        } catch (error) {
          console.error('Error al cargar usuarios:', error);
        } finally {
          if (isActive) setLoading(false);
        }
      };

      fetchUsers();

      return () => {
        isActive = false;
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestión de Usuarios</Text>
      <View style={styles.separator} />

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />
      ) : users.length === 0 ? (
        <Text style={styles.subtitle}>No hay usuarios registrados.</Text>
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item._id?.toString()}
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardSubtitle}>{item.email}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

