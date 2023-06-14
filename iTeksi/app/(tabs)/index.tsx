import { Pressable, StyleSheet, TextInput } from 'react-native';
import InputText from '../../components/InputText';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { MonoText } from '../../components/StyledText';
import { Link } from 'expo-router';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <MonoText style={styles.title}>Book your trip</MonoText>
      <InputText title='from' placeholder='What is your Location?'></InputText>
      <InputText title='to' placeholder='What is your Destination?'></InputText>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <InputText title='date' placeholder='When are you leaving?'></InputText>
      <InputText title='time' placeholder='What time?'></InputText>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Link href="/vehicles" asChild>
        <Pressable>
          {/* {({ pressed }) => (
                  <FontAwesome
                    name="bars"
                    size={22}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />style={styles.buttonText}
                )} */}
          <View style={styles.button}>
            <MonoText style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}>Search for Drivers</MonoText>
          </View>
        </Pressable>
      </Link>


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
    marginVertical: 15,
    height: 1,
    width: '80%',
  },
  button: {
    backgroundColor: 'orange',
    borderRadius: 15,
    padding: 15,
    width: '95%',
    marginLeft: 10,
    alignItems: 'center',
    bottom: -250
  },
  buttonText: {
    fontWeight: '600',
    color: 'black',
  }
});
