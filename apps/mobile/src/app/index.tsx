import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { APP_NAME } from '@rentkitta/shared';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <Text style={{ color: '#111827', fontSize: 32, fontWeight: '700' }}>{APP_NAME}</Text>
        <Text style={{ color: '#374151', fontSize: 18, marginTop: 12, textAlign: 'center' }}>
          Your neighborhood rental marketplace
        </Text>
        <Text style={{ color: '#6b7280', fontSize: 15, marginTop: 24, textAlign: 'center' }}>
          Mobile app setup completed successfully.
        </Text>
      </View>
    </SafeAreaView>
  );
}
