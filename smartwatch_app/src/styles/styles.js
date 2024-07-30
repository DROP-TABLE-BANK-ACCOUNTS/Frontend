import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#6200ea',
    marginBottom: 20
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft:30
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  insuranceContainer: {
    padding: 20,
    backgroundColor: '#6200ea',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  insuranceText: {
    fontSize: 16,
    color: '#ffffff',
  },
  insuranceAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  insuranceDate: {
    fontSize: 14,
    color: '#ffffff',
    marginBottom: 10,
  },
  payNowButton: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
  },
  payNowText: {
    color: '#6200ea',
    fontWeight: 'bold',
  },
  learnContainer: {
    padding: 20,
    backgroundColor: '#eeeeee',
    borderRadius: 10,
  },
  learnHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  learnGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  learnItem: {
    width: '45%',
    padding: 20,
    backgroundColor: '#dddddd',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default styles;
