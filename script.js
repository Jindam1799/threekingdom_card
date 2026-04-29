// 1. 300단어 탑재
const wordList = [
  { id: 1, cn: '我', py: 'wǒ', kr: '나' },
  { id: 2, cn: '你', py: 'nǐ', kr: '너' },
  { id: 3, cn: '他', py: 'tā', kr: '그' },
  { id: 4, cn: '她', py: 'tā', kr: '그녀' },
  { id: 5, cn: '我们', py: 'wǒmen', kr: '우리' },
  { id: 6, cn: '你们', py: 'nǐmen', kr: '너희들' },
  { id: 7, cn: '大家', py: 'dàjiā', kr: '모두' },
  { id: 8, cn: '这', py: 'zhè', kr: '이, 이것' },
  { id: 9, cn: '那', py: 'nà', kr: '저, 그것' },
  { id: 10, cn: '哪', py: 'nǎ', kr: '어느, 어디' },
  { id: 11, cn: '谁', py: 'shéi', kr: '누구' },
  { id: 12, cn: '什么', py: 'shénme', kr: '무엇' },
  { id: 13, cn: '去', py: 'qù', kr: '가다' },
  { id: 14, cn: '来', py: 'lái', kr: '오다' },
  { id: 15, cn: '回', py: 'huí', kr: '돌아가다' },
  { id: 16, cn: '走', py: 'zǒu', kr: '걷다, 떠나다' },
  { id: 17, cn: '进', py: 'jìn', kr: '들어가다' },
  { id: 18, cn: '出', py: 'chū', kr: '나가다' },
  { id: 19, cn: '到', py: 'dào', kr: '도착하다' },
  { id: 20, cn: '坐', py: 'zuò', kr: '앉다, 타다' },
  { id: 21, cn: '开', py: 'kāi', kr: '열다, 운전하다' },
  { id: 22, cn: '做', py: 'zuò', kr: '하다, 만들다' },
  { id: 23, cn: '吃', py: 'chī', kr: '먹다' },
  { id: 24, cn: '喝', py: 'hē', kr: '마시다' },
  { id: 25, cn: '看', py: 'kàn', kr: '보다' },
  { id: 26, cn: '听', py: 'tīng', kr: '듣다' },
  { id: 27, cn: '说', py: 'shuō', kr: '말하다' },
  { id: 28, cn: '问', py: 'wèn', kr: '묻다' },
  { id: 29, cn: '学', py: 'xué', kr: '배우다' },
  { id: 30, cn: '学习', py: 'xuéxí', kr: '공부하다' },
  { id: 31, cn: '练习', py: 'liànxí', kr: '연습하다' },
  { id: 32, cn: '买', py: 'mǎi', kr: '사다' },
  { id: 33, cn: '卖', py: 'mài', kr: '팔다' },
  { id: 34, cn: '给', py: 'gěi', kr: '주다' },
  { id: 35, cn: '拿', py: 'ná', kr: '가지다' },
  { id: 36, cn: '用', py: 'yòng', kr: '사용하다' },
  { id: 37, cn: '帮助', py: 'bāngzhù', kr: '돕다' },
  { id: 38, cn: '开始', py: 'kāishǐ', kr: '시작하다' },
  { id: 39, cn: '结束', py: 'jiéshù', kr: '끝나다' },
  { id: 40, cn: '喜欢', py: 'xǐhuan', kr: '좋아하다' },
  { id: 41, cn: '爱', py: 'ài', kr: '사랑하다, 좋아하다' },
  { id: 42, cn: '觉得', py: 'juéde', kr: '~라고 생각하다' },
  { id: 43, cn: '知道', py: 'zhīdào', kr: '알다' },
  { id: 44, cn: '认识', py: 'rènshi', kr: '알다, 알게 되다' },
  { id: 45, cn: '想', py: 'xiǎng', kr: '생각하다, ~하고 싶다' },
  { id: 46, cn: '要', py: 'yào', kr: '원하다, 필요하다' },
  { id: 47, cn: '可以', py: 'kěyǐ', kr: '~할 수 있다' },
  { id: 48, cn: '会', py: 'huì', kr: '~할 줄 알다' },
  { id: 49, cn: '能', py: 'néng', kr: '~할 수 있다' },
  { id: 50, cn: '应该', py: 'yīnggāi', kr: '~해야 한다' },
  { id: 51, cn: '好', py: 'hǎo', kr: '좋다' },
  { id: 52, cn: '大', py: 'dà', kr: '크다' },
  { id: 53, cn: '小', py: 'xiǎo', kr: '작다' },
  { id: 54, cn: '多', py: 'duō', kr: '많다' },
  { id: 55, cn: '少', py: 'shǎo', kr: '적다' },
  { id: 56, cn: '高', py: 'gāo', kr: '높다, 키 크다' },
  { id: 57, cn: '矮', py: 'ǎi', kr: '키 작다' },
  { id: 58, cn: '长', py: 'cháng', kr: '길다' },
  { id: 59, cn: '短', py: 'duǎn', kr: '짧다' },
  { id: 60, cn: '快', py: 'kuài', kr: '빠르다' },
  { id: 61, cn: '慢', py: 'màn', kr: '느리다' },
  { id: 62, cn: '新', py: 'xīn', kr: '새롭다' },
  { id: 63, cn: '旧', py: 'jiù', kr: '낡다' },
  { id: 64, cn: '贵', py: 'guì', kr: '비싸다' },
  { id: 65, cn: '便宜', py: 'piányi', kr: '싸다' },
  { id: 66, cn: '漂亮', py: 'piàoliang', kr: '예쁘다' },
  { id: 67, cn: '忙', py: 'máng', kr: '바쁘다' },
  { id: 68, cn: '累', py: 'lèi', kr: '피곤하다' },
  { id: 69, cn: '容易', py: 'róngyì', kr: '쉽다' },
  { id: 70, cn: '难', py: 'nán', kr: '어렵다' },
  { id: 71, cn: '高兴', py: 'gāoxìng', kr: '기쁘다' },
  { id: 72, cn: '开心', py: 'kāixīn', kr: '즐겁다' },
  { id: 73, cn: '紧张', py: 'jǐnzhāng', kr: '긴장하다' },
  { id: 74, cn: '安全', py: 'ānquán', kr: '안전하다' },
  { id: 75, cn: '重要', py: 'zhòngyào', kr: '중요하다' },
  { id: 76, cn: '今天', py: 'jīntiān', kr: '오늘' },
  { id: 77, cn: '昨天', py: 'zuótiān', kr: '어제' },
  { id: 78, cn: '明天', py: 'míngtiān', kr: '내일' },
  { id: 79, cn: '现在', py: 'xiànzài', kr: '지금' },
  { id: 80, cn: '以前', py: 'yǐqián', kr: '이전' },
  { id: 81, cn: '以后', py: 'yǐhòu', kr: '이후' },
  { id: 82, cn: '最近', py: 'zuìjìn', kr: '최근' },
  { id: 83, cn: '刚才', py: 'gāngcái', kr: '방금' },
  { id: 84, cn: '已经', py: 'yǐjīng', kr: '이미' },
  { id: 85, cn: '经常', py: 'jīngcháng', kr: '자주' },
  { id: 86, cn: '常常', py: 'chángcháng', kr: '자주' },
  { id: 87, cn: '先', py: 'xiān', kr: '먼저' },
  { id: 88, cn: '再', py: 'zài', kr: '다시, 그 후' },
  { id: 89, cn: '还', py: 'hái', kr: '아직, 또' },
  { id: 90, cn: '就', py: 'jiù', kr: '곧, 바로' },
  { id: 91, cn: '也', py: 'yě', kr: '~도' },
  { id: 92, cn: '都', py: 'dōu', kr: '모두' },
  { id: 93, cn: '很', py: 'hěn', kr: '매우' },
  { id: 94, cn: '真', py: 'zhēn', kr: '정말' },
  { id: 95, cn: '太', py: 'tài', kr: '너무' },
  { id: 96, cn: '别', py: 'bié', kr: '~하지 마라' },
  { id: 97, cn: '因为', py: 'yīnwèi', kr: '왜냐하면' },
  { id: 98, cn: '所以', py: 'suǒyǐ', kr: '그래서' },
  { id: 99, cn: '如果', py: 'rúguǒ', kr: '만약' },
  { id: 100, cn: '但是', py: 'dànshì', kr: '하지만' },
  { id: 101, cn: '地方', py: 'dìfang', kr: '곳, 장소' },
  { id: 102, cn: '家', py: 'jiā', kr: '집' },
  { id: 103, cn: '学校', py: 'xuéxiào', kr: '학교' },
  { id: 104, cn: '教室', py: 'jiàoshì', kr: '교실' },
  { id: 105, cn: '图书馆', py: 'túshūguǎn', kr: '도서관' },
  { id: 106, cn: '商店', py: 'shāngdiàn', kr: '상점' },
  { id: 107, cn: '超市', py: 'chāoshì', kr: '마트' },
  { id: 108, cn: '饭店', py: 'fàndiàn', kr: '호텔, 식당' },
  { id: 109, cn: '餐厅', py: 'cāntīng', kr: '식당' },
  { id: 110, cn: '医院', py: 'yīyuàn', kr: '병원' },
  { id: 111, cn: '银行', py: 'yínháng', kr: '은행' },
  { id: 112, cn: '公司', py: 'gōngsī', kr: '회사' },
  { id: 113, cn: '办公室', py: 'bàngōngshì', kr: '사무실' },
  { id: 114, cn: '房间', py: 'fángjiān', kr: '방' },
  { id: 115, cn: '客厅', py: 'kètīng', kr: '거실' },
  { id: 116, cn: '厨房', py: 'chúfáng', kr: '주방' },
  { id: 117, cn: '厕所', py: 'cèsuǒ', kr: '화장실' },
  { id: 118, cn: '门', py: 'mén', kr: '문' },
  { id: 119, cn: '窗户', py: 'chuānghu', kr: '창문' },
  { id: 120, cn: '桌子', py: 'zhuōzi', kr: '책상' },
  { id: 121, cn: '椅子', py: 'yǐzi', kr: '의자' },
  { id: 122, cn: '床', py: 'chuáng', kr: '침대' },
  { id: 123, cn: '车站', py: 'chēzhàn', kr: '정류장, 역' },
  { id: 124, cn: '机场', py: 'jīchǎng', kr: '공항' },
  { id: 125, cn: '路', py: 'lù', kr: '길' },
  { id: 126, cn: '前面', py: 'qiánmiàn', kr: '앞' },
  { id: 127, cn: '后面', py: 'hòumiàn', kr: '뒤' },
  { id: 128, cn: '左边', py: 'zuǒbian', kr: '왼쪽' },
  { id: 129, cn: '右边', py: 'yòubian', kr: '오른쪽' },
  { id: 130, cn: '旁边', py: 'pángbiān', kr: '옆' },
  { id: 131, cn: '附近', py: 'fùjìn', kr: '근처' },
  { id: 132, cn: '里面', py: 'lǐmiàn', kr: '안' },
  { id: 133, cn: '外面', py: 'wàimiàn', kr: '밖' },
  { id: 134, cn: '上面', py: 'shàngmiàn', kr: '위' },
  { id: 135, cn: '下面', py: 'xiàmiàn', kr: '아래' },
  { id: 136, cn: '远', py: 'yuǎn', kr: '멀다' },
  { id: 137, cn: '近', py: 'jìn', kr: '가깝다' },
  { id: 138, cn: '路口', py: 'lùkǒu', kr: '길목, 교차로' },
  { id: 139, cn: '地图', py: 'dìtú', kr: '지도' },
  { id: 140, cn: '方向', py: 'fāngxiàng', kr: '방향' },
  { id: 141, cn: '汽车', py: 'qìchē', kr: '자동차' },
  { id: 142, cn: '出租车', py: 'chūzūchē', kr: '택시' },
  { id: 143, cn: '公共汽车', py: 'gōnggòngqìchē', kr: '버스' },
  { id: 144, cn: '地铁', py: 'dìtiě', kr: '지하철' },
  { id: 145, cn: '飞机', py: 'fēijī', kr: '비행기' },
  { id: 146, cn: '火车', py: 'huǒchē', kr: '기차' },
  { id: 147, cn: '自行车', py: 'zìxíngchē', kr: '자전거' },
  { id: 148, cn: '票', py: 'piào', kr: '표, 티켓' },
  { id: 149, cn: '司机', py: 'sījī', kr: '운전사' },
  { id: 150, cn: '坐', py: 'zuò', kr: '타다, 앉다' },
  { id: 151, cn: '朋友', py: 'péngyou', kr: '친구' },
  { id: 152, cn: '老师', py: 'lǎoshī', kr: '선생님' },
  { id: 153, cn: '学生', py: 'xuésheng', kr: '학생' },
  { id: 154, cn: '爸爸', py: 'bàba', kr: '아빠' },
  { id: 155, cn: '妈妈', py: 'māma', kr: '엄마' },
  { id: 156, cn: '哥哥', py: 'gēge', kr: '형, 오빠' },
  { id: 157, cn: '姐姐', py: 'jiějie', kr: '누나, 언니' },
  { id: 158, cn: '弟弟', py: 'dìdi', kr: '남동생' },
  { id: 159, cn: '妹妹', py: 'mèimei', kr: '여동생' },
  { id: 160, cn: '孩子', py: 'háizi', kr: '아이' },
  { id: 161, cn: '工作', py: 'gōngzuò', kr: '일하다, 일' },
  { id: 162, cn: '上班', py: 'shàngbān', kr: '출근하다' },
  { id: 163, cn: '下班', py: 'xiàbān', kr: '퇴근하다' },
  { id: 164, cn: '休息', py: 'xiūxi', kr: '쉬다' },
  { id: 165, cn: '睡觉', py: 'shuìjiào', kr: '자다' },
  { id: 166, cn: '起床', py: 'qǐchuáng', kr: '일어나다' },
  { id: 167, cn: '洗澡', py: 'xǐzǎo', kr: '샤워하다' },
  { id: 168, cn: '洗手', py: 'xǐshǒu', kr: '손 씻다' },
  { id: 169, cn: '穿', py: 'chuān', kr: '입다' },
  { id: 170, cn: '脱', py: 'tuō', kr: '벗다' },
  { id: 171, cn: '打开', py: 'dǎkāi', kr: '열다' },
  { id: 172, cn: '关', py: 'guān', kr: '닫다, 끄다' },
  { id: 173, cn: '进去', py: 'jìnqù', kr: '들어가다' },
  { id: 174, cn: '出来', py: 'chūlái', kr: '나오다' },
  { id: 175, cn: '回来', py: 'huílái', kr: '돌아오다' },
  { id: 176, cn: '出去', py: 'chūqù', kr: '나가다' },
  { id: 177, cn: '等', py: 'děng', kr: '기다리다' },
  { id: 178, cn: '找', py: 'zhǎo', kr: '찾다' },
  { id: 179, cn: '准备', py: 'zhǔnbèi', kr: '준비하다' },
  { id: 180, cn: '完成', py: 'wánchéng', kr: '완성하다' },
  { id: 181, cn: '问题', py: 'wèntí', kr: '문제' },
  { id: 182, cn: '答案', py: "dá'àn", kr: '답' },
  { id: 183, cn: '考试', py: 'kǎoshì', kr: '시험' },
  { id: 184, cn: '成绩', py: 'chéngjì', kr: '성적' },
  { id: 185, cn: '作业', py: 'zuòyè', kr: '숙제' },
  { id: 186, cn: '名字', py: 'míngzi', kr: '이름' },
  { id: 187, cn: '号码', py: 'hàomǎ', kr: '번호' },
  { id: 188, cn: '时间', py: 'shíjiān', kr: '시간' },
  { id: 189, cn: '机会', py: 'jīhuì', kr: '기회' },
  { id: 190, cn: '事情', py: 'shìqing', kr: '일, 사건' },
  { id: 191, cn: '办法', py: 'bànfǎ', kr: '방법' },
  { id: 192, cn: '方法', py: 'fāngfǎ', kr: '방법' },
  { id: 193, cn: '习惯', py: 'xíguàn', kr: '습관' },
  { id: 194, cn: '希望', py: 'xīwàng', kr: '희망하다' },
  { id: 195, cn: '决定', py: 'juédìng', kr: '결정하다' },
  { id: 196, cn: '参加', py: 'cānjiā', kr: '참가하다' },
  { id: 197, cn: '发现', py: 'fāxiàn', kr: '발견하다' },
  { id: 198, cn: '提高', py: 'tígāo', kr: '향상시키다' },
  { id: 199, cn: '成功', py: 'chénggōng', kr: '성공하다' },
  { id: 200, cn: '失败', py: 'shībài', kr: '실패하다' },
  { id: 201, cn: '因为', py: 'yīnwèi', kr: '왜냐하면' },
  { id: 202, cn: '所以', py: 'suǒyǐ', kr: '그래서' },
  { id: 203, cn: '但是', py: 'dànshì', kr: '하지만' },
  { id: 204, cn: '如果', py: 'rúguǒ', kr: '만약' },
  { id: 205, cn: '虽然', py: 'suīrán', kr: '비록 ~하지만' },
  { id: 206, cn: '还是', py: 'háishì', kr: '그래도, 또는' },
  { id: 207, cn: '和', py: 'hé', kr: '~와, 그리고' },
  { id: 208, cn: '跟', py: 'gēn', kr: '~와, ~에게' },
  { id: 209, cn: '或者', py: 'huòzhě', kr: '혹은' },
  { id: 210, cn: '然后', py: 'ránhòu', kr: '그리고 나서' },
  { id: 211, cn: '以前', py: 'yǐqián', kr: '이전' },
  { id: 212, cn: '以后', py: 'yǐhòu', kr: '이후' },
  { id: 213, cn: '已经', py: 'yǐjīng', kr: '이미' },
  { id: 214, cn: '刚才', py: 'gāngcái', kr: '방금' },
  { id: 215, cn: '马上', py: 'mǎshàng', kr: '곧바로' },
  { id: 216, cn: '终于', py: 'zhōngyú', kr: '마침내' },
  { id: 217, cn: '先', py: 'xiān', kr: '먼저' },
  { id: 218, cn: '再', py: 'zài', kr: '다시, 그 후' },
  { id: 219, cn: '一直', py: 'yìzhí', kr: '계속' },
  { id: 220, cn: '突然', py: 'tūrán', kr: '갑자기' },
  { id: 221, cn: '高兴', py: 'gāoxìng', kr: '기쁘다' },
  { id: 222, cn: '开心', py: 'kāixīn', kr: '즐겁다' },
  { id: 223, cn: '难过', py: 'nánguò', kr: '슬프다, 괴롭다' },
  { id: 224, cn: '紧张', py: 'jǐnzhāng', kr: '긴장하다' },
  { id: 225, cn: '害怕', py: 'hàipà', kr: '무서워하다' },
  { id: 226, cn: '生气', py: 'shēngqì', kr: '화나다' },
  { id: 227, cn: '失望', py: 'shīwàng', kr: '실망하다' },
  { id: 228, cn: '激动', py: 'jīdòng', kr: '감격하다, 흥분하다' },
  { id: 229, cn: '担心', py: 'dānxīn', kr: '걱정하다' },
  { id: 230, cn: '满意', py: 'mǎnyì', kr: '만족하다' },
  { id: 231, cn: '觉得', py: 'juéde', kr: '~라고 느끼다' },
  { id: 232, cn: '认为', py: 'rènwéi', kr: '~라고 생각하다' },
  { id: 233, cn: '希望', py: 'xīwàng', kr: '희망하다' },
  { id: 234, cn: '决定', py: 'juédìng', kr: '결정하다' },
  { id: 235, cn: '同意', py: 'tóngyì', kr: '동의하다' },
  { id: 236, cn: '反对', py: 'fǎnduì', kr: '반대하다' },
  { id: 237, cn: '需要', py: 'xūyào', kr: '필요하다' },
  { id: 238, cn: '帮助', py: 'bāngzhù', kr: '돕다' },
  { id: 239, cn: '影响', py: 'yǐngxiǎng', kr: '영향 주다' },
  { id: 240, cn: '改变', py: 'gǎibiàn', kr: '변화시키다' },
  { id: 241, cn: '发现', py: 'fāxiàn', kr: '발견하다' },
  { id: 242, cn: '发生', py: 'fāshēng', kr: '발생하다' },
  { id: 243, cn: '提高', py: 'tígāo', kr: '향상시키다' },
  { id: 244, cn: '增加', py: 'zēngjiā', kr: '증가하다' },
  { id: 245, cn: '减少', py: 'jiǎnshǎo', kr: '감소하다' },
  { id: 246, cn: '完成', py: 'wánchéng', kr: '완성하다' },
  { id: 247, cn: '继续', py: 'jìxù', kr: '계속하다' },
  { id: 248, cn: '停止', py: 'tíngzhǐ', kr: '멈추다' },
  { id: 249, cn: '选择', py: 'xuǎnzé', kr: '선택하다' },
  { id: 250, cn: '准备', py: 'zhǔnbèi', kr: '준비하다' },
  { id: 251, cn: '成功', py: 'chénggōng', kr: '성공하다' },
  { id: 252, cn: '失败', py: 'shībài', kr: '실패하다' },
  { id: 253, cn: '努力', py: 'nǔlì', kr: '노력하다' },
  { id: 254, cn: '坚持', py: 'jiānchí', kr: '견지하다, 계속 버티다' },
  { id: 255, cn: '放弃', py: 'fàngqì', kr: '포기하다' },
  { id: 256, cn: '参加', py: 'cānjiā', kr: '참가하다' },
  { id: 257, cn: '通过', py: 'tōngguò', kr: '통과하다' },
  { id: 258, cn: '合格', py: 'hégé', kr: '합격하다' },
  { id: 259, cn: '证明', py: 'zhèngmíng', kr: '증명하다' },
  { id: 260, cn: '申请', py: 'shēnqǐng', kr: '신청하다' },
  { id: 261, cn: '容易', py: 'róngyì', kr: '쉽다' },
  { id: 262, cn: '困难', py: 'kùnnan', kr: '어렵다' },
  { id: 263, cn: '重要', py: 'zhòngyào', kr: '중요하다' },
  { id: 264, cn: '特别', py: 'tèbié', kr: '특별히, 특별한' },
  { id: 265, cn: '普通', py: 'pǔtōng', kr: '보통의' },
  { id: 266, cn: '认真', py: 'rènzhēn', kr: '진지하다' },
  { id: 267, cn: '清楚', py: 'qīngchu', kr: '분명하다' },
  { id: 268, cn: '正确', py: 'zhèngquè', kr: '정확하다' },
  { id: 269, cn: '安静', py: 'ānjìng', kr: '조용하다' },
  { id: 270, cn: '方便', py: 'fāngbiàn', kr: '편리하다' },
  { id: 271, cn: '当然', py: 'dāngrán', kr: '물론' },
  { id: 272, cn: '其实', py: 'qíshí', kr: '사실은' },
  { id: 273, cn: '可能', py: 'kěnéng', kr: '아마, 가능하다' },
  { id: 274, cn: '一定', py: 'yídìng', kr: '반드시' },
  { id: 275, cn: '应该', py: 'yīnggāi', kr: '~해야 한다' },
  { id: 276, cn: '必须', py: 'bìxū', kr: '반드시 ~해야 한다' },
  { id: 277, cn: '只好', py: 'zhǐhǎo', kr: '어쩔 수 없이' },
  { id: 278, cn: '比如', py: 'bǐrú', kr: '예를 들면' },
  { id: 279, cn: '例如', py: 'lìrú', kr: '예를 들면' },
  { id: 280, cn: '尤其', py: 'yóuqí', kr: '특히' },
  { id: 281, cn: '办法', py: 'bànfǎ', kr: '방법' },
  { id: 282, cn: '方法', py: 'fāngfǎ', kr: '방법' },
  { id: 283, cn: '习惯', py: 'xíguàn', kr: '습관' },
  { id: 284, cn: '经验', py: 'jīngyàn', kr: '경험' },
  { id: 285, cn: '机会', py: 'jīhuì', kr: '기회' },
  { id: 286, cn: '消息', py: 'xiāoxi', kr: '소식' },
  { id: 287, cn: '原因', py: 'yuányīn', kr: '원인' },
  { id: 288, cn: '结果', py: 'jiéguǒ', kr: '결과' },
  { id: 289, cn: '故事', py: 'gùshi', kr: '이야기' },
  { id: 290, cn: '文化', py: 'wénhuà', kr: '문화' },
  { id: 291, cn: '地方', py: 'dìfang', kr: '곳, 지역' },
  { id: 292, cn: '世界', py: 'shìjiè', kr: '세계' },
  { id: 293, cn: '国家', py: 'guójiā', kr: '국가' },
  { id: 294, cn: '城市', py: 'chéngshì', kr: '도시' },
  { id: 295, cn: '农村', py: 'nóngcūn', kr: '농촌' },
  { id: 296, cn: '生活', py: 'shēnghuó', kr: '생활, 생활하다' },
  { id: 297, cn: '未来', py: 'wèilái', kr: '미래' },
  { id: 298, cn: '过去', py: 'guòqù', kr: '과거' },
  { id: 299, cn: '最近', py: 'zuìjìn', kr: '최근' },
  { id: 300, cn: '变化', py: 'biànhuà', kr: '변화' },
];
// ============= 100+ 가상 랭커 이름 데이터 =============
const fakeNamesPool = [
  '오나라오나라',
  '위나라가최고야',
  '촉나라좋아',
  '중국인',
  '교수님',
  '삼국지전문가',
  '동탁',
  '태종무열왕',
  '김유신',
  '근초고왕',
  '장수왕',
  '광개토대왕',
  '고구려',
  '십상시',
  '잠혼',
  '감녕',
  '황개',
  '하후돈',
  '하후연',
  '남만왕',
  '심배',
  '이순신',
  '탐라',
  '대마도정벌',
  '일본싫어',
  '대만사람',
  '대만사람2',
  '대만사람3',
  '일본인',
  '한국인?',
  '북한사람',
  '탈북자',
  '중국어신동',
  '동네1등',
  '돌아온맹획',
  '닭발의추억',
  '급식먹는호랑이',
  '지나가던선비',
  '초보자',
  '엄마몰래게임중',
  '숙제다하고옴',
  '탕후루킬러',
  '마라탕중독자',
  '흑산적장연',
  '전설의용사',
  '지존',
  '무적파워',
  '단어외우기귀찮',
  '한자싫어',
  '병음마스터',
  '뜻은모름',
  '찍기의달인',
  '벼락치기장인',
  '내일시험',
  '1등할거야',
  '삼국지워리어',
  '파괴자',
  '모니터뚫고나옴',
  '숨참고10콤보',
  '적토마무면허',
  '동남풍선풍기',
  '장판교폭격기',
  '화타단골손님',
  '청룡언월도당근마켓',
  '만두먹는제갈량',
  '조조의수염',
  '사마의의계략',
  '여포의더듬이',
  '관우의적토마',
  '장비의고함',
  '유비의쌍검',
  '주유의주유소',
  '손권의수염',
  '조자룡의창',
  '황충할아버지',
  '마초마초맨',
  '방통',
  '반골위연',
  '동탁의뱃살',
  '원소의가문',
  '원술의꿀물',
  '손견의옥새',
  '손책의패기',
  '태사자의태세전환',
  '6손',
  '노숙자',
  '여몽의꿈',
  '감녕의방울',
  '황개구리',
  '하후돈의눈',
  '하후연의강행군',
  '장료',
];

// 고정된 최상위 랭커 1~5위
const topFixedRankers = [
  { name: '제갈량', score: 2850000, isPlayer: false },
  { name: '조조', score: 2420000, isPlayer: false },
  { name: '사마의', score: 2150000, isPlayer: false },
  { name: '중국어신동', score: 1880000, isPlayer: false },
  { name: '여포', score: 1650000, isPlayer: false },
];

// 2. 게임 상태 관리 변수
let playerName = '도전자';
let selections = { hanja: null, pinyin: null, korean: null };
let score = 0,
  combo = 0,
  stage = 1,
  timeLeft = 100,
  timerId = null;
let items = { hint: 1, freeze: 1 };
let isFrozen = false;
let cardsData = { hanja: [], pinyin: [], korean: [] };
let activeIds = [];
let currentTurnStartTime = 0;

let stageTimerSpeed = 0.5;
let eventScoreMultiplier = 1;
let shieldCount = 0;
let eastwindTimeout = null;

let activePenalty = null;
let penaltySpeedMultiplier = 1;
let magicTimeout = null;
let alertCallback = null;

// BGM 관련 변수
let currentBgmIndex = 1;
let isBgmPlaying = false;

// ============= 삼국지 선택 이벤트 DB (총 10종) =============
let eventDB = [
  {
    id: 'redhare',
    title: '🐎 여포의 적토마',
    image: 'images/lvbu.png',
    desc: '시간이 2배 빨리 줄어들지만, 정답 점수가 3배가 됩니다.',
    action: () => {
      stageTimerSpeed = 1.0;
      eventScoreMultiplier = 3;
    },
  },
  {
    id: 'eastwind',
    title: '🍃 제갈량의 동남풍',
    image: 'images/zhuge.png',
    desc: '10초 동안 전장의 시간이 멈춥니다!',
    action: () => {
      isFrozen = true;
      if (eastwindTimeout) clearTimeout(eastwindTimeout);
      eastwindTimeout = setTimeout(() => {
        isFrozen = false;
        document.getElementById('message').innerText = '동남풍이 멎었습니다!';
      }, 10000);
    },
  },
  {
    id: 'zhangfei',
    title: '🗣️ 장비의 장판교 전투',
    image: 'images/zhangfei.png',
    desc: '적군 하나 세트가 즉시 제거됩니다. 대신 남은 시간 15% 감소!',
    action: () => {
      timeLeft -= 15;
      autoSolveOne();
    },
  },
  {
    id: 'huatuo',
    title: '💊 화타의 마불산',
    image: 'images/huatuo.png',
    desc: '타이머가 30% 즉시 회복됩니다.',
    action: () => {
      timeLeft = Math.min(100, timeLeft + 30);
    },
  },
  {
    id: 'guanyu',
    title: '🛡️ 관우의 오관육장 돌파',
    image: 'images/guanyu.png',
    desc: '오답 페널티 1회 방패 획득! (콤보 초기화)',
    action: () => {
      shieldCount++;
      combo = 0;
      updateComboDisplay();
      document.getElementById('message').innerText =
        '🛡️ 관우의 방패를 장착했습니다!';
    },
  },
  {
    id: 'liubei',
    title: '🤝 유비의 삼고초려',
    image: 'images/liubei.png',
    desc: '돋보기(힌트) 3개를 얻는 대신 현재 점수의 10%를 잃습니다.',
    action: () => {
      items.hint += 3;
      score = Math.floor(score * 0.9);
      document.getElementById('score').innerText = score.toLocaleString();
      updateItemDisplay();
    },
  },
  {
    id: 'zhaoyun',
    title: '🏇 조자룡의 단기필마',
    image: 'images/zhaoyun.png',
    desc: '단어 2쌍이 즉시 파괴되지만, 남은 시간이 30% 날아갑니다.',
    action: () => {
      timeLeft -= 30;
      autoSolveOne();
      setTimeout(autoSolveOne, 300);
    },
  },
  {
    id: 'caocao',
    title: '🌾 조조의 둔전제',
    image: 'images/caocao.png',
    desc: '얼음(시간정지) 아이템 2개를 얻지만 콤보가 0으로 초기화됩니다.',
    action: () => {
      items.freeze += 2;
      combo = 0;
      updateComboDisplay();
      updateItemDisplay();
    },
  },
  {
    id: 'diaochan',
    title: '💃 초선의 미인계',
    image: 'images/diaochan.png',
    desc: '즉시 보너스 30,000점을 얻지만, 타이머가 30%로 감소합니다!',
    action: () => {
      score += 30000;
      timeLeft = 30;
      document.getElementById('score').innerText = score.toLocaleString();
    },
  },
  {
    id: 'sunquan',
    title: '🏰 손권의 수성',
    image: 'images/sunquan.png',
    desc: '시간이 100%로 차오르지만, 다음 스테이지 점수 획득량이 0.5배가 됩니다.',
    action: () => {
      timeLeft = 100;
      eventScoreMultiplier = 0.5;
    },
  },
];

// ============= 초기 세팅, BGM 및 연출 =============
document.addEventListener('DOMContentLoaded', () => {
  const bgm1 = document.getElementById('bgm1');
  const bgm2 = document.getElementById('bgm2');
  if (bgm1 && bgm2) {
    bgm1.addEventListener('ended', () => {
      if (isBgmPlaying) {
        currentBgmIndex = 2;
        bgm2.play();
      }
    });
    bgm2.addEventListener('ended', () => {
      if (isBgmPlaying) {
        currentBgmIndex = 1;
        bgm1.play();
      }
    });
  }

  // 🎬 배경 이미지 연출 (2.5초 대기 후 블러 + 인트로 등장)
  setTimeout(() => {
    const bgImage = document.getElementById('bg-image');
    const introContainer = document.getElementById('intro-container');

    if (bgImage) bgImage.classList.add('blurred'); // 배경 흐려지기
    if (introContainer) introContainer.classList.remove('start-hidden'); // 인트로 창 나타나기
  }, 1000);
});

function startBGM() {
  if (!isBgmPlaying) return;
  const bgm1 = document.getElementById('bgm1'),
    bgm2 = document.getElementById('bgm2');
  bgm1.pause();
  bgm2.pause();
  const activeAudio = currentBgmIndex === 1 ? bgm1 : bgm2;
  activeAudio.play().catch((e) => console.log('BGM 대기중...'));
}

function stopBGM() {
  document.getElementById('bgm1').pause();
  document.getElementById('bgm2').pause();
}

function toggleBGM() {
  isBgmPlaying = !isBgmPlaying;
  const btn = document.getElementById('bgm-toggle');
  if (isBgmPlaying) {
    btn.innerText = '🎵 BGM: 켜짐';
    startBGM();
  } else {
    btn.innerText = '🔇 BGM: 꺼짐';
    stopBGM();
  }
}

function showAlert(title, desc, callback = null) {
  isFrozen = true;
  document.getElementById('alert-title').innerText = title;
  document.getElementById('alert-desc').innerText = desc;
  document.getElementById('alert-modal').classList.remove('hidden');
  alertCallback = callback;
}

function closeAlert() {
  document.getElementById('alert-modal').classList.add('hidden');
  isFrozen = false;
  if (alertCallback) {
    alertCallback();
    alertCallback = null;
  }
}

// ============= 게임 흐름 =============
function startGameFromIntro() {
  const nameInput = document.getElementById('player-name').value.trim();
  if (!nameInput) {
    showAlert('잠깐!', '이름을 먼저 입력해주세요!');
    return;
  }
  playerName = nameInput;
  document.getElementById('intro-container').classList.add('screen-hidden');
  document.getElementById('game-container').classList.remove('screen-hidden');
  isBgmPlaying = true;
  document.getElementById('bgm-toggle').innerText = '🎵 BGM: 켜짐';
  startBGM();
  startGame();
}

function backToIntro() {
  if (timerId) clearInterval(timerId);
  clearPenaltyEffects();
  stopBGM();
  document.getElementById('ranking-container').classList.add('screen-hidden');
  document.getElementById('game-container').classList.add('screen-hidden');
  document.getElementById('intro-container').classList.remove('screen-hidden');
  document.getElementById('player-name').value = '';
}

function surrenderGame() {
  if (timerId) clearInterval(timerId);
  showRankingScreen();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startGame() {
  score = 0;
  combo = 0;
  stage = 1;
  timeLeft = 100;
  isFrozen = false;
  items = { hint: 1, freeze: 1 };
  shieldCount = 0;
  stageTimerSpeed = 0.5;
  eventScoreMultiplier = 1;
  clearPenaltyEffects();
  document.getElementById('score').innerText = score;
  document.getElementById('stage').innerText = stage;
  updateComboDisplay();
  updateItemDisplay();
  if (timerId) clearInterval(timerId);
  startNextStage(true);
  startTimer();
}

function startNextStage(isFirst = false) {
  stageTimerSpeed = 0.5;
  eventScoreMultiplier = 1;
  if (eastwindTimeout) clearTimeout(eastwindTimeout);
  isFrozen = false;
  const currentWords = shuffleArray([...wordList]).slice(0, 3);
  activeIds = currentWords.map((w) => w.id);
  cardsData.hanja = shuffleArray(
    currentWords.map((w) => ({ id: w.id, text: w.cn, solved: false })),
  );
  cardsData.pinyin = shuffleArray(
    currentWords.map((w) => ({ id: w.id, text: w.py, solved: false })),
  );
  cardsData.korean = shuffleArray(
    currentWords.map((w) => ({ id: w.id, text: w.kr, solved: false })),
  );
  currentTurnStartTime = Date.now();
  refreshBoard();
}

function startTimer() {
  timerId = setInterval(() => {
    if (!isFrozen) {
      timeLeft -= stageTimerSpeed * penaltySpeedMultiplier;
      const timerBar = document.getElementById('timer-bar');
      timerBar.style.width = timeLeft + '%';
      timerBar.style.background = timeLeft < 30 ? '#f44336' : '#4caf50';
      if (timeLeft <= 0) {
        clearInterval(timerId);
        showAlert(
          '전투 종료!',
          `시간이 모두 흘렀습니다.\n\n최종 달성: STAGE ${stage}\n최종 점수: ${score.toLocaleString()}점`,
          () => {
            showRankingScreen();
          },
        );
      }
    }
  }, 100);
}

// ============= 🏆 100명 랭킹 시스템 (300만 점 스케일) =============
function showRankingScreen() {
  clearPenaltyEffects();
  stopBGM();
  document.getElementById('game-container').classList.add('screen-hidden');
  document
    .getElementById('ranking-container')
    .classList.remove('screen-hidden');

  let savedData = localStorage.getItem('chineseRankingsV6');
  let rankings = [];

  if (savedData) {
    rankings = JSON.parse(savedData);
  } else {
    // 1~5위 영웅 고정
    rankings = JSON.parse(JSON.stringify(topFixedRankers));
    // 6~100위 랜덤 생성
    let tempNames = shuffleArray([...fakeNamesPool]);
    for (let i = 0; i < 95; i++) {
      let botScore =
        Math.floor(1500000 * Math.pow(0.92, i)) +
        Math.floor(Math.random() * 1000);
      rankings.push({ name: tempNames[i], score: botScore, isPlayer: false });
    }
  }

  // 1등 도망가기 (얄미운 제갈량)
  if (rankings[0].isPlayer === false && score >= rankings[0].score) {
    rankings[0].score = Math.floor(score * 1.05) + 5000;
  }

  // 내 점수 갱신
  let pIdx = rankings.findIndex((r) => r.name === playerName && r.isPlayer);
  if (pIdx !== -1) {
    if (score > rankings[pIdx].score) rankings[pIdx].score = score;
  } else {
    rankings.push({ name: playerName, score: score, isPlayer: true });
  }

  rankings.sort((a, b) => b.score - a.score);
  localStorage.setItem('chineseRankingsV6', JSON.stringify(rankings));

  const listEl = document.getElementById('ranking-list');
  listEl.innerHTML = '';

  let playerFinalRank =
    rankings.findIndex((r) => r.name === playerName && r.isPlayer) + 1;
  let indicesToShow = new Set([0, 1, 2, 3, 4]); // 1~5위는 항상 노출

  let pPos = playerFinalRank - 1;
  if (pPos > 4) {
    indicesToShow.add(pPos - 1);
    indicesToShow.add(pPos);
    if (pPos + 1 < rankings.length) indicesToShow.add(pPos + 1);
  }

  let sortedIndices = Array.from(indicesToShow)
    .filter((i) => i >= 0 && i < rankings.length)
    .sort((a, b) => a - b);
  let lastIdx = -1;

  sortedIndices.forEach((idx) => {
    if (lastIdx !== -1 && idx - lastIdx > 1) {
      const ellipsis = document.createElement('li');
      ellipsis.innerHTML = `<span style="color:#aaa; display:block; text-align:center; width:100%;">· · ·</span>`;
      listEl.appendChild(ellipsis);
    }
    const r = rankings[idx];
    const li = document.createElement('li');
    let medal =
      idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `${idx + 1}위`;
    if (idx === pPos) li.classList.add('player-row');
    li.innerHTML = `<span>${medal} ${r.name}</span> <span>${r.score.toLocaleString()} 점</span>`;
    listEl.appendChild(li);
    lastIdx = idx;
  });

  const msgEl = document.getElementById('ranking-msg');
  if (playerFinalRank === 1)
    msgEl.innerText = '🎉 대단해요! 당당히 1위를 차지하셨습니다!';
  else if (playerFinalRank <= 10)
    msgEl.innerText = `현재 ${playerFinalRank}위! 1위 제갈량이 긴장하고 있습니다!`;
  else if (playerFinalRank > 100)
    msgEl.innerText = `현재 100위 밖입니다. 랭크 진입을 위해 더 분발하세요!`;
  else
    msgEl.innerText = `현재 순위는 ${playerFinalRank}위입니다. 조금만 더 해볼까요?`;
}

// ============= 기타 유틸리티 =============
function clearPenaltyEffects() {
  activePenalty = null;
  penaltySpeedMultiplier = 1;
  document.getElementById('penalty-banner').classList.add('hidden');
  document.body.classList.remove('fire-bg');
  if (magicTimeout) clearTimeout(magicTimeout);
  document
    .querySelectorAll('.magic-hidden')
    .forEach((c) => c.classList.remove('magic-hidden'));
}

function applyYellowTurbanEffect() {
  if (magicTimeout) clearTimeout(magicTimeout);
  document
    .querySelectorAll('#pinyin-row .card, #korean-row .card')
    .forEach((c) => c.classList.remove('magic-hidden'));
  magicTimeout = setTimeout(() => {
    if (activePenalty === 'yellow') {
      document
        .querySelectorAll('#pinyin-row .card, #korean-row .card')
        .forEach((c) => {
          if (!c.classList.contains('hidden')) c.classList.add('magic-hidden');
        });
    }
  }, 3000);
}

// 🔥 수정된 트리거 로직: 초선의 미인계 일회성 적용
function triggerChoiceEvent() {
  // 이벤트 배열이 비어있으면 그냥 리턴
  if (eventDB.length === 0) return;

  isFrozen = true;
  const randomIndex = Math.floor(Math.random() * eventDB.length);
  const randomEvent = eventDB[randomIndex];

  document.getElementById('event-title').innerText = randomEvent.title;
  document.getElementById('event-desc').innerText = randomEvent.desc;

  const imgEl = document.getElementById('event-image');
  if (randomEvent.image) {
    imgEl.src = randomEvent.image;
    imgEl.style.display = 'block';
  } else {
    imgEl.style.display = 'none';
  }

  document.getElementById('event-modal').classList.remove('hidden');

  // 초선의 미인계는 한 번 등장하면 목록에서 즉시 제거
  if (randomEvent.id === 'diaochan') {
    eventDB.splice(randomIndex, 1);
  }

  document.querySelector('.btn-accept').onclick = () => {
    document.getElementById('event-modal').classList.add('hidden');
    isFrozen = false;
    document.getElementById('message').innerText =
      `[${randomEvent.title}] 발동!`;
    randomEvent.action();
  };

  document.querySelector('.btn-decline').onclick = () => {
    document.getElementById('event-modal').classList.add('hidden');
    isFrozen = false;
    document.getElementById('message').innerText = `이벤트를 거절했습니다.`;
  };
}

function useHint() {
  if (items.hint <= 0 || !selections.hanja) return;
  items.hint--;
  updateItemDisplay();
  const correctId = selections.hanja;
  const targetRowId = Math.random() > 0.5 ? 'pinyin-row' : 'korean-row';
  document.querySelectorAll(`#${targetRowId} .card`).forEach((c) => {
    if (c.dataset.id == correctId && !c.classList.contains('hidden')) {
      c.classList.remove('magic-hidden');
      c.classList.add('highlight');
      setTimeout(() => c.classList.remove('highlight'), 1500);
    }
  });
}

function useFreeze() {
  if (items.freeze <= 0) return;
  items.freeze--;
  isFrozen = true;
  updateItemDisplay();
  document.getElementById('timer-bar').style.background = '#81d4fa';
  setTimeout(() => {
    isFrozen = false;
  }, 5000);
}

function updateItemDisplay() {
  document.getElementById('hint-count').innerText = items.hint;
  document.getElementById('freeze-count').innerText = items.freeze;
  document.getElementById('item-hint').disabled = items.hint <= 0;
  document.getElementById('item-freeze').disabled = items.freeze <= 0;
}

function updateComboDisplay() {
  const comboEl = document.getElementById('combo-text');
  if (combo >= 2) {
    document.getElementById('combo-count').innerText = combo;
    comboEl.className = 'combo-active';
  } else {
    comboEl.className = 'combo-hidden';
  }
}

function autoSolveOne() {
  const target = cardsData.hanja.find((c) => !c.solved);
  if (target) {
    target.solved = true;
    cardsData.pinyin.find((c) => c.id === target.id).solved = true;
    cardsData.korean.find((c) => c.id === target.id).solved = true;
    refreshBoard();
  }
}

function refreshBoard() {
  selections = { hanja: null, pinyin: null, korean: null };
  renderRow('hanja-row', cardsData.hanja, 'hanja');
  renderRow('pinyin-row', cardsData.pinyin, 'pinyin');
  renderRow('korean-row', cardsData.korean, 'korean');
  if (activePenalty === 'yellow') applyYellowTurbanEffect();
}

function renderRow(rowId, items, type) {
  const row = document.getElementById(rowId);
  row.innerHTML = '';
  items.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'card' + (item.solved ? ' hidden' : '');
    card.innerText = item.text;
    card.dataset.id = item.id;
    if (!item.solved) card.onclick = () => selectCard(card, type, item.id);
    row.appendChild(card);
  });
}

function selectCard(cardElement, type, id) {
  if (type === 'pinyin' && !selections.hanja) return;
  if (type === 'korean' && !selections.pinyin) return;
  const rowCards = cardElement.parentElement.querySelectorAll('.card');
  rowCards.forEach((c) => c.classList.remove('selected'));
  cardElement.classList.add('selected');
  selections[type] = id;
  if (selections.hanja && selections.pinyin && selections.korean) checkMatch();
}

function checkMatch() {
  const { hanja, pinyin, korean } = selections;
  if (hanja === pinyin && pinyin === korean) {
    clearPenaltyEffects();
    let timeTaken = (Date.now() - currentTurnStartTime) / 1000;
    let speedBonus = Math.floor(Math.max(0, 5 - timeTaken) * 20);
    combo++;
    let comboMultiplier = 1 + (combo - 1) * 0.2;
    let earnedScore = Math.floor(
      (100 + speedBonus) * comboMultiplier * eventScoreMultiplier,
    );
    score += earnedScore;
    timeLeft = Math.min(100, timeLeft + 15);
    document.getElementById('score').innerText = score.toLocaleString();
    updateComboDisplay();

    let msg = `정답! +${earnedScore}점`;
    if (eventScoreMultiplier > 1) msg += ' (적토마 버프!)';
    document.getElementById('message').innerText = msg;

    cardsData.hanja.find((c) => c.id === hanja).solved = true;
    cardsData.pinyin.find((c) => c.id === hanja).solved = true;
    cardsData.korean.find((c) => c.id === hanja).solved = true;

    if (combo > 0) {
      if (combo % 20 === 0) {
        activePenalty = 'fire';
        penaltySpeedMultiplier = 3;
        document.body.classList.add('fire-bg');
        document.getElementById('penalty-banner').innerText =
          '🔥 적벽의 화공 발동! 타이머가 3배 속도로 탑니다!';
        document.getElementById('penalty-banner').classList.remove('hidden');
      } else if (combo % 10 === 0) {
        activePenalty = 'yellow';
        document.getElementById('penalty-banner').innerText =
          '🚨 황건적의 요술 시작! (3초 뒤 숨김)';
        document.getElementById('penalty-banner').classList.remove('hidden');
      }
    }

    if (cardsData.hanja.every((c) => c.solved)) {
      timeLeft = Math.min(100, timeLeft + 20);
      stage++;
      document.getElementById('stage').innerText = stage;
      if (activePenalty) {
        document.getElementById('message').innerText =
          `STAGE ${stage - 1} 클리어! 하지만 페널티가 이어집니다!`;
        setTimeout(() => startNextStage(false), 800);
      } else {
        document.getElementById('message').innerText =
          `STAGE ${stage - 1} 클리어!`;
        setTimeout(() => {
          startNextStage(false);
          if (Math.random() < 0.4) setTimeout(() => triggerChoiceEvent(), 100);
        }, 800);
      }
    } else {
      currentTurnStartTime = Date.now();
      setTimeout(() => refreshBoard(), 300);
    }
  } else {
    if (shieldCount > 0) {
      shieldCount--;
      document.getElementById('message').innerText = '🛡️ 방패 사용!';
      selections = { hanja: null, pinyin: null, korean: null };
      document
        .querySelectorAll('.card')
        .forEach((c) => c.classList.remove('selected'));
      return;
    }
    combo = 0;
    updateComboDisplay();
    timeLeft -= 10;
    clearPenaltyEffects();
    document
      .querySelectorAll('.card.selected')
      .forEach((c) => c.classList.add('shake'));
    setTimeout(() => {
      const pool = wordList.filter((w) => !activeIds.includes(w.id));
      if (pool.length > 0) {
        const newWord = pool[Math.floor(Math.random() * pool.length)];
        activeIds = activeIds.filter((id) => id !== hanja);
        activeIds.push(newWord.id);
        let hItem = cardsData.hanja.find((c) => c.id === hanja);
        if (hItem) {
          hItem.id = newWord.id;
          hItem.text = newWord.cn;
        }
        let pItem = cardsData.pinyin.find((c) => c.id === hanja);
        if (pItem) {
          pItem.id = newWord.id;
          pItem.text = newWord.py;
        }
        let kItem = cardsData.korean.find((c) => c.id === hanja);
        if (kItem) {
          kItem.id = newWord.id;
          kItem.text = newWord.kr;
        }
      }
      currentTurnStartTime = Date.now();
      refreshBoard();
    }, 800);
  }
}
