// All portfolio content lives here. Every visible text is given in English and Arabic.
import type { LucideIcon } from 'lucide-react';
import { Activity, CreditCard, Monitor, Rocket, Server, ShieldCheck, Smartphone, Target, Users } from 'lucide-react';
import type { Localized } from '../i18n/types';

export const profile = {
  name: { en: 'Abdalmonem Badwi', ar: 'عبدالمنعم بدوي' },
  role: { en: 'Mobile & Backend Developer', ar: 'مطوّر تطبيقات جوال وأنظمة خلفية' },
  focus: { en: 'Banking, real-time & loyalty applications', ar: 'التطبيقات المصرفية واللحظية وبرامج الولاء' },
  location: { en: 'Riyadh, Saudi Arabia', ar: 'الرياض، المملكة العربية السعودية' },
  yearsOfExperience: '8+',
  email: 'abdalmone1994@gmail.com',
  phone: { display: '+966 55 611 8045', e164: '+966556118045' },
  links: {
    linkedin: 'https://www.linkedin.com/in/abd-elmonem-badwi-126173156',
    github: 'https://github.com/MonemDeveloper',
    whatsapp: 'https://wa.me/966556118045',
  },
  cv: '/Abdalmonem-Badwi-Khairi-CV.pdf',
};

export interface Principle {
  icon: LucideIcon;
  title: Localized;
  description: Localized;
}

export const principles: Principle[] = [
  {
    icon: Rocket,
    title: { en: 'Ownership from idea to launch', ar: 'تولّي المشروع من الفكرة حتى الإطلاق' },
    description: {
      en: 'Requirements, architecture, delivery and post-launch support — I see features through.',
      ar: 'من تحليل المتطلبات وتصميم البنية إلى التسليم والدعم بعد الإطلاق.',
    },
  },
  {
    icon: Target,
    title: { en: 'Engineering that serves the business', ar: 'هندسة تخدم أهداف العمل' },
    description: {
      en: 'Every technical decision is measured by its impact on customers and the business.',
      ar: 'أقيس كل قرار تقني بأثره على العملاء وعلى العمل.',
    },
  },
  {
    icon: ShieldCheck,
    title: { en: 'Clean, secure, maintainable code', ar: 'كود نظيف وآمن وقابل للصيانة' },
    description: {
      en: 'Well-structured, tested code, with security designed in rather than bolted on.',
      ar: 'كود منظّم ومختبَر، والأمان فيه جزء من التصميم لا إضافة لاحقة.',
    },
  },
];

export interface Capability {
  icon: LucideIcon;
  title: Localized;
  description: Localized;
  /** Tool names stay in English; concepts can be localized. */
  stack: (string | Localized)[];
  /** Stack entries highlighted as core strengths. */
  core?: string[];
}

export const capabilities: Capability[] = [
  {
    icon: Server,
    title: { en: 'Backend Engineering', ar: 'هندسة الأنظمة الخلفية' },
    description: {
      en: 'Scalable services and APIs built on clean architecture and sound data modeling.',
      ar: 'خدمات وواجهات برمجية قابلة للتوسّع، مبنية على معمارية نظيفة ونمذجة بيانات متينة.',
    },
    stack: ['NestJS', 'Node.js', 'PHP / Laravel', 'TypeScript', 'REST APIs', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'Nginx', 'Linux'],
    core: ['NestJS', 'Node.js', 'PHP / Laravel'],
  },
  {
    icon: Smartphone,
    title: { en: 'Mobile Development', ar: 'تطوير تطبيقات الجوال' },
    description: {
      en: 'Native Android and cross-platform apps that are fast, stable and polished.',
      ar: 'تطبيقات أندرويد أصلية وتطبيقات متعددة المنصات؛ سريعة ومستقرة ومتقنة التفاصيل.',
    },
    stack: ['Kotlin', 'Java', 'Android SDK', 'Flutter', 'Dart'],
    core: ['Kotlin', 'Java', 'Flutter'],
  },
  {
    icon: CreditCard,
    title: { en: 'Banking & Payments', ar: 'الحلول المصرفية والمدفوعات' },
    description: {
      en: 'Banking-grade mobile solutions, online payment integrations and merchant apps on POS terminals, with encryption built in.',
      ar: 'حلول جوال بمعايير مصرفية، وتكامل الدفع الإلكتروني، وتطبيقات للتجّار على أجهزة نقاط البيع، مع تشفير مدمج في التصميم.',
    },
    stack: [{ en: 'Payment gateways', ar: 'بوابات الدفع' }, 'Aisino POS', 'Telpo POS', { en: 'Encryption', ar: 'التشفير' }],
  },
  {
    icon: Activity,
    title: { en: 'Real-time Systems', ar: 'الأنظمة اللحظية' },
    description: {
      en: 'Live tracking, instant updates and event-driven features that keep users in sync.',
      ar: 'تتبّع مباشر وتحديثات فورية وميزات قائمة على الأحداث تُبقي المستخدمين على اطّلاع لحظي.',
    },
    stack: ['Socket.IO', 'WebSockets'],
    core: ['Socket.IO'],
  },
  {
    icon: Monitor,
    title: { en: 'Web Applications', ar: 'تطبيقات الويب' },
    description: {
      en: 'Responsive, fast interfaces optimized for performance and search visibility.',
      ar: 'واجهات متجاوبة وسريعة، محسّنة للأداء وللظهور في محركات البحث.',
    },
    stack: ['Angular', 'React', 'JavaScript', 'HTML5', 'CSS3', 'SEO'],
  },
  {
    icon: Users,
    title: { en: 'Technical Leadership', ar: 'القيادة التقنية' },
    description: {
      en: 'Requirements analysis, test planning and team leadership — plus experience teaching mobile development at university level.',
      ar: 'تحليل المتطلبات وتخطيط الاختبارات وقيادة الفرق، إلى جانب خبرة في تدريس تطوير تطبيقات الجوال جامعياً.',
    },
    stack: ['Agile / Scrum', 'Jira', 'Git', 'CI/CD'],
  },
];

export interface Experience {
  id: string;
  role: Localized;
  company: Localized;
  location: Localized;
  /** ISO country code; feeds the "countries" figure. */
  country: string;
  kind: 'employment' | 'freelance' | 'teaching';
  /** YYYY-MM */
  start: string;
  /** YYYY-MM, or null while ongoing. */
  end: string | null;
  highlights: Localized<string[]>;
  stack: string[];
}

const khartoum: Localized = { en: 'Khartoum, Sudan', ar: 'الخرطوم، السودان' };

export const experience: Experience[] = [
  {
    id: 'clean-life',
    role: { en: 'Software Developer', ar: 'مطوّر برمجيات' },
    company: { en: 'Clean Life', ar: 'Clean Life' },
    location: { en: 'Riyadh, Saudi Arabia', ar: 'الرياض، السعودية' },
    country: 'SA',
    kind: 'employment',
    start: '2025-01',
    end: null,
    highlights: {
      en: [
        "Leading the design and development of the company's customer loyalty program, with features that reward and retain customers and drive repeat purchases.",
        'The program achieved strong adoption after launch and directly contributed to a notable increase in company sales, making loyalty a key growth channel.',
        'Upgraded the booking system with advanced features and upfront online payment, making bookings faster and more convenient.',
      ],
      ar: [
        'أقود تصميم وتطوير برنامج ولاء العملاء في الشركة، بميزات تكافئ العملاء وتعزّز استبقاءهم وتشجّع على تكرار الشراء.',
        'حقّق البرنامج انتشاراً واسعاً بعد إطلاقه، وأسهم مباشرةً في زيادة ملحوظة في مبيعات الشركة، ليصبح الولاء قناة نمو رئيسية.',
        'طوّرتُ نظام الحجوزات بميزات متقدمة ودفع إلكتروني مسبق، ما جعل الحجز أسرع وأكثر سهولة.',
      ],
    },
    stack: ['NestJS', 'Node.js', 'PostgreSQL', 'Flutter'],
  },
  {
    id: 'q8-leds',
    role: { en: 'Software Developer & Website Optimizer', ar: 'مطوّر برمجيات ومختص في تحسين المواقع' },
    company: { en: 'Q8 LEDs', ar: 'Q8 LEDs' },
    location: { en: 'Dubai, UAE', ar: 'دبي، الإمارات' },
    country: 'AE',
    kind: 'employment',
    start: '2024-04',
    end: '2024-11',
    highlights: {
      en: [
        'Developed and enhanced website features, improving functionality and user experience.',
        'Diagnosed and resolved technical issues to keep the site fast and consistently available.',
        'Implemented SEO strategies that increased search visibility and ranking.',
        'Worked with the team to refine site structure and content.',
      ],
      ar: [
        'طوّرتُ ميزات الموقع وحسّنتها، ما رفع كفاءته وحسّن تجربة المستخدم.',
        'شخّصتُ المشكلات التقنية وعالجتها لضمان أداء سريع وتوفّر مستمر للموقع.',
        'نفّذتُ استراتيجيات تحسين محركات البحث (SEO) رفعت ظهور الموقع وترتيبه.',
        'تعاونتُ مع الفريق على تحسين بنية الموقع ومحتواه.',
      ],
    },
    stack: ['JavaScript', 'Node.js', 'HTML', 'CSS', 'SEO'],
  },
  {
    id: 'minnesota',
    role: { en: 'Technical Supervisor', ar: 'مشرف تقني' },
    company: { en: 'Minnesota', ar: 'Minnesota' },
    location: khartoum,
    country: 'SD',
    kind: 'employment',
    start: '2022-07',
    end: '2023-09',
    highlights: {
      en: [
        'Supervised development and testing of a Flutter e-commerce app, keeping it aligned with business goals and the product roadmap.',
        'Analyzed technical requirements to assess risks and define key functionality.',
        'Wrote comprehensive test plans with a defined scope and clear objectives.',
        'Improved team procedures, training and processes.',
      ],
      ar: [
        'أشرفتُ على تطوير واختبار تطبيق تجارة إلكترونية مبني بـ Flutter، وضمنتُ توافقه مع أهداف العمل وخطة تطوير المنتج.',
        'حلّلتُ المتطلبات التقنية لتقييم المخاطر وتحديد الوظائف الأساسية.',
        'أعددتُ خطط اختبار شاملة بنطاق محدد وأهداف واضحة.',
        'طوّرتُ إجراءات الفريق وبرامج التدريب وآليات العمل.',
      ],
    },
    stack: ['Flutter', 'Dart', 'QA'],
  },
  {
    id: 'anadol-emlak',
    role: { en: 'Software Developer', ar: 'مطوّر برمجيات' },
    company: { en: 'Anadol Emlak', ar: 'Anadol Emlak' },
    location: { en: 'Istanbul, Turkey', ar: 'إسطنبول، تركيا' },
    country: 'TR',
    kind: 'employment',
    start: '2021-05',
    end: '2022-05',
    highlights: {
      en: [
        'Owned the full mobile app lifecycle, from research and planning to release and post-launch support.',
        'Built real-time services and APIs that power live in-app features.',
        'Delivered mobile apps precisely matched to requirements and business needs.',
      ],
      ar: [
        'تولّيتُ دورة حياة التطبيق كاملةً، من البحث والتخطيط حتى الإطلاق والدعم اللاحق.',
        'بنيتُ خدمات لحظية وواجهات برمجية تشغّل الميزات المباشرة داخل التطبيق.',
        'سلّمتُ تطبيقات جوال مطابقة بدقة للمتطلبات واحتياجات العمل.',
      ],
    },
    stack: ['Android', 'Flutter', 'REST APIs', 'Real-time'],
  },
  {
    id: 'modern-tech-centre',
    role: { en: 'Software Developer', ar: 'مطوّر برمجيات' },
    company: { en: 'Modern Tech Centre', ar: 'Modern Tech Centre' },
    location: khartoum,
    country: 'SD',
    kind: 'employment',
    start: '2019-01',
    end: '2021-05',
    highlights: {
      en: [
        'Developed merchant e-payment apps for Aisino and Telpo POS terminals.',
        'Secured payment data with strong encryption algorithms.',
        'Integrated a range of payment hardware and device SDKs.',
      ],
      ar: [
        'طوّرتُ تطبيقات دفع إلكتروني للتجّار تعمل على أجهزة نقاط البيع Aisino وTelpo.',
        'أمّنتُ بيانات الدفع باستخدام خوارزميات تشفير قوية.',
        'تعاملتُ مع أنواع متعددة من أجهزة الدفع وحزم تطويرها البرمجية.',
      ],
    },
    stack: ['Android', 'Java', 'Kotlin', 'POS SDKs'],
  },
  {
    id: 'al-neelain',
    role: { en: 'Teaching Assistant', ar: 'مساعد تدريس' },
    company: { en: 'Al-Neelain University · ETC & Afag Centres', ar: 'جامعة النيلين · مركزا ETC وآفاق' },
    location: khartoum,
    country: 'SD',
    kind: 'teaching',
    start: '2017-09',
    end: '2019-01',
    highlights: {
      en: [
        'Instructed and mentored students in mobile app development at Al-Neelain University and partner training centres, focusing on practical, job-ready skills.',
      ],
      ar: [
        'درّستُ الطلاب ووجّهتهم في تطوير تطبيقات الجوال بجامعة النيلين ومراكز التدريب الشريكة، مع التركيز على المهارات العملية التي يحتاجها سوق العمل.',
      ],
    },
    stack: ['Android', 'Java'],
  },
  {
    id: 'freelance',
    role: { en: 'Software Developer & Project Lead', ar: 'مطوّر برمجيات وقائد مشاريع' },
    company: { en: 'Freelance', ar: 'عمل حر' },
    location: khartoum,
    country: 'SD',
    kind: 'freelance',
    start: '2016-09',
    end: null,
    highlights: {
      en: [
        "Gathered requirements with clients and evaluated each idea's opportunities, challenges and viability.",
        'Designed data models and system architecture with fellow developers.',
        'Led project teams to deliver on schedule.',
        'Built native and cross-platform Flutter apps with clean, well-tested code.',
      ],
      ar: [
        'جمعتُ المتطلبات مع العملاء وقيّمتُ فرص كل فكرة وتحدياتها وجدواها.',
        'صمّمتُ نماذج البيانات وبنية الأنظمة بالتعاون مع زملائي المطوّرين.',
        'قدتُ فرق المشاريع لتحقيق الأهداف ضمن المواعيد المحددة.',
        'طوّرتُ تطبيقات أصلية ومتعددة المنصات بـ Flutter بكود نظيف ومختبَر جيداً.',
      ],
    },
    stack: ['Android', 'Flutter', 'System design'],
  },
];

/** The ongoing full-time position shown in the hero. */
export const currentRole = experience.find((job) => job.kind === 'employment' && job.end === null);

export const stats = {
  countries: new Set(experience.map((job) => job.country)).size,
  companies: experience.filter((job) => job.kind === 'employment').length,
};

export type ProjectArtKind = 'rewards' | 'transfer' | 'pos' | 'route';

export interface Project {
  id: string;
  title: Localized;
  tag: Localized;
  description: Localized;
  stack: string[];
  art: ProjectArtKind;
  links?: { label: Localized; href: string }[];
}

export const projects: Project[] = [
  {
    id: 'clean-life',
    title: { en: 'Clean Life Loyalty Program', ar: 'برنامج Clean Life لولاء العملاء' },
    tag: { en: 'Loyalty · Retention', ar: 'الولاء · استبقاء العملاء' },
    description: {
      en: 'Customer rewards and retention platform that drove a notable increase in company sales, alongside an upgraded booking flow with upfront online payment.',
      ar: 'منصة مكافآت واستبقاء للعملاء أسهمت في زيادة ملحوظة في مبيعات الشركة، إلى جانب مسار حجز مطوّر يدعم الدفع الإلكتروني المسبق.',
    },
    stack: ['NestJS', 'Node.js', 'PostgreSQL', 'Flutter'],
    art: 'rewards',
  },
  {
    id: 'ayda-pay',
    title: { en: 'Ayda Pay', ar: 'Ayda Pay' },
    tag: { en: 'FinTech', ar: 'التقنية المالية' },
    description: {
      en: 'Mobile money-transfer app that makes sending and receiving funds fast, simple and secure.',
      ar: 'تطبيق جوال لتحويل الأموال يجعل الإرسال والاستقبال سريعاً وبسيطاً وآمناً.',
    },
    stack: ['Flutter', 'Node.js'],
    art: 'transfer',
  },
  {
    id: 'merchant-e-payment',
    title: { en: 'Merchant E-Payment App', ar: 'تطبيق الدفع الإلكتروني للتجّار' },
    tag: { en: 'FinTech · POS', ar: 'التقنية المالية · نقاط البيع' },
    description: {
      en: 'Android payment app for merchants on Aisino and Telpo POS terminals, with encrypted transaction handling.',
      ar: 'تطبيق أندرويد للتجّار يعمل على أجهزة نقاط البيع Aisino وTelpo، مع معالجة مشفّرة للمعاملات.',
    },
    stack: ['Android', 'Java', 'Kotlin'],
    art: 'pos',
  },
  {
    id: 'garanti-driver',
    title: { en: 'Garanti Driver', ar: 'Garanti Driver' },
    tag: { en: 'Mobility · Real-time', ar: 'النقل · الأنظمة اللحظية' },
    description: {
      en: 'Ride-hailing passenger and driver apps backed by a real-time Node.js service and a PHP API. Live on Google Play as Raksha and Raksha Captain.',
      ar: 'تطبيقا ركّاب وسائقين لخدمة نقل ذكي، مدعومان بخدمة لحظية على Node.js وواجهة برمجية بـ PHP. متاحان على Google Play باسم «ركشه» و«ركشه كابتن».',
    },
    stack: ['Android', 'Node.js', 'PHP'],
    art: 'route',
    links: [
      {
        label: { en: 'Passenger app', ar: 'تطبيق الراكب' },
        href: 'https://play.google.com/store/apps/details?id=com.raksha.passenger',
      },
      {
        label: { en: 'Driver app', ar: 'تطبيق السائق' },
        href: 'https://play.google.com/store/apps/details?id=com.raksha_tna.driver',
      },
    ],
  },
];

export interface Credential {
  id: string;
  type: 'degree' | 'certification';
  title: Localized;
  institution: Localized;
  location: Localized;
  period: string;
  note?: Localized;
}

// Add verified certifications here with type: 'certification'.
export const education: Credential[] = [
  {
    id: 'bachelor-it',
    type: 'degree',
    title: { en: "Bachelor's Degree with Honours, Information Technology", ar: 'بكالوريوس تقنية المعلومات مع مرتبة الشرف' },
    institution: { en: 'Al-Neelain University', ar: 'جامعة النيلين' },
    location: khartoum,
    period: '2011 — 2016',
  },
  {
    id: 'network-training',
    type: 'certification',
    title: { en: 'Network Training Certificate', ar: 'شهادة تدريب في الشبكات' },
    institution: { en: 'Data Centre, Al-Neelain University', ar: 'مركز البيانات، جامعة النيلين' },
    location: khartoum,
    period: '2015',
    note: { en: 'Two-month program', ar: 'برنامج لمدة شهرين' },
  },
];
