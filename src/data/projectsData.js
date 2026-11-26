import {
    FiEye,
    FiUser,
    FiBookOpen,
    FiMessageSquare,
    FiDatabase,
    FiImage,
    FiDollarSign,
    FiGlobe,
    FiShoppingBag,
    FiPackage
} from 'react-icons/fi';

/**
 * Shared project catalogue used by both Home (featured) and Projects pages.
 * Drop real screenshots into public/projects/ and set `image: '/projects/<filename>'`
 * to automatically replace the stylized code mockup.
 */
export const getProjectsData = (language) => {
    const isAr = language === 'ar';

    return [
        {
            id: 1,
            featured: true,
            title: isAr ? 'نظام الزناد برو – مشروع التخرج' : 'Al-Zinad Pro – Graduation Project',
            category: 'ai',
            image: '',
            description: isAr
                ? 'نظام مراقبة وأمان ذكي يعتمد على الرؤية الحاسوبية والذكاء الاصطناعي لكشف الهويات والتحليل المباشر في الوقت الحقيقي (تم استعراضه في اليوم التقني الثاني 2026).'
                : 'An intelligent surveillance and security system powered by computer vision and AI for real-time identity detection and analysis (showcased at the 2nd Tech Day 2026).',
            technologies: ['Python', 'YOLO', 'ArcFace', 'OpenCV'],
            github: null,
            demo: null,
            mockup: {
                gradient: '135deg, #0f172a 0%, #1e1b4b 55%, #312e81 100%',
                icon: FiEye,
                badge: 'AI Surveillance • Tech Day 2026',
                pattern: 'radar'
            }
        },
        {
            id: 2,
            featured: false,
            title: isAr ? 'نظام تحليل العمر والجنس' : 'Age & Gender Detection',
            category: 'ai',
            image: '',
            description: isAr
                ? 'نموذج ذكاء اصطناعي يتنبأ بالعمر والجنس عبر تحليل صور الوجوه بدقة عالية.'
                : 'An AI model that predicts age and gender through high-accuracy facial image analysis.',
            technologies: ['Python', 'Deep Learning', 'Google Colab', 'Gradio'],
            github: null,
            demo: null,
            mockup: {
                gradient: '135deg, #1e1b4b 0%, #4c1d95 100%',
                icon: FiUser,
                badge: '88.83% Acc • 21K+ Images',
                pattern: 'dots'
            }
        },
        {
            id: 3,
            featured: true,
            title: isAr ? 'نموذج فك تشفير خط السدهام (اللغات القديمة)' : 'Siddham Script OCR & Recognition',
            category: 'ai',
            image: '',
            description: isAr
                ? 'تطوير نموذج أولي للتعرف على رموز اللغات القديمة وخط السدهام وفك تشفيرها بدقة عالية باستخدام الرؤية الحاسوبية.'
                : 'A prototype model for recognizing and deciphering ancient Siddham language symbols using computer vision.',
            technologies: ['Python', 'YOLOv8', 'OpenCV'],
            github: null,
            demo: null,
            mockup: {
                gradient: '135deg, #172554 0%, #1e3a8a 60%, #4338ca 100%',
                icon: FiBookOpen,
                badge: '92.96% mAP50 • YOLOv8',
                pattern: 'grid'
            }
        },
        {
            id: 4,
            featured: false,
            title: isAr ? 'تحليل المشاعر وتصنيف النصوص' : 'Sentiment Analysis & Text Classification',
            category: 'ai',
            image: '',
            description: isAr
                ? 'نموذج لمعالجة اللغات الطبيعية (NLP) لتصنيف النصوص والتعليقات إلى إيجابية أو سلبية.'
                : 'An NLP model for classifying texts and comments as positive or negative.',
            technologies: ['Python', 'NLP', 'Machine Learning'],
            github: null,
            demo: null,
            mockup: {
                gradient: '135deg, #1e1b4b 0%, #3730a3 100%',
                icon: FiMessageSquare,
                badge: '100K+ Comments • NLP',
                pattern: 'dots'
            }
        },
        {
            id: 5,
            featured: false,
            title: isAr ? 'معالجة البيانات الضخمة (100K YouTube DataSet)' : '100K YouTube DataSet Processing',
            category: 'ai',
            image: '',
            description: isAr
                ? 'جمع وتنظيف ومعالجة مجموعة بيانات ضخمة تضم 100,000 تعليق من القنوات الإخبارية لتدريب نماذج الذكاء الاصطناعي.'
                : 'Collecting, cleaning, and processing a large dataset of 100,000 comments from news channels for training AI models.',
            technologies: ['Python', 'Data Processing', 'AI'],
            github: null,
            demo: null,
            mockup: {
                gradient: '135deg, #3b0764 0%, #581c87 100%',
                icon: FiDatabase,
                badge: '100K+ Comments • NLP',
                pattern: 'grid'
            }
        },
        {
            id: 6,
            featured: false,
            title: isAr ? 'استوديو معالجة الصور الرقمية' : 'Image Processing Studio',
            category: 'ai',
            image: '',
            description: isAr
                ? 'أداة برمجية متكاملة لتطبيق الفلاتر والمعالجات الرقمية المختلفة للصور.'
                : 'A comprehensive software tool for applying various digital filters and image processing operations.',
            technologies: ['Python', 'OpenCV'],
            github: null,
            demo: null,
            mockup: {
                gradient: '135deg, #1e293b 0%, #0f4c75 100%',
                icon: FiImage,
                badge: 'OpenCV • Python',
                pattern: 'dots'
            }
        },
        {
            id: 7,
            featured: true,
            title: isAr ? 'تطبيق السيد محواش' : 'Mr. Mahwash App',
            category: 'mobile',
            image: '',
            description: isAr
                ? 'تطبيق مالي مخصص للتجار لإدارة الديون والمبيعات، يعمل أوفلاين بالكامل مع خيارات أمان متقدمة وإصدار كشوفات PDF.'
                : 'A financial app designed for merchants to manage debts and sales, fully offline with advanced security options and PDF statement generation.',
            technologies: ['Flutter', 'Dart', 'Offline Storage', 'PDF Generation'],
            github: null,
            demo: null,
            mockup: {
                gradient: '135deg, #064e3b 0%, #047857 55%, #b45309 100%',
                icon: FiDollarSign,
                badge: 'Offline-First • Flutter',
                pattern: 'phone'
            }
        },
        {
            id: 8,
            featured: false,
            title: isAr ? 'منصة ربوع اليمن' : 'Throughout Yemen Platform',
            category: 'web',
            image: '',
            description: isAr
                ? 'دليل ومنصة خدمات زراعية متكاملة على مستوى اليمن.'
                : 'A comprehensive agricultural services directory and platform across Yemen.',
            technologies: ['Web Development'],
            github: null,
            demo: 'https://throughout-yemen.com',
            mockup: {
                gradient: '135deg, #0c4a6e 0%, #0284c7 100%',
                icon: FiGlobe,
                badge: 'Live Website',
                pattern: 'browser'
            }
        },
        {
            id: 9,
            featured: false,
            title: isAr ? 'موقع شركة آسيا للاستيراد الزراعي' : 'Asia Agricultural Imports',
            category: 'web',
            image: '',
            description: isAr
                ? 'موقع تعريفي وتجاري متكامل لشركة استيراد مستلزمات زراعية.'
                : 'A full-featured promotional and commercial website for an agricultural supplies import company.',
            technologies: ['Web Development'],
            github: null,
            demo: 'https://asia-agr.com',
            mockup: {
                gradient: '135deg, #064e3b 0%, #0d9488 100%',
                icon: FiShoppingBag,
                badge: 'Live Website',
                pattern: 'browser'
            }
        },
        {
            id: 10,
            featured: false,
            title: isAr ? 'موقع مصنع آرت بلاست' : 'Art Plast Factory',
            category: 'web',
            image: '',
            description: isAr
                ? 'موقع تعريفي وتجاري متكامل وكتالوج منتجات لمصنع للصناعات البلاستيكية.'
                : 'A full-featured promotional and commercial website with a product catalog for a plastics manufacturing factory.',
            technologies: ['Web Development'],
            github: null,
            demo: 'https://artplast-yemen.com',
            mockup: {
                gradient: '135deg, #1e3a8a 0%, #0369a1 100%',
                icon: FiPackage,
                badge: 'Live Website',
                pattern: 'browser'
            }
        }
    ];
};
