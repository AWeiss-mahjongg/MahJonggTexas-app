import { StatusBar } from 'expo-status-bar';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

import { openExternalUrl } from '@/components/openUrl';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { LINKS } from '@/constants/links';

export default function AboutModal() {
  const scheme = useColorScheme();
  const c = Colors[scheme];

  return (
    <View style={[styles.container, { backgroundColor: c.background }]}>
      <Text style={[styles.title, { color: c.text }]}>About</Text>
      <Text style={[styles.body, { color: c.muted }]}>
        Unofficial companion app for MahJonggTexas.com — Texas Mah Jongg tournaments, YouTube,
        Amazon deep links, and offline-friendly signup (mailto / share). No ads, analytics, or
        backend.
      </Text>
      <Pressable onPress={() => openExternalUrl(LINKS.website)}>
        <Text style={[styles.link, { color: c.tint }]}>mahjonggtexas.com</Text>
      </Pressable>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: '800', marginBottom: 12 },
  body: { fontSize: 15, lineHeight: 22, marginBottom: 16 },
  link: { fontSize: 16, fontWeight: '700' },
});
