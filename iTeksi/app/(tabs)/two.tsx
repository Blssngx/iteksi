import { StyleSheet } from 'react-native';
import { MonoText } from '../../components/StyledText';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <MonoText style={styles.title}>Tickets</MonoText>
      {/* <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    marginLeft: 13,
    fontWeight: 'bold',
    color: 'orange',
    marginVertical: 15,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
