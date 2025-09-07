import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const translations = {
    en: {
      // Navigation
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.skills': 'Skills',
      'nav.portfolio': 'Portfolio',
      'nav.contact': 'Contact',
      
      // Hero Section
      'hero.title': 'Full-Stack Developer (Mobile/Backend)',
      'hero.summary': 'Experienced Full-Stack Developer with 8+ years of expertise in backend development, mobile applications, and modern web technologies. Currently serving as Backend Developer at Clean Life, specializing in NestJS, TypeScript, and enterprise-grade solutions. Proven track record in developing scalable applications, payment systems, and real-time platforms across multiple industries.',
      'hero.downloadCV': 'Download CV',
      'hero.personalWebsite': 'Personal Website',
      
      // Services Section
      'services.title': 'Services Offered',
      'services.subtitle': 'I provide a comprehensive range of technical services to help your business grow and thrive',
      'services.learnMore': 'Learn More',
      'services.backend.title': 'Full-Stack Development',
      'services.backend.description': 'Developing complete web applications using Node.js, TypeScript, Angular, and modern JavaScript technologies',
      'services.android.title': 'Android Applications',
      'services.android.description': 'Developing high-performance native Android applications using Java and Kotlin with 7+ years of experience',
      'services.flutter.title': 'Flutter Applications',
      'services.flutter.description': 'Developing cross-platform applications using Flutter with outstanding user experience',
      'services.database.title': 'Backend Development',
      'services.database.description': 'Building robust server-side applications with Node.js, real-time features, and database management',
      'services.realtime.title': 'Real-time Applications',
      'services.realtime.description': 'Developing real-time applications using Socket.IO and modern communication technologies',
      'services.payment.title': 'Electronic Payment Systems',
      'services.payment.description': 'Developing secure electronic payment solutions with POS device support like Aisino and Telpo',
      
      // Experience Section
      'experience.title': 'Professional Experience',
      'experience.subtitle': 'A comprehensive journey through cutting-edge technology and innovative solutions',
      'experience.current': 'Current Position',
      'experience.now': 'Present',
      
      // Skills Section
      'skills.title': 'Technical Mastery & Expertise',
      'skills.subtitle': 'Advanced proficiency across modern development technologies and methodologies',
      'skills.technical': 'Technical Skills',
      'skills.soft': 'Soft Skills',
      'skills.languages': 'Languages',
      
      // Portfolio Section
      'portfolio.title': 'Portfolio',
      'portfolio.subtitle': 'Showcasing innovative solutions and cutting-edge applications that drive digital transformation',
      'portfolio.featured': 'Featured Projects',
      'portfolio.other': 'Other Projects',
      'portfolio.viewProject': 'View Project',
      'portfolio.sourceCode': 'Source Code',
      'portfolio.featuredBadge': 'Featured',
      
      // Education Section
      'education.title': 'Education & Qualifications',
      'education.subtitle': 'Academic excellence and continuous learning in technology and innovation',
      'education.gpa': 'GPA',
      
      // Certificates Section
      'certificates.title': 'Certificates & Accreditations',
      'certificates.subtitle': 'Professional and specialized certificates I have obtained',
      
      // Contact Section
      'contact.title': 'Contact Me',
      'contact.subtitle': 'Do you have a project in mind? Let\'s talk and turn your idea into reality',
      'contact.info': 'Contact Information',
      'contact.email': 'Email',
      'contact.phone': 'Phone Number',
      'contact.location': 'Location',
      'contact.quickActions': 'Quick Contact',
      'contact.sendEmail': 'Send Email',
      'contact.whatsapp': 'WhatsApp',
      'contact.sendMessage': 'Send Message',
      'contact.form.name': 'Name',
      'contact.form.email': 'Email',
      'contact.form.subject': 'Subject',
      'contact.form.message': 'Message',
      'contact.form.namePlaceholder': 'Your full name',
      'contact.form.emailPlaceholder': 'your@email.com',
      'contact.form.subjectPlaceholder': 'Message subject',
      'contact.form.messagePlaceholder': 'Write your message here...',
      'contact.form.send': 'Send Message',
      'contact.form.success': 'Your message has been sent successfully! I will contact you soon.',
      
      // Footer
      'footer.about': 'Full-stack developer passionate about creating exceptional digital experiences and innovative technical solutions.',
      'footer.madeWith': 'Made with',
      'footer.quickLinks': 'Quick Links',
      'footer.contactInfo': 'Contact Information',
      'footer.rights': 'All rights reserved.',
      
      // Common
      'common.and': 'and',
      'common.with': 'with',
    },
    ar: {
      // Navigation
      'nav.about': 'نبذة عني',
      'nav.experience': 'الخبرة',
      'nav.skills': 'المهارات',
      'nav.portfolio': 'معرض الأعمال',
      'nav.contact': 'تواصل معي',
      
      // Hero Section
      'hero.title': 'مطور متكامل (تطبيقات محمولة/خلفي)',
      'hero.summary': 'مطور متكامل ذو خبرة تزيد عن 8 سنوات في تطوير الخلفية، التطبيقات المحمولة، وتقنيات الويب الحديثة. أعمل حالياً كمطور خلفية في Clean Life، متخصص في NestJS، TypeScript، والحلول المؤسسية. لدي سجل حافل في تطوير التطبيقات القابلة للتوسع، أنظمة الدفع، والمنصات الفورية عبر صناعات متعددة.',
      'hero.downloadCV': 'تحميل السيرة الذاتية',
      'hero.personalWebsite': 'الموقع الشخصي',
      
      // Services Section
      'services.title': 'الخدمات المقدمة',
      'services.subtitle': 'أقدم مجموعة شاملة من الخدمات التقنية لمساعدة عملك على النمو والازدهار',
      'services.learnMore': 'اعرف المزيد',
      'services.backend.title': 'التطوير المتكامل',
      'services.backend.description': 'تطوير تطبيقات ويب كاملة باستخدام Node.js، TypeScript، Angular، وتقنيات JavaScript الحديثة',
      'services.android.title': 'تطبيقات الأندرويد',
      'services.android.description': 'تطوير تطبيقات أندرويد أصلية عالية الأداء باستخدام Java وKotlin مع خبرة 7+ سنوات',
      'services.flutter.title': 'تطبيقات Flutter',
      'services.flutter.description': 'تطوير تطبيقات متعددة المنصات باستخدام Flutter مع تجربة مستخدم متميزة',
      'services.database.title': 'تطوير الخلفي',
      'services.database.description': 'بناء تطبيقات خادم قوية باستخدام Node.js، الميزات الفورية، وإدارة قواعد البيانات',
      'services.realtime.title': 'التطبيقات الفورية',
      'services.realtime.description': 'تطوير تطبيقات الوقت الفعلي باستخدام Socket.IO وتقنيات الاتصال الحديثة',
      'services.payment.title': 'أنظمة الدفع الإلكتروني',
      'services.payment.description': 'تطوير حلول الدفع الإلكتروني الآمنة مع دعم أجهزة POS مثل Aisino وTelpo',
      
      // Experience Section
      'experience.title': 'الخبرة المهنية',
      'experience.subtitle': 'رحلة شاملة عبر التقنيات المتطورة والحلول المبتكرة',
      'experience.current': 'الوظيفة الحالية',
      'experience.now': 'الآن',
      
      // Skills Section
      'skills.title': 'الإتقان التقني والخبرات',
      'skills.subtitle': 'كفاءة متقدمة عبر تقنيات التطوير الحديثة والمنهجيات',
      'skills.technical': 'المهارات التقنية',
      'skills.soft': 'المهارات الشخصية',
      'skills.languages': 'اللغات',
      
      // Portfolio Section
      'portfolio.title': 'معرض الأعمال',
      'portfolio.subtitle': 'عرض الحلول المبتكرة والتطبيقات المتطورة التي تقود التحول الرقمي',
      'portfolio.featured': 'المشاريع المميزة',
      'portfolio.other': 'مشاريع أخرى',
      'portfolio.viewProject': 'عرض المشروع',
      'portfolio.sourceCode': 'الكود المصدري',
      'portfolio.featuredBadge': 'مميز',
      
      // Education Section
      'education.title': 'التعليم والمؤهلات',
      'education.subtitle': 'التميز الأكاديمي والتعلم المستمر في التقنية والابتكار',
      'education.gpa': 'المعدل',
      
      // Certificates Section
      'certificates.title': 'الشهادات والاعتمادات',
      'certificates.subtitle': 'الشهادات المهنية والتخصصية التي حصلت عليها',
      
      // Contact Section
      'contact.title': 'تواصل معي',
      'contact.subtitle': 'هل لديك مشروع في ذهنك؟ دعنا نتحدث ونحول فكرتك إلى واقع',
      'contact.info': 'معلومات التواصل',
      'contact.email': 'البريد الإلكتروني',
      'contact.phone': 'رقم الهاتف',
      'contact.location': 'الموقع',
      'contact.quickActions': 'تواصل سريع',
      'contact.sendEmail': 'إرسال إيميل',
      'contact.whatsapp': 'واتساب',
      'contact.sendMessage': 'أرسل رسالة',
      'contact.form.name': 'الاسم',
      'contact.form.email': 'البريد الإلكتروني',
      'contact.form.subject': 'الموضوع',
      'contact.form.message': 'الرسالة',
      'contact.form.namePlaceholder': 'اسمك الكامل',
      'contact.form.emailPlaceholder': 'your@email.com',
      'contact.form.subjectPlaceholder': 'موضوع الرسالة',
      'contact.form.messagePlaceholder': 'اكتب رسالتك هنا...',
      'contact.form.send': 'إرسال الرسالة',
      'contact.form.success': 'تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.',
      
      // Footer
      'footer.about': 'مطور ويب متكامل شغوف بإنشاء تجارب رقمية استثنائية وحلول تقنية مبتكرة.',
      'footer.madeWith': 'صُنع بـ',
      'footer.quickLinks': 'روابط سريعة',
      'footer.contactInfo': 'معلومات التواصل',
      'footer.rights': 'جميع الحقوق محفوظة.',
      
      // Common
      'common.and': 'و',
      'common.with': 'مع',
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};