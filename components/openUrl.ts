import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { Platform } from 'react-native';

export async function openExternalUrl(url: string) {
  if (url.startsWith('mailto:') || url.startsWith('tel:')) {
    await Linking.openURL(url);
    return;
  }
  if (Platform.OS === 'web') {
    await Linking.openURL(url);
    return;
  }
  await WebBrowser.openBrowserAsync(url);
}
