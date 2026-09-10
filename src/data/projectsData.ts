import { Project } from '../types';

export interface ProjectWithSlug extends Project {
  slug: string;
}

export const PROJECTS_DATA_AR: ProjectWithSlug[] = [
  {
    id: '1',
    slug: 'inventory-system',
    number: '01',
    title: 'نظام إدارة ومزامنة المخزون (Inventory Management)',
    category: 'FastAPI / Async',
    subtitle: 'Python 3.12 · FastAPI · PostgreSQL · Redis · Docker',
    description: 'نظام عالي الأداء لتتبع حركة المخزون وإدارة سلاسل الإمداد المؤسسية، مع مزامنة فورية لمستويات المخزون عبر المستودعات وتنبيهات إعادة الطلب التلقائية لمنع نفاذ البضاعة.',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'SQLAlchemy'],
    metrics: 'أكثر من 10k طلب/ثانية · استقرار تشغيلي 99.99%',
    githubUrl: 'https://github.com',
    liveUrl: 'https://api.inventory.example.com/docs',
    architecture: 'معمارية خدمات مصغرة غير متزامنة مبنية على الأحداث (Event-Driven) مع وسيط Redis Pub/Sub للمزامنة اللحظية.',
    problem: 'كانت تواجه مستودعات الشركات عجزاً متكرراً في المخزون وتأخيرات في عمليات الجرد عبر 12 مركز توزيع منفصل، مما أدى إلى أخطاء محاسبية في تسوية الفروقات وخسائر مبيعات دورية.',
    architectureSteps: [
      {
        title: 'بوابة الـ API غير المتزامنة (FastAPI + Uvicorn)',
        description: 'خادم ASGI غير محجوب يعالج آلاف طلبات تحديث المخزون المتزامنة في أجزاء من الثانية مع التحقق الصارم عبر Pydantic v2.',
        codeSnippet: '@app.post("/api/v1/stock/update")\nasync def update_stock(item: StockUpdateSchema, db: AsyncSession = Depends(get_db)):\n    return await InventoryService.process_movement(db, item)'
      },
      {
        title: 'وسيط الأحداث والرسائل الفورية (Redis Pub/Sub)',
        description: 'قناة بث فوري ترسل إشعارات نفاذ المخزون للعمال في الخلفية لتوليد أوامر شراء وتوريد تلقائية.'
      },
      {
        title: 'تجميع اتصالات قاعدة البيانات (Connection Pooling)',
        description: 'محرك SQLAlchemy Async مخصص لمنع استنزاف موارد PostgreSQL أثناء أوقات الذروة وأيام الجرد السنوي.'
      }
    ],
    databaseSchema: {
      description: 'مخطط علائقي معالج بمعيار التطبيع الثالث (3NF) مع فهارس مركبة على حقول SKU وتاريخ الحركة ورقم المستودع.',
      tables: [
        { name: 'warehouses (المستودعات)', columns: ['id (UUID, PK)', 'name (VARCHAR)', 'location (VARCHAR)', 'created_at (TIMESTAMP)'] },
        { name: 'products (المنتجات)', columns: ['id (UUID, PK)', 'sku (VARCHAR, UNIQUE)', 'name (VARCHAR)', 'unit_price (DECIMAL)', 'reorder_level (INT)'] },
        { name: 'stock_levels (أرصدة المخزون)', columns: ['id (UUID, PK)', 'warehouse_id (FK)', 'product_id (FK)', 'quantity (INT)', 'updated_at (TIMESTAMP)'] },
        { name: 'stock_movements (سندات الحركة)', columns: ['id (UUID, PK)', 'product_id (FK)', 'from_warehouse (FK)', 'to_warehouse (FK)', 'qty (INT)', 'type (ENUM)'] }
      ]
    },
    apiEndpoints: [
      { method: 'GET', path: '/api/v1/inventory/stock', desc: 'استعلام لحظي عن أرصدة المنتجات عبر كافة الفروع' },
      { method: 'POST', path: '/api/v1/inventory/movement', desc: 'تسجيل حركة صرف أو تحويل أو استلام مخزني' },
      { method: 'GET', path: '/api/v1/inventory/alerts', desc: 'جلب تنبيهات البضائع التي قاربت على النفاد' }
    ],
    authDetails: 'حماية متكاملة بواسطة بروتوكول OAuth2 مع توكنات JWT مشفرة. تطبيق مصفوفة صلاحيات دقيقة (RBAC) لتقييد وصول موظفي الفروع لمستودعاتهم فقط ومنح الإدارة صلاحية الإشراف الشامل.',
    testingDetails: 'تغطية اختبارات آلية بنسبة 96% باستخدام Pytest و Testcontainers مع اختبارات الضغط والتعامل مع العمليات المتزامنة لمنع Deadlocks أثناء خفض الأرصدة.',
    deploymentDetails: 'نشر معزول بالحاويات عبر Dockerfile متعدد المراحل و Docker Compose مع تكامل مستمر CI/CD عبر GitHub Actions.'
  },
  {
    id: '2',
    slug: 'manufacturing-system',
    number: '02',
    title: 'نظام إدارة تصنيع الأثاث ومحاسبة التكاليف (Odoo ERP)',
    category: 'Odoo ERP / MRP',
    subtitle: 'فهم أعمال + محاسبة تكاليف + دورة تصنيع + مستودعات + بايثون',
    description: 'نظام ERP متكامل لمصانع الأثاث يربط بين أوامر البيع للعملاء، وشراء المواد الخام (أخشاب وأقمشة)، وخطوط التجميع، ومراقبة الجودة، والقيود المحاسبية التلقائية بدفتر الأستاذ.',
    techStack: ['Python', 'Odoo ERP', 'PostgreSQL', 'XML-RPC', 'Docker', 'Nginx'],
    metrics: 'تسريع دورات الإنتاج بنسبة 40% · انعدام الفروقات المخزنية',
    githubUrl: 'https://github.com',
    liveUrl: 'https://erp.furniture.example.com',
    architecture: 'معمارية وحدات Odoo ORM مع جداول عمل آلية (Cron Jobs) وخطافات قيود يومية تلقائية لمحاسبة التكاليف.',
    problem: 'كان يعاني مصنع أثاث متخصص من انقطاع التواصل بين عروض الأسعار، والمخزون الفعلي للأخشاب، وجداول خطوط الإنتاج، والقيود المحاسبية، مما تسبب في تأخر التسليم وعدم دقة حساب تكلفة القطعة.',
    workflowSteps: [
      'أمر البيع',
      'أمر التصنيع (MO)',
      'حجز المواد',
      'صرف المستودع',
      'خط الإنتاج',
      'مراقبة الجودة',
      'التسليم للعميل',
      'التوجيه المحاسبي'
    ],
    architectureSteps: [
      {
        title: 'أوامر البيع وقائمة المواد (Bill of Materials - BOM)',
        description: 'بمجرد تأكيد العميل لطلب الأريكة المخصصة، يولد النظام تلقائياً قائمة مواد تفصيلية تحدد كميات الخشب، الإسفنج، والإكسسوارات.',
        codeSnippet: 'class FurnitureProductionOrder(models.Model):\n    _inherit = "mrp.production"\n    custom_dimensions = fields.Char(string="الأبعاد المخصصة")\n    quality_score = fields.Float(string="درجة الجودة")'
      },
      {
        title: 'تخطيط الاحتياجات وحجز المخزون (MRP Automation)',
        description: 'حجز فوري للخامات في مستودع المواد الأولية، وإصدار طلبات شراء تلقائية للموردين عند وصول الصنف للحد الأدنى.'
      },
      {
        title: 'الربط المالي ودفتر اليومية (Accounting Ledger Hook)',
        description: 'عند تسليم المنتج النهائي، يقوم النظام بإنشاء قيود يومية متوازنة لمدين وحساب العملاء وإيرادات النشاط وتكلفة البضاعة المباعة.'
      }
    ],
    databaseSchema: {
      description: 'جداول Odoo ORM متقدمة لإدارة أوامر التصنيع، مراكز العمل، وقيود المحاسبة المزدوجة.',
      tables: [
        { name: 'sale_order (أوامر البيع)', columns: ['id (PK)', 'partner_id (FK)', 'state (draft/sale/done)', 'amount_total (FLOAT)'] },
        { name: 'mrp_production (أوامر الإنتاج)', columns: ['id (PK)', 'product_id (FK)', 'product_qty (FLOAT)', 'state (confirmed/progress/done)'] },
        { name: 'stock_valuation_layer (تقييم المخزون)', columns: ['id (PK)', 'product_id (FK)', 'unit_cost (FLOAT)', 'remaining_qty (FLOAT)'] },
        { name: 'account_move (القيود اليومية)', columns: ['id (PK)', 'journal_id (FK)', 'state (posted)', 'amount_residual (FLOAT)'] }
      ]
    },
    apiEndpoints: [
      { method: 'GET', path: '/api/v2/manufacturing/orders', desc: 'جلب قائمة أوامر التصنيع النشطة ومراحلها' },
      { method: 'POST', path: '/api/v2/manufacturing/workcenter/log', desc: 'تسجيل ساعات تشغيل الماكينات وإنتاجية العمال' },
      { method: 'GET', path: '/api/v2/accounting/ledger/summary', desc: 'استخراج الميزانية العمومية وقائمة الأرباح والخسائر' }
    ],
    authDetails: 'نظام مصادقة جلسات Odoo مع قوائم تحكم بالوصول (ACL) وقواعد السجلات (Record Rules) لضمان سرية البيانات المالية عن عمال الورشة.',
    testingDetails: 'اختبارات خادم Odoo باستخدام `TransactionCase` للتأكد من صحة معادلات التكاليف والقيود متعددة العملات.',
    deploymentDetails: 'منشور على خوادم Linux مع Nginx وسيط عكسي، وشهادة أمان SSL، ونسخ احتياطي تلقائي لقاعدة PostgreSQL.'
  },
  {
    id: '3',
    slug: 'payroll-system',
    number: '03',
    title: 'نظام إدارة شؤون الموظفين والرواتب المؤتمتة (HR & Payroll)',
    category: 'FastAPI / Celery',
    subtitle: 'Python · FastAPI · PostgreSQL · Celery · Redis',
    description: 'محرك حساب أجور متكامل يدير سجلات الموظفين، وأجهزة الحضور والانصراف البيومترية، وحساب البدلات والخصومات الضريبية وتوليد ملفات التحويل البنكي الرسمية.',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Celery', 'Redis', 'Docker'],
    metrics: 'احتساب رواتب أكثر من 1,200 موظف في 14 ثانية فقط',
    githubUrl: 'https://github.com',
    liveUrl: 'https://api.hr.example.com/docs',
    architecture: 'معمارية خوادم غير متزامنة مع معالجات خلفية موزعة بـ Celery لاحتساب الرواتب والضرائب على دفعات ضخمة.',
    problem: 'كانت تستغرق إدارة الموارد البشرية 5 أيام عمل شهرياً لحساب خصومات الحضور، وساعات العمل الإضافي، وشرائح التأمينات والضرائب يدوياً لأكثر من ألف موظف.',
    architectureSteps: [
      {
        title: 'استقبال سجلات البصمة (Biometric Ingestion)',
        description: 'نقاط Webhook تستقبل حركات الدخول والخروج اللحظية من أجهزة البصمة وتطابقها مع جداول الورديات.',
        codeSnippet: '@app.post("/api/v1/attendance/punch")\nasync def log_attendance(punch: BiometricPunchSchema, db: AsyncSession = Depends(get_db)):\n    return await AttendanceService.record(db, punch)'
      },
      {
        title: 'محرك حساب الرواتب الموزع (Celery Batch Processing)',
        description: 'مهمة مجدولة تعمل بنهاية كل شهر لمعالجة صافي الأجر، الاستقطاعات، وأقساط السلف بالتوازي دون تجميد واجهة النظام.'
      },
      {
        title: 'توليد ملفات الصرف البنكي (WPS / Bank Export)',
        description: 'تصدير ملفات بنكية معتمدة متوافقة مع نظام حماية الأجور (WPS) للتحويل المالي المباشر للحسابات.'
      }
    ],
    databaseSchema: {
      description: 'مخطط قواعد بيانات علائقي متين لملفات الموظفين، سجلات الورديات، ومسيرات الرواتب الشهرية.',
      tables: [
        { name: 'employees (الموظفون)', columns: ['id (UUID, PK)', 'employee_code (VARCHAR)', 'full_name (VARCHAR)', 'department_id (FK)', 'base_salary (DECIMAL)'] },
        { name: 'attendance_logs (حركات الحضور)', columns: ['id (UUID, PK)', 'employee_id (FK)', 'check_in (TIMESTAMP)', 'check_out (TIMESTAMP)', 'status (PRESENT/LATE/ABSENT)'] },
        { name: 'shifts (الورديات)', columns: ['id (UUID, PK)', 'name (VARCHAR)', 'start_time (TIME)', 'end_time (TIME)'] },
        { name: 'payroll_runs (مسيرات الرواتب)', columns: ['id (UUID, PK)', 'month (INT)', 'year (INT)', 'total_payout (DECIMAL)', 'status (PROCESSED)'] }
      ]
    },
    apiEndpoints: [
      { method: 'GET', path: '/api/v1/hr/employees', desc: 'استعراض بيانات الموظفين وتوزيعهم على الأقسام' },
      { method: 'POST', path: '/api/v1/hr/payroll/compute', desc: 'بدء تشغيل احتساب مسير الرواتب الشهري في الخلفية' },
      { method: 'GET', path: '/api/v1/hr/reports/salary', desc: 'تحميل كشوفات الرواتب ومفردات المرتبات التفصيلية' }
    ],
    authDetails: 'مصادقة أمان هرمية مع صلاحيات متعددة: مدير عام النظام، مدراء الموارد البشرية، رؤساء الأقسام، وبوابة الخدمة الذاتية للموظف.',
    testingDetails: 'اختبارات وحدات بـ Pytest تغطي كافة الحالات الخاصة لمعادلات الضرائب والتأمينات وحساب الإضافي في العطلات الرسمية.',
    deploymentDetails: 'نظام حاويات متكامل يشمل خادم PostgreSQL، ووسيط Redis، ومعالجات Celery، وتطبيق FastAPI.'
  }
];

export const PROJECTS_DATA_EN: ProjectWithSlug[] = [
  {
    id: '1',
    slug: 'inventory-system',
    number: '01',
    title: 'Inventory Management System',
    category: 'FastAPI / Async',
    subtitle: 'Python 3.12 · FastAPI · PostgreSQL · Redis · Docker',
    description: 'High-performance inventory tracking and stock management system designed for enterprise supply chains with real-time stock level synchronization and automated reorder alerts.',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'SQLAlchemy'],
    metrics: '10k+ req/sec · 99.99% Uptime',
    githubUrl: 'https://github.com',
    liveUrl: 'https://api.inventory.example.com/docs',
    architecture: 'Asynchronous event-driven microservice architecture with Redis pub/sub for instant stock alerts.',
    problem: 'Enterprise warehouse operators struggled with stockouts and delayed inventory audits across 12 distributed fulfillment centers, causing reconciliation errors and lost sales.',
    architectureSteps: [
      {
        title: 'Asynchronous API Gateway (FastAPI)',
        description: 'Non-blocking ASGI server handling thousands of concurrent stock update requests using Uvicorn and Pydantic v2 validation.',
        codeSnippet: '@app.post("/api/v1/stock/update")\nasync def update_stock(item: StockUpdateSchema, db: AsyncSession = Depends(get_db)):\n    return await InventoryService.process_movement(db, item)'
      },
      {
        title: 'Event-Driven Message Broker (Redis)',
        description: 'Pub/sub channel broadcasting stock depletion events to background workers for automated purchase order triggers.'
      },
      {
        title: 'Database Connection Pooling',
        description: 'Optimized SQLAlchemy async engine with connection pooling to prevent database exhaustion under high traffic spikes.'
      }
    ],
    databaseSchema: {
      description: 'Normalized relational schema with indexes on SKU, warehouse_id, and transaction timestamps.',
      tables: [
        { name: 'warehouses', columns: ['id (UUID, PK)', 'name (VARCHAR)', 'location (VARCHAR)', 'created_at (TIMESTAMP)'] },
        { name: 'products', columns: ['id (UUID, PK)', 'sku (VARCHAR, UNIQUE)', 'name (VARCHAR)', 'unit_price (DECIMAL)', 'reorder_level (INT)'] },
        { name: 'stock_levels', columns: ['id (UUID, PK)', 'warehouse_id (FK)', 'product_id (FK)', 'quantity (INT)', 'updated_at (TIMESTAMP)'] },
        { name: 'stock_movements', columns: ['id (UUID, PK)', 'product_id (FK)', 'from_warehouse (FK)', 'to_warehouse (FK)', 'qty (INT)', 'type (ENUM)'] }
      ]
    },
    apiEndpoints: [
      { method: 'GET', path: '/api/v1/inventory/stock', desc: 'Query real-time stock levels across warehouses' },
      { method: 'POST', path: '/api/v1/inventory/movement', desc: 'Record stock transfer or inbound shipment' },
      { method: 'GET', path: '/api/v1/inventory/alerts', desc: 'Fetch low-stock threshold alerts' }
    ],
    authDetails: 'Secured using OAuth2 with JSON Web Tokens (JWT). Role-Based Access Control (RBAC) ensures warehouse workers can only update assigned depots while admins have full cluster control.',
    testingDetails: 'Comprehensive test suite built with Pytest and Testcontainers, achieving 96% code coverage. Automated concurrency stress tests validate deadlock-free stock decrement.',
    deploymentDetails: 'Containerized using multi-stage Dockerfiles and deployed via Docker Compose with automated GitHub Actions CI/CD pipelines.'
  },
  {
    id: '2',
    slug: 'manufacturing-system',
    number: '02',
    title: 'Furniture Manufacturing System',
    category: 'Odoo ERP / MRP',
    subtitle: 'Business Knowledge + Accounting + Inventory + Manufacturing + Backend',
    description: 'End-to-end enterprise Odoo ERP solution for furniture manufacturing, seamlessly connecting customer sales orders with raw material procurement, factory floor assembly, quality control, and general ledger accounting.',
    techStack: ['Python', 'Odoo ERP', 'PostgreSQL', 'XML-RPC', 'Docker', 'Nginx'],
    metrics: '40% faster production cycles · Zero stock discrepancies',
    githubUrl: 'https://github.com',
    liveUrl: 'https://erp.furniture.example.com',
    architecture: 'Modular Odoo ORM architecture with automated scheduled cron jobs and custom accounting journal entry hooks.',
    problem: 'A bespoke furniture manufacturer faced severe disconnects between sales quotations, timber raw material inventory, assembly line scheduling, and financial bookkeeping, leading to delayed deliveries and inaccurate cost accounting.',
    workflowSteps: [
      'Sales Order',
      'Manufacturing Order',
      'Materials',
      'Warehouse',
      'Production',
      'Quality',
      'Delivery',
      'Accounting'
    ],
    architectureSteps: [
      {
        title: 'Sales Order & Bill of Materials (BOM)',
        description: 'When a customer confirms a custom sofa order, Odoo automatically generates a Bill of Materials (BOM) specifying required wood, foam, and fabric quantities.',
        codeSnippet: 'class FurnitureProductionOrder(models.Model):\n    _inherit = "mrp.production"\n    custom_dimensions = fields.Char(string="Dimensions")\n    quality_score = fields.Float(string="QC Rating")'
      },
      {
        title: 'MRP & Inventory Reservation',
        description: 'Materials are instantly reserved in the raw material warehouse. If stock is low, automated Purchase Requisitions are dispatched to suppliers.'
      },
      {
        title: 'Financial Ledger & Accounting Hook',
        description: 'Upon delivery confirmation, the system automatically posts balanced debit and credit entries to the Accounts Receivable and Revenue ledgers.'
      }
    ],
    databaseSchema: {
      description: 'Advanced Odoo ORM relational tables managing manufacturing orders, work centers, and double-entry accounting ledgers.',
      tables: [
        { name: 'sale_order', columns: ['id (PK)', 'partner_id (FK)', 'state (draft/sale/done)', 'amount_total (FLOAT)'] },
        { name: 'mrp_production', columns: ['id (PK)', 'product_id (FK)', 'product_qty (FLOAT)', 'state (confirmed/progress/done)'] },
        { name: 'stock_valuation_layer', columns: ['id (PK)', 'product_id (FK)', 'unit_cost (FLOAT)', 'remaining_qty (FLOAT)'] },
        { name: 'account_move', columns: ['id (PK)', 'journal_id (FK)', 'state (posted)', 'amount_residual (FLOAT)'] }
      ]
    },
    apiEndpoints: [
      { method: 'GET', path: '/api/v2/manufacturing/orders', desc: 'List active factory production orders' },
      { method: 'POST', path: '/api/v2/manufacturing/workcenter/log', desc: 'Log work center machine hours and worker output' },
      { method: 'GET', path: '/api/v2/accounting/ledger/summary', desc: 'Retrieve real-time financial balance sheet & P&L' }
    ],
    authDetails: 'Odoo session-based authentication paired with fine-grained access control lists (ACL) and record rules ensuring strict data privacy between sales, factory floor, and finance departments.',
    testingDetails: 'Tested using Odoo server test runner (`common.TransactionCase`), validating multi-currency accounting entries and MRP route calculations.',
    deploymentDetails: 'Deployed on dedicated Linux servers with Nginx reverse proxy, SSL termination, automated database backups, and Redis session store.'
  },
  {
    id: '3',
    slug: 'payroll-system',
    number: '03',
    title: 'Employee & Payroll System',
    category: 'FastAPI / Celery',
    subtitle: 'Python · FastAPI · PostgreSQL · Celery',
    description: 'Comprehensive Human Resources and automated Payroll calculation engine managing employee records, biometric attendance logs, shift scheduling, salary deductions, tax withholding, and bank transfer file generation.',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Celery', 'Redis', 'Docker'],
    metrics: 'Automated 1,200+ employee payroll in 14 seconds',
    githubUrl: 'https://github.com',
    liveUrl: 'https://api.hr.example.com/docs',
    architecture: 'Asynchronous FastAPI backend with Celery distributed workers for background payroll batch processing.',
    problem: 'HR departments spent 5 business days every month manually calculating attendance deductions, overtime bonuses, tax brackets, and generating bank salary sheets for over a thousand employees.',
    architectureSteps: [
      {
        title: 'Attendance & Biometric Ingestion',
        description: 'REST webhook receiver ingesting real-time punch-in/punch-out logs from office biometric hardware terminals.',
        codeSnippet: '@app.post("/api/v1/attendance/punch")\nasync def log_attendance(punch: BiometricPunchSchema, db: AsyncSession = Depends(get_db)):\n    return await AttendanceService.record(db, punch)'
      },
      {
        title: 'Celery Payroll Calculation Batch',
        description: 'Background worker running on the last day of the month to compute gross-to-net salaries, tax deductions, and loan repayments concurrently.'
      },
      {
        title: 'Bank Transfer File Exporter',
        description: 'Generates secure NACHA/WPS compliant banking format files for direct electronic salary deposits.'
      }
    ],
    databaseSchema: {
      description: 'Robust relational schema for personnel profiles, shift rosters, and payroll ledger transactions.',
      tables: [
        { name: 'employees', columns: ['id (UUID, PK)', 'employee_code (VARCHAR)', 'full_name (VARCHAR)', 'department_id (FK)', 'base_salary (DECIMAL)'] },
        { name: 'attendance_logs', columns: ['id (UUID, PK)', 'employee_id (FK)', 'check_in (TIMESTAMP)', 'check_out (TIMESTAMP)', 'status (PRESENT/LATE/ABSENT)'] },
        { name: 'shifts', columns: ['id (UUID, PK)', 'name (VARCHAR)', 'start_time (TIME)', 'end_time (TIME)'] },
        { name: 'payroll_runs', columns: ['id (UUID, PK)', 'month (INT)', 'year (INT)', 'total_payout (DECIMAL)', 'status (PROCESSED)'] }
      ]
    },
    apiEndpoints: [
      { method: 'GET', path: '/api/v1/hr/employees', desc: 'List company personnel and department assignments' },
      { method: 'POST', path: '/api/v1/hr/payroll/compute', desc: 'Trigger asynchronous monthly payroll calculation task' },
      { method: 'GET', path: '/api/v1/hr/reports/salary', desc: 'Download consolidated salary & tax withholding reports' }
    ],
    authDetails: 'Token-based authentication with role hierarchies: SuperAdmin, HR_Manager, DepartmentHead, and Employee Self-Service portal access.',
    testingDetails: 'Unit tested with Pytest covering tax calculation edge cases, leap-year shift rotations, and overtime multiplier formulas.',
    deploymentDetails: 'Dockerized multi-container setup including PostgreSQL, Redis broker, Celery worker nodes, and FastAPI ASGI application server.'
  }
];

export const getProjectsData = (lang: 'ar' | 'en' = 'ar'): ProjectWithSlug[] => {
  return lang === 'ar' ? PROJECTS_DATA_AR : PROJECTS_DATA_EN;
};

// Default export for backwards compatibility
export const PROJECTS_DATA = PROJECTS_DATA_AR;
