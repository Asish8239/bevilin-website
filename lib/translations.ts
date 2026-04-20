export type Language = "en" | "hi";

export const translations = {
  en: {
    nav: {
      home: "Home",
      products: "Products",
      about: "About",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      badge: "ISO 9001:2015 Certified | GMP Compliant",
      headline: "Healthcare Built on",
      subheadline: "Leading pharmaceutical innovation for over 15 years. Delivering quality medicines to 50,000+ families across India.",
      cta1: "Explore Products",
      cta2: "Watch Our Story",
    },
    stats: {
      customers: "Happy Customers",
      experience: "Years Experience",
      products: "Products",
      growth: "Growth Rate",
    },
    features: {
      title: "Why Choose Bevilin Pharma",
      subtitle: "We're committed to providing the best healthcare experience",
    },
  },
  hi: {
    nav: {
      home: "होम",
      products: "उत्पाद",
      about: "हमारे बारे में",
      blog: "ब्लॉग",
      contact: "संपर्क करें",
    },
    hero: {
      badge: "ISO 9001:2015 प्रमाणित | GMP अनुपालन",
      headline: "स्वास्थ्य सेवा आधारित",
      subheadline: "15 से अधिक वर्षों से फार्मास्युटिकल नवाचार में अग्रणी। भारत भर में 50,000+ परिवारों को गुणवत्तापूर्ण दवाएं प्रदान करना।",
      cta1: "उत्पाद देखें",
      cta2: "हमारी कहानी देखें",
    },
    stats: {
      customers: "खुश ग्राहक",
      experience: "वर्षों का अनुभव",
      products: "उत्पाद",
      growth: "विकास दर",
    },
    features: {
      title: "बेविलिन फार्मा क्यों चुनें",
      subtitle: "हम सर्वोत्तम स्वास्थ्य सेवा अनुभव प्रदान करने के लिए प्रतिबद्ध हैं",
    },
  },
};

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split(".");
  let value: string | Record<string, unknown> = translations[lang];
  
  for (const k of keys) {
    if (typeof value === 'object' && value !== null && k in value) {
      value = value[k] as string | Record<string, unknown>;
    } else {
      return key;
    }
  }
  
  return typeof value === 'string' ? value : key;
}
