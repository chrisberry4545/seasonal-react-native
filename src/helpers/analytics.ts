import * as Amplitude from 'expo-analytics-amplitude';

export const initAnalytics = () => {
  Amplitude.initialize('abacf5c432944e007c91bab33fcfe44e');
};

export const trackEvent = (eventName: string) => {
  Amplitude.logEvent(eventName);
};
