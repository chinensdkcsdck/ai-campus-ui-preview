/** AI 校园通 · 演示数据（原型专用，覆盖 PRD 主路径） */
window.CAMPUS_MOCK = {
  school: {
    id: 'sch_xupt',
    name: '西安邮电大学',
    shortName: '西邮',
    logoText: '邮',
    campusDefault: '长安校区',
    campuses: ['长安校区', '雁塔校区'],
    theme: '#146B56',
    themeSoft: '#E4F4EE',
    disclaimer: '非学校官方平台 · 普通用户身份未核验'
  },
  me: {
    id: 'u_me',
    name: '林晓',
    avatar: '林',
    campus: '长安校区',
    trust: '注册 186 天 · 完成 3 次交易 · 无公开违规',
    trustDetail: {
      bind: '手机号已绑定',
      days: 186,
      posts: 12,
      trades: 3,
      complains: 0,
      risk: '低'
    },
    major: '用户自述 · 计算机学院 2023 级',
    favorites: { posts: ['p2', 'p4'], goods: ['g1'], activities: ['a1'], digital: ['d1'] },
    orgStatus: 'none', // none | pending | approved
    orgName: ''
  },
  quickQuestions: [
    '长安校区图书馆几点关门？',
    '想收一个四六级耳机',
    '校园卡丢了怎么办',
    '最近有什么社团纳新',
    '高数复习资料有吗',
    '我想卖一本线性代数教材'
  ],
  aiScenarios: {
    library: {
      q: '长安校区图书馆几点关门？',
      type: 'official',
      answer: '根据图书馆最新通知，长安校区图书馆学期内开放时间为 8:00–22:30；考试周延长至 23:00。',
      sources: [
        { title: '图书馆开放时间调整通知', date: '2026-03-01', tag: '官方资料' },
        { title: '学生手册 · 公共设施', date: '2025-09-01', tag: '官方资料' }
      ]
    },
    headphone: {
      q: '想收一个四六级耳机',
      type: 'route',
      intent: '购买个人闲置',
      routeLabel: '已为你筛选本校区的四六级耳机',
      filters: { keyword: '四六级耳机', campus: '长安校区' }
    },
    sell: {
      q: '我想卖一本线性代数教材',
      type: 'route_sell',
      intent: '出售个人闲置',
      routeLabel: '已为你打开闲置发布页并预填标题',
      draft: { title: '线性代数教材', category: '教材' }
    },
    unknown: {
      q: '某位老师的课程作业多不多？',
      type: 'no_answer',
      answer: '暂时无法确认。知识库缺少可核验的课程评价资料，且这类体验因学期与教师安排差异较大。',
      draft: '有人上过「数据结构」这门课吗？作业量大不大，考试难不难？求真实体验～',
      relatedPosts: ['p1', 'p4']
    },
    lost: {
      q: '校园卡丢了怎么办',
      type: 'hybrid',
      answer: '建议先在一卡通公众号/大厅挂失补办。同时可在失物招领搜索或发布丢失信息。',
      actions: ['去失物招领搜索', '发布丢失信息']
    },
    digital: {
      q: '高数复习资料有吗',
      type: 'route_digital',
      routeLabel: '已为你筛选学习资料 · 高等数学'
    },
    activity: {
      q: '最近有什么社团纳新',
      type: 'route-act',
      routeLabel: '已为你筛选近期社团活动'
    }
  },
  lostItems: [
    { id: 'lf1', kind: '丢失', title: '黑色校园卡', place: '一食堂门口', time: '今天 12:20', campus: '长安校区', status: '寻找中', desc: '卡套有猫咪贴纸，关键号码已隐藏', category: '证件' },
    { id: 'lf2', kind: '拾到', title: '蓝色水杯', place: '图书馆 3 楼', time: '昨天 16:40', campus: '长安校区', status: '待认领', desc: '杯身有刻字，认领需说特征', category: '日用' },
    { id: 'lf3', kind: '丢失', title: 'AirPods 充电盒', place: '南门公交站', time: '周一', campus: '雁塔校区', status: '寻找中', desc: '盒子有轻微划痕', category: '数码' },
    { id: 'lf4', kind: '拾到', title: '黑色钥匙串', place: '教 2 楼电梯口', time: '今天 09:10', campus: '长安校区', status: '待认领', desc: '带小熊挂件', category: '其他' },
    { id: 'lf5', kind: '丢失', title: '学生证', place: '体育馆更衣室', time: '周日', campus: '长安校区', status: '已找回', desc: '已找回，保留搜索', category: '证件' }
  ],
  posts: [
    { id: 'p1', author: '匿名同学 A', anon: true, time: '10 分钟前', campus: '长安校区', content: '有人知道本学期重修报名截止到哪天吗？教务网入口好绕…', likes: 6, comments: 3, fromAI: true, resolved: false, images: 0 },
    { id: 'p2', author: '阿哲', anon: false, time: '1 小时前', campus: '长安校区', content: '今晚操场夜跑搭子有吗？大概 8 点，轻松局～', likes: 18, comments: 7, fromAI: false, resolved: false, images: 1 },
    { id: 'p3', author: '匿名同学 B', anon: true, time: '昨天', campus: '雁塔校区', content: '南区快递站周末还开吗？有人今天去过吗', likes: 4, comments: 5, fromAI: true, resolved: true, adminNote: '管理员已整理：雁塔校区驿站周末 10:00–18:00（来源：驿站门口告示 + 多条一致回复）', picked: '周末开，但 18 点下班，建议下午去。', images: 0 },
    { id: 'p4', author: '小满', anon: false, time: '昨天', campus: '长安校区', content: '求推荐长安校区附近便宜又干净的打印店，最好能装订。', likes: 11, comments: 9, fromAI: false, resolved: false, images: 0 },
    { id: 'p5', author: '豆豆', anon: false, time: '2 天前', campus: '长安校区', content: '雨天共享单车全被骑光了…有没有人拼车去雁塔？', likes: 9, comments: 4, fromAI: false, resolved: false, images: 0 },
    { id: 'p6', author: '匿名同学 C', anon: true, time: '2 天前', campus: '雁塔校区', content: '表白墙时代结束了吗？这里发帖会有人理吗哈哈', likes: 22, comments: 12, fromAI: false, resolved: false, images: 0 }
  ],
  postComments: {
    p1: [
      { user: '学长K', text: '好像是第 3 周周五，你在教务系统「报名中心」里看最准。', time: '8 分钟前' },
      { user: '豆豆', text: '我们学院群里说截止 3 月 20 日，不同学院可能不一样。', time: '5 分钟前' },
      { user: '阿哲', text: '同问，顶一下', time: '3 分钟前' }
    ],
    p2: [
      { user: '小满', text: '我去！8 点操场见', time: '50 分钟前' },
      { user: '林晓', text: '带上水，最近降温', time: '40 分钟前' }
    ],
    p3: [
      { user: '南区居民', text: '周末开，但 18 点下班，建议下午去。', time: '昨天' },
      { user: '快递员小李', text: '对，周日也开，人会少一点。', time: '昨天' }
    ],
    p4: [
      { user: '打印人', text: '南门图文 0.1/页，装订另算', time: '昨天' },
      { user: '学妹M', text: '图书馆地下那家也行', time: '昨天' }
    ]
  },
  activities: [
    { id: 'a1', title: '2026 春季社团联展', org: '校学生会', orgType: '学生组织', time: '本周六 14:00', place: '学生活动中心', tag: '社团纳新', promo: true, seats: '余 120', fav: 86, joins: 204, status: '报名中', campus: '长安校区' },
    { id: 'a2', title: '人工智能入门讲座', org: '计算机协会', orgType: '社团', time: '下周三 19:00', place: '教 3-201', tag: '讲座', promo: false, seats: '余 35', fav: 42, joins: 90, status: '报名中', campus: '长安校区' },
    { id: 'a3', title: '校园志愿清理河岸', org: '青志协', orgType: '社团', time: '周日 9:00', place: '东门集合', tag: '志愿', promo: false, seats: '余 18', fav: 27, joins: 42, status: '报名中', campus: '长安校区' },
    { id: 'a4', title: '雁塔校区摄影外拍', org: '光影社', orgType: '社团', time: '下周六 15:00', place: '雁塔校区正门', tag: '兴趣', promo: false, seats: '余 20', fav: 19, joins: 28, status: '报名中', campus: '雁塔校区' },
    { id: 'a5', title: '期末通宵自习室预约说明会', org: '学习发展中心', orgType: '学生组织', time: '周五 18:30', place: '图书馆报告厅', tag: '学习', promo: true, seats: '余 60', fav: 55, joins: 110, status: '报名中', campus: '长安校区' }
  ],
  usedGoods: [
    { id: 'g1', title: '四六级耳机 · 几乎全新', price: 35, campus: '长安校区', degree: '9 成新', seller: '阿哲', trust: '注册 2 年 · 5 次交易', img: '🎧', status: '在售', category: '数码' },
    { id: 'g2', title: '四六级专用耳机（可议价）', price: 25, campus: '长安校区', degree: '8 成新', seller: 'Mia', trust: '注册 180 天 · 1 次交易', img: '🎧', status: '在售', category: '数码' },
    { id: 'g3', title: '高等数学教材 + 笔记', price: 18, campus: '雁塔校区', degree: '7 成新', seller: '老周', trust: '注册 1 年 · 8 次交易', img: '📘', status: '在售', category: '教材' },
    { id: 'g4', title: '折叠晾衣架', price: 15, campus: '长安校区', degree: '8 成新', seller: '小满', trust: '注册 300 天 · 2 次交易', img: '🧺', status: '在售', category: '日用' },
    { id: 'g5', title: '蓝牙键鼠套装', price: 68, campus: '长安校区', degree: '9 成新', seller: 'CodeLab', trust: '注册 400 天 · 6 次交易', img: '⌨️', status: '已预订', category: '数码' },
    { id: 'g6', title: '线性代数教材', price: 12, campus: '长安校区', degree: '6 成新', seller: '豆豆', trust: '注册 90 天 · 0 次交易', img: '📗', status: '已售出', category: '教材' }
  ],
  digitalGoods: [
    { id: 'd1', title: '高数期末复习笔记 v3', price: 12.9, course: '高等数学', year: '2025-2026', sales: 128, seller: '认证卖家 · 清清', sellerId: 'u_qing', preview: '含公式推导与真题思路（样张 3 页）', version: 'v3', pages: 46, size: '8.2 MB', fileType: 'PDF', rights: '原创笔记', refund: '未下载可 24h 内申请退款；已下载按规则审核', status: '在售', updates: true, campus: '长安校区', major: '全校公共课', updatedAt: '2026-06-18', cover: '📐' },
    { id: 'd2', title: 'C 语言上机题解析', price: 9.9, course: '程序设计', year: '2025', sales: 76, seller: '认证卖家 · CodeLab', sellerId: 'u_code', preview: '原创解析，禁止用于考试作弊', version: 'v1.2', pages: 28, size: '3.4 MB', fileType: 'PDF', rights: '原创解析', refund: '未下载可 24h 退；已交付按「内容明显不符」处理', status: '在售', updates: false, campus: '长安校区', major: '计算机相关', updatedAt: '2026-05-02', cover: '💻' },
    { id: 'd3', title: '电路基础重点卡片', price: 6.6, course: '电路', year: '2025', sales: 33, seller: '认证卖家 · 清清', sellerId: 'u_qing', preview: '重点卡片，含常见易错点', version: 'v1', pages: 12, size: '1.1 MB', fileType: 'PDF', rights: '原创整理', refund: '未下载可退', status: '在售', updates: false, campus: '雁塔校区', major: '电子信息', updatedAt: '2026-04-12', cover: '🔌' },
    { id: 'd4', title: '英语四级词汇清单', price: 5.9, course: '大学英语', year: '2026', sales: 201, seller: '认证卖家 · WordLab', sellerId: 'u_word', preview: '高频词 + 例句，可打印', version: 'v2', pages: 20, size: '2.0 MB', fileType: 'PDF', rights: '原创汇编', refund: '未下载可退', status: '在售', updates: true, campus: '长安校区', major: '全校', updatedAt: '2026-07-01', cover: '🔤' },
    { id: 'd5', title: '操作系统期末提纲', price: 11.0, course: '操作系统', year: '2025', sales: 54, seller: '认证卖家 · 清清', sellerId: 'u_qing', preview: '提纲 + 简答题模板', version: 'v1.1', pages: 18, size: '1.8 MB', fileType: 'PDF', rights: '原创', refund: '未下载可退', status: '审核中', updates: false, campus: '长安校区', major: '计算机', updatedAt: '2026-07-20', cover: '🖥️' },
    { id: 'd6', title: '离散数学证明模板', price: 8.8, course: '离散数学', year: '2025-2026', sales: 42, seller: '认证卖家 · CodeLab', sellerId: 'u_code', preview: '常见证明结构与例题拆解（样张 2 页）', version: 'v1', pages: 22, size: '2.6 MB', fileType: 'PDF', rights: '原创整理', refund: '未下载可 24h 退', status: '在售', updates: false, campus: '长安校区', major: '计算机', updatedAt: '2026-06-30', cover: '🧩' },
    { id: 'd7', title: '通信原理公式速查', price: 7.5, course: '通信原理', year: '2025', sales: 19, seller: '认证卖家 · 清清', sellerId: 'u_qing', preview: '公式卡 + 典型题型提示', version: 'v1', pages: 10, size: '0.9 MB', fileType: 'PDF', rights: '原创笔记', refund: '未下载可退', status: '在售', updates: true, campus: '雁塔校区', major: '通信工程', updatedAt: '2026-05-28', cover: '📡' }
  ],
  seller: {
    status: 'none',
    feeRate: 0.1,
    pendingSettle: 86.4,
    settled: 210.5,
    salesCount: 41,
    contact: '林晓',
    content: '原创复习笔记与课程解析',
    payout: '微信商户 · 已核验（演示）'
  },
  digitalOrders: [
    { id: 'o1', goodsId: 'd1', title: '高数期末复习笔记 v3', price: 12.9, status: '已交付', time: '2 天前', version: 'v3', role: 'buyer', deliverAt: '2 天前', downloads: 1, downloadLog: ['2 天前 · 短时链接'], viewer: true, campus: '长安校区' },
    { id: 'o2', goodsId: 'd4', title: '英语四级词汇清单', price: 5.9, status: '已交付', time: '5 天前', version: 'v2', role: 'buyer', deliverAt: '5 天前', downloads: 0, downloadLog: [], viewer: true, campus: '长安校区' },
    { id: 'o4', goodsId: 'd2', title: 'C 语言上机题解析', price: 9.9, status: '退款中', time: '昨天', version: 'v1.2', role: 'buyer', deliverAt: '昨天', downloads: 0, downloadLog: [], viewer: true, refundReason: '内容与描述明显不符', campus: '长安校区' },
    { id: 'o3', goodsId: 'd5', title: '操作系统期末提纲', price: 11.0, status: '待审核上架', time: '今天', version: 'v1.1', role: 'seller' }
  ],
  chats: [
    { id: 'c1', name: '阿哲', last: '耳机还在的，今晚主楼当面看？', time: '刚刚', unread: 1, request: false, source: '来自闲置 · 四六级耳机' },
    { id: 'c2', name: 'Mia', last: '请求发送私信', time: '昨天', unread: 0, request: true, source: '来自闲置 · 四六级专用耳机' },
    { id: 'c3', name: '活动助手', last: '你报名的社团联展地点有更新', time: '昨天', unread: 0, request: false, system: true, source: '' },
    { id: 'c4', name: '小满', last: '打印店那家我去过，靠谱', time: '3 天前', unread: 0, request: false, source: '来自广场帖子' }
  ],
  notices: [
    { title: '你的求助帖收到 2 条新回复', time: '10 分钟前', type: '社区' },
    { title: '管理员已整理「南区快递站」相关回答', time: '昨天', type: '社区' },
    { title: '数字商品《高数笔记》已交付', time: '2 天前', type: '交易' },
    { title: '活动「春季社团联展」地点有更新', time: '昨天', type: '活动' },
    { title: '你的举报已处理：评论已隐藏', time: '3 天前', type: '安全' },
    { title: '认证卖家申请可随时提交', time: '本周', type: '系统' }
  ],
  helpQueue: [
    { id: 'p1', title: '重修报名截止时间', replies: 3, heat: '高', fromAI: true, status: '待整理', updated: '10 分钟前' },
    { id: 'p4', title: '长安校区打印店推荐', replies: 9, heat: '中', fromAI: false, status: '待整理', updated: '昨天' },
    { id: 'p3', title: '雁塔快递站周末是否营业', replies: 5, heat: '低', fromAI: true, status: '已整理', updated: '昨天' },
    { id: 'p5', title: '雨天拼车去雁塔', replies: 4, heat: '中', fromAI: false, status: '待整理', updated: '2 天前' }
  ],
  knowledgeCandidates: [
    { id: 'k1', title: '雁塔驿站周末营业时间', sourcePost: 'p3', status: '待审核', scope: '雁塔校区', type: '校园经验', draftAnswer: '雁塔驿站周末 10:00–18:00 开放。', validUntil: '2026-09-01', reviewer: '待分配' },
    { id: 'k2', title: '图书馆学期开放时间', sourcePost: null, status: '已入库', scope: '长安校区', type: '官方资料', draftAnswer: '长安校区图书馆学期内 8:00–22:30，考试周延长至 23:00。', validUntil: '2026-07-15', reviewer: '王敏' },
    { id: 'k3', title: '重修报名入口说明', sourcePost: 'p1', status: '待补充', scope: '全校', type: '校园经验', draftAnswer: '不同学院截止日可能不同，建议以教务系统「报名中心」为准。', validUntil: '2026-04-01', reviewer: '待补充来源' },
    { id: 'k4', title: '打印店推荐（长安）', sourcePost: 'p4', status: '待审核', scope: '长安校区', type: '校园经验', draftAnswer: '南门图文约 0.1/页，可装订；图书馆地下亦可。', validUntil: '2026-12-01', reviewer: '待分配' }
  ],
  reports: [
    { id: 'r1', target: '帖子 · 匿名同学 A', reason: '疑似人身攻击', status: '待处理', time: '今天 09:20', type: '帖子' },
    { id: 'r2', target: '闲置 · 高等数学教材', reason: '疑似虚假描述', status: '处理中', time: '昨天', type: '商品' },
    { id: 'r3', target: '评论 · 豆豆', reason: '泄露他人隐私', status: '已隐藏', time: '2 天前', type: '评论' },
    { id: 'r4', target: '数字商品 · 某题库', reason: '疑似未公开试题', status: '待处理', time: '今天', type: '数字商品' },
    { id: 'r5', target: '私信 · 陌生人', reason: '骚扰广告', status: '待处理', time: '今天', type: '私信' }
  ],
  sellerApps: [
    { id: 'sa1', name: '清清', content: '原创高数笔记', status: '已通过', time: '上月' },
    { id: 'sa2', name: '林晓', content: '原创复习卡片', status: '待审核', time: '今天' },
    { id: 'sa3', name: '阿哲', content: '摄影调色预设', status: '待审核', time: '昨天' }
  ],
  activityReviews: [
    { id: 'a1', title: '2026 春季社团联展', org: '校学生会', status: '已通过·推广', time: '本周' },
    { id: 'a6', title: '校外兼职宣讲', org: '某社团', status: '待加强审核', time: '今天' },
    { id: 'a2', title: '人工智能入门讲座', org: '计算机协会', status: '已通过', time: '上周' }
  ],
  campusShare: {
    groups: [
      { name: '校区共享组', campuses: ['长安校区', '雁塔校区'], mode: '共享' }
    ],
    note: '用户仍可主动选择「全校」查看；共享仅限本校实例，不跨校。'
  },
  promoWallet: {
    balance: 128.0,
    records: [
      { title: '充值', amount: '+200.00', time: '本周' },
      { title: '社团联展 · 首页推广', amount: '-60.00', time: '昨天' },
      { title: '通宵自习说明会 · 列表置顶', amount: '-12.00', time: '今天' }
    ]
  },
  adminUser: { name: '王敏', role: '知识维护 / 内容审核', school: '西安邮电大学' },
  schools: [
    { id: 'sch_xupt', name: '西安邮电大学', status: '运行中', version: 'v1.0.3', users: '12.4k', entry: '太阳码 · 西邮专属' },
    { id: 'sch_south', name: '南岭学院', status: '运行中', version: 'v1.0.3', users: '6.1k', entry: '公众号菜单' },
    { id: 'sch_bay', name: '湾区理工', status: '灰度中', version: 'v1.1.0-rc', users: '2.8k', entry: '邀请码开通' },
    { id: 'sch_linjiang', name: '临江师范学院', status: '灰度中', version: 'v1.0.3', users: '0.4k', entry: '邀请码开通' }
  ]
};
