/** AI 校园通 · 演示数据（原型专用） */
window.CAMPUS_MOCK = {
  school: {
    id: 'sch_xupt',
    name: '西安邮电大学',
    shortName: '西邮',
    logoText: '邮',
    campusDefault: '长安校区',
    campuses: ['长安校区', '雁塔校区'],
    theme: '#1F6B5A',
    themeSoft: '#E8F5F1',
    disclaimer: '非学校官方平台 · 普通用户身份未核验'
  },
  me: {
    id: 'u_me',
    name: '林晓',
    avatar: '林',
    campus: '长安校区',
    trust: '注册 186 天 · 完成 3 次交易 · 无公开违规',
    major: '用户自述 · 计算机学院 2023 级'
  },
  quickQuestions: [
    '长安校区图书馆几点关门？',
    '想收一个四六级耳机',
    '校园卡丢了怎么办',
    '最近有什么社团纳新'
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
    unknown: {
      q: '某位老师的课程作业多不多？',
      type: 'no_answer',
      answer: '暂时无法确认。知识库缺少可核验的课程评价资料，且这类体验因学期与教师安排差异较大。',
      draft: '有人上过「数据结构」这门课吗？作业量大不大，考试难不难？求真实体验～'
    },
    lost: {
      q: '校园卡丢了怎么办',
      type: 'hybrid',
      answer: '建议先在一卡通公众号/大厅挂失补办。同时可在失物招领搜索或发布丢失信息。',
      actions: ['去失物招领搜索', '发布丢失信息']
    }
  },
  lostItems: [
    { id: 'lf1', kind: '丢失', title: '黑色校园卡', place: '一食堂门口', time: '今天 12:20', campus: '长安校区', status: '寻找中', desc: '卡套有猫咪贴纸，关键号码已隐藏' },
    { id: 'lf2', kind: '拾到', title: '蓝色水杯', place: '图书馆 3 楼', time: '昨天 16:40', campus: '长安校区', status: '待认领', desc: '杯身有刻字，认领需说特征' },
    { id: 'lf3', kind: '丢失', title: 'AirPods 充电盒', place: '南门公交站', time: '周一', campus: '雁塔校区', status: '寻找中', desc: '盒子有轻微划痕' }
  ],
  posts: [
    { id: 'p1', author: '匿名同学 A', anon: true, time: '10 分钟前', campus: '长安校区', content: '有人知道本学期重修报名截止到哪天吗？教务网入口好绕…', likes: 6, comments: 3, fromAI: true, resolved: false, adminNote: '' },
    { id: 'p2', author: '阿哲', anon: false, time: '1 小时前', campus: '长安校区', content: '今晚操场夜跑搭子有吗？大概 8 点，轻松局～', likes: 18, comments: 7, fromAI: false, resolved: false },
    { id: 'p3', author: '匿名同学 B', anon: true, time: '昨天', campus: '雁塔校区', content: '南区快递站周末还开吗？有人今天去过吗', likes: 4, comments: 5, fromAI: true, resolved: true, adminNote: '管理员已整理：南区驿站周末 10:00–18:00（来源：驿站门口告示 + 多条一致回复）', picked: '周末开，但 18 点下班，建议下午去。' },
    { id: 'p4', author: '小满', anon: false, time: '昨天', campus: '长安校区', content: '求推荐主校区附近便宜又干净的打印店，最好能装订。', likes: 11, comments: 9, fromAI: false, resolved: false }
  ],
  postComments: {
    p1: [
      { user: '学长K', text: '好像是第 3 周周五，你在教务系统「报名中心」里看最准。', time: '8 分钟前' },
      { user: '豆豆', text: '我们学院群里说截止 3 月 20 日，不同学院可能不一样。', time: '5 分钟前' }
    ],
    p3: [
      { user: '南区居民', text: '周末开，但 18 点下班，建议下午去。', time: '昨天' },
      { user: '快递员小李', text: '对，周日也开，人会少一点。', time: '昨天' }
    ]
  },
  activities: [
    { id: 'a1', title: '2026 春季社团联展', org: '校学生会', time: '本周六 14:00', place: '学生活动中心', tag: '社团纳新', promo: true, seats: '余 120', fav: 86, joins: 204 },
    { id: 'a2', title: '人工智能入门讲座', org: '计算机协会', time: '下周三 19:00', place: '教 3-201', tag: '讲座', promo: false, seats: '余 35', fav: 42, joins: 90 },
    { id: 'a3', title: '校园志愿清理河岸', org: '青志协', time: '周日 9:00', place: '东门集合', tag: '志愿', promo: false, seats: '余 18', fav: 27, joins: 42 }
  ],
  usedGoods: [
    { id: 'g1', title: '四六级耳机 · 几乎全新', price: 35, campus: '长安校区', degree: '9 成新', seller: '阿哲', trust: '注册 2 年 · 5 次交易', img: '🎧' },
    { id: 'g2', title: '四六级专用耳机（可议价）', price: 25, campus: '长安校区', degree: '8 成新', seller: 'Mia', trust: '注册 180 天 · 1 次交易', img: '🎧' },
    { id: 'g3', title: '高等数学教材 + 笔记', price: 18, campus: '雁塔校区', degree: '7 成新', seller: '老周', trust: '注册 1 年 · 8 次交易', img: '📘' }
  ],
  digitalGoods: [
    { id: 'd1', title: '高数期末复习笔记 v3', price: 12.9, course: '高等数学', sales: 128, seller: '认证卖家 · 清清', preview: '含公式 derivations 与真题思路（样张 3 页）' },
    { id: 'd2', title: 'C 语言上机题解析', price: 9.9, course: '程序设计', sales: 76, seller: '认证卖家 · CodeLab', preview: '原创解析，禁止用于考试作弊' }
  ],
  chats: [
    { id: 'c1', name: '阿哲', last: '耳机还在的，今晚主楼当面看？', time: '刚刚', unread: 1, request: false },
    { id: 'c2', name: 'Mia', last: '请求发送私信', time: '昨天', unread: 0, request: true },
    { id: 'c3', name: '活动助手', last: '你报名的社团联展地点有更新', time: '昨天', unread: 0, request: false, system: true }
  ],
  notices: [
    { title: '你的求助帖收到 2 条新回复', time: '10 分钟前' },
    { title: '管理员已整理「南区快递站」相关回答', time: '昨天' },
    { title: '数字商品《高数笔记》已交付', time: '2 天前' }
  ],
  helpQueue: [
    { id: 'p1', title: '重修报名截止时间', replies: 2, heat: '高', fromAI: true, status: '待整理', updated: '10 分钟前' },
    { id: 'p4', title: '主校区打印店推荐', replies: 9, heat: '中', fromAI: false, status: '待整理', updated: '昨天' },
    { id: 'p3', title: '南区快递站周末是否营业', replies: 5, heat: '低', fromAI: true, status: '已整理', updated: '昨天' }
  ],
  knowledgeCandidates: [
    {
      id: 'k1',
      title: '南区驿站周末营业时间',
      sourcePost: 'p3',
      status: '待审核',
      scope: '雁塔校区',
      type: '校园经验',
      draftAnswer: '南区驿站周末 10:00–18:00 开放（综合驿站门口告示与多条一致回复）。',
      validUntil: '2026-09-01',
      reviewer: '待分配'
    },
    {
      id: 'k2',
      title: '图书馆学期开放时间',
      sourcePost: null,
      status: '已入库',
      scope: '长安校区',
      type: '官方资料',
      draftAnswer: '长安校区图书馆学期内 8:00–22:30，考试周延长至 23:00。',
      validUntil: '2026-07-15',
      reviewer: '王敏'
    },
    {
      id: 'k3',
      title: '重修报名入口说明',
      sourcePost: 'p1',
      status: '待补充',
      scope: '全校',
      type: '校园经验',
      draftAnswer: '不同学院截止日可能不同，建议以教务系统「报名中心」显示为准。',
      validUntil: '2026-04-01',
      reviewer: '待补充来源'
    }
  ],
  reports: [
    { id: 'r1', target: '帖子 · 匿名同学 A', reason: '疑似人身攻击', status: '待处理', time: '今天 09:20' },
    { id: 'r2', target: '闲置 · 高等数学教材', reason: '疑似虚假描述', status: '处理中', time: '昨天' },
    { id: 'r3', target: '评论 · 豆豆', reason: '泄露他人隐私', status: '已隐藏', time: '2 天前' }
  ],
  campusShare: {
    groups: [
      { name: '校区共享组', campuses: ['长安校区', '雁塔校区'], mode: '共享' }
    ],
    note: '用户仍可主动选择「全校」查看；共享仅限本校实例，不跨校。'
  },
  adminUser: {
    name: '王敏',
    role: '知识维护 / 内容审核',
    school: '西安邮电大学'
  },
  schools: [
    { id: 'sch_xupt', name: '西安邮电大学', status: '运行中', version: 'v1.0.3', users: '12.4k', entry: '太阳码 · 西邮专属' },
    { id: 'sch_south', name: '南岭学院', status: '运行中', version: 'v1.0.3', users: '6.1k', entry: '公众号菜单' },
    { id: 'sch_bay', name: '湾区理工', status: '灰度中', version: 'v1.1.0-rc', users: '2.8k', entry: '邀请码开通' }
  ]
};
