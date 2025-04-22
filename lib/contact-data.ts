
export type ContactInfo = {
  iconName: string;
  title: string;
  value: string;
  link: string;
};

export type SocialLink = {
  iconName: string;
  name: string;
  link: string;
};

// Thông tin liên hệ
export const contactInfo: ContactInfo[] = [
  {
    iconName: 'Mail',
    title: 'Email',
    value: 'tuanthanh290103@gmail.com',
    link: 'mailto:tuanthanh290103@gmail.com',
  },
  {
    iconName: 'Phone',
    title: 'Phone',
    value: '+84397636441',
    link: 'tel:+84397636441',
  },
  {
    iconName: 'MapPin',
    title: 'Location',
    value: 'Ho Chi Minh, Viet Nam',
    link: '#',
  },
];

// Liên kết mạng xã hội
export const socialLinks: SocialLink[] = [
  {
    iconName: 'Github',
    name: 'GitHub',
    link: 'https://github.com/TuanThanhz901',
  },
  {
    iconName: 'Facebook',
    name: 'Facebook',
    link: 'https://www.facebook.com/tuanthanh2901/',
  },
  {
    iconName: 'Linkedin',
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/tuanthanh2901/',
  },
  {
    iconName: 'Instagram',
    name: 'Instagram',
    link: 'https://www.instagram.com/tthnh_z9.01/',
  },
];
