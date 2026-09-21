const mapPoints = [
  { id: "tst", region: "hk", day: 1, label: "尖沙咀与维港", detail: "Day 1 · 维港初见", lat: 22.2930, lng: 114.1694 },
  { id: "peak", region: "hk", day: 2, label: "太平山顶", detail: "Day 2 · 早到避峰", lat: 22.2759, lng: 114.1455 },
  { id: "taikwun", region: "hk", day: 2, label: "大馆 / 中环", detail: "Day 2 · 文艺街区", lat: 22.2814, lng: 114.1544 },
  { id: "kennedy", region: "hk", day: 2, label: "坚尼地城", detail: "Day 2 · 海旁日落", lat: 22.2817, lng: 114.1284 },
  { id: "wk", region: "hk", day: 3, label: "西九文化区", detail: "Day 3 · M+ / 香港故宫二选一", lat: 22.3002, lng: 114.1572 },
  { id: "ssp", region: "hk", day: 3, label: "深水埗", detail: "Day 3 · 老城街拍", lat: 22.3308, lng: 114.1622 },
  { id: "mk", region: "hk", day: 3, label: "旺角", detail: "Day 3 · 夜市与简单购物", lat: 22.3193, lng: 114.1694 },
  { id: "ferry", region: "hk", day: 4, label: "上环港澳码头", detail: "Day 4 · 船票待确认", lat: 22.2875, lng: 114.1520 },
  { id: "taipa", region: "mo", day: 4, label: "氹仔旧城区", detail: "Day 4 · 官也街与龙环葡韵", lat: 22.1532, lng: 113.5561 },
  { id: "venetian", region: "mo", day: 4, label: "威尼斯人 / 路氹夜景", detail: "Day 4 · 免费逛拍", lat: 22.1485, lng: 113.5614 },
  { id: "ruins", region: "mo", day: 5, label: "大三巴", detail: "Day 5 · 08:20 抵达", lat: 22.1975, lng: 113.5409 },
  { id: "senado", region: "mo", day: 5, label: "议事亭前地", detail: "Day 5 · 老城步行线", lat: 22.1933, lng: 113.5398 },
  { id: "coloane", region: "mo", day: 6, label: "路环村", detail: "Day 6 · 半日慢游", lat: 22.1169, lng: 113.5513 }
];

const dayPlans = [
  {
    day: 1, date: "10/02 周五", city: "香港", title: "维港是最好的开场", lead: "两人分别从成都、长沙抵港，会合后只走一条轻松的海港线；不把最难排队的山顶塞进到达日。",
    crowd: "★★★★ 高", rain: "K11 + 香港艺术馆", budget: "HK$180–280 / 人", tip: "如果两人 16:00 后才会合，直接从星光大道开始，弥敦道与庙街都可以删。",
    schedule: [
      ["12:00–14:30", "抵港、入境、酒店放行李", "具体时间跟随两班待确认航班；建议在酒店会合。", "香港国际机场"],
      ["15:00", "尖沙咀与弥敦道", "第一天只建立城市方向感，不安排购物任务。", "Tsim Sha Tsui Hong Kong"],
      ["16:30", "K11 MUSEA / 香港艺术馆", "热或下雨时先在室内休息；晴天则缩短到 45 分钟。", "K11 MUSEA"],
      ["17:40", "星光大道 → 维港", "把蓝调时刻留给海旁，拍港岛天际线。", "Avenue of Stars Hong Kong"],
      ["19:00", "天星小轮往返", "低成本但城市辨识度很高，建议保留。", "Star Ferry Tsim Sha Tsui Pier"],
      ["20:30", "庙街宵夜（可选）", "如果航班疲惫，直接回酒店，不影响主线。", "Temple Street Night Market"]
    ]
  },
  {
    day: 2, date: "10/03 周六", city: "香港", title: "山海与中环旧城", lead: "这是香港最经典的一天。只为太平山稍早出门；下午用步行串联大馆、PMQ 和上环，傍晚去坚尼地城。",
    crowd: "★★★★★ 峰值", rain: "大馆 + PMQ + 中环街市", budget: "HK$250–420 / 人", tip: "山顶缆车排队超过 45 分钟，立即改乘巴士。保留山顶，删掉“必须坐缆车”。",
    schedule: [
      ["08:20", "出发前往太平山", "全程唯一一个 09:00 前后的热门点。", "Victoria Peak Hong Kong"],
      ["09:00–11:00", "太平山顶与卢吉道视野", "先看全景，再决定是否逛凌霄阁付费区。", "Lugard Road Lookout"],
      ["12:00", "中环午餐", "避开山顶餐饮溢价。", "Central Hong Kong"],
      ["13:30", "大馆", "历史建筑与当代艺术叠在一起，雨天也能玩。", "Tai Kwun Hong Kong"],
      ["15:00", "PMQ → 荷李活道", "看设计店、壁画和旧街；购物只在真的喜欢时发生。", "PMQ Hong Kong"],
      ["17:20", "坚尼地城海旁", "不死磕网红篮球场机位，沿海向西更轻松。", "Kennedy Town Promenade"],
      ["20:00", "叮叮车回中环 / 湾仔", "把交通本身当成体验，之后回酒店。", "Kennedy Town Tram Terminus"]
    ]
  },
  {
    day: 3, date: "10/04 周日", city: "香港", title: "西九文艺，再进老城", lead: "白天把付费博物馆控制为一个，下午转向深水埗的街道质感，晚上在旺角解决简单购物。",
    crowd: "★★★★ 高", rain: "M+ / 香港故宫", budget: "HK$220–380 / 人", tip: "M+ 与香港故宫二选一；对博物馆兴趣一般，就选更便宜或更想看的那个，另一馆只看免费公共区。",
    schedule: [
      ["09:15", "酒店出发", "今天恢复正常节奏，不需要早起。", "West Kowloon Cultural District"],
      ["10:00–12:30", "M+ / 香港故宫二选一", "请在出发前按最新展览与学生票再做选择。", "West Kowloon Cultural District"],
      ["12:30", "西九午餐与海滨", "给草坪、海风和建筑外景留时间。", "Art Park West Kowloon"],
      ["16:00", "深水埗街拍", "北河街、鸭寮街一带更偏生活气息。", "Pei Ho Street Sham Shui Po"],
      ["18:30", "旺角晚餐", "黄金周晚间人多，避免把购物清单拉太长。", "Mong Kok Hong Kong"],
      ["19:30–21:30", "花园街 / 波鞋街 / 女人街", "简单逛，不专门安排购物日。", "Fa Yuen Street"]
    ]
  },
  {
    day: 4, date: "10/05 周一", city: "香港 → 澳门", title: "换一座城，也换慢一点", lead: "上午从香港转澳门，下午只走氹仔旧城与路氹夜景。船票、码头和行李寄存仍需在酒店确定后落位。",
    crowd: "★★★★ 高", rain: "威尼斯人 / 伦敦人", budget: "HK$/MOP 350–520 / 人", tip: "如果船晚点，先删巴黎人和永利皇宫，只保留官也街—龙环葡韵—威尼斯人三点。",
    schedule: [
      ["08:30", "早餐、退房", "先睡够，再转场。", "Sheung Wan Hong Kong Macau Ferry Terminal"],
      ["10:30 左右", "香港 → 澳门", "班次与票价待确认；黄金周建议提前购买。", "Hong Kong Macau Ferry Terminal"],
      ["12:00", "澳门酒店寄存行李", "优先选新马路 / 葡京一带双床房。", "San Ma Lo Macau"],
      ["13:30", "官也街午餐", "先吃正餐，再挑一两样小吃，不排网红店长队。", "Rua do Cunha Macau"],
      ["15:00", "龙环葡韵", "薄荷绿建筑适合拍照，也能从热闹中抽离。", "Taipa Houses Museum"],
      ["17:30", "威尼斯人 → 巴黎人 / 伦敦人外景", "综合度假区只逛拍，不把购物变成任务。", "The Venetian Macao"],
      ["21:00", "返回酒店", "留出洗漱和整理照片的时间。", "San Ma Lo Macau"]
    ]
  },
  {
    day: 5, date: "10/06 周二", city: "澳门", title: "老城要看清晨的版本", lead: "这天是行程里第二个早起例外。先拿下大三巴和恋爱巷，再慢慢下行到议事亭前地与新马路。",
    crowd: "★★★★ 高", rain: "澳门博物馆 + 老城骑楼", budget: "MOP 180–320 / 人", tip: "大三巴 10:30 后人潮明显上升。若没能早到，就缩短正面拍照，转去恋爱巷和大炮台找角度。",
    schedule: [
      ["07:40", "起床与早餐", "只为老城热门点早这一次。", "Ruins of St. Paul's"],
      ["08:20–09:15", "大三巴", "先拍台阶与牌坊，再从侧后方看遗址。", "Ruins of St. Paul's"],
      ["09:15", "恋爱巷 → 大炮台", "短距离步行，视角比挤在正面更丰富。", "Travessa da Paixao Macau"],
      ["10:30", "疯堂斜巷 / 东望洋新街", "偏文艺与老街，按体力二选一。", "Calcada da Igreja de Sao Lazaro"],
      ["13:30", "议事亭前地 → 玫瑰堂", "午后人多，目标是看建筑与铺地，不追求空镜。", "Senado Square Macau"],
      ["16:00", "十月初五街 / 福隆新街", "若已疲惫，两处只选一处。", "Rua de Cinco de Outubro Macau"],
      ["19:30", "新葡京与南湾湖夜景", "免费收尾，不再塞付费体验。", "Nam Van Lake Macau"]
    ]
  },
  {
    day: 6, date: "10/07 周三", city: "澳门 → 待确认", title: "把最后半天交给路环", lead: "路环的价值不是景点密度，而是与前五天完全不同的慢节奏。返程时间一旦确定，再决定是否保留。",
    crowd: "★★☆ 较低", rain: "改妈阁庙 / 提前返程", budget: "MOP 100–220 / 人", tip: "若返程要求 14:00 前到口岸或机场，整段路环删除；它是高质量可选项，不应制造赶路。",
    schedule: [
      ["08:30", "退房、寄存行李", "返程方式仍待确认。", "Coloane Village Macau"],
      ["09:20", "公交前往路环", "避开打车，把路上的城市变化也看进去。", "Coloane Village Macau"],
      ["10:00", "路环老街与安德鲁周边", "蛋挞只买想吃的，不为排队打卡。", "Lord Stow's Bakery Coloane"],
      ["11:00", "圣方济各圣堂与海边", "短距离散步，作为旅程降速。", "Chapel of St Francis Xavier Coloane"],
      ["12:30", "午餐后返回取行李", "按航班 / 高铁 / 口岸倒推离开时间。", "Coloane Village Macau"],
      ["返程", "澳门 → 待确认", "返程城市、交通方式、班次均待确认。", "Macau"]
    ]
  }
];

const spotData = [
  {
    id: "harbour", region: "香港", day: "D1", name: "维港 · 天星小轮", status: "must", decision: "建议保留", file: "Hong Kong Night Skyline.jpg", source: "https://commons.wikimedia.org/wiki/File:Hong_Kong_Night_Skyline.jpg",
    reason: "第一次到香港最直接的城市名片；海面、天际线与小轮同时出现，成本又很低。", fit: "首次到访 / 夜景 / 电影感", stay: "1.5–2 小时", crowd: "★★★★ 高", rain: "★★★ 一般", cut: "不要删主线；如果到港晚，只删弥敦道和庙街。", query: "Star Ferry Tsim Sha Tsui Pier"
  },
  {
    id: "peak", region: "香港", day: "D2", name: "太平山顶", status: "must", decision: "建议保留", file: "Vista del Puerto de Victoria desde la Cumbre Victoria, Hong Kong, 2013-08-09, DD 11- 12 PAN.jpg", source: "https://commons.wikimedia.org/wiki/File:Vista_del_Puerto_de_Victoria_desde_la_Cumbre_Victoria,_Hong_Kong,_2013-08-09,_DD_11-_12_PAN.jpg",
    reason: "一眼理解香港的山、海、港岛与九龙关系；这也是地形感最强的景点。", fit: "城市全景 / 第一次港澳 / 广角摄影", stay: "2–2.5 小时", crowd: "★★★★★ 峰值", rain: "★☆ 较差", cut: "保留山顶，可删缆车；低云或暴雨时整段改室内。", query: "Victoria Peak Hong Kong"
  },
  {
    id: "taikwun", region: "香港", day: "D2", name: "大馆", status: "must", decision: "建议保留", file: "HK Central 中環大館 Tai Kwun Open Day November 2018 SSG 100.jpg", source: "https://commons.wikimedia.org/wiki/File:HK_Central_%E4%B8%AD%E7%92%B0%E5%A4%A7%E9%A4%A8_Tai_Kwun_Open_Day_November_2018_SSG_100.jpg",
    reason: "殖民时期建筑、监狱空间与当代展览放在同一组院落里，和中环摩天楼形成反差。", fit: "建筑 / 文艺 / 雨天", stay: "1–1.5 小时", crowd: "★★★ 中高", rain: "★★★★ 友好", cut: "如果只想看城市全景可删；但对文艺拍照偏好很匹配。", query: "Tai Kwun Hong Kong"
  },
  {
    id: "mplus", region: "香港", day: "D3", name: "M+ / 香港故宫", status: "optional", decision: "二选一", file: "M+ Museum Hong Kong.jpg", source: "https://commons.wikimedia.org/wiki/File:M%2B_Museum_Hong_Kong.jpg",
    reason: "西九既能看展，也能从海滨拍建筑和港岛；一个主馆足够，不需要两馆通刷。", fit: "当代艺术 / 文化 / 雨天", stay: "2.5–3 小时", crowd: "★★★★ 高", rain: "★★★★★ 很好", cut: "两馆二选一；兴趣一般就只逛免费公共区与海滨。", query: "M+ Museum Hong Kong"
  },
  {
    id: "ruins", region: "澳门", day: "D5", name: "大三巴", status: "must", decision: "建议保留", file: "The Ruins of St. Pauls, Macau (6847680308).jpg", source: "https://commons.wikimedia.org/wiki/File:The_Ruins_of_St._Pauls,_Macau_(6847680308).jpg",
    reason: "它把澳门的中西历史压缩进一面立面，也是老城步行线最清晰的起点。", fit: "首次到访 / 历史 / 地标照", stay: "45–70 分钟", crowd: "★★★★★ 峰值", rain: "★★ 一般", cut: "不建议删；真正应该删的是 10:30 后的长时间空镜等待。", query: "Ruins of St. Paul's Macau"
  },
  {
    id: "senado", region: "澳门", day: "D5", name: "议事亭前地", status: "must", decision: "建议保留", file: "Senado Square Macao.jpg", source: "https://commons.wikimedia.org/wiki/File:Senado_Square_Macao.jpg",
    reason: "葡式建筑立面与波浪形铺地最集中，适合把大三巴串成完整的历史城区路线。", fit: "建筑 / 街拍 / 第一次澳门", stay: "45–60 分钟", crowd: "★★★★★ 峰值", rain: "★★★ 一般", cut: "主线保留；人太多就不停留等空镜，直接边走边看。", query: "Senado Square Macau"
  },
  {
    id: "taipahouses", region: "澳门", day: "D4", name: "龙环葡韵", status: "must", decision: "建议保留", file: "Taipa Houses–Museum 5.jpg", source: "https://commons.wikimedia.org/wiki/File:Taipa_Houses%E2%80%93Museum_5.jpg",
    reason: "薄荷绿住宅、湿地和嘉模堂一带，比官也街更松弛，是氹仔段最好拍的免费点。", fit: "人像 / 建筑 / 慢逛", stay: "50–80 分钟", crowd: "★★★ 中高", rain: "★★ 一般", cut: "如果暴雨就删，改去威尼斯人室内；晴天建议保留。", query: "Taipa Houses Museum Macau"
  },
  {
    id: "venetian", region: "澳门", day: "D4", name: "威尼斯人 · 路氹夜景", status: "optional", decision: "可删一半", file: "20260524 The Venetian Macao.jpg", source: "https://commons.wikimedia.org/wiki/File:20260524_The_Venetian_Macao.jpg",
    reason: "能感受澳门综合度假区的尺度，也是最稳妥的雨天与夜间去处；但不必每一家都逛。", fit: "夜景 / 室内 / 初次到访", stay: "1.5–2 小时", crowd: "★★★★ 高", rain: "★★★★★ 很好", cut: "威尼斯人保留即可；巴黎人、伦敦人、永利皇宫按体力删减。", query: "The Venetian Macao"
  },
  {
    id: "coloane", region: "澳门", day: "D6", name: "路环村", status: "optional", decision: "高质量可选", file: "Coloane, Macau.JPG", source: "https://commons.wikimedia.org/wiki/File:Coloane,_Macau.JPG",
    reason: "从老城与路氹的密度里抽离，最后用海边、低层街巷和慢节奏收尾。", fit: "慢旅行 / 街拍 / 不购物", stay: "2.5–3 小时", crowd: "★★☆ 较低", rain: "★☆ 较差", cut: "返程早就整段删除；它不值得用赶车风险换取。", query: "Coloane Village Macau"
  }
];

const budgets = {
  3000: {
    label: "节省型", total: "¥6,000", note: "人均 ¥3,000；酒店要尽早订，付费馆只留一个，购物严格控制。",
    items: [["双床住宿 · 5 晚（两人合计）", "¥2,900"], ["6 天餐饮", "¥1,300"], ["港澳市内交通", "¥500"], ["香港 → 澳门", "¥360"], ["门票 / 展馆", "¥300"], ["小吃与简单购物", "¥400"], ["机动金", "¥240"]]
  },
  4000: {
    label: "平衡型", total: "¥8,000", note: "人均 ¥4,000；住宿更稳妥，餐饮不必处处压价，也留少量购物空间。",
    items: [["双床住宿 · 5 晚（两人合计）", "¥3,600"], ["6 天餐饮", "¥1,700"], ["港澳市内交通", "¥640"], ["香港 → 澳门", "¥420"], ["门票 / 展馆", "¥600"], ["小吃与简单购物", "¥600"], ["机动金", "¥440"]]
  },
  5000: {
    label: "舒适型", total: "¥10,000", note: "人均 ¥5,000；给黄金周房价与临时打车留余量，但仍不包含内地往返大交通。",
    items: [["双床住宿 · 5 晚（两人合计）", "¥4,400"], ["6 天餐饮", "¥2,100"], ["港澳市内交通", "¥760"], ["香港 → 澳门", "¥460"], ["门票 / 展馆", "¥900"], ["小吃与简单购物", "¥900"], ["机动金", "¥480"]]
  }
};

const commonsImage = (file) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=1200`;
const navUrl = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

function renderDayTabs(activeDay = 1) {
  const tabs = document.querySelector("#day-tabs");
  tabs.innerHTML = dayPlans.map((plan) => `
    <button class="day-tab ${plan.day === activeDay ? "is-active" : ""}" type="button" role="tab" aria-selected="${plan.day === activeDay}" data-day="${plan.day}">
      <span>DAY ${plan.day} · ${plan.date.split(" ")[0]}</span><strong>${plan.city}</strong>
    </button>`).join("");
  tabs.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => {
    renderDayTabs(Number(button.dataset.day));
    renderDayPanel(Number(button.dataset.day));
  }));
}

function renderDayPanel(day) {
  const plan = dayPlans.find((item) => item.day === day);
  const panel = document.querySelector("#day-panel");
  panel.innerHTML = `
    <article class="day-plan">
      <div class="day-plan__summary">
        <p class="day-plan__meta">DAY ${plan.day} · ${plan.date} · ${plan.city}</p>
        <h3>${plan.title}</h3>
        <p class="day-plan__lead">${plan.lead}</p>
        <div class="day-plan__signals">
          <div><span>黄金周拥挤度</span><b>${plan.crowd}</b></div>
          <div><span>雨天替代</span><b>${plan.rain}</b></div>
          <div><span>当日预算</span><b>${plan.budget}</b></div>
          <div><span>出门节奏</span><b>${plan.day === 2 || plan.day === 5 ? "早起例外" : "09:00 左右"}</b></div>
        </div>
        <p class="day-plan__tip"><b>取舍建议：</b>${plan.tip}</p>
      </div>
      <ol class="schedule">
        ${plan.schedule.map(([time, title, detail, query]) => `<li><time>${time}</time><strong>${title}</strong><p>${detail}</p><a href="${navUrl(query)}" target="_blank" rel="noopener">导航 ↗</a></li>`).join("")}
      </ol>
    </article>`;
}

function renderSpots(filter = "all") {
  const grid = document.querySelector("#spot-grid");
  grid.innerHTML = spotData.map((spot) => {
    const visible = filter === "all" || (filter === "rain" ? spot.rain.includes("★★★★★") || spot.rain.includes("★★★★") : spot.status === filter);
    return `<article class="spot-card" data-status="${spot.status}" data-rain="${spot.rain}" ${visible ? "" : "hidden"}>
      <div class="spot-card__media">
        <img src="${commonsImage(spot.file)}" alt="${spot.name}实景" loading="lazy">
        <span class="spot-card__badge">${spot.decision}</span>
        <a class="spot-card__source" href="${spot.source}" target="_blank" rel="noopener" aria-label="查看${spot.name}照片来源">照片来源 ↗</a>
      </div>
      <div class="spot-card__body">
        <div class="spot-card__eyebrow"><span>${spot.region} · ${spot.day}</span><b>${spot.crowd}</b></div>
        <h3>${spot.name}</h3>
        <p class="spot-card__reason"><b>为什么值得去：</b>${spot.reason}</p>
        <dl class="spot-meta">
          <div><dt>适合谁</dt><dd>${spot.fit}</dd></div>
          <div><dt>建议停留</dt><dd>${spot.stay}</dd></div>
          <div><dt>黄金周</dt><dd>${spot.crowd}</dd></div>
          <div><dt>雨天适配</dt><dd>${spot.rain}</dd></div>
        </dl>
        <p class="cut-note"><b>怎么删：</b>${spot.cut}</p>
        <a class="spot-nav" href="${navUrl(spot.query)}" target="_blank" rel="noopener">打开导航 ↗</a>
      </div>
    </article>`;
  }).join("");
}

function setupSpotFilters() {
  document.querySelectorAll("[data-spot-filter]").forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll("[data-spot-filter]").forEach((item) => item.classList.toggle("is-active", item === button));
    renderSpots(button.dataset.spotFilter);
  }));
}

function renderBudget(level = 4000) {
  const switcher = document.querySelector("#budget-switch");
  switcher.innerHTML = Object.entries(budgets).map(([amount, budget]) => `
    <button class="budget-option ${Number(amount) === level ? "is-active" : ""}" type="button" data-budget="${amount}">
      <span>${budget.label}</span><strong>¥${amount} / 人</strong>
    </button>`).join("");
  switcher.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => renderBudget(Number(button.dataset.budget))));
  const budget = budgets[level];
  document.querySelector("#budget-card").innerHTML = `
    <div class="budget-total"><div><span>TWO PEOPLE TOTAL</span><strong>${budget.total}</strong><em>${budget.label} · 不含内地往返</em></div><p>${budget.note}</p></div>
    <dl class="budget-breakdown">${budget.items.map(([name, amount]) => `<div><dt>${name}</dt><dd>${amount}</dd></div>`).join("")}</dl>`;
}

function setupMap() {
  if (!window.L) {
    document.querySelector("#trip-map").innerHTML = '<p class="no-script">地图资源暂时未加载，请稍后刷新；下方行程与导航仍可使用。</p>';
    return;
  }
  const map = L.map("trip-map", { scrollWheelZoom: false, zoomControl: true });
  const terrain = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
    maxZoom: 17,
    attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, style © <a href="https://opentopomap.org">OpenTopoMap</a>'
  }).addTo(map);
  const streets = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  L.control.layers({ "地形底图": terrain, "街道底图": streets }, null, { position: "topright" }).addTo(map);

  const bounds = {
    all: L.latLngBounds([[22.08, 113.51], [22.36, 114.22]]),
    hk: L.latLngBounds([[22.25, 114.10], [22.35, 114.19]]),
    mo: L.latLngBounds([[22.09, 113.51], [22.22, 113.59]])
  };
  const setView = (key) => map.fitBounds(bounds[key], { padding: [28, 28] });
  setView("all");

  const groups = { hk: L.featureGroup().addTo(map), mo: L.featureGroup().addTo(map) };
  mapPoints.forEach((point) => {
    const icon = L.divIcon({ className: "", html: `<div class="custom-map-icon custom-map-icon--${point.region}">${point.day}</div>`, iconSize: [28, 28], iconAnchor: [14, 14] });
    L.marker([point.lat, point.lng], { icon }).bindPopup(`<strong>${point.label}</strong><span>${point.detail}</span><a href="${navUrl(point.label)}" target="_blank" rel="noopener">导航 ↗</a>`).addTo(groups[point.region]);
  });
  const hkRoute = mapPoints.filter((point) => point.region === "hk").map((point) => [point.lat, point.lng]);
  const moRoute = mapPoints.filter((point) => point.region === "mo").map((point) => [point.lat, point.lng]);
  L.polyline(hkRoute, { color: "#287b90", weight: 4, opacity: .82, dashArray: "8 7" }).addTo(groups.hk);
  L.polyline(moRoute, { color: "#b65c3a", weight: 4, opacity: .82, dashArray: "8 7" }).addTo(groups.mo);
  L.polyline([[22.2875,114.1520],[22.1624,113.5757]], { color: "#e6b96d", weight: 3, opacity: .9, dashArray: "5 8" }).addTo(map);

  document.querySelectorAll("[data-map-view]").forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll("[data-map-view]").forEach((item) => item.classList.toggle("is-active", item === button));
    setView(button.dataset.mapView);
  }));
}

document.addEventListener("DOMContentLoaded", () => {
  renderDayTabs(1);
  renderDayPanel(1);
  renderSpots();
  setupSpotFilters();
  renderBudget(4000);
  setupMap();
  document.querySelector("#print-plan").addEventListener("click", () => window.print());
});

