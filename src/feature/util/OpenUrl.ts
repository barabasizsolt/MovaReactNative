import { Linking } from 'react-native';

export const openUrl = (url: string): void => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url).then();
    }
  });
};
