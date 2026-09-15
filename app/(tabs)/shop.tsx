import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { openExternalUrl } from '@/components/openUrl';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { SHOP_ITEMS } from '@/constants/links';

export default function ShopScreen() {
  const scheme = useColorScheme();
  const c = Colors[scheme];

  return (
    <View style={[styles.screen, { backgroundColor: c.background }]}>
      <FlatList
        data={SHOP_ITEMS}
        keyExtractor={(i) => i.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={[styles.title, { color: c.text }]}>Shop Mahj Favorites</Text>
            <Text style={[styles.sub, { color: c.muted }]}>
              Deep links only — opens Amazon. MahJonggTexas is an Amazon Associate; purchases may
              earn a commission at no extra cost to you.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <Pressable
            onPress={() => openExternalUrl(item.url)}
            style={({ pressed }) => [
              styles.card,
              { backgroundColor: c.card, borderColor: c.border, opacity: pressed ? 0.85 : 1 },
            ]}>
            <Text style={[styles.cardTitle, { color: c.text }]}>{item.title}</Text>
            <Text style={[styles.cardSub, { color: c.muted }]}>{item.subtitle}</Text>
            <Text style={[styles.cta, { color: c.tint }]}>Open link →</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  list: { padding: 16, paddingBottom: 40, gap: 12 },
  header: { marginBottom: 8 },
  title: { fontSize: 22, fontWeight: '800', marginBottom: 6 },
  sub: { fontSize: 14, lineHeight: 20, marginBottom: 8 },
  card: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    marginBottom: 4,
  },
  cardTitle: { fontSize: 17, fontWeight: '700' },
  cardSub: { fontSize: 14, marginTop: 4 },
  cta: { marginTop: 12, fontWeight: '700' },
});
