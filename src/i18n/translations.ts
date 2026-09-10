export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    whyMe: string;
    projects: string;
    skills: string;
    architecture: string;
    cli: string;
    contact: string;
    cv: string;
    available: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    headline: string;
    description: string;
    projectsBtn: string;
    cvBtn: string;
    terminalTitle: string;
    statusOnline: string;
    studioSetup: string;
    viewProjects: string;
  };
  metrics: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      projects: { label: string; desc: string; detail: string };
      tech: { label: string; desc: string; detail: string };
      domains: { label: string; desc: string; detail: string };
      problems: { label: string; desc: string; detail: string };
    };
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    quote: string;
    story1: string;
    story2: string;
    tagline: string;
    p1: string;
    p2: string;
    pillarsTitle: string;
    pillar1: { title: string; desc: string };
    pillar2: { title: string; desc: string };
    pillar3: { title: string; desc: string };
    philosophyTitle: string;
    philosophyQuote: string;
    pipeline: {
      business: { title: string; desc: string };
      analysis: { title: string; desc: string };
      architecture: { title: string; desc: string };
      backend: { title: string; desc: string };
      development: { title: string; desc: string };
      database: { title: string; desc: string };
      deployment: { title: string; desc: string };
    };
  };
  whyMe: {
    badge: string;
    title: string;
    subtitle: string;
    quote: string;
    mainQuote: string;
    subQuote: string;
    deliverablesTitle: string;
    keyDeliverables: string;
    nextStep: string;
    calloutTitle: string;
    calloutDesc: string;
    calloutBtn: string;
    steps: {
      s1: { title: string; subtitle: string; desc: string };
      s2: { title: string; subtitle: string; desc: string };
      s3: { title: string; subtitle: string; desc: string };
      s4: { title: string; subtitle: string; desc: string };
      s5: { title: string; subtitle: string; desc: string };
    };
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    caseStudyBtn: string;
    exploreCaseStudy: string;
    viewDetails: string;
    architectureTitle: string;
    liveDemo: string;
    githubCode: string;
  };
  techStack: {
    badge: string;
    title: string;
    subtitle: string;
  };
  architecture: {
    badge: string;
    title: string;
    subtitle: string;
    playgroundTitle: string;
    playgroundSubtitle: string;
  };
  terminal: {
    badge: string;
    title: string;
    subtitle: string;
    windowTitle: string;
    placeholder: string;
    welcomeMsg: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    locationLabel: string;
    locationValue: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailInputLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    sendAnother: string;
    successTitle: string;
    successDesc: string;
  };
  cv: {
    title: string;
    subtitle: string;
    downloadBtn: string;
    printBtn: string;
    closeBtn: string;
  };
}

export const translations: Record<'ar' | 'en', TranslationSchema> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من أنا',
      whyMe: 'لماذا أنا؟',
      projects: 'المشاريع',
      skills: 'المهارات',
      architecture: 'الهيكلية',
      cli: 'الطرفية CLI',
      contact: 'تواصل معي',
      cv: 'السيرة الذاتية',
      available: 'متاح للعمل في وظائف Backend'
    },
    hero: {
      greeting: "أهلاً، أنا معاذ رمضان",
      name: "معاذ رمضان",
      role: "مطور خوادم وبايثون | Python Backend Developer",
      headline: "أبني أنظمة خلفية عالية الاعتمادية",
      description: "متخصص في بناء الأنظمة الخلفية للشركات، وواجهات الـ APIs، وحلول الأعمال المؤسسية المعقدة باستخدام Python و FastAPI و Django و Odoo مع قواعد بيانات PostgreSQL وبنية الحاويات Docker.",
      projectsBtn: "المشاريع",
      cvBtn: "السيرة الذاتية",
      terminalTitle: "بيئة الخادم والطرفية",
      statusOnline: "مباشر ومتصل",
      studioSetup: "عرض استوديو العمل",
      viewProjects: "عرض تفاصيل المشاريع"
    },
    metrics: {
      badge: "إحصائيات واقعية موثقة",
      title: "أرقام عملية من واقع التنفيذ",
      subtitle: "بدون مبالغات غير واقعية — حقائق وأرقام مستمدة من مشاريع مؤسسية حقيقية قمت بهندستها وتنفيذها.",
      items: {
        projects: {
          label: "مشاريع Backend متكاملة",
          desc: "أنظمة مؤسسية معقدة ودراسات حالة إنتاجية",
          detail: "مستودعات، تصنيع، ورواتب"
        },
        tech: {
          label: "تقنيات أساسية متقنة",
          desc: "أدوات نستخدمها يومياً في الإنتاج",
          detail: "FastAPI, Django, Odoo, Postgres"
        },
        domains: {
          label: "مجالات أعمال فعلية",
          desc: "خبرة تشغيلية ومحاسبية عميقة",
          detail: "المحاسبة، المستودعات، التصنيع، والأجور"
        },
        problems: {
          label: "حلول هندسية مستدامة",
          desc: "شغف دائم بحل التحديات المعقدة",
          detail: "تحسين الأداء وضمان الموثوقية"
        }
      }
    },
    about: {
      badge: "نبذة عني وخلفيتي المهنية",
      title: "مهندس برمجيات يفهم لغة الأعمال والمحاسبة",
      subtitle: "الكود النظيف يبدأ من الفهم العميق لمتطلبات العمل وسياق المؤسسة الواقعي.",
      quote: "الكود النظيف يبدأ من الفهم العميق لمتطلبات العمل",
      story1: "أنا معاذ رمضان، مطور أنظمة خلفية (Python Backend Developer). ما يميزني ليس فقط كتابة كود بايثون سريع وقابل للتوسع، بل امتلاكي لخلفية حقيقية وعميقة في الإدارة المالية، المحاسبة المزدوجة، سلاسل الإمداد، وإدارة المستودعات والتصنيع.",
      story2: "لقد قضيت سنوات في فهم كيف تدور عجلة الأعمال على أرض الواقع، لذلك عندما أصمم قاعدة بيانات أو واجهة برمجية API، أصممها لتلبي الاحتياج التشغيلي الدقيق دون ثغرات محاسبية أو أخطاء في تتبع المخزون.",
      tagline: "الكود النظيف يبدأ من الفهم العميق لمتطلبات العمل",
      p1: "أنا معاذ رمضان، مطور أنظمة خلفية (Python Backend Developer). ما يميزني ليس فقط كتابة كود بايثون سريع وقابل للتوسع، بل امتلاكي لخلفية حقيقية وعميقة في الإدارة المالية، المحاسبة المزدوجة، سلاسل الإمداد، وإدارة المستودعات والتصنيع.",
      p2: "لقد قضيت سنوات في فهم كيف تدور عجلة الأعمال على أرض الواقع، لذلك عندما أصمم قاعدة بيانات أو واجهة برمجية API، أصممها لتلبي الاحتياج التشغيلي الدقيق دون ثغرات محاسبية أو أخطاء في تتبع المخزون.",
      pillarsTitle: "أركان تميزي الهندسي:",
      pillar1: {
        title: "فهم العمليات المالية والمحاسبية",
        desc: "فهم دفاتر الأستاذ، القيود اليومية، شجرة الحسابات، وتسويات الضرائب والرواتب."
      },
      pillar2: {
        title: "هندسة قواعد البيانات والأنظمة",
        desc: "تصميم مخططات PostgreSQL معيارية (3NF)، واستعلامات خالية من معضلة N+1 مع فهارس مركبة."
      },
      pillar3: {
        title: "الإنتاجية وسرعة التسليم",
        desc: "استخدام أحدث أدوات Python 3.12، و Pydantic v2، و FastAPI، مع حاويات Docker و CI/CD."
      },
      philosophyTitle: "فلسفتي في العمل:",
      philosophyQuote: "\"الفرق بين مبرمج عادي ومهندس حقيقي هو أن المهندس لا يبدأ في كتابة الكود حتى يكتمل فهمه للمشكلة وتداعياتها التجارية على أرض الواقع.\"",
      pipeline: {
        business: {
          title: "فهم متطلبات الأعمال والمحاسبة",
          desc: "التواصل المباشر مع أصحاب المصلحة لفهم التدفق المحاسبي، وقيود سلاسل الإمداد، وتوزيع المهام."
        },
        analysis: {
          title: "تحليل النظم وحالات الحافة",
          desc: "تحويل المتطلبات التشغيلية إلى شروط برمجية واضحة وحالات انتقال دقيقة تمنع الأخطاء البشرية."
        },
        architecture: {
          title: "تصميم المعمارية والـ APIs",
          desc: "رسم عقود الـ APIs المعيارية وتحديد نقاط التكامل بين الخدمات المصغرة ومستويات الأمان."
        },
        backend: {
          title: "تطوير بايثون عالي الأداء",
          desc: "كتابة كود Python 3.12 نقي باستخدام FastAPI أو Django أو Odoo مع تحقق صارم من الأنواع."
        },
        development: {
          title: "تطوير بايثون عالي الأداء",
          desc: "كتابة كود Python 3.12 نقي باستخدام FastAPI أو Django أو Odoo مع تحقق صارم من الأنواع."
        },
        database: {
          title: "هندسة قواعد البيانات و PostgreSQL",
          desc: "بناء جداول مطبعة وفق معيار 3NF، وتحسين الفهارس لتنفيذ الاستعلامات في أجزاء من الثانية."
        },
        deployment: {
          title: "الحاويات والنشر المستقر",
          desc: "تغليف الخدمات في حاويات Docker خفيفة وأتمتة النشر عبر GitHub Actions على خوادم Linux."
        }
      }
    },
    whyMe: {
      badge: "فلسفة العمل والمنهجية الهندسية",
      title: "لماذا العمل معي؟",
      subtitle: "خمس خطوات هندسية صارمة لتحويل التعقيد إلى أنظمة إنتاجية مستقرة.",
      quote: "أفهم المشكلة قبل كتابة الكود.",
      mainQuote: "\"أفهم متطلبات العمل وأبعاد المشكلة قبل كتابة سطر كود واحد.\"",
      subQuote: "نبتعد عن الكليشيهات والكلمات المكررة، ونتبع منهجية هندسية صارمة من 5 خطوات لتحويل التعقيد إلى أنظمة إنتاجية مستقرة.",
      deliverablesTitle: "المخرجات المعتمدة للمرحلة",
      keyDeliverables: "المخرجات الأساسية للمرحلة:",
      nextStep: "المرحلة التالية",
      calloutTitle: "تبحث عن مطور Backend يفهم منطق العمل دون الحاجة لشرح مستمر للمفاهيم المحاسبية؟",
      calloutDesc: "يسعدني مناقشة كيف يمكنني المساهمة في فريقك التقني أو بناء نظام مؤسستك القادم.",
      calloutBtn: "ابدأ المحادثة الآن ←",
      steps: {
        s1: {
          title: "Understand",
          subtitle: "أفهم الـ Business Requirements",
          desc: "قبل كتابة سطر واحد من الكود، أجلس مع أصحاب المصلحة لفهم المشكلة التشغيلية، والأثر المحاسبي، وقيود سلاسل الإمداد، وتدفق المستخدمين الدقيق."
        },
        s2: {
          title: "Design",
          subtitle: "أصمم Architecture و Database",
          desc: "أصمم مخططات قواعد بيانات علائقية مرنة بمعيار التطبيع الثالث، مع فهارس مركبة ومعمارية خدمات غير متزامنة وقابلة للتوسع الأفقي."
        },
        s3: {
          title: "Build",
          subtitle: "أطور الـ Backend والـ APIs",
          desc: "كتابة كود Python 3.12+ نقي ومحدد الأنماط (Strict Type Hinting) باستخدام FastAPI و Django و Odoo مع Pydantic v2 للتحقق الصارم من المدخلات."
        },
        s4: {
          title: "Test",
          subtitle: "أختبر Security و Performance",
          desc: "فحص استعلامات قواعد البيانات ومنع معضلة N+1، وتدقيق خطط التنفيذ EXPLAIN ANALYZE، والتحقق من صلاحية رموز JWT وتغطية الكود باختبارات آلية."
        },
        s5: {
          title: "Deploy",
          subtitle: "أجهز المشروع للإنتاج",
          desc: "تغليف الخدمات الخلفية في حاويات Docker خفيفة ومتعددة المراحل، وتكوين خادم Nginx كوسيط عكسي مع شهادات SSL وأنابيب نشر تلقائية عبر GitHub Actions."
        }
      }
    },
    projects: {
      badge: "دراسات حالة من واقع الإنتاج",
      title: "مشاريع وأنظمة تم تنفيذها",
      subtitle: "استعرض الهيكلية، ومخططات قواعد البيانات، ونقاط الـ APIs، وسياسات الحماية لكل نظام.",
      caseStudyBtn: "عرض دراسة الحالة والمعمارية",
      exploreCaseStudy: "عرض دراسة الحالة والمعمارية التفصيلية",
      viewDetails: "تفاصيل النظام",
      architectureTitle: "الهيكلية المعمارية",
      liveDemo: "المعاينة الحية",
      githubCode: "الكود البرمجي"
    },
    techStack: {
      badge: "العتاد التقني وحزمة الأدوات",
      title: "التقنيات والأدوات الهندسية",
      subtitle: "مجموعة الأدوات التي أستخدمها لبناء أنظمة خلفية عالية الأداء وقابلة للتوسع والاعتماد."
    },
    architecture: {
      badge: "هندسة النظم وتدفق البيانات",
      title: "معمارية معالجة الطلبات الخلفية",
      subtitle: "كيف يمر طلب المستخدم من البوابة الخارجية وحتى تخزينه في قاعدة البيانات بشكل آمن ومحمي.",
      playgroundTitle: "مختبر محاكاة خط أنابيب الطلبات",
      playgroundSubtitle: "جرب إرسال طلبات حقيقية وشاهد كيف يتفاعل النظام مع التحقق من الهوية، والصلاحيات، ومستويات التخزين المؤقت."
    },
    terminal: {
      badge: "موجه أوامر بايثون التفاعلي",
      title: "جرب بيئة موجه الأوامر (CLI)",
      subtitle: "اكتب أوامر حقيقية مثل whoami أو skills أو projects أو help لاستكشاف ملفي المهني ومشاريعي.",
      windowTitle: "moaz@backend-cluster-node-01: ~",
      placeholder: "اكتب 'whoami' أو 'skills' أو 'projects' أو 'help'...",
      welcomeMsg: "مرحباً بك في موجه الأوامر التفاعلي لمعاذ رمضان (v3.0 LTS)"
    },
    contact: {
      badge: "تواصل مباشر وبناء شراكات",
      title: "لنبدأ محادثة عمل مثمرة",
      subtitle: "سواء كنت ترغب في توظيفي ضمن فريقك، أو تطوير نظام مؤسسي متكامل، يسعدني دائماً التواصل معك.",
      emailLabel: "البريد الإلكتروني المباشر",
      locationLabel: "الموقع ونطاق العمل",
      locationValue: "القاهرة، مصر (عن بُعد وحضورياً لجميع دول العالم)",
      formTitle: "إرسال رسالة مباشرة",
      formSubtitle: "املأ الحقول التالية وسأرد عليك عبر بريدك خلال 24 ساعة كحد أقصى.",
      nameLabel: "الاسم الكريم",
      namePlaceholder: "اكتب اسمك الكامل أو اسم الشركة",
      emailInputLabel: "البريد الإلكتروني",
      emailPlaceholder: "name@company.com",
      messageLabel: "متطلبات وتفاصيل المشروع أو الفرصة",
      messagePlaceholder: "أخبرني عن متطلبات النظام الخلفي، التقنيات المطلوبة، والجدول الزمني...",
      submitBtn: "إرسال الرسالة إلى معاذ",
      sendAnother: "إرسال رسالة أخرى",
      successTitle: "تم إرسال الرسالة بنجاح!",
      successDesc: "شكراً لتواصلك. سأقوم بمراجعة استفسارك والرد عليك في أقرب وقت ممكن."
    },
    cv: {
      title: "السيرة الذاتية المهنية",
      subtitle: "معاذ رمضان — مطور أنظمة خلفية بلغة بايثون",
      downloadBtn: "تحميل بصيغة Markdown",
      printBtn: "طباعة السيرة الذاتية",
      closeBtn: "إغلاق"
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Me',
      whyMe: 'Why Me?',
      projects: 'Projects',
      skills: 'Skills',
      architecture: 'Architecture',
      cli: 'CLI Terminal',
      contact: 'Contact',
      cv: 'Resume / CV',
      available: 'Available for Backend Roles'
    },
    hero: {
      greeting: "HELLO, I'M MOAZ",
      name: "MOAZ RAMADAN",
      role: "Python Backend Developer",
      headline: "Building Reliable Backend Systems",
      description: "Specialized in high-performance enterprise backends, scalable RESTful APIs, and business-critical software with Python, FastAPI, Django, Odoo ERP, PostgreSQL, and Docker.",
      projectsBtn: "Projects",
      cvBtn: "CV",
      terminalTitle: "Server Environment & CLI",
      statusOnline: "ONLINE",
      studioSetup: "View Studio Setup",
      viewProjects: "View Project Details"
    },
    metrics: {
      badge: "VERIFIED REAL-WORLD METRICS",
      title: "Grounded Engineering Statistics",
      subtitle: "No inflated buzzwords — accurate metrics reflecting real production systems and business solutions.",
      items: {
        projects: {
          label: "Enterprise Backend Projects",
          desc: "Full production case studies & business engines",
          detail: "Inventory, Manufacturing & Payroll"
        },
        tech: {
          label: "Core Daily Technologies",
          desc: "Primary tools used daily in production",
          detail: "FastAPI, Django, Odoo, Postgres"
        },
        domains: {
          label: "Practical Business Domains",
          desc: "Deep operational & financial expertise",
          detail: "Accounting, Warehousing, MRP & Tax"
        },
        problems: {
          label: "Problems to Solve",
          desc: "Constant dedication to performance and security",
          detail: "Zero-latency bottlenecks & stability"
        }
      }
    },
    about: {
      badge: "BACKGROUND & EXPERTISE",
      title: "A Software Engineer Who Speaks Business & Accounting",
      subtitle: "Clean code starts with understanding the problem and operational business realities.",
      quote: "I understand the problem before writing the code.",
      story1: "I am Moaz Ramadan, a Python Backend Developer. What sets me apart is not just writing fast, scalable Python code, but my grounded background in financial management, double-entry accounting, supply chains, and warehouse operations.",
      story2: "I spent years working closely with physical business operations. When I design a database schema or API endpoint, I build it to solve real-world constraints without accounting loopholes or inventory reconciliation errors.",
      tagline: "Clean code starts with understanding the problem",
      p1: "I am Moaz Ramadan, a Python Backend Developer. What sets me apart is not just writing fast, scalable Python code, but my grounded background in financial management, double-entry accounting, supply chains, and warehouse operations.",
      p2: "I spent years working closely with physical business operations. When I design a database schema or API endpoint, I build it to solve real-world constraints without accounting loopholes or inventory reconciliation errors.",
      pillarsTitle: "Core Engineering Pillars:",
      pillar1: {
        title: "Financial & Accounting Fluency",
        desc: "Deep knowledge of general ledgers, journal entries, chart of accounts, and automated tax/payroll runs."
      },
      pillar2: {
        title: "Database & System Architecture",
        desc: "Designing 3NF normalized PostgreSQL schemas, eliminating N+1 queries, and building composite indexes."
      },
      pillar3: {
        title: "Speed & Production Reliability",
        desc: "Leveraging modern Python 3.12, Pydantic v2, FastAPI, Docker containers, and CI/CD pipelines."
      },
      philosophyTitle: "Engineering Philosophy:",
      philosophyQuote: "\"The difference between an average coder and a real engineer is that an engineer never writes code until the business problem and its real-world consequences are crystal clear.\"",
      pipeline: {
        business: {
          title: "Understand Business & Accounting",
          desc: "Direct communication with stakeholders to map accounting ledger rules, warehousing constraints, and operational KPIs."
        },
        analysis: {
          title: "System Analysis & Edge-Cases",
          desc: "Converting operational rules into explicit software state transitions to eliminate human error."
        },
        architecture: {
          title: "Architect System & APIs",
          desc: "Formulating OpenAPI request contracts, relational ERDs, decoupled async queues, and security policies."
        },
        backend: {
          title: "High-Performance Python Code",
          desc: "Writing typed Python 3.12 with FastAPI, Django, or Odoo models backed by Pydantic v2 validation."
        },
        development: {
          title: "High-Performance Python Code",
          desc: "Writing typed Python 3.12 with FastAPI, Django, or Odoo models backed by Pydantic v2 validation."
        },
        database: {
          title: "PostgreSQL & Database Engineering",
          desc: "Crafting normalized 3NF schemas, compound indexing, and zero-N+1 query execution."
        },
        deployment: {
          title: "Containerization & CI/CD",
          desc: "Lightweight Docker multi-stage builds, automated Nginx reverse proxy SSL, and GitHub Actions CI/CD."
        }
      }
    },
    whyMe: {
      badge: "ENGINEERING PHILOSOPHY & WORK ETHIC",
      title: "Why Work With Me?",
      subtitle: "A disciplined 5-step engineering methodology that turns complex business needs into production-ready software.",
      quote: "I understand the problem before writing the code.",
      mainQuote: "\"I understand the problem before writing the code.\"",
      subQuote: "No generic buzzwords. Just a disciplined, systematic 5-step engineering methodology that turns complex business needs into production-ready software.",
      deliverablesTitle: "Key Deliverables",
      keyDeliverables: "Key Deliverables for this Phase:",
      nextStep: "Next Phase",
      calloutTitle: "Looking for a backend developer who needs zero hand-holding on business logic?",
      calloutDesc: "Let's discuss how I can contribute to your engineering team or product pipeline.",
      calloutBtn: "Get In Touch →",
      steps: {
        s1: {
          title: "Understand",
          subtitle: "Understand Business Requirements",
          desc: "Before writing a single line of code, I sit down with business stakeholders to understand the core operational challenge, accounting impact, supply chain constraints, and user workflows."
        },
        s2: {
          title: "Design",
          subtitle: "Design Architecture & Database",
          desc: "I design resilient relational database schemas with third normal form normalization, composite indexes, and decoupled asynchronous service architecture."
        },
        s3: {
          title: "Build",
          subtitle: "Build Backend & APIs",
          desc: "Writing strictly type-hinted, high-performance Python 3.12+ code with FastAPI, Django, and Odoo ERP. Utilizing Pydantic v2 schemas for airtight runtime payload validation."
        },
        s4: {
          title: "Test",
          subtitle: "Test Security & Performance",
          desc: "Auditing queries for N+1 performance bottlenecks, running execution plan EXPLAIN ANALYZE on PostgreSQL, validating JWT expiration signatures, and running automated test suites."
        },
        s5: {
          title: "Deploy",
          subtitle: "Deploy to Production",
          desc: "Packaging backend services into lightweight multi-stage Docker containers, configuring Nginx reverse proxy with SSL, and setting up automated GitHub Actions deployment pipelines on Linux servers."
        }
      }
    },
    projects: {
      badge: "PRODUCTION CASE STUDIES",
      title: "Featured Enterprise Systems",
      subtitle: "Explore the deep architecture, database schemas, API contracts, and security layers of production systems I have engineered.",
      caseStudyBtn: "Inspect Deep Architecture & Case Study",
      exploreCaseStudy: "Inspect Deep Architecture & Case Study",
      viewDetails: "System Details",
      architectureTitle: "System Architecture",
      liveDemo: "Live API Docs",
      githubCode: "GitHub Code"
    },
    techStack: {
      badge: "ARSENAL & TOOLS",
      title: "Engineering Tech Stack",
      subtitle: "A battle-tested set of technologies I use daily to engineer high-throughput, fault-tolerant backend systems."
    },
    architecture: {
      badge: "DATA PIPELINE & SYSTEM DESIGN",
      title: "End-to-End Request Pipeline",
      subtitle: "A detailed breakdown of how incoming client requests flow through authentication, validation, business logic, and database persistence layers.",
      playgroundTitle: "Interactive Request Pipeline Sandbox",
      playgroundSubtitle: "Send live simulated HTTP payloads to inspect token validation, RBAC checks, cache hits, and database query executions."
    },
    terminal: {
      badge: "INTERACTIVE BACKEND SHELL",
      title: "Test Moaz's CLI Environment",
      subtitle: "Type actual commands below or click quick suggestions to query skills, projects, and architecture.",
      windowTitle: "moaz@backend-production-node-01: ~",
      placeholder: "type 'whoami', 'skills', 'projects', 'help'...",
      welcomeMsg: "Moaz Ramadan Backend Shell (v3.0 LTS)"
    },
    contact: {
      badge: "LET'S COLLABORATE",
      title: "Get In Touch",
      subtitle: "Interested in working together or discussing backend engineering opportunities? Feel free to reach out anytime.",
      emailLabel: "Direct Email",
      locationLabel: "Location & Availability",
      locationValue: "Cairo, Egypt (Available Remote & Onsite Worldwide)",
      formTitle: "Send a Direct Message",
      formSubtitle: "Fill out the form below and Moaz will respond within 24 hours.",
      nameLabel: "Your Name",
      namePlaceholder: "Moaz or Company Name",
      emailInputLabel: "Email Address",
      emailPlaceholder: "name@example.com",
      messageLabel: "Project Details & Requirements",
      messagePlaceholder: "Tell me about your backend requirements, tech stack, and timeline...",
      submitBtn: "Send Message to Moaz",
      sendAnother: "Send Another Message",
      successTitle: "Message Dispatched Successfully!",
      successDesc: "Thank you for reaching out. Moaz will review your inquiry and get back to your email shortly."
    },
    cv: {
      title: "Curriculum Vitae",
      subtitle: "Moaz Ramadan — Python Backend Developer",
      downloadBtn: "Download Markdown",
      printBtn: "Print Resume",
      closeBtn: "Close"
    }
  }
};
