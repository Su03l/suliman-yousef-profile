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
        description: {
            en: "An intelligent app to help users manage daily habits and organize time via reminders and voice interaction. Change your life by gradually adding new healthy habits and tasks.",
            ar: "تطبيق ذكي لمساعدة المستخدمين على إدارة العادات اليومية وتنظيم الوقت عبر التذكيرات والتفاعل الصوتي. غير حياتك بإضافة عادات ومهام صحية جديدة تدريجياً."
        },
        category: "fullstack",
        tech: ["Flutter", "Dart", "Python", "FastAPI", "SQL"],
        image: "/img/HomePage.png",
        githubUrl: "https://github.com/Su03l/smartLiveOrganizer"
    },
    {
        id: "p24",
        title: { en: "Personal Profile", ar: "الملف الشخصي" },
        description: {
            en: "This website is created to showcase my personal and professional projects, skills, and experience. It's a central hub for anyone interested in learning more about my work.",
            ar: "تم إنشاء هذا الموقع لعرض مشاريعي الشخصية والمهنية ومهاراتي وخبراتي. إنه مركز لكل من يهتم بمعرفة المزيد عن عملي."
        },
        category: "frontend",
        tech: ["HTML", "CSS", "Javascript"],
        image: "/img/project2.png",
        liveUrl: "https://suliamanyousef.vercel.app/",
        githubUrl: "https://github.com/Su03l/FinalProfile"
    },
    {
        id: "p3",
        title: { en: "OS Profile", ar: "نظام التشغيل الشخصي" },
        description: {
            en: "This website is created to showcase my personal and professional projects, skills, and experience. It's a central hub for anyone interested in learning more about my work.",
            ar: "تم إنشاء هذا الموقع لعرض مشاريعي الشخصية والمهنية ومهاراتي وخبراتي. إنه مركز لكل من يهتم بمعرفة المزيد عن عملي."
        },
        category: "frontend",
        tech: ["React.js", "Tailwind", "TypeScript", "Vite", "Framer Motion", "shadcn-ui"],
        image: "/img/suliman-os.png",
        liveUrl: "https://suliman-os.vercel.app/",
        githubUrl: "https://github.com/Su03l/suliman-os-profile"
    },
    {
        id: "p19",
        title: { en: "3Algorithims", ar: "3 خوارزميات" },
        description: {
            en: "A simple website with 3 encryption tools: Morse Code, ROT 13 Cipher, and Atbash Cipher for educational purposes.",
            ar: "موقع بسيط يحتوي على 3 أدوات تشفير: كود مورس، رووت 13، وأتباش لأغراض تعليمية."
        },
        category: "frontend",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "/img/Project2-1.png",
        liveUrl: "https://su03l.github.io/MorseRot13Atbash/",
        githubUrl: "https://github.com/Su03l/MorseRot13Atbash"
    },
    {
        id: "p15",
        title: { en: "TaskHub", ar: "تاسك هب" },
        description: {
            en: "TaskHub is a digital platform that helps undergraduate teams manage their graduation projects through task management, progress tracking, and team collaboration tools.",
            ar: "تاسك هب هي منصة رقمية تساعد فرق التخرج الجامعية على إدارة مشاريعهم من خلال أدوات إدارة المهام وتتبع التقدم والتعاون."
        },
        category: "frontend",
        tech: ["HTML", "CSS", "Javascript"],
        image: "/img/Project4.png",
        liveUrl: "https://su03l.github.io/TaskHub/",
        githubUrl: "https://github.com/Su03l/TaskHub"
    },
    {
        id: "p21",
        title: { en: "TourismBusiness", ar: "أعمال سياحية" },
        description: {
            en: "This website introduces our hotel, showcasing rooms, services, and facilities. Guests can explore amenities, view photos, and book online with ease.",
            ar: "يعرف هذا الموقع بفندقنا، ويعرض الغرف والخدمات والمرافق. يمكن للضيوف استكشاف الخدمات وعرض الصور والحجز عبر الإنترنت بسهولة."
        },
        category: "frontend",
        tech: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
        image: "/img/Project5.png",
        liveUrl: "https://rightarm.vercel.app/",
        githubUrl: "https://github.com/Su03l/TourismBusiness"
    },
    {
        id: "p9",
        title: { en: "ProjexHub", ar: "بروجيكس هب" },
        description: {
            en: "A website dedicated to showcasing graduation projects with interaction between students and supervisors. Platform for sharing and discovering academic projects.",
            ar: "موقع مخصص لعرض مشاريع التخرج مع التفاعل بين الطلاب والمشرفين. منصة لمشاركة واكتشاف المشاريع الأكاديمية."
        },
        category: "frontend",
        tech: ["HTML", "Tailwind CSS", "React", "TypeScript", "Lucide React"],
        image: "/img/projexhub.png",
        liveUrl: "https://projexhub.vercel.app/",
        githubUrl: "https://github.com/Su03l/ProjexHub-Platform"
    },
    {
        id: "p20",
        title: { en: "LinkTree", ar: "لينك تري" },
        description: {
            en: "This website lets you create a personalized page with multiple links to your social profiles, projects, and other important content—all in one place for easy sharing.",
            ar: "يتيح لك هذا الموقع إنشاء صفحة مخصصة تحتوي على روابط متعددة لملفاتك الاجتماعية ومشاريعك ومحتوياتك المهمة الأخرى في مكان واحد لسهولة المشاركة."
        },
        category: "frontend",
        tech: ["HTML", "CSS", "Javascript"],
        image: "/img/Project7.png",
        liveUrl: "https://suliman-yousef-link-tree.vercel.app/",
        githubUrl: "https://github.com/Su03l/SulimanYousef-LinkTree"
    },
    {
        id: "p11",
        title: { en: "Dlni Platform", ar: "منصة دلني" },
        description: {
            en: "The platform aims to assist and guide pilgrims and Umrah performers to facilitate their internal routes to the Prophet's Mosque with maps and instant assistance services.",
            ar: "تهدف المنصة إلى مساعدة وتوجيه الحجاج والمعتمرين لتسهيل طرقهم الداخلية إلى المسجد النبوي من خلال الخرائط وخدمات المساعدة الفورية."
        },
        category: "frontend",
        tech: ["HTML", "CSS", "Javascript", "React", "TypeScript"],
        image: "/img/Project8.png",
        githubUrl: "https://github.com/Su03l/dlni"
    },
    {
        id: "p14",
        title: { en: "Law AI Chat", ar: "محامي الذكاء الاصطناعي" },
        description: {
            en: "This website provides AI-driven legal consultations and lets staff generate and print case reports and memos efficiently.",
            ar: "يوفر هذا الموقع استشارات قانونية مدعومة بالذكاء الاصطناعي ويتيح للموظفين إنشاء وطباعة تقارير ومذكرات القضايا بكفاءة."
        },
        category: "frontend",
        tech: ["HTML", "CSS", "Javascript"],
        image: "/img/Project9.png",
        liveUrl: "https://su03l.github.io/wayer1/",
        githubUrl: "https://github.com/Su03l/wayer1"
    },
    {
        id: "p17",
        title: { en: "Genesis G90 Showcase", ar: "عرض جينيسيس G90" },
        description: {
            en: "Genesis G90 Showcase highlights the 2025 Genesis G90, featuring specs, photos, and videos. Users can contact the team and enjoy smooth navigation.",
            ar: "يسلط عرض جينيسيس G90 الضوء على طراز 2025، ويضم المواصفات والصور ومقاطع الفيديو. يمكن للمستخدمين التواصل مع الفريق والاستمتاع بالتنقل السلس."
        },
        category: "frontend",
        tech: ["HTML", "CSS", "Javascript"],
        image: "/img/project10.png",
        liveUrl: "https://su03l.github.io/Genesis-G90-2025/",
        githubUrl: "https://github.com/Su03l/Genesis-G90-2025"
    },
    {
        id: "p18",
        title: { en: "Al-Madina Al-Monwra", ar: "المدينة المنورة" },
        description: {
            en: "Medina, its landmarks, historical monuments, life in Medina, and some details about Medina",
            ar: "المدينة المنورة، معالمها، آثارها التاريخية، الحياة فيها وبعض التفاصيل المهمة عنها."
        },
        category: "frontend",
        tech: ["HTML", "CSS", "Javascript"],
        image: "/img/Project12.png",
        liveUrl: "https://su03l.github.io/about-madina/",
        githubUrl: "https://github.com/Su03l/about-madina"
    },
    {
        id: "p13",
        title: { en: "SignIn - SignUp Form", ar: "نموذج تسجيل الدخول" },
        description: {
            en: "A web app for user sign-up and sign-in with backend authentication and secure data management.",
            ar: "تطبيق ويب لتسجيل المستخدمين وتسجيل الدخول مع مصادقة خلفية وإدارة آمنة للبيانات."
        },
        category: "fullstack",
        tech: ["HTML", "CSS", "Javascript", "Node js", "Express js", "PostgreSQL"],
        image: "/img/signinform.png",
        githubUrl: "https://github.com/Su03l/signin-form-backend"
    },
    {
        id: "p22",
        title: { en: "To-Do-List", ar: "قائمة المهام" },
        description: {
            en: "A To-Do List website is a simple site that helps you organize daily tasks.",
            ar: "موقع قائمة مهام بسيط يساعدك على تنظيم مهامك اليومية."
        },
        category: "frontend",
        tech: ["HTML", "CSS", "Javascript", "React js", "MUI"],
        image: "/img/To-Do-List-react.png",
        githubUrl: "https://github.com/Su03l/To-Do-App-with-React"
    },
    {
        id: "p16",
        title: { en: "To-Do-App With Backend", ar: "تطبيق مهام مع باك آند" },
        description: {
            en: "This site is a task management platform where you can add, view, delete, and edit tasks. It is also connected to a database.",
            ar: "هذا الموقع عبارة عن منصة لإدارة المهام حيث يمكنك إضافة وعرض وحذف وتعديل المهام، وهو متصل بقاعدة بيانات."
        },
        category: "fullstack",
        tech: ["HTML", "CSS", "Javascript", "Node js", "Express js", "PostgreSQL"],
        image: "/img/Project11.png",
        githubUrl: "https://github.com/Su03l/To-Do-APP-Backend"
    },
    {
        id: "p8",
        title: { en: "Generate Cards", ar: "توليد البطاقات" },
        description: {
            en: "A web application to create, customize, and share digital business cards.",
            ar: "تطبيق ويب لإنشاء وتخصيص ومشاركة بطاقات الأعمال الرقمية."
        },
        category: "frontend",
        tech: ["Next js", "React js", "Tailwind CSS", "Typescript", "Shadcn UI"],
        image: "/img/gen-crad.png",
        liveUrl: "https://cards-generate.vercel.app/",
        githubUrl: "https://github.com/Su03l/Cards-Generate"
    },
    {
        id: "p12",
        title: { en: "Expense Management", ar: "إدارة المصاريف" },
        description: {
            en: "An app to manage daily expenses and track savings easily through an organized interface with a sidebar for navigation.",
            ar: "تطبيق لإدارة المصاريف اليومية وتتبع المدخرات بسهولة من خلال واجهة منظمة مع شريط جانبي للتنقل."
        },
        category: "frontend",
        tech: ["React Js", "CSS", "Javascript", "MUi UI", "React Router"],
        image: "/img/Expense-management.png",
        liveUrl: "https://expense-management-ruby.vercel.app/",
        githubUrl: "https://github.com/Su03l/Expense-management"
    },
    {
        id: "p10",
        title: { en: "Github api user fetch", ar: "جلب مستخدمي جيت هب" },
        description: {
            en: "A simple tool to view any GitHub user's profile — including their avatar, name, public repos count, and a detailed table of repositories.",
            ar: "أداة بسيطة لعرض الملف الشخصي لأي مستخدم جيت هب - بما في ذلك الصورة الشخصية والاسم وعدد المستودعات العامة وجدول مفصل للمستودعات."
        },
        category: "frontend",
        tech: ["React Js", "CSS", "Javascript", "MUi UI", "React Router", "Axios"],
        image: "/img/github-fetch.png",
        liveUrl: "https://github-app-fetch.vercel.app/",
        githubUrl: "https://github.com/Su03l/github-app-fetch"
    },
    {
        id: "p7",
        title: { en: "Educational Platform", ar: "المنصة التعليمية" },
        description: {
            en: "An educational platform that brings together the best programming tutorials from YouTube in one place to simplify the learning journey for developers.",
            ar: "منصة تعليمية تجمع أفضل دروس البرمجة من يوتيوب في مكان واحد لتبسيط رحلة التعلم للمطورين."
        },
        category: "frontend",
        tech: ["React Js", "CSS", "Typescript", "MUi UI", "React Router", "Vite"],
        image: "/img/edu-platform.png",
        liveUrl: "https://edu-platfarom.netlify.app/",
        githubUrl: "https://github.com/Su03l/education-platform"
    },
    {
        id: "p6",
        title: { en: "CineMax Platform", ar: "منصة سينما ماكس" },
        description: {
            en: "CineMax is a modern cinema website for browsing movies and booking tickets online.",
            ar: "سينما ماكس هو موقع سينما حديث لتصفح الأفلام وحجز التذاكر عبر الإنترنت."
        },
        category: "frontend",
        tech: ["Next JS", "React Js", "Radix UI", "Tailwind CSS", "Lucide React"],
        image: "/img/cineMax.png",
        liveUrl: "https://cine-max.vercel.app/",
        githubUrl: "https://github.com/Su03l/CineMax"
    },
    {
        id: "p23",
        title: { en: "Todo App With Backend", ar: "تطبيق مهام مع باك آند" },
        description: {
            en: "Full-stack application designed to help users manage their daily tasks efficiently.",
            ar: "تطبيق متكامل مصمم لمساعدة المستخدمين على إدارة مهامهم اليومية بكفاءة."
        },
        category: "fullstack",
        tech: ["HTML", "React.js", "Typescript", "TailwindCSS", "PHP", "Laravel", "PostgreSQL"],
        image: "/img/todo-app-backend.png",
        githubUrl: "https://github.com/Su03l/Todo-app-backend"
    },
    {
        id: "p2",
        title: { en: "Absher AI Saad", ar: "أبشر - سعد الذكي" },
        description: {
            en: "Absher AutoFlow is an AI-powered platform that simplifies access to Saudi government services through a smart, user-friendly interface.",
            ar: "أبشر أوتو فلو هي منصة مدعومة بالذكاء الاصطناعي تسهل الوصول للخدمات الحكومية السعودية من خلال واجهة ذكية وسهلة الاستخدام."
        },
        category: "fullstack",
        tech: ["HTML", "React.js", "Typescript", "TailwindCSS", "Python", "FastAPI", "PostgreSQL", "HaggingFace"],
        image: "/img/absher.png",
        githubUrl: "https://github.com/Su03l/final_absher"
    },
    {
        id: "p5",
        title: { en: "Developers-Station", ar: "محطة المطورين" },
        description: {
            en: "Developers Station is a social tech platform where developers share knowledge, write technical blogs, and connect in a focused professional community.",
            ar: "محطة المطورين هي منصة اجتماعية تقنية حيث يشارك المطورون المعرفة ويكتبون مدونات تقنية ويتواصلون في مجتمع مهني متخصص."
        },
        category: "fullstack",
        tech: ["HTML", "React.js", "Typescript", "TailwindCSS", "PHP", "Laravel", "PostgreSQL"],
        image: "/img/developer_sta.png",
        githubUrl: "https://github.com/Su03l/Developers-Station"
    },
    {
        id: "p4",
        title: { en: "RSL", ar: "رسل" },
        description: {
            en: "A secure, modern messaging app for Arab users with full Arabic support and a sleek interface.",
            ar: "تطبيق مراسلة آمن وحديث للمستخدمين العرب مع دعم كامل للغة العربية وواجهة أنيقة."
        },
        category: "fullstack",
        tech: ["HTML", "React.js", "Next.js", "Typescript", "TailwindCSS", "Supabase", "PostgreSQL"],
        image: "/img/rsl.png",
        liveUrl: "https://rsl-chat.vercel.app/",
        githubUrl: "https://github.com/Su03l/Developers-Station"
    },
    {
        id: "laravel-collection",
        title: { en: "Laravel Projects Collection", ar: "مجموعة مشاريع لارافيل" },
        description: {
            en: "A comprehensive collection of RESTful APIs built with Laravel for various business applications",
            ar: "مجموعة شاملة من واجهات البرمجة (APIs) المبنية باستخدام لارافيل لمختلف تطبيقات الأعمال."
        },
        category: "backend",
        tech: ["PHP", "Laravel", "SQLite", "PostgreSQL", "REST API", "Sanctum", "Scramble"],
        image: "/img/card.png",
        githubUrl: "https://github.com/Su03l/Laravel-projects",
        isLaravelCollection: true
    }
];

export const LARAVEL_COLLECTION_ITEMS = [
    {
        id: "01",
        name: "PhonebookAPI",
        desc: {
            en: "A simple RESTful API for managing phone contacts, built with Laravel.\n\nFeatures:\n• CRUD Operations: Create, Read, Update, and Delete contacts.\n• Search: Find contacts by phone number.\n• Validation: Robust input validation (unique phone numbers, required fields).\n• API Resources: Utilizing Laravel API Resources for consistent JSON output.",
            ar: "واجهة برمجة تطبيقات RESTful بسيطة لإدارة جهات الاتصال الهاتفية، مبنية باستخدام Laravel.\n\nالمميزات:\n• عمليات CRUD: إنشاء، قراء، تحديث، وحذف جهات الاتصال.\n• البحث: البحث عن جهات الاتصال برقم الهاتف.\n• التحقق من الصحة: تحقق قوي من صحة البيانات المدخلة (مثل أرقام هواتف فريدة، حقول مطلوبة).\n• موارد API: استخدام موارد Laravel API للحصول على استجابات JSON متسقة."
        },
        url: "https://github.com/Su03l/Laravel-projects/tree/main/PhonebookAPI",
        icon: "fa-address-book"
    },
    {
        id: "02",
        name: "HRSystem",
        desc: {
            en: "A simple RESTful API for managing HR operations including employees and departments, built with Laravel.\n\nFeatures:\n• CRUD Operations: Create, Read, Update, and Delete employees and departments.\n• Department Management: Manage organization departments with full CRUD capabilities.\n• Employee Management: Handle employee records and link them to respective departments.\n• Validation: Robust input validation (required fields, data integrity).\n• API Resources: Utilizing Laravel API Resources for consistent JSON responses.",
            ar: "واجهة برمجة تطبيقات RESTful بسيطة لإدارة عمليات الموارد البشرية بما في ذلك الموظفين والأقسام، مبنية باستخدام Laravel.\n\nالمميزات:\n• عمليات CRUD: إنشاء، قراء، تحديث، وحذف الموظفين والأقسام.\n• إدارة الأقسام: إدارة أقسام المنظمة بإمكانيات CRUD كاملة.\n• إدارة الموظفين: إدارة سجلات الموظفين مع ربطهم بالأقسام.\n• التحقق من الصحة: تحقق قوي من صحة البيانات المدخلة (مثل الحقول المطلوبة، سلامة البيانات).\n• موارد API: استخدام موارد Laravel API للحصول على استجابات JSON متسقة."
        },
        url: "https://github.com/Su03l/Laravel-projects/tree/main/HRSystem",
        icon: "fa-users-cog"
    },
    {
        id: "03",
        name: "UniversitySystem",
        desc: {
            en: "A simple RESTful API for managing university operations including students and courses, built with Laravel.\n\nFeatures:\n• CRUD Operations: Create, Read, Update, and Delete students and courses.\n• Course Management: Manage academic courses with full CRUD capabilities.\n• Student Management: Handle student records and course enrollments.\n• Course Registration: Register students for courses and manage enrollments.\n• Validation: Robust input validation (required fields, data integrity).\n• API Resources: Utilizing Laravel API Resources for consistent JSON responses.",
            ar: "واجهة برمجة تطبيقات RESTful بسيطة لإدارة عمليات الجامعة بما في ذلك الطلاب والمواد الدراسية، مبنية باستخدام Laravel.\n\nالمميزات:\n• عمليات CRUD: إنشاء، قراء، تحديث، وحذف الطلاب والمواد الدراسية.\n• إدارة المواد: إدارة المواد الدراسية بإمكانيات CRUD كاملة.\n• إدارة الطلاب: إدارة سجلات الطلاب مع التسجيل في المواد.\n• تسجيل المواد: تسجيل الطلاب في المواد وإدارة الالتحاقات.\n• التحقق من الصحة: تحقق قوي من صحة البيانات المدخلة (مثل الحقول المطلوبة، سلامة البيانات).\n• موارد API: استخدام موارد Laravel API للحصول على استجابات JSON متسقة."
        },
        url: "https://github.com/Su03l/Laravel-projects/tree/main/UniversitySystem",
        icon: "fa-graduation-cap"
    },
    {
        id: "04",
        name: "Mini_Store_API",
        desc: {
            en: "A RESTful API for a simple e-commerce system managing products and orders, built with Laravel. Features advanced many-to-many relationships and automatic inventory management.\n\nFeatures:\n• Product Management: Full CRUD operations with stock tracking.\n• Order Processing: Handle orders with multiple products and quantities.\n• Inventory Management: Automatic stock deduction on order, restoration on cancellation, and stock-out prevention.\n• Automatic Logic: Unique order number generation.\n• Validation: Strict input and availability checks.\n• Database Transactions: Ensuring data integrity during critical operations.",
            ar: "واجهة برمجة تطبيقات RESTful لنظام تجارة إلكترونية بسيط يدير المنتجات والطلبات، مبنية باستخدام Laravel. تتميز بعلاقات متقدمة وإدارة تلقائية للمخزون.\n\nالمميزات:\n• إدارة المنتجات: عمليات CRUD كاملة مع تتبع المخزون.\n• معالجة الطلبات: إنشاء طلبات بمنتجات وكميات متعددة.\n• إدارة المخزون: خصم واستعادة تلقائية للمخزون، ومنع الطلب عند النقص.\n• منطق تلقائي: توليد تلقائي لأرقام طلبات فريدة.\n• التحقق من الصحة: تحقق صارم من المدخلات وتوفر المخزون.\n• معاملات قاعدة البيانات: ضمان سلامة البيانات أثناء العمليات الحساسة."
        },
        url: "https://github.com/Su03l/Laravel-projects/tree/main/Mini_Store_API",
        icon: "fa-shopping-cart"
    },
    {
        id: "05",
        name: "Car_Rental_API",
        desc: {
            en: "A robust RESTful API for managing car rental businesses, built with Laravel. Features automatic cost calculation, strict vehicle status management, and transactional data integrity.\n\nKey Features:\n• Fleet Management: Full CRUD operations for cars with status tracking (Available, Rented, Maintenance).\n• Customer Management: Manage customer profiles with unique ID verification.\n• Rental Logic:\n  - Automatic Billing: Calculates total cost based on duration and daily rate.\n  - Status Management: Automatic switching to 'Rented' on booking and 'Available' on return.\n  - Conflict Prevention: Prevents booking of rented or unavailable vehicles.\n• Database Transactions: Ensures consistency across all operations.",
            ar: "واجهة برمجة تطبيقات RESTful قوية لإدارة أعمال تأجير السيارات، مبنية باستخدام Laravel. تتميز بحساب تلقائي للتكاليف، وإدارة صارمة لحالة المركبات.\n\nالمميزات الرئيسية:\n• إدارة الأسطول: عمليات CRUD كاملة للسيارات مع تتبع الحالة (متاح، مؤجر، صيانة).\n• إدارة العملاء: إدارة ملفات العملاء مع فحص الهوية الفريدة.\n• منطق التأجير:\n  - الفوترة التلقائية: حساب تلقائي للتكلفة بناءً على المدة والسعر اليومي.\n  - إدارة الحالة: تبديل تلقائي لحالة السيارة عند الحجز والإرجاع.\n  - منع التعارضات: منع حجز المركبات المؤجرة حالياً أو غير المتاحة.\n• معاملات قاعدة البيانات: ضمان اتساق البيانات عبر جميع العمليات."
        },
        url: "https://github.com/Su03l/Laravel-projects/tree/main/Car_Rental_API",
        icon: "fa-car"
    },
    {
        id: "06",
        name: "Pixel-Positions",
        desc: {
            en: "Full-featured job board connecting employers with job seekers through modern UI",
            ar: "لوحة وظائف كاملة الميزات تربط أصحاب العمل بالباحثين عن عمل."
        },
        url: "https://github.com/Su03l/Laravel-projects/tree/main/pixel-positions",
        icon: "fa-briefcase"
    },
    {
        id: "07",
        name: "Todo-App",
        desc: {
            en: "The Backend API for a Todo List application, built with Laravel. It provides a RESTful interface for user authentication and task management. The API utilizes Laravel Sanctum for cookie-based authentication specifically designed for Single Page Applications (SPA).",
            ar: "هذا هو الواجهة الخلفية (Backend API) لتطبيق قائمة المهام، مبني باستخدام Laravel. يوفر واجهة RESTful لمصادقة المستخدمين وإدارة المهام. يستخدم API نظام Laravel Sanctum للمصادقة المستندة إلى الكوكيز للتطبيقات أحادية الصفحة (SPA)."
        },
        url: "https://github.com/Su03l/Laravel-projects/tree/main/todo-app",
        icon: "fa-tasks"
    },
    {
        id: "08",
        name: "Project Manager API",
        desc: {
            en: "A flexible project management system built with Laravel. This project showcases advanced concepts like Polymorphic Relationships to dynamically link notes and files to multiple models (projects and tasks), along with professional file upload and storage management.\n\nKey Features:\n• Project & Task Management: Create projects and assign multiple tasks with progress tracking.\n• Smart Notes (Polymorphic): Add notes to either projects or tasks using a single unified table.\n• Attachments (File Uploads): Upload images/PDFs with full URL retrieval and clean physical file deletion on record removal.\n• Unified Endpoints: Intelligent controller handling requests based on entity type.",
            ar: "نظام مرن لإدارة المشاريع مبني باستخدام Laravel. يستعرض هذا المشروع مفاهيم متقدمة مثل العلاقات متعددة الأشكال (Polymorphic Relationships) لربط الملاحظات والملفات بأكثر من مودل ديناميكياً.\n\nالمميزات الرئيسية:\n• إدارة المشاريع والمهام: إنشاء مشاريع وإسناد مهام مع تتبع الإنجاز.\n• ملاحظات ذكية (Polymorphic): إضافة ملاحظات للمشاريع أو المهام باستخدام جدول موحد.\n• المرفقات (رفع الملفات): رفع الصور وملفات PDF مع استرجاع الرابط الكامل والحذف التلقائي للملفات من السيرفر.\n• نقاط وصول موحدة: كنترولر ذكي يتعامل مع الطلبات بناءً على النوع."
        },
        url: "https://github.com/Su03l/Laravel-projects/tree/main/Project_Manager",
        icon: "fa-project-diagram"
    },
    {
        id: "09",
        name: "Real Estate API",
        desc: {
            en: "Property management system with advanced search engine using Query Scopes and dynamic filtering by city, type, price range, and fuzzy area search",
            ar: "نظام إدارة العقارات مع محرك بحث متقدم باستخدام Query Scopes وتصفية ديناميكية."
        },
        url: "https://github.com/Su03l/Laravel-projects/tree/main/RealEstate-API",
        icon: "fa-building"
    },
    {
        id: "10",
        name: "HR_Reports_API",
        desc: {
            en: "Specialized API system for managing employee records with focus on report generation and data export. Enables managers to filter employees and download results as Excel/CSV using streaming technology",
            ar: "نظام متخصص لإدارة سجلات الموظفين مع التركيز على توليد التقارير وتصدير البيانات."
        },
        url: "https://github.com/Su03l/Laravel-projects/tree/main/HR_Reports_API",
        icon: "fa-chart-line"
    },
    {
        id: "11",
        name: "Secure Notes API",
        desc: {
            en: "Secure note-taking system with Laravel Sanctum authentication and full data privacy. Features user authentication, ownership-based access control, and secure search ensuring each user can only access their own notes",
            ar: "نظام تدوين ملاحظات آمن مع خصوصية كاملة للبيانات ومصادقة Sanctum."
        },
        url: "https://github.com/Su03l/Laravel-projects/tree/main/Secure_Notes_API",
        icon: "fa-lock"
    },
    {
        id: "12",
        name: "Task Manager with Roles",
        desc: {
            en: "Advanced API system simulating enterprise applications, focusing on Authorization management and role distribution between Admin and User. Features Role-Based Access Control (RBAC), Laravel Policies for security, intelligent visibility scope, and complete permissions matrix",
            ar: "نظام إدارة مهام متقدم يحاكي تطبيقات الشركات الكبيرة مع التركيز على إدارة الصلاحيات."
        },
        url: "https://github.com/Su03l/Laravel-projects/tree/main/Task_Manager_with_Roles",
        icon: "fa-user-shield"
    },
    {
        id: "13",
        name: "Advanced E-Commerce API",
        desc: {
            en: "A comprehensive e-commerce backend system focusing on Data Integrity and file management. Solves race condition problems ensuring no out-of-stock items are sold using advanced database techniques",
            ar: "باك اند متجر إلكتروني شامل يركز على سلامة البيانات وإدارة الملفات وحل مشكلات التزامن."
        },
        url: "https://github.com/Su03l/Laravel-projects/tree/main/ECommerce-API",
        icon: "fa-shopping-bag"
    },
    {
        id: "14",
        name: "Smart University Registration API",
        desc: {
            en: "Advanced backend system simulating complex university registration processes. Focuses on maintaining data integrity under high concurrency and enforcing strict academic rules, similar to global academic systems like Banner and SIS",
            ar: "نظام باك اند متقدم يحاكي عمليات التسجيل الجامعية المعقدة مع ضمان سلامة البيانات."
        },
        url: "https://github.com/Su03l/Laravel-projects/tree/main/University-System_ad",
        icon: "fa-university"
    },
    {
        id: "15",
        name: "Smart Support Ticket API",
        desc: {
            en: "Comprehensive technical support ticket management system built with Laravel. Simulates an Enterprise Environment with focus on data security, role-based access control, and advanced database relationships to minimize redundancy",
            ar: "نظام إدارة تذاكر دعم فني شامل مبني بـ Laravel يحاكي بيئات الشركات الكبيرة."
        },
        url: "https://github.com/Su03l/Laravel-projects/tree/main/Support-Ticket-System",
        icon: "fa-headset"
    }
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
