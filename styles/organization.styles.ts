import { StyleSheet } from 'react-native';

export const organizationStyles = StyleSheet.create({
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
