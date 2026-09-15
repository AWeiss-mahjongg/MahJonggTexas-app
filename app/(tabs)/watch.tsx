import { Pressable, StyleSheet, Text, View } from 'react-native';

import { openExternalUrl } from '@/components/openUrl';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { LINKS } from '@/constants/links';

export default function WatchScreen() {
  const scheme = useColorScheme();
  const c = Colors[scheme];

  return (
    <View style={[styles.screen, { backgroundColor: c.background }]}>
      <View style={[styles.card, { backgroundColor: c.card, borderColor: c.border }]}>
        <Text style={[styles.title, { color: c.text }]}>MahJongg Texas on YouTube</Text>
        <Text style={[styles.body, { color: c.muted }]}>
          Tips, tournament vibes, and community content from @MahJonggTexas. Opens in your browser
          or YouTube app.
        </Text>
        <Pressable
          onPress={() => openExternalUrl(LINKS.youtube)}
          style={({ pressed }) => [
            styles.btn,
            { backgroundColor: c.button, opacity: pressed ? 0.85 : 1 },
          ]}>
          <Text style={[styles.btnText, { color: c.buttonText }]}>Open YouTube Channel</Text>
        </Pressable>
        <Text style={[styles.handle, { color: c.accent }]}>youtube.com/@MahJonggTexas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 16, justifyContent: 'center' },
  card: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 20,
  },
  title: { fontSize: 22, fontWeight: '800', marginBottom: 10 },
  body: { fontSize: 15, lineHeight: 22, marginBottom: 20 },
  btn: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: { fontWeight: '700', fontSize: 16 },
  handle: { marginTop: 14, textAlign: 'center', fontSize: 13, fontWeight: '600' },
});
