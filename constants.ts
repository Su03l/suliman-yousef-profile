
import { Project, Certification, Service } from './types';

export const EXPERIENCES = [
  {
    role: {
      en: "Front-End Developer (Freelance)",
      ar: "مطور واجهات أمامية (عمل حر)"
    },
    company: {
      en: "Foundations of Prevention (FOP) Platform",
      ar: "منصة أسس الوقاية (FOP)"
    },
    period: "2025",
    bullets: {
      en: [
        "Built a responsive corporate application using React, TypeScript, and MUI, ensuring high performance across all devices.",
        "Implemented dynamic product layouts and category-based filtering to streamline user navigation and engagement."
      ],
      ar: [
        "بناء تطبيق مؤسسي مستجيب باستخدام React و TypeScript و MUI، مما يضمن أداءً عالياً على جميع الأجهزة.",
        "تنفيذ تخطيطات منتجات ديناميكية وتصفية قائمة على الفئات لتبسيط تنقل المستخدم وتفاعله."
      ]
    }
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: { en: "Web Application Development", ar: "تطوير تطبيقات الويب" },
    issuer: { en: "Doroob", ar: "دروب" },
    year: "2025",
    description: { en: "Web app development course with assessments and updated browser skills.", ar: "دورة تطوير تطبيقات الويب مع التقييمات ومهارات المتصفح الحديثة." }
  },
  {
    title: { en: "Full Stack Web Developer", ar: "مطور ويب متكامل" },
    issuer: { en: "Satar", ar: "سطر" },
    year: "2024",
    description: { en: "HTML, CSS, JavaScript, Git, Node.js, Express, DOM, Bootstrap, MongoDB, API, React.", ar: "دورة شاملة تغطي الواجهات الأمامية والخلفية وقواعد البيانات." }
  },
  {
    title: { en: "CSS (Basic)", ar: "أساسيات CSS" },
    issuer: { en: "HackerRank", ar: "هاكر رانك" },
    year: "2025",
    description: { en: "Covers cascading, inheritance, text styling, layouts, and box model.", ar: "تغطي الوراثة، تنسيق النصوص، التخطيطات، ونموذج الصندوق." }
  },
  {
    title: { en: "Flutter App Developer (Full Course)", ar: "مطور تطبيقات فلاتر (دورة كاملة)" },
    issuer: { en: "Satar", ar: "سطر" },
    year: "2024",
    description: { en: "Dart, Flutter 101-105.", ar: "تعلم تطوير تطبيقات الموبايل باستخدام Dart و Flutter." }
  },
  {
    title: { en: "Android App Developer (Full Course)", ar: "مطور تطبيقات أندرويد (دورة كاملة)" },
    issuer: { en: "Satar", ar: "سطر" },
    year: "2022",
    description: { en: "Kotlin, Jetpack Compose, Android Firebase, SQL.", ar: "تطوير تطبيقات أندرويد باستخدام كوتلن وفايربيز." }
  },
  {
    title: { en: "Data Analysis Course", ar: "دورة تحليل البيانات" },
    issuer: { en: "Satar", ar: "سطر" },
    year: "2025",
    description: { en: "SQL, Python, NumPy, Pandas, Power BI.", ar: "أساسيات تحليل البيانات واستخدام الأدوات الإحصائية." }
  }
];

// Tech stack for marquee with SVG icons
export const TECH_STACK = [
  { name: "HTML", svg: "/svg/html-5-svgrepo-com.svg" },
  { name: "CSS", svg: "/svg/css-3-svgrepo-com.svg" },
  { name: "JavaScript", svg: "/svg/javascript-svgrepo-com.svg" },
  { name: "TypeScript", svg: "/svg/typescript-icon-svgrepo-com.svg" },
  { name: "React", svg: "/svg/react-svgrepo-com.svg" },
  { name: "Next.js", svg: "/svg/next-white.svg" },
  { name: "Laravel", svg: "/svg/laravel.svg" },
  { name: "PHP", svg: "/svg/php.svg" },
  { name: "Node.js", svg: "/svg/node-js-svgrepo-com.svg" },
  { name: "Express", svg: "/svg/express-white.svg" },
  { name: "Python", svg: "/svg/python.svg" },
  { name: "PostgreSQL", svg: "/svg/postgresql-logo-svgrepo-com.svg" },
  { name: "Git", svg: "/svg/git-svgrepo-com.svg" },
  { name: "Vite", svg: "/svg/vite.svg" }
];

export const PROJECTS: (Project & { isLaravelCollection?: boolean })[] = [
  {
    id: "p1",
    title: { en: "Smart-life-organizer", ar: "منظم الحياة الذكي" },
    description: { en: "Intelligent app for habit management and time organization via voice interaction.", ar: "تطبيق ذكي لإدارة العادات اليومية وتنظيم الوقت عبر التفاعل الصوتي." },
    category: "fullstack",
    tech: ["Flutter", "Dart", "Python", "FastAPI", "SQL"],
    image: "/img/HomePage.png",
    githubUrl: "https://github.com/Su03l/smartLiveOrganizer"
  },
  {
    id: "p2",
    title: { en: "Absher AI Saad", ar: "أبشر - سعد الذكي" },
    description: { en: "AI platform for Saudi government services with a smart interface.", ar: "منصة مدعومة بالذكاء الاصطناعي لتسهيل الوصول للخدمات الحكومية." },
    category: "fullstack",
    tech: ["React.js", "Python", "FastAPI", "PostgreSQL"],
    image: "/img/absher.png",
    githubUrl: "https://github.com/Su03l/final_absher"
  },
  {
    id: "p3",
    title: { en: "OS Profile", ar: "نظام التشغيل الشخصي" },
    description: { en: "Unique OS-style interactive portfolio environment.", ar: "بيئة بورتفوليو تفاعلية فريدة تحاكي أنظمة التشغيل." },
    category: "frontend",
    tech: ["React.js", "Tailwind", "TypeScript", "Framer Motion"],
    image: "/img/suliman-os.png",
    liveUrl: "https://suliman-os.vercel.app/",
    githubUrl: "https://github.com/Su03l/suliman-os-profile"
  },
  {
    id: "p4",
    title: { en: "RSL Chat App", ar: "تطبيق رسل للمحادثة" },
    description: { en: "Secure, modern messaging app with full Arabic support.", ar: "تطبيق مراسلة آمن وحديث مع دعم كامل للغة العربية." },
    category: "fullstack",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
    image: "/img/rsl.png",
    liveUrl: "https://rsl-chat.vercel.app/",
    githubUrl: "https://github.com/Su03l/Developers-Station"
  },
  {
    id: "p5",
    title: { en: "Developers Station", ar: "محطة المطورين" },
    description: { en: "Social tech platform for knowledge sharing and technical blogs.", ar: "منصة اجتماعية تقنية لمشاركة المعرفة والتدوين التقني." },
    category: "fullstack",
    tech: ["PHP", "Laravel", "PostgreSQL", "React.js"],
    image: "/img/developer_sta.png",
    githubUrl: "https://github.com/Su03l/Developers-Station"
  },
  {
    id: "p6",
    title: { en: "CineMax Platform", ar: "منصة سينما ماكس" },
    description: { en: "Modern cinema website for browsing and booking tickets.", ar: "موقع سينما حديث لتصفح الأفلام وحجز التذاكر عبر الإنترنت." },
    category: "frontend",
    tech: ["Next JS", "Radix UI", "Tailwind CSS"],
    image: "/img/cineMax.png",
    liveUrl: "https://cine-max.vercel.app/",
    githubUrl: "https://github.com/Su03l/CineMax"
  },
  {
    id: "p7",
    title: { en: "Educational Platform", ar: "المنصة التعليمية" },
    description: { en: "Curated programming tutorials from top sources in one hub.", ar: "منصة تعليمية تجمع أفضل دروس البرمجة في مكان واحد." },
    category: "frontend",
    tech: ["React Js", "TypeScript", "MUI", "Vite"],
    image: "/img/edu-platform.png",
    liveUrl: "https://edu-platfarom.netlify.app/",
    githubUrl: "https://github.com/Su03l/education-platform"
  },
  {
    id: "p8",
    title: { en: "Generate Cards", ar: "توليد البطاقات" },
    description: { en: "Create and share digital business cards with ease.", ar: "إنشاء ومشاركة بطاقات الأعمال الرقمية بسهولة." },
    category: "frontend",
    tech: ["Next js", "Tailwind CSS", "Shadcn UI"],
    image: "/img/gen-crad.png",
    liveUrl: "https://cards-generate.vercel.app/",
    githubUrl: "https://github.com/Su03l/Cards-Generate"
  },
  {
    id: "p9",
    title: { en: "ProjexHub", ar: "بروجيكس هب" },
    description: { en: "Graduation projects showcase for students and supervisors.", ar: "منصة لعرض مشاريع التخرج والتفاعل بين الطلاب والمشرفين." },
    category: "frontend",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: "/img/projexhub.png",
    liveUrl: "https://projexhub.vercel.app/",
    githubUrl: "https://github.com/Su03l/ProjexHub-Platform"
  },
  {
    id: "p10",
    title: { en: "Github Fetch", ar: "جلب بيانات جيت هب" },
    description: { en: "Tool to fetch and display GitHub user profiles and repos.", ar: "أداة لعرض ملفات تعريف مستخدمي جيت هب ومستودعاتهم." },
    category: "frontend",
    tech: ["React Js", "MUI", "Axios"],
    image: "/img/github-fetch.png",
    liveUrl: "https://github-app-fetch.vercel.app/",
    githubUrl: "https://github.com/Su03l/github-app-fetch"
  },
  {
    id: "p11",
    title: { en: "Dlni Platform", ar: "منصة دلني" },
    description: { en: "Guidance for pilgrims to facilitate routes in Medina.", ar: "منصة لإرشاد وتوجيه ضيوف الرحمن في المدينة المنورة." },
    category: "frontend",
    tech: ["React", "TypeScript", "Maps API"],
    image: "/img/Project8.png",
    githubUrl: "https://github.com/Su03l/dlni"
  },
  {
    id: "p12",
    title: { en: "Expense Management", ar: "إدارة المصاريف" },
    description: { en: "Track daily expenses and savings through an organized UI.", ar: "تطبيق لإدارة المصاريف اليومية وتتبع المدخرات." },
    category: "frontend",
    tech: ["React Js", "MUI", "React Router"],
    image: "/img/Expense-management.png",
    liveUrl: "https://expense-management-ruby.vercel.app/",
    githubUrl: "https://github.com/Su03l/Expense-management"
  }, {
    id: "p13",
    title: { en: "SignIn Auth", ar: "نظام تسجيل دخول" },
    description: { en: "Full-stack authentication system with Node and PostgreSQL.", ar: "نظام مصادقة متكامل باستخدام Node و PostgreSQL." },
    category: "fullstack",
    tech: ["Node.js", "Express", "PostgreSQL"],
    image: "/img/signinform.png",
    githubUrl: "https://github.com/Su03l/signin-form-backend"
  },
  {
    id: "p14",
    title: { en: "Law AI Chat", ar: "محامي الذكاء الاصطناعي" },
    description: { en: "AI-driven legal consultations and case reports.", ar: "استشارات قانونية مدعومة بالذكاء الاصطناعي وتوليد تقارير القضايا." },
    category: "frontend",
    tech: ["HTML", "CSS", "Javascript"],
    image: "/img/Project9.png",
    liveUrl: "https://su03l.github.io/wayer1/",
    githubUrl: "https://github.com/Su03l/wayer1"
  },
  {
    id: "p15",
    title: { en: "TaskHub", ar: "تاسك هب" },
    description: { en: "Graduation team management platform.", ar: "منصة لإدارة فرق التخرج وتتبع المهام والتقدم." },
    category: "frontend",
    tech: ["HTML", "CSS", "Javascript"],
    image: "/img/Project4.png",
    liveUrl: "https://su03l.github.io/TaskHub/",
    githubUrl: "https://github.com/Su03l/TaskHub"
  },
  {
    id: "p16",
    title: { en: "To-Do Backend", ar: "تطبيق مهام خلفي" },
    description: { en: "Task management with database persistence using Node.js.", ar: "إدارة المهام مع حفظ البيانات في قاعدة بيانات باستخدام Node.js." },
    category: "fullstack",
    tech: ["Node.js", "Express", "PostgreSQL", "JS"],
    image: "/img/Project11.png",
    githubUrl: "https://github.com/Su03l/To-Do-APP-Backend"
  },
  {
    id: "p17",
    title: { en: "Genesis G90", ar: "عرض جينيسيس" },
    description: { en: "Interactive showcase for the 2025 Genesis G90 model.", ar: "عرض تفاعلي لمواصفات وصور طراز جينيسيس G90 لعام 2025." },
    category: "frontend",
    tech: ["HTML", "CSS", "Javascript"],
    image: "/img/project10.png",
    liveUrl: "https://su03l.github.io/Genesis-G90-2025/",
    githubUrl: "https://github.com/Su03l/Genesis-G90-2025"
  },
  {
    id: "p18",
    title: { en: "About Madina", ar: "عن المدينة المنورة" },
    description: { en: "Informative site about landmarks and history of Madina.", ar: "موقع تعريفي عن معالم وتاريخ المدينة المنورة." },
    category: "frontend",
    tech: ["HTML", "CSS", "Javascript"],
    image: "/img/Project12.png",
    liveUrl: "https://su03l.github.io/about-madina/",
    githubUrl: "https://github.com/Su03l/about-madina"
  },
  {
    id: "p19",
    title: { en: "3 Algorithms", ar: "3 خوارزميات تشفير" },
    description: { en: "Morse Code, ROT13, and Atbash encryption tools.", ar: "أدوات لتشفير النصوص باستخدام مورس، ROT13، و Atbash." },
    category: "frontend",
    tech: ["HTML", "CSS", "Javascript"],
    image: "/img/Project2-1.png",
    liveUrl: "https://su03l.github.io/MorseRot13Atbash/",
    githubUrl: "https://github.com/Su03l/MorseRot13Atbash"
  },
  {
    id: "p20",
    title: { en: "LinkTree Clone", ar: "رابط واحد للملف الشخصي" },
    description: { en: "Personalized landing page for all social links.", ar: "صفحة واحدة تجمع كافة روابط التواصل الاجتماعي والأعمال." },
    category: "frontend",
    tech: ["HTML", "CSS", "Javascript"],
    image: "/img/Project7.png",
    liveUrl: "https://suliman-yousef-link-tree.vercel.app/",
    githubUrl: "https://github.com/Su03l/SulimanYousef-LinkTree"
  },
  {
    id: "p21",
    title: { en: "Tourism Business", ar: "أعمال سياحية" },
    description: { en: "Hotel management and booking introduction site.", ar: "موقع تعريفي لإدارة وحجز الفنادق والخدمات السياحية." },
    category: "frontend",
    tech: ["React", "TypeScript", "Tailwind"],
    image: "/img/Project5.png",
    liveUrl: "https://rightarm.vercel.app/",
    githubUrl: "https://github.com/Su03l/TourismBusiness"
  },
  {
    id: "p22",
    title: { en: "To-Do React", ar: "تطبيق مهام React" },
    description: { en: "Simple and clean task organizer built with React.", ar: "منظم مهام بسيط ونظيف مبني باستخدام React و MUI." },
    category: "frontend",
    tech: ["React", "MUI", "JS"],
    image: "/img/To-Do-List-react.png",
    githubUrl: "https://github.com/Su03l/To-Do-App-with-React"
  },
  {
    id: "p23",
    title: { en: "Laravel Todo Fullstack", ar: "تطبيق مهام Laravel" },
    description: { en: "Full-stack task management using Laravel and React.", ar: "إدارة مهام شاملة باستخدام Laravel للباك اند و React للفرونت اند." },
    category: "fullstack",
    tech: ["PHP", "Laravel", "React", "PostgreSQL"],
    image: "/img/todo-app-backend.png",
    githubUrl: "https://github.com/Su03l/Todo-app-backend"
  },
  {
    id: "p24",
    title: { en: "Personal Profile", ar: "الملف الشخصي" },
    description: { en: "Showcase of skills and projects with a clean UI.", ar: "موقع لعرض المهارات والمشاريع بواجهة مستخدم نظيفة." },
    category: "frontend",
    tech: ["HTML", "CSS", "Javascript"],
    image: "/img/project2.png",
    liveUrl: "https://suliamanyousef.vercel.app/",
    githubUrl: "https://github.com/Su03l/FinalProfile"
  },
  {
    id: "laravel-collection",
    title: { en: "Laravel Projects Collection", ar: "مجموعة مشاريع لارافيل" },
    description: { en: "A comprehensive collection of RESTful APIs built with Laravel for various business applications.", ar: "مجموعة شاملة من واجهات البرمجة (APIs) المبنية باستخدام لارافيل لمختلف تطبيقات الأعمال." },
    category: "backend",
    tech: ["PHP", "Laravel", "SQLite", "PostgreSQL", "Sanctum"],
    image: "/img/card.png",
    githubUrl: "https://github.com/Su03l/Laravel-projects",
    isLaravelCollection: true
  }
];

export const LARAVEL_COLLECTION_ITEMS = [
  { id: "01", name: "PhonebookAPI", desc: { en: "Complete contact management system with search functionality and CRUD operations.", ar: "نظام متكامل لإدارة جهات الاتصال مع ميزة البحث وعمليات CRUD." }, url: "https://github.com/Su03l/Laravel-projects/tree/main/PhonebookAPI", icon: "fa-address-book" },
  { id: "02", name: "HRSystem", desc: { en: "HR management platform handling employees, departments, and comprehensive personnel data.", ar: "منصة إدارة الموارد البشرية للتعامل مع الموظفين والأقسام وبيانات الأفراد." }, url: "https://github.com/Su03l/Laravel-projects/tree/main/HRSystem", icon: "fa-users-cog" },
  { id: "03", name: "UniversitySystem", desc: { en: "Academic system managing students, courses, enrollment, and course registration.", ar: "نظام أكاديمي لإدارة الطلاب والمقررات والتسجيل الأكاديمي." }, url: "https://github.com/Su03l/Laravel-projects/tree/main/UniversitySystem", icon: "fa-graduation-cap" },
  { id: "04", name: "Mini_Store_API", desc: { en: "E-commerce platform with product management, order processing, and automatic inventory tracking.", ar: "منصة تجارة إلكترونية مع إدارة المنتجات ومعالجة الطلبات وتتبع المخزون." }, url: "https://github.com/Su03l/Laravel-projects/tree/main/Mini_Store_API", icon: "fa-shopping-cart" },
  { id: "05", name: "Car_Rental_API", desc: { en: "Vehicle rental management with fleet tracking, customer management, and automated billing.", ar: "إدارة تأجير السيارات مع تتبع الأسطول وإدارة العملاء والفوترة التلقائية." }, url: "https://github.com/Su03l/Laravel-projects/tree/main/Car_Rental_API", icon: "fa-car" },
  { id: "06", name: "Pixel-Positions", desc: { en: "Full-featured job board connecting employers with job seekers through modern UI.", ar: "لوحة وظائف كاملة الميزات تربط أصحاب العمل بالباحثين عن عمل." }, url: "https://github.com/Su03l/Laravel-projects/tree/main/pixel-positions", icon: "fa-briefcase" },
  { id: "07", name: "Todo-App", desc: { en: "Task management system with user authentication using Laravel Sanctum and profile management.", ar: "نظام إدارة مهام مع مصادقة المستخدم باستخدام Laravel Sanctum." }, url: "https://github.com/Su03l/Laravel-projects/tree/main/todo-app", icon: "fa-tasks" },
  { id: "08", name: "Project Manager API", desc: { en: "Project management with polymorphic notes/files, file uploads with auto-cleanup.", ar: "إدارة المشاريع مع ملاحظات وملفات متعددة الأشكال ورفع الملفات." }, url: "https://github.com/Su03l/Laravel-projects/tree/main/Project_Manager", icon: "fa-project-diagram" },
  { id: "09", name: "Real Estate API", desc: { en: "Property management system with advanced search engine using Query Scopes.", ar: "نظام إدارة العقارات مع محرك بحث متقدم باستخدام Query Scopes." }, url: "https://github.com/Su03l/Laravel-projects/tree/main/RealEstate-API", icon: "fa-building" },
  { id: "10", name: "HR_Reports_API", desc: { en: "Specialized API system for managing employee records and exporting Excel/CSV via streaming.", ar: "نظام متخصص لإدارة سجلات الموظفين وتصدير ال تقارير بصيغة Excel/CSV." }, url: "https://github.com/Su03l/Laravel-projects/tree/main/HR_Reports_API", icon: "fa-chart-line" },
  { id: "11", name: "Secure Notes API", desc: { en: "Secure note-taking system with Laravel Sanctum authentication and full data privacy.", ar: "نظام تدوين ملاحظات آمن مع خصوصية كاملة للبيانات ومصادقة Sanctum." }, url: "https://github.com/Su03l/Laravel-projects/tree/main/Secure_Notes_API", icon: "fa-lock" },
  { id: "12", name: "Task Manager with Roles", desc: { en: "Advanced API simulating enterprise applications, focusing on RBAC and Laravel Policies.", ar: "نظام إدارة مهام متقدم مع توزيع الأدوار Admin/User وصلاحيات RBAC." }, url: "https://github.com/Su03l/Laravel-projects/tree/main/Task_Manager_with_Roles", icon: "fa-user-shield" },
  { id: "13", name: "Advanced E-Commerce API", desc: { en: "E-commerce backend focusing on Data Integrity and solving race condition problems.", ar: "باك اند متجر إلكتروني يركز على سلامة البيانات وحل مشكلات السباق." }, url: "https://github.com/Su03l/Laravel-projects/tree/main/ECommerce-API", icon: "fa-shopping-bag" },
  { id: "14", name: "Smart University Registration", desc: { en: "Simulating complex university registration processes under high concurrency.", ar: "محاكاة عمليات تسجيل جامعية معقدة مع ضمان سلامة البيانات." }, url: "https://github.com/Su03l/Laravel-projects/tree/main/University-System_ad", icon: "fa-university" },
  { id: "15", name: "Smart Support Ticket API", desc: { en: "Technical support ticket management system simulating an Enterprise Environment.", ar: "نظام إدارة تذاكر الدعم الفني يحاكي بيئات الشركات الكبيرة." }, url: "https://github.com/Su03l/Laravel-projects/tree/main/Support-Ticket-System", icon: "fa-headset" }
];

export const SERVICES: Service[] = [
  {
    title: { en: "Front-end Development", ar: "تطوير الواجهات الأمامية" },
    description: {
      en: "Building responsive and interactive user interfaces using HTML, CSS, JavaScript, and React. Creating seamless user experiences with modern front-end technologies.",
      ar: "بناء واجهات مستخدم مستجيبة وتفاعلية باستخدام HTML و CSS و JavaScript و React. خلق تجارب مستخدم سلسة بأحدث تقنيات الواجهات الأمامية."
    },
    features: {
      en: ["Responsive Design", "Cross-Browser Compatibility", "Performance Tuning", "Accessibility"],
      ar: ["تصميم مستجيب", "التوافق مع المتصفحات", "تحسين الأداء", "سهولة الوصول"]
    },
    icon: "fa-code"
  },
  {
    title: { en: "Backend Development", ar: "تطوير الواجهات الخلفية" },
    description: {
      en: "Building robust and scalable server-side applications using Node.js and Express. Designing and developing RESTful APIs and managing databases with PostgreSQL for modern web applications.",
      ar: "بناء تطبيقات خادم قوية وقابلة للتوسع باستخدام Node.js و Express. تصميم وتطوير واجهات برمجة التطبيقات (APIs) وإدارة قواعد البيانات."
    },
    features: {
      en: ["API Development", "Database Design", "Authentication & Authorization", "Cloud Integration"],
      ar: ["تطوير APIs", "تصميم قواعد البيانات", "نظام المصادقة والصلاحيات", "التكامل السحابي"]
    },
    icon: "fa-server"
  },
  {
    title: { en: "Software Engineering", ar: "هندسة البرمجيات" },
    description: {
      en: "Applying best practices to design, develop, test, and maintain reliable software systems. Emphasizing code quality, scalability, and maintainability throughout the development lifecycle.",
      ar: "تطبيق أفضل الممارسات لتصميم وتطوير واختبار وصيانة الأنظمة البرمجية الموثوقة. التركيز على جودة الكود وقابلية التوسع."
    },
    features: {
      en: ["Requirements Analysis", "Software Architecture", "Testing & QA", "Version Control"],
      ar: ["تحليل المتطلبات", "هندسة البرمجيات", "الاختبار وضمان الجودة", "إدارة الإصدارات"]
    },
    icon: "fa-cogs"
  },
  {
    title: { en: "UI/UX Design", ar: "تصميم تجربة المستخدم" },
    description: {
      en: "User-centered design solutions that combine aesthetics with functionality. From wireframes to high-fidelity prototypes.",
      ar: "حلول تصميم تركز على المستخدم تجمع بين الجمال والوظيفة. من المخططات الأولية إلى النماذج الأولية عالية الجودة."
    },
    features: {
      en: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      ar: ["أبحاث المستخدم", "تخطيط الواجهات", "بناء النماذج الأولية", "أنظمة التصميم"]
    },
    icon: "fa-paint-brush"
  }
];
