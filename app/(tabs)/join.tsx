import { useState } from 'react';
import {
  Alert,
  Platform,
  Pressable,
  Share,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import * as Linking from 'expo-linking';
import * as Sharing from 'expo-sharing';

import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { LINKS } from '@/constants/links';

function buildSignupBody(name: string, email: string) {
  return [
    'MahJonggTexas community signup',
    '',
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    'Consent: Yes — I agree to be contacted about Texas Mah Jongg events.',
    '',
    '(Sent from the MahJonggTexas app — no backend.)',
  ].join('\n');
}

export default function JoinScreen() {
  const scheme = useColorScheme();
  const c = Colors[scheme];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);

  const valid =
    name.trim().length > 1 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) &&
    consent;

  function notify(msg: string) {
    Alert.alert('Join', msg);
  }

  async function onMailto() {
    if (!valid) {
      notify('Please enter name, a valid email, and check consent.');
      return;
    }
    const subject = encodeURIComponent('MahJonggTexas signup');
    const body = encodeURIComponent(buildSignupBody(name, email));
    await Linking.openURL(`${LINKS.joinMailto}?subject=${subject}&body=${body}`);
  }

  async function onShare() {
    if (!valid) {
      notify('Please enter name, a valid email, and check consent.');
      return;
    }
    const message = buildSignupBody(name, email);
    if (Platform.OS === 'web') {
      try {
        if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(message);
          notify('Signup text copied to clipboard.');
          return;
        }
      } catch {
        // fall through
      }
      notify(message);
      return;
    }
    try {
      await Share.share({ message, title: 'MahJonggTexas signup' });
    } catch {
      if (await Sharing.isAvailableAsync()) {
        notify('Sharing is available but text share failed; try mailto instead.');
      } else {
        await onMailto();
      }
    }
  }

  return (
    <View style={[styles.screen, { backgroundColor: c.background }]}>
      <Text style={[styles.title, { color: c.text }]}>Join the Community</Text>
      <Text style={[styles.sub, { color: c.muted }]}>
        Signups go to mahjonggtexas@gmail.com via your mail app, or use Share/export.
      </Text>

      <Text style={[styles.label, { color: c.text }]}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Your name"
        placeholderTextColor={c.muted}
        style={[styles.input, { backgroundColor: c.card, borderColor: c.border, color: c.text }]}
        autoCapitalize="words"
      />

      <Text style={[styles.label, { color: c.text }]}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="you@example.com"
        placeholderTextColor={c.muted}
        style={[styles.input, { backgroundColor: c.card, borderColor: c.border, color: c.text }]}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Pressable
        onPress={() => setConsent((v) => !v)}
        style={styles.consentRow}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: consent }}>
        <View
          style={[
            styles.checkbox,
            { borderColor: c.tint, backgroundColor: consent ? c.tint : 'transparent' },
          ]}>
          {consent ? <Text style={styles.checkMark}>✓</Text> : null}
        </View>
        <Text style={[styles.consentText, { color: c.text }]}>
          I agree to share my name and email so organizers can contact me about Texas Mah Jongg
          events.
        </Text>
      </Pressable>

      <Pressable
        onPress={onMailto}
        disabled={!valid}
        style={({ pressed }) => [
          styles.btn,
          { backgroundColor: c.button, opacity: !valid ? 0.45 : pressed ? 0.85 : 1 },
        ]}>
        <Text style={[styles.btnText, { color: c.buttonText }]}>Email signup (mailto)</Text>
      </Pressable>

      <Pressable
        onPress={onShare}
        disabled={!valid}
        style={({ pressed }) => [
          styles.btnOutline,
          { borderColor: c.tint, opacity: !valid ? 0.45 : pressed ? 0.85 : 1 },
        ]}>
        <Text style={[styles.btnOutlineText, { color: c.tint }]}>Share / export signup</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: '800', marginBottom: 6 },
  sub: { fontSize: 14, lineHeight: 20, marginBottom: 18 },
  label: { fontWeight: '600', marginBottom: 6, marginTop: 8 },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
  },
  consentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginTop: 16,
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  checkMark: { color: '#fff', fontWeight: '800', fontSize: 14 },
  consentText: { flex: 1, fontSize: 14, lineHeight: 20 },
  btn: { paddingVertical: 14, borderRadius: 10, alignItems: 'center', marginBottom: 10 },
  btnText: { fontWeight: '700', fontSize: 16 },
  btnOutline: { paddingVertical: 14, borderRadius: 10, alignItems: 'center', borderWidth: 2 },
  btnOutlineText: { fontWeight: '700', fontSize: 16 },
});
