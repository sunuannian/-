// 游戏资讯网站 - 公共脚本

// ========== 文章数据（10篇，覆盖所有游戏）==========
const articles = [
    {
        id: 1,
        title: "《黑神话：悟空》DLC\"再战轮回\"正式公布",
        date: "2025-03-20",
        summary: "游戏科学今日正式公布了《黑神话：悟空》首个大型DLC\"再战轮回\"，预计2025年冬季发售。新增三个全新章节、四场Boss战以及全新的变身系统。",
        content: "游戏科学今日正式公布了《黑神话：悟空》首个大型DLC\"再战轮回\"，预计2025年冬季发售。新增三个全新章节、四场Boss战以及全新的变身系统。玩家将跟随天命人探索前世今生的轮回之谜。开发团队表示，DLC的体量约为本体的40%，售价定为98元。同时，游戏销量已突破3000万份。",
        img: "images/wukong.png",
        tags: ["国产游戏", "动作", "黑神话"],
        likes: 342,
        gameRef: "黑神话：悟空"
    },
    {
        id: 2,
        title: "《艾尔登法环》衍生作正在开发中？舅舅党爆料",
        date: "2025-03-18",
        summary: "知名爆料人透露，FromSoftware正在与万代合作开发《艾尔登法环》的衍生作品，可能聚焦于\"破碎战争\"的前传故事。",
        content: "知名爆料人透露，FromSoftware正在与万代合作开发《艾尔登法环》的衍生作品，可能聚焦于\"破碎战争\"的前传故事。据悉，该项目将由FromSoftware内部的一个新团队负责，与正在开发的《装甲核心》新作并行推进。",
        img: "images/ring.png",
        tags: ["魂系", "开放世界", "爆料"],
        likes: 287,
        gameRef: "艾尔登法环"
    },
    {
        id: 3,
        title: "《GTA6》新预告片暗示2026年发售？",
        date: "2025-03-15",
        summary: "R星在最新发布的预告片中暗藏了多个彩蛋，粉丝发现多处线索指向2026年第一季度发售。",
        content: "R星在最新发布的预告片中暗藏了多个彩蛋，粉丝发现多处线索指向2026年第一季度发售。预告片中的一个车牌号码、背景广告牌上的日期以及角色对话中的暗示，都被解读为发售时间的线索。R星官方尚未对此做出回应。",
        img: "images/6.jpg",
        tags: ["R星", "GTA6", "期待大作"],
        likes: 521,
        gameRef: "GTA6"
    },
    {
        id: 4,
        title: "《原神》4.7版本前瞻：全新区域枫丹延展区开放",
        date: "2025-03-12",
        summary: "米哈游公布了4.7版本更新内容，新增两位五星角色以及全新的水下探索区域。",
        content: "米哈游公布了4.7版本更新内容，新增两位五星角色以及全新的水下探索区域。新角色包括五星水元素角色\"艾琳娜\"和四星火元素角色\"卡修斯\"。水下探索区域将带来全新的战斗机制和解谜玩法。",
        img: "images/ys.png",
         galleryImages: [
            "images/ys.png",
            "images/ys2.jpg",  // 需要准备不同的图片
            "images/ys3.jpg"
        ],
        tags: ["原神", "米哈游", "二次元"],
        likes: 198,
        gameRef: "原神"
    },
    {
        id: 5,
        title: "《星穹铁道》2.0版本创下收入新高",
        date: "2025-03-10",
        summary: "据第三方数据统计，《崩坏：星穹铁道》2.0版本上线首周移动端收入突破1.5亿美元。",
        content: "据第三方数据统计，《崩坏：星穹铁道》2.0版本上线首周移动端收入突破1.5亿美元，超越了1.0版本的首周表现。新角色\"花火\"和\"黑天鹅\"的卡池表现尤为亮眼。",
        img: "images/bt.png",
        tags: ["米哈游", "回合制", "星穹铁道"],
        likes: 256,
        gameRef: "星穹铁道"
    },
    {
        id: 6,
        title: "《暗黑破坏神4》新赛季\"憎恨之躯\"上线",
        date: "2025-03-08",
        summary: "暴雪发布了第五赛季\"憎恨之躯\"，新增职业\"灵巫\"以及全新的终局挑战。",
        content: "暴雪发布了第五赛季\"憎恨之躯\"，新增职业\"灵巫\"以及全新的终局挑战。灵巫可以召唤自然之灵协助战斗，拥有独特的变形机制。赛季通行证包含30级奖励。",
        img: "images/IV.png",
        tags: ["暴雪", "暗黑", "ARPG"],
        likes: 312,
        gameRef: "暗黑破坏神4"
    },
    {
        id: 7,
        title: "《CS2》Major赛事2025上海站：中国战队首进八强",
        date: "2025-03-14",
        summary: "在刚刚结束的CS2 Major上海站比赛中，中国战队TYLOO历史性闯入八强，创造了CNCS的最好成绩。",
        content: "在刚刚结束的CS2 Major上海站比赛中，中国战队TYLOO历史性闯入八强，创造了CNCS的最好成绩。本次Major采用全新赛制，奖金池高达200万美元。决赛将由Vitality对阵FaZe，两支欧洲豪门将争夺最后的冠军奖杯。",
        img: "images/tyloo.webp",
        tags: ["CS2", "电竞", "Major"],
        likes: 189,
        gameRef: "CS2"
    },
    {
        id: 8,
        title: "《英雄联盟》2025全球总决赛落地巴黎，LPL赛区形势分析",
        date: "2025-03-11",
        summary: "拳头游戏宣布2025年英雄联盟全球总决赛将在法国巴黎举办，LPL赛区目前积分榜形势激烈。",
        content: "拳头游戏宣布2025年英雄联盟全球总决赛将在法国巴黎举办，比赛场馆为雅高酒店竞技场。LPL赛区方面，BLG、JDG、TES三队积分领先，FPX和WBG紧随其后。春季赛冠军将直接获得门票，剩余名额通过全年积分决定。",
        img: "images/yxlm.png",
        tags: ["英雄联盟", "电竞", "S赛"],
        likes: 267,
        gameRef: "英雄联盟"
    },
    {
        id: 9,
        title: "暴雪官宣：《暗黑破坏神4》第二部资料片2025年底上线",
        date: "2025-03-05",
        summary: "暴雪在开发者直播中确认，《暗黑破坏神4》第二部资料片正在开发中，预计2025年第四季度发布。",
        content: "暴雪在开发者直播中确认，《暗黑破坏神4》第二部资料片正在开发中，预计2025年第四季度发布。新资料片将新增一个职业、两个区域以及全新的终局玩法\"深渊秘境\"。团队表示会根据玩家反馈对装备系统进行大幅优化。",
        img: "images/IV.png",
        tags: ["暴雪", "暗黑", "资料片"],
        likes: 203,
        gameRef: "暗黑破坏神4"
    },
    {
        id: 10,
        title: "《CS2》全新武器箱上线，蝴蝶刀价格暴涨",
        date: "2025-03-03",
        summary: "V社今日推送了CS2的新春更新，包含全新武器箱\"蛇年珍藏\"以及多项游戏性调整。",
        content: "V社今日推送了CS2的新春更新，包含全新武器箱\"蛇年珍藏\"以及多项游戏性调整。新武器箱中包含蝴蝶刀、骷髅匕首等热门皮肤，上线首日市场交易量激增，蝴蝶刀最高档皮肤价格已突破3万元。",
        img: "images/cs.png",
         galleryImages: [
            "images/cs.png",
            "images/cs2.jpg",  // 需要准备不同的图片
            "images/cs3.jpg"
        ],
        tags: ["CS2", "更新", "饰品"],
        likes: 156,
        gameRef: "CS2"
    }
];

// ========== 游戏数据 ==========
const games = [
    { name: "艾尔登法环", type: "RPG", rating: 4.8, img: "images/ring.png" },
    { name: "黑神话：悟空", type: "动作", rating: 4.9, img: "images/wukong.png" },
    { name: "GTA6", type: "动作", rating: 4.7, img: "images/6.jpg" },
    { name: "原神", type: "RPG", rating: 4.5, img: "images/ys.png" },
    { name: "暗黑破坏神4", type: "RPG", rating: 4.3, img: "images/IV.png" },
    { name: "星穹铁道", type: "RPG", rating: 4.6, img: "images/bt.png" },
    { name: "CS2", type: "射击", rating: 4.4, img: "images/cs.png" },
    { name: "英雄联盟", type: "策略", rating: 4.5, img: "images/yxlm.png" }
];

// ========== 游戏详情数据（简介 + 攻略教程）==========
const gameDetails = {
    "黑神话：悟空": {
        name: "黑神话：悟空",
        type: "动作",
        rating: 4.9,
        img: "images/wukong.png",
        releaseDate: "2024年8月20日",
        developer: "游戏科学",
        publisher: "游戏科学",
        platform: "PC / PS5 / Xbox Series X|S",
        description: "《黑神话：悟空》是一款以中国古典名著《西游记》为背景的动作角色扮演游戏。玩家将扮演\"天命人\"，探索一个充满神话与妖怪的宏大世界，体验精彩的战斗和深邃的剧情。",
        story: "游戏讲述了一位\"天命人\"为探寻昔日英雄齐天大圣孙悟空的传说，踏上充满危险与奇迹的西游之路。玩家将面对各种强大的妖怪，揭开隐藏在神话背后的真相。",
        guide: "💡 新手攻略提示：\n1. 学会完美闪避：在敌人攻击命中前的瞬间按下闪避键，可以触发完美闪避并获得短暂无敌帧。\n2. 积攒棍势：通过普通攻击和闪避积攒棍势槽，消耗棍势可释放强力重击。\n3. 探索地图：地图中有大量隐藏的宝箱、灵蕴和支线任务，不要急于推进主线。\n4. 搭配装备：不同的防具和武器有不同的属性加成，根据Boss特点选择合适的装备。\n5. 学习法术：随着剧情推进可以学习定身术、毫毛变等实用法术，善用它们可以大幅降低战斗难度。"
    },
    "艾尔登法环": {
        name: "艾尔登法环",
        type: "RPG",
        rating: 4.8,
        img: "images/ring.png",
        releaseDate: "2022年2月25日",
        developer: "FromSoftware",
        publisher: "万代南梦宫",
        platform: "PC / PS4 / PS5 / Xbox One / Xbox Series X|S",
        description: "《艾尔登法环》是一款黑暗幻想风格的动作RPG，由宫崎英高与乔治·R·R·马丁合作打造。玩家将在广阔的\"交界地\"中探索，挑战强大的半神，寻找艾尔登法环的秘密。",
        story: "在名为\"交界地\"的区域，艾尔登法环被粉碎，半神们夺取了法环碎片\"大卢恩\"，陷入了无休止的战争。玩家扮演\"褪色者\"，被召唤回交界地，目的是收集大卢恩，成为新的艾尔登之王。",
        guide: "💡 新手攻略提示：\n1. 开局建议选择\"流浪骑士\"职业，自带100%物理防御盾牌。\n2. 优先升级生命值（HP），前期20点生命值可以避免被秒杀。\n3. 遇到打不过的Boss先探索其他区域，刷魂升级后再来。\n4. 善用骨灰召唤灵体协助战斗，可以大幅降低Boss战难度。\n5. 注意负重管理，保持\"中等负重\"以获得最佳翻滚手感。"
    },
    "GTA6": {
        name: "GTA6",
        type: "动作",
        rating: 4.7,
        img: "images/6.jpg",
        releaseDate: "2026年（预计）",
        developer: "Rockstar Games",
        publisher: "Rockstar Games",
        platform: "PC / PS5 / Xbox Series X|S",
        description: "《GTA6》是R星备受期待的开放世界动作犯罪游戏，故事背景设定在虚构的迈阿密——罪恶都市。游戏将带来系列史上最大的地图和最丰富的互动体验。",
        story: "游戏讲述一对雌雄大盗在罪恶都市中的犯罪传奇。玩家将扮演露西娅和她的搭档，在毒品、金钱和暴力的漩涡中挣扎求生，试图逃脱过去，寻找更好的明天。",
        guide: "💡 玩法前瞻（基于预告片分析）：\n1. 游戏地图包含主城区、沼泽地、沙滩和岛屿等多种地形。\n2. 载具类型包括汽车、摩托、船只、飞机、直升机。\n3. 新增更多肢体的交互动作，可进入更多室内场景。\n4. 角色切换系统升级，双主角任务配合将更紧密。\n5. 通缉系统优化，AI警察的追捕行为更真实智能。"
    },
    "原神": {
        name: "原神",
        type: "RPG",
        rating: 4.5,
        img: "images/ys.png",
        releaseDate: "2020年9月28日",
        developer: "米哈游",
        publisher: "米哈游",
        platform: "PC / PS4 / PS5 / iOS / Android / Nintendo Switch",
        description: "《原神》是一款开放世界冒险RPG，玩家将扮演旅行者，在奇幻的提瓦特大陆上探索七国，结识伙伴，击败敌人，寻找失散的亲人。",
        story: "玩家扮演一位被未知之神封印力量的旅行者，与伙伴派蒙一起穿越七国，寻找神的残片，解开亲人的下落和提瓦特大陆的秘密。",
        guide: "💡 新手攻略提示：\n1. 前期原石不要抽常驻池，优先抽限定角色池。\n2. 体力（原粹树脂）每天都要用完，优先打经验花和金币花。\n3. 元素反应是核心机制，火+雷=超载，水+冰=冻结。\n4. 每天完成四个每日任务，攒原石抽卡。\n5. 前期武器和圣遗物不需要强求五星，四星过渡即可。"
    },
    "暗黑破坏神4": {
        name: "暗黑破坏神4",
        type: "RPG",
        rating: 4.3,
        img: "images/IV.png",
        releaseDate: "2023年6月6日",
        developer: "暴雪娱乐",
        publisher: "暴雪娱乐",
        platform: "PC / PS4 / PS5 / Xbox One / Xbox Series X|S",
        description: "《暗黑破坏神4》是一款暗黑风动作RPG，故事发生在《暗黑3》的几十年后。玩家将探索开放世界的庇护之地，阻止莉莉丝的阴谋。",
        story: "莉莉丝被召唤回庇护之地，黑暗的浪潮再次席卷世界。玩家将选择五大职业之一，深入维尔杰、斯科斯格伦等区域，最终面对掌握命运的女儿莉莉丝。",
        guide: "💡 新手攻略提示：\n1. 开荒建议选择死灵法师或法师，清怪效率高。\n2. 前期不需要刻意刷装备，跟着主线走即可。\n3. 完成低语古币任务可以快速获得传奇装备。\n4. 世界事件如军团袭击、世界Boss奖励丰厚。\n5. 50级解禁巅峰盘后开始认真构建Build。"
    },
    "星穹铁道": {
        name: "星穹铁道",
        type: "RPG",
        rating: 4.6,
        img: "images/bt.png",
        releaseDate: "2023年4月26日",
        developer: "米哈游",
        publisher: "米哈游",
        platform: "PC / PS5 / iOS / Android",
        description: "《崩坏：星穹铁道》是一款银河冒险RPG，玩家将乘坐星穹列车穿越银河，探索不同星球，解决\"星核危机\"。",
        story: "玩家扮演一位被神秘存在\"星核\"寄宿的开拓者，登上星穹列车，与姬子、丹恒、三月七等同伴一起，沿着星轨前进，寻找自己的身世之谜。",
        guide: "💡 新手攻略提示：\n1. 初期主练主角、三月七、丹恒即可推完主线。\n2. 体力全部用来刷角色晋阶材料和行迹材料。\n3. 模拟宇宙每周必打，可以兑换强力光锥。\n4. 忘却之庭后期再尝试，前期打不过很正常。\n5. 角色优先级：主C > 盾奶 > 辅助 > 副C。"
    },
    "CS2": {
        name: "CS2",
        type: "射击",
        rating: 4.4,
        img: "images/cs.png",
        releaseDate: "2023年9月27日",
        developer: "Valve",
        publisher: "Valve",
        platform: "PC",
        description: "《CS2》是《反恐精英》系列的正统续作，基于Source 2引擎全面重制。游戏带来了全新的烟雾弹物理效果、更精准的刷新率机制以及全面的地图优化。",
        story: "没有传统剧情，玩家将在多个经典地图（如沙漠2、炼狱镇）中进行5v5对战，反恐精英需要阻止恐怖分子引爆炸弹或拯救人质。",
        guide: "💡 新手攻略提示：\n1. 前500小时建议只打死亡竞赛熟悉枪械弹道。\n2. 准星设置推荐：静态、尺寸4、厚度1、间隙-3。\n3. 灵敏度控制在800DPI × 1.2~1.5之间为宜。\n4. 购买原则：第一局手枪局，第二局输方经济局。\n5. 烟雾弹是攻防核心道具，学会烟点非常重要。"
    },
    "英雄联盟": {
        name: "英雄联盟",
        type: "策略",
        rating: 4.5,
        img: "images/yxlm.png",
        releaseDate: "2009年10月27日",
        developer: "Riot Games",
        publisher: "拳头游戏",
        platform: "PC",
        description: "《英雄联盟》是一款5v5多人在线战术竞技游戏，玩家选择不同的英雄，与队友配合摧毁敌方基地水晶。",
        story: "符文之地上，各阵营的英雄为了不同的信念而战。召唤师通过控制英雄，在召唤师峡谷中争夺胜利。",
        guide: "💡 新手攻略提示：\n1. 新手推荐玩\"盖伦\"上单或\"艾希\"AD位。\n2. 补刀是最重要基本功，每6个兵≈1个人头经济。\n3. 多看小地图(每5秒瞟一眼)，避免被抓。\n4. 前期不求击杀，安稳补刀发育就是优势。\n5. 出装使用游戏推荐出装即可，不用自己琢磨。"
    }
};

// 根据游戏名称获取游戏详情
function getGameDetails(gameName) {
    return gameDetails[gameName] || {
        name: gameName,
        type: "未知",
        rating: 0,
        img: "https://picsum.photos/800/400",
        releaseDate: "待定",
        developer: "待定",
        publisher: "待定",
        platform: "待定",
        description: "暂无游戏简介",
        story: "暂无剧情介绍",
        guide: "💡 攻略稍后更新..."
    };
}

// 渲染游戏详情页
function renderGameDetail() {
    const params = new URLSearchParams(window.location.search);
    const gameName = params.get('name');
    
    if (!gameName) {
        document.getElementById('game-detail-container').innerHTML = '<p>未找到游戏信息</p><a href="games.html">返回游戏库</a>';
        return;
    }
    
    const game = getGameDetails(decodeURIComponent(gameName));
    document.title = `${game.name} - 游戏详情 - GameNews`;
    
    // 生成星级评分
    const fullStars = Math.floor(game.rating);
    const emptyStars = 5 - fullStars;
    let starsHtml = '<span style="color: #ffc107;">' + '★'.repeat(fullStars) + '</span>';
    starsHtml += '<span style="color: #666;">' + '☆'.repeat(emptyStars) + '</span>';
    
    // 格式化攻略文本（保留换行）
    const guideHtml = game.guide.replace(/\n/g, '<br>');
    
    const html = `
        <div class="game-detail">
            <div class="game-detail-header">
                <a href="games.html" class="back-link">← 返回游戏库</a>
                <h1 class="game-detail-title">${game.name}</h1>
            </div>
            
            <div class="game-detail-grid">
                <div class="game-detail-image">
                    <img src="${game.img}" alt="${game.name}" onerror="this.src='https://placehold.co/800x400/2a2a2a/888?text=${game.name}'">
                </div>
                <div class="game-detail-info">
                    <div class="game-info-row">
                        <span class="info-label">类型：</span>
                        <span class="info-value">${game.type}</span>
                    </div>
                    <div class="game-info-row">
                        <span class="info-label">评分：</span>
                        <span class="info-value">${starsHtml} ${game.rating}</span>
                    </div>
                    <div class="game-info-row">
                        <span class="info-label">发售日期：</span>
                        <span class="info-value">${game.releaseDate}</span>
                    </div>
                    <div class="game-info-row">
                        <span class="info-label">开发商：</span>
                        <span class="info-value">${game.developer}</span>
                    </div>
                    <div class="game-info-row">
                        <span class="info-label">发行商：</span>
                        <span class="info-value">${game.publisher}</span>
                    </div>
                    <div class="game-info-row">
                        <span class="info-label">平台：</span>
                        <span class="info-value">${game.platform}</span>
                    </div>
                </div>
            </div>
            
            <div class="game-detail-section">
                <h2>📖 游戏简介</h2>
                <p>${game.description}</p>
            </div>
            
            <div class="game-detail-section">
                <h2>📜 剧情背景</h2>
                <p>${game.story}</p>
            </div>
            
            <div class="game-detail-section">
                <h2>🎮 新手攻略/基础教程</h2>
                <div class="guide-content">${guideHtml}</div>
            </div>
            
            <div class="game-detail-section">
                <h2>📰 相关资讯</h2>
                <div id="related-articles"></div>
            </div>
        </div>
    `;
    
    document.getElementById('game-detail-container').innerHTML = html;
    
    // 加载相关资讯
    loadRelatedArticles(game.name);
}

// 加载与游戏相关的资讯文章
function loadRelatedArticles(gameName) {
    const container = document.getElementById('related-articles');
    if (!container) return;
    
    const related = articles.filter(article => article.gameRef === gameName);
    
    if (related.length === 0) {
        container.innerHTML = '<p>暂无相关资讯</p>';
        return;
    }
    
    let html = '<div class="related-grid">';
    related.forEach(article => {
        html += `
            <div class="card related-card">
                <img src="${article.img}" class="card-img" alt="${article.title}" onerror="this.src='https://placehold.co/400x200/2a2a2a/888?text=Game+News'">
                <div class="card-content">
                    <div class="card-meta">${article.date}</div>
                    <h3 class="card-title"><a href="article.html?id=${article.id}">${article.title}</a></h3>
                    <p class="card-summary">${article.summary.substring(0, 60)}...</p>
                </div>
            </div>
        `;
    });
    html += '</div>';
    container.innerHTML = html;
}

// ========== 游戏热度排行榜数据 ==========
const gameRankData = [
    { name: "黑神话：悟空", type: "动作", score: 4.9, hotValue: 9850, link: "game-detail.html?name=黑神话：悟空" },
    { name: "艾尔登法环", type: "RPG", score: 4.8, hotValue: 8720, link: "game-detail.html?name=艾尔登法环" },
    { name: "GTA6", type: "动作", score: 4.7, hotValue: 7650, link: "game-detail.html?name=GTA6" },
    { name: "星穹铁道", type: "RPG", score: 4.6, hotValue: 6540, link: "game-detail.html?name=星穹铁道" },
    { name: "原神", type: "RPG", score: 4.5, hotValue: 5430, link: "game-detail.html?name=原神" },
    { name: "英雄联盟", type: "策略", score: 4.5, hotValue: 4980, link: "game-detail.html?name=英雄联盟" },
    { name: "CS2", type: "射击", score: 4.4, hotValue: 4210, link: "game-detail.html?name=CS2" },
    { name: "暗黑破坏神4", type: "RPG", score: 4.3, hotValue: 3870, link: "game-detail.html?name=暗黑破坏神4" }
];

// ========== 辅助函数 ==========
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function getArticleIdByGameName(gameName) {
    const article = articles.find(a => a.gameRef === gameName);
    return article ? article.id : 1;
}

// ========== 渲染首页文章（显示全部10篇）==========
function renderHomeArticles() {
    const container = document.getElementById('articles-container');
    if (!container) {
        console.log('articles-container 不存在');
        return;
    }
    
    // 显示全部文章，按日期倒序排列（最新的在前）
    const sortedArticles = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    let html = '';
    sortedArticles.forEach(article => {
        html += `
            <div class="card">
                <img src="${article.img}" class="card-img" alt="${article.title}" onerror="this.src='https://placehold.co/400x200/2a2a2a/888?text=Game+News'">
                <div class="card-content">
                    <div class="card-meta">${article.date}</div>
                    <h3 class="card-title"><a href="article.html?id=${article.id}">${article.title}</a></h3>
                    <p class="card-summary">${article.summary.substring(0, 80)}...</p>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
    console.log(`已渲染 ${sortedArticles.length} 篇文章`);
}

// ========== 渲染游戏库 ==========
function renderGames(filter = '全部') {
    const container = document.getElementById('games-container');
    if (!container) return;
    
    let filtered = [...games];
    if (filter !== '全部') {
        filtered = games.filter(game => game.type === filter);
    }
    
    let html = '';
    filtered.forEach(game => {
        const fullStars = Math.floor(game.rating);
        const emptyStars = 5 - fullStars;
        let starsHtml = '★'.repeat(fullStars) + '☆'.repeat(emptyStars);
        const articleId = getArticleIdByGameName(game.name);
        
        html += `
            <div class="card">
                <a href="game-detail.html?name=${encodeURIComponent(game.name)}">
                    <img src="${game.img}" class="card-img" alt="${game.name}" onerror="this.src='https://placehold.co/400x200/2a2a2a/888?text=${game.name}'">
                </a>
                <div class="card-content">
                    <h3 class="card-title">
                        <a href="game-detail.html?name=${encodeURIComponent(game.name)}">${game.name}</a>
                    </h3>
                    <div class="game-type">类型：${game.type}</div>
                    <div class="rating">${starsHtml} ${game.rating}</div>
                    <div style="margin-top: 12px;">
                        <a href="article.html?id=${articleId}" style="color: var(--primary-color); font-size: 0.85rem; text-decoration: none;">📰 查看相关资讯 →</a>
                    </div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html || '<p>暂无游戏数据</p>';
}

// ========== 游戏库筛选 ==========
function initGameFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (!filterBtns.length) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            renderGames(filter);
        });
    });
}

// ========== 文章详情页 - 多样化排版 ==========

// 布局类型定义
const LAYOUT_TYPES = {
    STANDARD: 'standard',
    HERO: 'hero',
    SIDEBAR: 'sidebar',
    QUOTE: 'quote',
    GALLERY: 'gallery',
    MINIMAL: 'minimal'
};

// 为每篇文章指定布局类型
const articleLayout = {
    1: LAYOUT_TYPES.HERO,
    2: LAYOUT_TYPES.QUOTE,
    3: LAYOUT_TYPES.STANDARD,
    4: LAYOUT_TYPES.GALLERY,
    5: LAYOUT_TYPES.MINIMAL,
    6: LAYOUT_TYPES.STANDARD,
    7: LAYOUT_TYPES.HERO,
    8: LAYOUT_TYPES.QUOTE,
    9: LAYOUT_TYPES.STANDARD,
    10: LAYOUT_TYPES.GALLERY
};

// 根据布局类型分发
function renderArticleByLayout(article, layout) {
    switch(layout) {
        case LAYOUT_TYPES.HERO: return renderHeroLayout(article);
        case LAYOUT_TYPES.QUOTE: return renderQuoteLayout(article);
        case LAYOUT_TYPES.GALLERY: return renderGalleryLayout(article);
        case LAYOUT_TYPES.MINIMAL: return renderMinimalLayout(article);
        default: return renderStandardLayout(article);
    }
}

// 1. 标准布局
function renderStandardLayout(article) {
    return `
        <div class="article-standard">
            <div class="article-header">
                <div class="article-meta-category">🔥 热点资讯</div>
                <h1 class="article-title">${article.title}</h1>
                <div class="article-meta">
                    <span>📅 ${article.date}</span>
                    <span>🏷️ ${article.tags.join(' · ')}</span>
                    <span>👁️ 阅读 ${Math.floor(Math.random() * 1000) + 100}次</span>
                </div>
            </div>
            <div class="article-feature-img">
                <img src="${article.img}" alt="${article.title}" onerror="this.src='https://placehold.co/800x400/2a2a2a/888?text=Game+News'">
                <div class="img-caption">游戏官方宣传图</div>
            </div>
            <div class="article-content">
                <p>${article.content}</p>
            </div>
            <div class="article-tags">
                ${article.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
            </div>
        </div>
    `;
}

// 2. 大图置顶布局
function renderHeroLayout(article) {
    return `
        <div class="article-hero">
            <div class="hero-bg">
                <img src="${article.img}" alt="${article.title}">
                <div class="hero-overlay"></div>
            </div>
            <div class="hero-content">
                <div class="hero-category">🎮 独家报道</div>
                <h1 class="hero-title">${article.title}</h1>
                <div class="hero-meta">
                    <span>📅 ${article.date}</span>
                    <span>✍️ GameNews 编辑部</span>
                </div>
            </div>
            <div class="hero-body">
                <div class="container-narrow">
                    <div class="article-content">
                        <p>${article.content}</p>
                    </div>
                    <div class="article-tags">
                        ${article.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 3. 引用式布局
function renderQuoteLayout(article) {
    return `
        <div class="article-quote">
            <div class="container-narrow">
                <div class="quote-header">
                    <div class="quote-icon">"</div>
                    <div class="quote-badge">💬 独家爆料</div>
                </div>
                <h1 class="quote-title">${article.title}</h1>
                <div class="article-meta">
                    <span>📅 ${article.date}</span>
                    <span>🔍 来源：匿名知情人士</span>
                </div>
                <div class="quote-feature">
                    <img src="${article.img}" alt="${article.title}">
                </div>
                <div class="article-content">
                    <p>${article.content}</p>
                </div>
                <div class="quote-footer">
                    <p>— 本文内容基于多方信源核实 —</p>
                </div>
            </div>
        </div>
    `;
}

// 4. 画廊布局
function renderGalleryLayout(article) {
    // 使用文章自带的图片数组，如果没有则使用默认图片
    const galleryImages = article.galleryImages || [
        article.img,
        article.img,
        article.img
    ];
    
    return `
        <div class="article-gallery">
            <div class="container">
                <div class="gallery-header">
                    <h1 class="gallery-title">${article.title}</h1>
                    <div class="article-meta">
                        <span>📅 ${article.date}</span>
                        <span>📸 图片专辑</span>
                    </div>
                </div>
                <div class="gallery-grid">
                    ${galleryImages.map((img, i) => `
                        <div class="gallery-item">
                            <img src="${img}" alt="图片 ${i+1}" onerror="this.src='https://placehold.co/600x400/2a2a2a/888?text=Image+${i+1}'">
                        </div>
                    `).join('')}
                </div>
                <div class="gallery-content article-content">
                    <p>${article.content}</p>
                </div>
            </div>
        </div>
    `;
}

// 5. 极简布局
function renderMinimalLayout(article) {
    return `
        <div class="article-minimal">
            <div class="container-narrow">
                <div class="minimal-header">
                    <div class="minimal-date">${article.date}</div>
                    <h1 class="minimal-title">${article.title}</h1>
                    <div class="minimal-divider"></div>
                </div>
                <div class="minimal-feature">
                    <img src="${article.img}" alt="${article.title}">
                </div>
                <div class="article-content minimal-content">
                    <p>${article.content}</p>
                </div>
                <div class="minimal-footer">
                    <div class="article-tags">
                        ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 加载文章详情
function loadArticleDetail() {
    const params = new URLSearchParams(window.location.search);
    const articleId = parseInt(params.get('id'));
    const article = articles.find(a => a.id === articleId);
    
    if (!article) {
        const container = document.getElementById('article-container');
        if (container) container.innerHTML = '<p>文章不存在</p>';
        return;
    }
    
    document.title = `${article.title} - GameNews`;
    
    const layout = articleLayout[articleId] || LAYOUT_TYPES.STANDARD;
    const articleHtml = renderArticleByLayout(article, layout);
    
    const interactHtml = `
        <div class="like-section" id="like-section">
            <div><span style="font-size: 1.2rem;">👍 觉得这篇文章怎么样？</span></div>
            <button class="like-btn" id="like-btn">
                <span>❤️</span>
                <span>点赞</span>
                <span class="like-count" id="like-count">0</span>
            </button>
            <div class="like-tip"><span id="like-tip-text">✨ 期待你的点赞支持！</span></div>
        </div>
        <div class="comment-section">
            <h3>💬 评论区</h3>
            <div class="comment-input">
                <input type="text" id="comment-author" placeholder="昵称" style="flex:0.5;">
                <input type="text" id="comment-content" placeholder="说点什么..." style="flex:2;">
                <button class="btn" id="submit-comment">发表</button>
            </div>
            <div id="comments-list" class="comment-list"></div>
        </div>
    `;
    
    const container = document.getElementById('article-container');
    if (container) {
        container.innerHTML = articleHtml + interactHtml;
    }
    
    // 绑定评论和点赞事件
    loadComments();
    const submitBtn = document.getElementById('submit-comment');
    if (submitBtn) {
        submitBtn.removeEventListener('click', addComment);
        submitBtn.addEventListener('click', addComment);
    }
    if (document.getElementById('like-btn')) {
        initLikeButton();
    }
}

// ========== 评论功能 ==========
function loadComments() {
    const comments = JSON.parse(localStorage.getItem('game_comments') || '[]');
    const container = document.getElementById('comments-list');
    
    if (!container) return;
    
    if (comments.length === 0) {
        container.innerHTML = '<p>暂无评论，抢个沙发吧~</p>';
        return;
    }
    
    let html = '';
    comments.slice().reverse().forEach(comment => {
        html += `
            <div class="comment-item">
                <span class="comment-author">${escapeHtml(comment.author)}</span>
                <span style="color:#888; margin-left:0.5rem;">${comment.time}</span>
                <p style="margin-top:0.3rem;">${escapeHtml(comment.content)}</p>
            </div>
        `;
    });
    container.innerHTML = html;
}

function addComment() {
    const authorInput = document.getElementById('comment-author');
    const contentInput = document.getElementById('comment-content');
    
    if (!authorInput || !contentInput) return;
    
    const author = authorInput.value.trim();
    const content = contentInput.value.trim();
    
    if (!author || !content) {
        alert('请填写昵称和评论内容');
        return;
    }
    
    const comments = JSON.parse(localStorage.getItem('game_comments') || '[]');
    comments.push({
        author: author,
        content: content,
        time: new Date().toLocaleString()
    });
    localStorage.setItem('game_comments', JSON.stringify(comments));
    
    authorInput.value = '';
    contentInput.value = '';
    loadComments();
}

// ========== 联系表单 ==========
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const message = document.getElementById('contact-message').value.trim();
        
        if (!name || !message) {
            alert('请填写昵称和留言内容');
            return;
        }
        
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('请输入正确的邮箱格式');
            return;
        }
        
        const messages = JSON.parse(localStorage.getItem('contact_messages') || '[]');
        messages.push({
            name: name,
            email: email,
            message: message,
            time: new Date().toLocaleString()
        });
        localStorage.setItem('contact_messages', JSON.stringify(messages));
        
        alert('留言已发送！（本地保存）');
        form.reset();
    });
}

// ========== 游戏排行榜渲染 ==========
function renderGameRank() {
    const container = document.getElementById('rank-container');
    if (!container) {
        console.log('rank-container 不存在');
        return;
    }
    
    let html = '<ul class="rank-list">';
    gameRankData.forEach((game, index) => {
        const rank = index + 1;
        let rankClass = '';
        if (rank === 1) rankClass = 'top-1';
        else if (rank === 2) rankClass = 'top-2';
        else if (rank === 3) rankClass = 'top-3';
        
        html += `
            <li class="rank-item">
                <div class="rank-number ${rankClass}">${rank}</div>
                <div class="rank-info">
                    <div class="rank-name">
                        <a href="${game.link}">${game.name}</a>
                    </div>
                    <div class="rank-meta">${game.type} · 热度 ${game.hotValue}</div>
                </div>
                <div class="rank-score">${game.score}</div>
            </li>
        `;
    });
    html += '</ul>';
    container.innerHTML = html;
}

// ========== 文章点赞功能 ==========
function getCurrentArticleId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
}

function loadArticleLikes(articleId) {
    const likedArticles = JSON.parse(localStorage.getItem('liked_articles') || '{}');
    const articleLikes = JSON.parse(localStorage.getItem('article_likes') || '{}');
    
    const article = articles.find(a => a.id === articleId);
    let likes = article ? article.likes : 0;
    
    if (articleLikes[articleId]) {
        likes = articleLikes[articleId];
    }
    
    return { likes, isLiked: likedArticles[articleId] === true };
}

function saveArticleLike(articleId) {
    const likedArticles = JSON.parse(localStorage.getItem('liked_articles') || '{}');
    let articleLikes = JSON.parse(localStorage.getItem('article_likes') || '{}');
    
    if (likedArticles[articleId]) {
        return { success: false, message: '你已经点过赞啦！' };
    }
    
    likedArticles[articleId] = true;
    localStorage.setItem('liked_articles', JSON.stringify(likedArticles));
    
    let currentLikes = articleLikes[articleId] || (articles.find(a => a.id === articleId)?.likes || 0);
    currentLikes++;
    articleLikes[articleId] = currentLikes;
    localStorage.setItem('article_likes', JSON.stringify(articleLikes));
    
    return { success: true, likes: currentLikes };
}

function initLikeButton() {
    const likeBtn = document.getElementById('like-btn');
    const likeCountSpan = document.getElementById('like-count');
    const likeTipSpan = document.getElementById('like-tip-text');
    
    if (!likeBtn) return;
    
    const articleId = getCurrentArticleId();
    if (!articleId || isNaN(articleId)) return;
    
    const { likes, isLiked } = loadArticleLikes(articleId);
    if (likeCountSpan) likeCountSpan.textContent = likes;
    
    if (isLiked) {
        likeBtn.classList.add('liked');
        if (likeTipSpan) likeTipSpan.textContent = '❤️ 感谢你的支持！';
    }
    
    likeBtn.addEventListener('click', function() {
        const result = saveArticleLike(articleId);
        if (result.success) {
            if (likeCountSpan) likeCountSpan.textContent = result.likes;
            likeBtn.classList.add('liked');
            if (likeTipSpan) likeTipSpan.textContent = '❤️ 感谢你的点赞！';
            likeBtn.style.transform = 'scale(1.05)';
            setTimeout(() => {
                likeBtn.style.transform = '';
            }, 200);
        } else {
            if (likeTipSpan) likeTipSpan.textContent = result.message;
            setTimeout(() => {
                if (likeTipSpan) likeTipSpan.textContent = '✨ 期待你的点赞支持！';
            }, 2000);
        }
    });
}

// ========== 高亮当前导航 ==========
function highlightCurrentNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
}

// ========== 主题切换功能 ==========
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = '☀️';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '🌙';
    }
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '🌙';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '☀️';
        }
    });
}

// ========== 搜索功能 ==========
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const keyword = this.value.trim();
            if (keyword) {
                window.location.href = `search.html?q=${encodeURIComponent(keyword)}`;
            }
        }
    });
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const keyword = searchInput.value.trim();
            if (keyword) {
                window.location.href = `search.html?q=${encodeURIComponent(keyword)}`;
            }
        });
    }
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function highlightText(text, keyword) {
    if (!keyword) return text;
    const regex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
}

function renderSearchResults() {
    const keyword = getQueryParam('q');
    if (!keyword) return;
    
    const keywordSpan = document.getElementById('search-keyword');
    if (keywordSpan) keywordSpan.textContent = keyword;
    
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = keyword;
    
    const results = articles.filter(article => {
        return article.title.toLowerCase().includes(keyword.toLowerCase()) ||
               article.summary.toLowerCase().includes(keyword.toLowerCase()) ||
               article.content.toLowerCase().includes(keyword.toLowerCase()) ||
               article.tags.some(tag => tag.toLowerCase().includes(keyword.toLowerCase()));
    });
    
    const gameResults = games.filter(game => {
        return game.name.toLowerCase().includes(keyword.toLowerCase()) ||
               game.type.toLowerCase().includes(keyword.toLowerCase());
    });
    
    const resultCount = results.length + gameResults.length;
    const resultCountSpan = document.getElementById('result-count');
    if (resultCountSpan) {
        resultCountSpan.textContent = `找到 ${resultCount} 条相关结果`;
    }
    
    const container = document.getElementById('search-results');
    const noResultDiv = document.getElementById('no-result');
    
    if (resultCount === 0) {
        if (container) container.innerHTML = '';
        if (noResultDiv) noResultDiv.style.display = 'block';
        return;
    }
    
    if (noResultDiv) noResultDiv.style.display = 'none';
    
    let html = '';
    
    if (results.length > 0) {
        html += `<div style="grid-column: 1/-1; margin-bottom: 1rem;"><h3>📰 资讯 (${results.length})</h3></div>`;
        results.forEach(article => {
            html += `
                <div class="card">
                    <img src="${article.img}" class="card-img" alt="${article.title}" onerror="this.src='https://placehold.co/400x200/2a2a2a/888?text=Game+News'">
                    <div class="card-content">
                        <div class="card-meta">${article.date}</div>
                        <h3 class="card-title"><a href="article.html?id=${article.id}">${highlightText(article.title, keyword)}</a></h3>
                        <p class="card-summary">${highlightText(article.summary.substring(0, 100), keyword)}...</p>
                        <div class="tags" style="margin-top: 0.5rem;">
                            ${article.tags.map(tag => `<span class="tag">${highlightText(tag, keyword)}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        });
    }
    
    if (gameResults.length > 0) {
        html += `<div style="grid-column: 1/-1; margin: 1rem 0 1rem 0;"><h3>🎮 游戏 (${gameResults.length})</h3></div>`;
        gameResults.forEach(game => {
            const fullStars = Math.floor(game.rating);
            const emptyStars = 5 - fullStars;
            let starsHtml = '★'.repeat(fullStars) + '☆'.repeat(emptyStars);
            const articleId = getArticleIdByGameName(game.name);
            
            html += `
                <div class="card">
                    <img src="${game.img}" class="card-img" alt="${game.name}" onerror="this.src='https://placehold.co/400x200/2a2a2a/888?text=${game.name}'">
                    <div class="card-content">
                        <h3 class="card-title"><a href="article.html?id=${articleId}">${highlightText(game.name, keyword)}</a></h3>
                        <div class="game-type">类型：${highlightText(game.type, keyword)}</div>
                        <div class="rating">${starsHtml} ${game.rating}</div>
                        <div style="margin-top: 12px;">
                            <a href="article.html?id=${articleId}" style="color: var(--primary-color); font-size: 0.85rem; text-decoration: none;">📰 查看相关资讯 →</a>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    
    if (container) container.innerHTML = html;
}

// ========== 页面初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSearch();
    highlightCurrentNav();
    
    if (document.getElementById('articles-container')) {
        renderHomeArticles();
        if (document.getElementById('rank-container')) {
            renderGameRank();
        }
    }
    
    if (document.getElementById('games-container')) {
        renderGames('全部');
        initGameFilters();
    }
    
    if (document.getElementById('game-detail-container')) {
        renderGameDetail();
    }
    
    if (document.getElementById('article-container')) {
        loadArticleDetail();
    }
    
    if (document.getElementById('contact-form')) {
        initContactForm();
    }
    
    if (document.getElementById('search-results')) {
        renderSearchResults();
    }
});