import { Pressable, StyleSheet, Text, View } from 'react-native';

import { SOCIAL } from '@/constants/links';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { openExternalUrl } from '@/components/openUrl';

export function SocialRow() {
  const scheme = useColorScheme();
  const c = Colors[scheme];

  return (
    <View style={styles.row}>
      {SOCIAL.map((item) => (
        <Pressable
          key={item.id}
          onPress={() => openExternalUrl(item.url)}
          style={({ pressed }) => [
            styles.chip,
            { backgroundColor: c.card, borderColor: c.border, opacity: pressed ? 0.7 : 1 },
          ]}>
          <Text style={[styles.chipText, { color: c.tint }]}>{item.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 12 },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
  },
  chipText: { fontWeight: '600', fontSize: 14 },
});
