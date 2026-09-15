import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { SocialRow } from '@/components/SocialRow';
import { openExternalUrl } from '@/components/openUrl';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { LINKS } from '@/constants/links';
import { sortedTournaments, Tournament } from '@/constants/tournaments';

function TournamentCard({ item }: { item: Tournament }) {
  const scheme = useColorScheme();
  const c = Colors[scheme];

  return (
    <View style={[styles.card, { backgroundColor: c.card, borderColor: c.border }]}>
      <Text style={[styles.date, { color: c.tint }]}>{item.dateLabel}</Text>
      <Text style={[styles.name, { color: c.text }]}>{item.name}</Text>
      {item.location ? (
        <Text style={[styles.meta, { color: c.muted }]}>{item.location}</Text>
      ) : null}
      {item.benefit ? (
        <Text style={[styles.benefit, { color: c.accent }]}>Benefiting: {item.benefit}</Text>
      ) : null}
      {item.notes ? (
        <Text style={[styles.notes, { color: c.muted }]}>{item.notes}</Text>
      ) : null}
      {item.url ? (
        <Pressable onPress={() => openExternalUrl(item.url!)} style={styles.linkBtn}>
          <Text style={{ color: c.tint, fontWeight: '600' }}>Open details →</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

export default function TournamentsScreen() {
  const scheme = useColorScheme();
  const c = Colors[scheme];
  const data = sortedTournaments();

  return (
    <View style={[styles.screen, { backgroundColor: c.background }]}>
      <FlatList
        data={data}
        keyExtractor={(t) => t.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={[styles.hello, { color: c.text }]}>Howdy Mah Jongg Friends</Text>
            <Text style={[styles.sub, { color: c.muted }]}>
              Texas tournaments & events from MahJonggTexas.com. Edit{' '}
              <Text style={{ fontWeight: '700' }}>constants/tournaments.ts</Text> to update.
            </Text>
            <SocialRow />
            <Pressable
              onPress={() => openExternalUrl(LINKS.website)}
              style={({ pressed }) => [
                styles.siteBtn,
                { backgroundColor: c.button, opacity: pressed ? 0.85 : 1 },
              ]}>
              <Text style={[styles.siteBtnText, { color: c.buttonText }]}>
                Visit MahJonggTexas.com
              </Text>
            </Pressable>
          </View>
        }
        renderItem={({ item }) => <TournamentCard item={item} />}
        ListEmptyComponent={
          <Text style={{ color: c.muted, textAlign: 'center' }}>No tournaments listed yet.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  list: { padding: 16, paddingBottom: 40, gap: 12 },
  header: { marginBottom: 8 },
  hello: { fontSize: 24, fontWeight: '800', marginBottom: 6 },
  sub: { fontSize: 14, lineHeight: 20 },
  siteBtn: {
    marginTop: 14,
    marginBottom: 8,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  siteBtnText: { fontWeight: '700', fontSize: 15 },
  card: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 14,
    marginBottom: 4,
  },
  date: { fontSize: 13, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.4 },
  name: { fontSize: 18, fontWeight: '700', marginTop: 4 },
  meta: { fontSize: 14, marginTop: 4 },
  benefit: { fontSize: 14, fontWeight: '600', marginTop: 6 },
  notes: { fontSize: 13, marginTop: 6, lineHeight: 18 },
  linkBtn: { marginTop: 10 },
});
