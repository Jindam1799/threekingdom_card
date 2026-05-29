// 1. 300단어 탑재
const wordList = [
  { id: 1, cn: '我', py: 'wǒ', kr: '나' },
  { id: 2, cn: '你', py: 'nǐ', kr: '너' },
  { id: 3, cn: '他', py: 'tā', kr: '그' },
  { id: 4, cn: '她', py: 'tā', kr: '그녀' },
  { id: 5, cn: '我们', py: 'wǒmen', kr: '우리' },
  { id: 6, cn: '你们', py: 'nǐmen', kr: '너희' },
  { id: 7, cn: '大家', py: 'dàjiā', kr: '모두' },
  { id: 8, cn: '谁', py: 'shéi', kr: '누구' },
  { id: 9, cn: '什么', py: 'shénme', kr: '무엇' },
  { id: 10, cn: '哪', py: 'nǎ', kr: '어느' },
  { id: 11, cn: '去', py: 'qù', kr: '가다' },
  { id: 12, cn: '来', py: 'lái', kr: '오다' },
  { id: 13, cn: '回', py: 'huí', kr: '돌아가다' },
  { id: 14, cn: '走', py: 'zǒu', kr: '걷다' },
  { id: 15, cn: '进', py: 'jìn', kr: '들어가다' },
  { id: 16, cn: '出', py: 'chū', kr: '나가다' },
  { id: 17, cn: '到', py: 'dào', kr: '도착하다' },
  { id: 18, cn: '坐', py: 'zuò', kr: '앉다, 타다' },
  { id: 19, cn: '开', py: 'kāi', kr: '열다, 작동하다, 운전하다' },
  { id: 20, cn: '做', py: 'zuò', kr: '하다' },
  { id: 21, cn: '吃', py: 'chī', kr: '먹다' },
  { id: 22, cn: '喝', py: 'hē', kr: '마시다' },
  { id: 23, cn: '看', py: 'kàn', kr: '보다' },
  { id: 24, cn: '听', py: 'tīng', kr: '듣다' },
  { id: 25, cn: '说', py: 'shuō', kr: '말하다' },
  { id: 26, cn: '问', py: 'wèn', kr: '묻다' },
  { id: 27, cn: '学', py: 'xué', kr: '배우다' },
  { id: 28, cn: '学习', py: 'xuéxí', kr: '공부하다' },
  { id: 29, cn: '买', py: 'mǎi', kr: '사다' },
  { id: 30, cn: '卖', py: 'mài', kr: '팔다' },
  { id: 31, cn: '给', py: 'gěi', kr: '주다' },
  { id: 32, cn: '拿', py: 'ná', kr: '들다, 가지다' },
  { id: 33, cn: '用', py: 'yòng', kr: '사용하다' },
  { id: 34, cn: '帮助', py: 'bāngzhù', kr: '돕다' },
  { id: 35, cn: '开始', py: 'kāishǐ', kr: '시작하다' },
  { id: 36, cn: '结束', py: 'jiéshù', kr: '끝나다' },
  { id: 37, cn: '喜欢', py: 'xǐhuan', kr: '좋아하다' },
  { id: 38, cn: '爱', py: 'ài', kr: '사랑하다' },
  { id: 39, cn: '知道', py: 'zhīdào', kr: '알다' },
  { id: 40, cn: '认识', py: 'rènshi', kr: '인식하다' },
  { id: 41, cn: '想', py: 'xiǎng', kr: '~하고 싶다, 생각하다' },
  { id: 42, cn: '要', py: 'yào', kr: '~할 것이다, ~해야 한다, 원하다' },
  { id: 43, cn: '可以', py: 'kěyǐ', kr: '~해도 된다' },
  { id: 44, cn: '会', py: 'huì', kr: '~할 줄 안다' },
  { id: 45, cn: '能', py: 'néng', kr: '~할 수 있다' },
  { id: 46, cn: '工作', py: 'gōngzuò', kr: '일하다' },
  { id: 47, cn: '上班', py: 'shàngbān', kr: '출근하다' },
  { id: 48, cn: '下班', py: 'xiàbān', kr: '퇴근하다' },
  { id: 49, cn: '休息', py: 'xiūxi', kr: '쉬다' },
  { id: 50, cn: '睡觉', py: 'shuìjiào', kr: '자다' },
  { id: 51, cn: '起床', py: 'qǐchuáng', kr: '일어나다' },
  { id: 52, cn: '洗澡', py: 'xǐzǎo', kr: '샤워하다' },
  { id: 53, cn: '洗手', py: 'xǐshǒu', kr: '손 씻다' },
  { id: 54, cn: '穿', py: 'chuān', kr: '입다' },
  { id: 55, cn: '脱', py: 'tuō', kr: '벗다' },
  { id: 56, cn: '打开', py: 'dǎkāi', kr: '열다' },
  { id: 57, cn: '关', py: 'guān', kr: '닫다' },
  { id: 58, cn: '等', py: 'děng', kr: '기다리다' },
  { id: 59, cn: '找', py: 'zhǎo', kr: '찾다' },
  { id: 60, cn: '准备', py: 'zhǔnbèi', kr: '준비하다' },
  { id: 61, cn: '完成', py: 'wánchéng', kr: '완성하다' },
  { id: 62, cn: '选择', py: 'xuǎnzé', kr: '선택하다' },
  { id: 63, cn: '决定', py: 'juédìng', kr: '결정하다' },
  { id: 64, cn: '希望', py: 'xīwàng', kr: '희망하다' },
  { id: 65, cn: '检查', py: 'jiǎnchá', kr: '검사하다' },
  { id: 66, cn: '使用', py: 'shǐyòng', kr: '사용하다' },
  { id: 67, cn: '介绍', py: 'jièshào', kr: '소개하다' },
  { id: 68, cn: '联系', py: 'liánxì', kr: '연락하다' },
  { id: 69, cn: '记得', py: 'jìde', kr: '기억하다' },
  { id: 70, cn: '忘记', py: 'wàngjì', kr: '잊다' },
  { id: 71, cn: '回答', py: 'huídá', kr: '대답하다' },
  { id: 72, cn: '告诉', py: 'gàosu', kr: '알려주다' },
  { id: 73, cn: '聊天', py: 'liáotiān', kr: '대화하다' },
  { id: 74, cn: '唱歌', py: 'chànggē', kr: '노래하다' },
  { id: 75, cn: '跳舞', py: 'tiàowǔ', kr: '춤추다' },
  { id: 76, cn: '运动', py: 'yùndòng', kr: '운동하다' },
  { id: 77, cn: '旅游', py: 'lǚyóu', kr: '여행하다' },
  { id: 78, cn: '拍照', py: 'pāizhào', kr: '사진 찍다' },
  { id: 79, cn: '开车', py: 'kāichē', kr: '운전하다' },
  { id: 80, cn: '上网', py: 'shàngwǎng', kr: '인터넷하다' },
  { id: 81, cn: '好', py: 'hǎo', kr: '좋다' },
  { id: 82, cn: '大', py: 'dà', kr: '크다' },
  { id: 83, cn: '小', py: 'xiǎo', kr: '작다' },
  { id: 84, cn: '多', py: 'duō', kr: '많다' },
  { id: 85, cn: '少', py: 'shǎo', kr: '적다' },
  { id: 86, cn: '高', py: 'gāo', kr: '높다' },
  { id: 87, cn: '矮', py: 'ǎi', kr: '낮다' },
  { id: 88, cn: '长', py: 'cháng', kr: '길다' },
  { id: 89, cn: '短', py: 'duǎn', kr: '짧다' },
  { id: 90, cn: '快', py: 'kuài', kr: '빠르다' },
  { id: 91, cn: '慢', py: 'màn', kr: '느리다' },
  { id: 92, cn: '新', py: 'xīn', kr: '새롭다' },
  { id: 93, cn: '旧', py: 'jiù', kr: '오래되다' },
  { id: 94, cn: '贵', py: 'guì', kr: '비싸다' },
  { id: 95, cn: '便宜', py: 'piányi', kr: '싸다' },
  { id: 96, cn: '漂亮', py: 'piàoliang', kr: '예쁘다' },
  { id: 97, cn: '忙', py: 'máng', kr: '바쁘다' },
  { id: 98, cn: '累', py: 'lèi', kr: '피곤하다' },
  { id: 99, cn: '容易', py: 'róngyì', kr: '쉽다' },
  { id: 100, cn: '难', py: 'nán', kr: '어렵다' },
  { id: 101, cn: '高兴', py: 'gāoxìng', kr: '기쁘다' },
  { id: 102, cn: '开心', py: 'kāixīn', kr: '즐겁다' },
  { id: 103, cn: '安全', py: 'ānquán', kr: '안전하다' },
  { id: 104, cn: '重要', py: 'zhòngyào', kr: '중요하다' },
  { id: 105, cn: '黑', py: 'hēi', kr: '검다' },
  { id: 106, cn: '白', py: 'bái', kr: '희다' },
  { id: 107, cn: '红', py: 'hóng', kr: '빨갛다' },
  { id: 108, cn: '蓝', py: 'lán', kr: '파랗다' },
  { id: 109, cn: '干净', py: 'gānjìng', kr: '깨끗하다' },
  { id: 110, cn: '安静', py: 'ānjìng', kr: '조용하다' },
  { id: 111, cn: '热', py: 'rè', kr: '덥다' },
  { id: 112, cn: '冷', py: 'lěng', kr: '춥다' },
  { id: 113, cn: '饿', py: 'è', kr: '배고프다' },
  { id: 114, cn: '渴', py: 'kě', kr: '목마르다' },
  { id: 115, cn: '健康', py: 'jiànkāng', kr: '건강하다' },
  { id: 116, cn: '生病', py: 'shēngbìng', kr: '아프다' },
  { id: 117, cn: '方便', py: 'fāngbiàn', kr: '편리하다' },
  { id: 118, cn: '认真', py: 'rènzhēn', kr: '진지하다' },
  { id: 119, cn: '清楚', py: 'qīngchu', kr: '분명하다' },
  { id: 120, cn: '特别', py: 'tèbié', kr: '특별하다' },
  { id: 121, cn: '今天', py: 'jīntiān', kr: '오늘' },
  { id: 122, cn: '昨天', py: 'zuótiān', kr: '어제' },
  { id: 123, cn: '明天', py: 'míngtiān', kr: '내일' },
  { id: 124, cn: '现在', py: 'xiànzài', kr: '지금' },
  { id: 125, cn: '最近', py: 'zuìjìn', kr: '최근' },
  { id: 126, cn: '刚才', py: 'gāngcái', kr: '방금' },
  { id: 127, cn: '经常', py: 'jīngcháng', kr: '자주' },
  { id: 128, cn: '常常', py: 'chángcháng', kr: '자주' },
  { id: 129, cn: '先', py: 'xiān', kr: '먼저' },
  { id: 130, cn: '还', py: 'hái', kr: '아직' },
  { id: 131, cn: '就', py: 'jiù', kr: '곧' },
  { id: 132, cn: '早上', py: 'zǎoshang', kr: '아침' },
  { id: 133, cn: '中午', py: 'zhōngwǔ', kr: '점심' },
  { id: 134, cn: '晚上', py: 'wǎnshang', kr: '저녁' },
  { id: 135, cn: '去年', py: 'qùnián', kr: '작년' },
  { id: 136, cn: '明年', py: 'míngnián', kr: '내년' },
  { id: 137, cn: '小时', py: 'xiǎoshí', kr: '시간(hour)' },
  { id: 138, cn: '分钟', py: 'fēnzhōng', kr: '분' },
  { id: 139, cn: '时间', py: 'shíjiān', kr: '시간' },
  { id: 140, cn: '生日', py: 'shēngrì', kr: '생일' },
  { id: 141, cn: '和', py: 'hé', kr: '~와' },
  { id: 142, cn: '跟', py: 'gēn', kr: '~와' },
  { id: 143, cn: '或者', py: 'huòzhě', kr: '또는' },
  { id: 144, cn: '然后', py: 'ránhòu', kr: '그리고 나서' },
  { id: 145, cn: '因为', py: 'yīnwèi', kr: '왜냐하면' },
  { id: 146, cn: '所以', py: 'suǒyǐ', kr: '그래서' },
  { id: 147, cn: '如果', py: 'rúguǒ', kr: '만약' },
  { id: 148, cn: '但是', py: 'dànshì', kr: '하지만' },
  { id: 149, cn: '也', py: 'yě', kr: '~도, 역시' },
  { id: 150, cn: '都', py: 'dōu', kr: '모두, 다' },
  { id: 151, cn: '很', py: 'hěn', kr: '매우(습관적으로 쓰기도 함)' },
  { id: 152, cn: '真', py: 'zhēn', kr: '정말' },
  { id: 153, cn: '太', py: 'tài', kr: '너무' },
  { id: 154, cn: '别', py: 'bié', kr: '~하지 마(단호함)' },
  { id: 155, cn: '应该', py: 'yīnggāi', kr: '~해야 한다' },
  { id: 156, cn: '地方', py: 'dìfang', kr: '장소' },
  { id: 157, cn: '家', py: 'jiā', kr: '집' },
  { id: 158, cn: '学校', py: 'xuéxiào', kr: '학교' },
  { id: 159, cn: '教室', py: 'jiàoshì', kr: '교실' },
  { id: 160, cn: '图书馆', py: 'túshūguǎn', kr: '도서관' },
  { id: 161, cn: '商店', py: 'shāngdiàn', kr: '상점' },
  { id: 162, cn: '超市', py: 'chāoshì', kr: '마트' },
  { id: 163, cn: '饭店', py: 'fàndiàn', kr: '식당' },
  { id: 164, cn: '餐厅', py: 'cāntīng', kr: '레스토랑' },
  { id: 165, cn: '医院', py: 'yīyuàn', kr: '병원' },
  { id: 166, cn: '银行', py: 'yínháng', kr: '은행' },
  { id: 167, cn: '公司', py: 'gōngsī', kr: '회사' },
  { id: 168, cn: '办公室', py: 'bàngōngshì', kr: '사무실' },
  { id: 169, cn: '房间', py: 'fángjiān', kr: '방' },
  { id: 170, cn: '客厅', py: 'kètīng', kr: '거실' },
  { id: 171, cn: '厨房', py: 'chúfáng', kr: '주방' },
  { id: 172, cn: '厕所', py: 'cèsuǒ', kr: '화장실' },
  { id: 173, cn: '门', py: 'mén', kr: '문' },
  { id: 174, cn: '窗户', py: 'chuānghu', kr: '창문' },
  { id: 175, cn: '桌子', py: 'zhuōzi', kr: '책상' },
  { id: 176, cn: '椅子', py: 'yǐzi', kr: '의자' },
  { id: 177, cn: '床', py: 'chuáng', kr: '침대' },
  { id: 178, cn: '前面', py: 'qiánmiàn', kr: '앞' },
  { id: 179, cn: '后面', py: 'hòumiàn', kr: '뒤' },
  { id: 180, cn: '左边', py: 'zuǒbian', kr: '왼쪽' },
  { id: 181, cn: '右边', py: 'yòubian', kr: '오른쪽' },
  { id: 182, cn: '旁边', py: 'pángbiān', kr: '옆' },
  { id: 183, cn: '里面', py: 'lǐmiàn', kr: '안' },
  { id: 184, cn: '外面', py: 'wàimiàn', kr: '밖' },
  { id: 185, cn: '上面', py: 'shàngmiàn', kr: '위' },
  { id: 186, cn: '下面', py: 'xiàmiàn', kr: '아래' },
  { id: 187, cn: '附近', py: 'fùjìn', kr: '근처' },
  { id: 188, cn: '远', py: 'yuǎn', kr: '멀다' },
  { id: 189, cn: '近', py: 'jìn', kr: '가깝다' },
  { id: 190, cn: '地图', py: 'dìtú', kr: '지도' },
  { id: 191, cn: '车站', py: 'chēzhàn', kr: '정류장' },
  { id: 192, cn: '机场', py: 'jīchǎng', kr: '공항' },
  { id: 193, cn: '路', py: 'lù', kr: '길' },
  { id: 194, cn: '方向', py: 'fāngxiàng', kr: '방향' },
  { id: 195, cn: '汽车', py: 'qìchē', kr: '자동차' },
  { id: 196, cn: '出租车', py: 'chūzūchē', kr: '택시' },
  { id: 197, cn: '公共汽车', py: 'gōnggòngqìchē', kr: '버스' },
  { id: 198, cn: '地铁', py: 'dìtiě', kr: '지하철' },
  { id: 199, cn: '飞机', py: 'fēijī', kr: '비행기' },
  { id: 200, cn: '火车', py: 'huǒchē', kr: '기차' },
  { id: 201, cn: '自行车', py: 'zìxíngchē', kr: '자전거' },
  { id: 202, cn: '票', py: 'piào', kr: '표' },
  { id: 203, cn: '司机', py: 'sījī', kr: '운전사' },
  { id: 204, cn: '护照', py: 'hùzhào', kr: '여권' },
  { id: 205, cn: '路口', py: 'lùkǒu', kr: '교차로' },
  { id: 206, cn: '朋友', py: 'péngyou', kr: '친구' },
  { id: 207, cn: '老师', py: 'lǎoshī', kr: '선생님' },
  { id: 208, cn: '学生', py: 'xuésheng', kr: '학생' },
  { id: 209, cn: '爸爸', py: 'bàba', kr: '아빠' },
  { id: 210, cn: '妈妈', py: 'māma', kr: '엄마' },
  { id: 211, cn: '哥哥', py: 'gēge', kr: '형, 오빠' },
  { id: 212, cn: '姐姐', py: 'jiějie', kr: '누나, 언니' },
  { id: 213, cn: '弟弟', py: 'dìdi', kr: '남동생' },
  { id: 214, cn: '妹妹', py: 'mèimei', kr: '여동생' },
  { id: 215, cn: '孩子', py: 'háizi', kr: '아이' },
  { id: 216, cn: '医生', py: 'yīshēng', kr: '의사' },
  { id: 217, cn: '问题', py: 'wèntí', kr: '문제' },
  { id: 218, cn: '答案', py: 'dá’àn', kr: '답' },
  { id: 219, cn: '考试', py: 'kǎoshì', kr: '시험' },
  { id: 220, cn: '成绩', py: 'chéngjì', kr: '성적' },
  { id: 221, cn: '作业', py: 'zuòyè', kr: '숙제' },
  { id: 222, cn: '名字', py: 'míngzi', kr: '이름' },
  { id: 223, cn: '号码', py: 'hàomǎ', kr: '번호' },
  { id: 224, cn: '机会', py: 'jīhuì', kr: '기회' },
  { id: 225, cn: '办法', py: 'bànfǎ', kr: '방법' },
  { id: 226, cn: '习惯', py: 'xíguàn', kr: '습관' },
  { id: 227, cn: '经验', py: 'jīngyàn', kr: '경험' },
  { id: 228, cn: '消息', py: 'xiāoxi', kr: '소식' },
  { id: 229, cn: '原因', py: 'yuányīn', kr: '원인' },
  { id: 230, cn: '结果', py: 'jiéguǒ', kr: '결과' },
  { id: 231, cn: '米饭', py: 'mǐfàn', kr: '밥' },
  { id: 232, cn: '面包', py: 'miànbāo', kr: '빵' },
  { id: 233, cn: '面条', py: 'miàntiáo', kr: '면' },
  { id: 234, cn: '水果', py: 'shuǐguǒ', kr: '과일' },
  { id: 235, cn: '苹果', py: 'píngguǒ', kr: '사과' },
  { id: 236, cn: '香蕉', py: 'xiāngjiāo', kr: '바나나' },
  { id: 237, cn: '鸡蛋', py: 'jīdàn', kr: '계란' },
  { id: 238, cn: '牛奶', py: 'niúnǎi', kr: '우유' },
  { id: 239, cn: '咖啡', py: 'kāfēi', kr: '커피' },
  { id: 240, cn: '水', py: 'shuǐ', kr: '물' },
  { id: 241, cn: '茶', py: 'chá', kr: '차' },
  { id: 242, cn: '菜', py: 'cài', kr: '요리, 채소' },
  { id: 243, cn: '肉', py: 'ròu', kr: '고기' },
  { id: 244, cn: '鱼', py: 'yú', kr: '생선' },
  { id: 245, cn: '手机', py: 'shǒujī', kr: '휴대폰' },
  { id: 246, cn: '电脑', py: 'diànnǎo', kr: '컴퓨터' },
  { id: 247, cn: '照片', py: 'zhàopiàn', kr: '사진' },
  { id: 248, cn: '音乐', py: 'yīnyuè', kr: '음악' },
  { id: 249, cn: '电影', py: 'diànyǐng', kr: '영화' },
  { id: 250, cn: '天气', py: 'tiānqì', kr: '날씨' },
  { id: 251, cn: '季节', py: 'jìjié', kr: '계절' },
  { id: 252, cn: '春天', py: 'chūntiān', kr: '봄' },
  { id: 253, cn: '夏天', py: 'xiàtiān', kr: '여름' },
  { id: 254, cn: '秋天', py: 'qiūtiān', kr: '가을' },
  { id: 255, cn: '冬天', py: 'dōngtiān', kr: '겨울' },
  { id: 256, cn: '雨', py: 'yǔ', kr: '비' },
  { id: 257, cn: '雪', py: 'xuě', kr: '눈' },
  { id: 258, cn: '风', py: 'fēng', kr: '바람' },
  { id: 259, cn: '山', py: 'shān', kr: '산' },
  { id: 260, cn: '海', py: 'hǎi', kr: '바다' },
  { id: 261, cn: '国家', py: 'guójiā', kr: '국가' },
  { id: 262, cn: '城市', py: 'chéngshì', kr: '도시' },
  { id: 263, cn: '文化', py: 'wénhuà', kr: '문화' },
  { id: 264, cn: '世界', py: 'shìjiè', kr: '세계' },
  { id: 265, cn: '生活', py: 'shēnghuó', kr: '생활' },
  { id: 266, cn: '未来', py: 'wèilái', kr: '미래' },
  { id: 267, cn: '过去', py: 'guòqù', kr: '과거' },
  { id: 268, cn: '故事', py: 'gùshi', kr: '이야기' },
  { id: 269, cn: '语言', py: 'yǔyán', kr: '언어' },
  { id: 270, cn: '中文', py: 'Zhōngwén', kr: '중국어' },
  { id: 271, cn: '汉语', py: 'Hànyǔ', kr: '한어, 중국어' },
  { id: 272, cn: '老师好', py: 'lǎoshī hǎo', kr: '안녕하세요 선생님' },
  { id: 273, cn: '谢谢', py: 'xièxie', kr: '감사합니다' },
  { id: 274, cn: '对不起', py: 'duìbuqǐ', kr: '죄송합니다' },
  { id: 275, cn: '没关系', py: 'méiguānxi', kr: '괜찮습니다' },
  { id: 276, cn: '请', py: 'qǐng', kr: '부디, 주세요' },
  { id: 277, cn: '欢迎', py: 'huānyíng', kr: '환영합니다' },
  { id: 278, cn: '再见', py: 'zàijiàn', kr: '안녕히 가세요' },
  { id: 279, cn: '没问题', py: 'méi wèntí', kr: '문제없다' },
  { id: 280, cn: '知道了', py: 'zhīdào le', kr: '알겠습니다' },
  { id: 281, cn: '药', py: 'yào', kr: '약' },
  { id: 282, cn: '身体', py: 'shēntǐ', kr: '몸' },
  { id: 283, cn: '同学', py: 'tóngxué', kr: '학우' },
  { id: 284, cn: '服务员', py: 'fúwùyuán', kr: '종업원' },
  { id: 285, cn: '经理', py: 'jīnglǐ', kr: '매니저' },
  { id: 286, cn: '新闻', py: 'xīnwén', kr: '뉴스' },
  { id: 287, cn: '电视', py: 'diànshì', kr: '텔레비전' },
  { id: 288, cn: '节目', py: 'jiémù', kr: '프로그램' },
  { id: 289, cn: '比赛', py: 'bǐsài', kr: '경기' },
  { id: 290, cn: '学习汉语', py: 'xuéxí Hànyǔ', kr: '중국어를 공부하다' },
  { id: 291, cn: '便条', py: 'biàntiáo', kr: '메모' },
  { id: 292, cn: '练习', py: 'liànxí', kr: '연습' },
  { id: 293, cn: '句子', py: 'jùzi', kr: '문장' },
  { id: 294, cn: '词语', py: 'cíyǔ', kr: '단어' },
  { id: 295, cn: '发音', py: 'fāyīn', kr: '발음' },
  { id: 296, cn: '意思', py: 'yìsi', kr: '의미' },
  { id: 297, cn: '正确', py: 'zhèngquè', kr: '정확하다' },
  { id: 298, cn: '错误', py: 'cuòwù', kr: '틀리다' },
  { id: 299, cn: '简单', py: 'jiǎndān', kr: '간단하다' },
  { id: 300, cn: '复杂', py: 'fùzá', kr: '복잡하다' },
];

// ============= 2. 관직 칭호 및 랭킹 데이터 =============
const trainingTitles = [
  '십호장 (十戶長)',
  '백부장 (百夫長)',
  '군사마 (軍司馬)',
  '도위 (都尉)',
  '교위 (校尉)',
  '중랑장 (中郞將)',
  '태수 (太守)',
  '장군 (將軍)',
  '대장군 (大將軍)',
  '승상 (丞相)',
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

// 1~5위 절대 고정 점수 (이론상 최대치 반영)
const topFixedRankers = [
  { name: '제갈량', score: 2015670, isPlayer: false },
  { name: '조조', score: 1932467, isPlayer: false },
  { name: '사마의', score: 1250693, isPlayer: false },
  { name: '중국어신동', score: 1002310, isPlayer: false },
  { name: '여포', score: 1001211, isPlayer: false },
];
// ============= 3. 게임 상태 변수 =============
let isTrainingMode = false;
let currentTrainingStage = 1;
let remainingWordsPool = [];

let playerName = '도전자';
let selections = { hanja: null, pinyin: null, korean: null };
let score = 0,
  combo = 0,
  stage = 1,
  timeLeft = 100,
  timerId = null;
let items = { hint: 1, freeze: 1 };
let isFrozen = false;
let isProcessingMatch = false;
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

let currentBgmIndex = 1;
let isBgmPlaying = false;

// ============= 4. 삼국지 이벤트 DB =============
let eventDB = [
  {
    id: 'redhare',
    title: '🐎 여포의 적토마',
    image: 'images2/lvbu.png',
    desc: '시간이 2배 빨리 줄어들지만, 정답 점수가 3배가 됩니다.',
    action: () => {
      stageTimerSpeed = 1.0;
      eventScoreMultiplier = 3;
    },
  },
  {
    id: 'eastwind',
    title: '🍃 제갈량의 동남풍',
    image: 'images2/zhuge.png',
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
    image: 'images2/zhangfei.png',
    desc: '적군 하나 세트가 즉시 제거됩니다. 대신 남은 시간 15% 감소!',
    action: () => {
      timeLeft -= 15;
      setTimeout(autoSolveOne, 100);
    },
  },
  {
    id: 'huatuo',
    title: '💊 화타의 마불산',
    image: 'images2/huatuo.png',
    desc: '타이머가 30% 즉시 회복됩니다.',
    action: () => {
      timeLeft = Math.min(100, timeLeft + 30);
    },
  },
  {
    id: 'guanyu',
    title: '🛡️ 관우의 오관육장 돌파',
    image: 'images2/guanyu.png',
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
    image: 'images2/liubei.png',
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
    image: 'images2/zhaoyun.png',
    desc: '단어 2쌍이 즉시 파괴되지만, 남은 시간이 30% 날아갑니다.',
    action: () => {
      timeLeft -= 30;
      setTimeout(autoSolveOne, 100);
      setTimeout(autoSolveOne, 400);
    },
  },
  {
    id: 'caocao',
    title: '🌾 조조의 둔전제',
    image: 'images2/caocao.png',
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
    image: 'images2/diaochan.png',
    desc: '즉시 보너스 30,000점을 얻지만, 타이머가 30%로 감소합니다!',
    action: () => {
      score = Number(score) + 30000;
      timeLeft = 30;
      document.getElementById('score').innerText = score.toLocaleString();
    },
  },
  {
    id: 'sunquan',
    title: '🏰 손권의 수성',
    image: 'images2/sunquan.png',
    desc: '시간이 100%로 차오르지만, 다음 스테이지 점수 획득량이 0.5배가 됩니다.',
    action: () => {
      timeLeft = 100;
      eventScoreMultiplier = 0.5;
    },
  },
];

// ============= 5. 초기 세팅 및 UI 제어 =============
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

  setTimeout(() => {
    const bgImage = document.getElementById('bg-image');
    const modeSelect = document.getElementById('mode-select-container');
    if (bgImage) bgImage.classList.add('blurred');
    if (modeSelect) modeSelect.classList.remove('start-hidden');
  }, 2500);
});

function hideAllScreens() {
  [
    'mode-select-container',
    'training-setup-container',
    'intro-container',
    'game-container',
    'ranking-container',
  ].forEach((id) => {
    document.getElementById(id).classList.add('screen-hidden');
  });
}

function backToModeSelect() {
  hideAllScreens();
  document
    .getElementById('mode-select-container')
    .classList.remove('screen-hidden');
  stopBGM();
}

function showTrainingSetup() {
  hideAllScreens();
  const container = document.getElementById('training-setup-container');
  container.classList.remove('screen-hidden');

  const clearedStages = JSON.parse(
    localStorage.getItem('trainingProgressV11') || '[]',
  );
  const buttons = container.querySelectorAll('.stage-grid button');

  buttons.forEach((btn, index) => {
    const stageNum = index + 1;
    if (clearedStages.includes(stageNum)) {
      btn.classList.add('cleared');
      const oldTitle = btn.querySelector('.reward-title');
      if (oldTitle) oldTitle.remove();
      const titleSpan = document.createElement('span');
      titleSpan.className = 'reward-title';
      titleSpan.innerText = trainingTitles[index];
      btn.appendChild(titleSpan);
    }
  });
}

function showChallengeSetup() {
  hideAllScreens();
  document.getElementById('intro-container').classList.remove('screen-hidden');
}

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

// ============= 6. 게임 시작 로직 =============
function startTraining(stageNum) {
  const startIndex = (stageNum - 1) * 30;
  const endIndex = stageNum * 30;

  if (wordList.length < startIndex + 1) {
    showAlert(
      '데이터 부족',
      `현재 단어가 ${wordList.length}개 밖에 없습니다.\n스크립트에 300개의 단어를 채워주세요!`,
    );
    return;
  }

  isTrainingMode = true;
  currentTrainingStage = stageNum;
  playerName = `훈련병 (제 ${stageNum} 장)`;
  document.getElementById('game-title').innerText = `⚔️ 제 ${stageNum} 장 훈련`;

  remainingWordsPool = wordList.slice(startIndex, endIndex);

  hideAllScreens();
  document.getElementById('game-container').classList.remove('screen-hidden');
  document.getElementById('item-zone').style.display = 'none';

  isBgmPlaying = true;
  document.getElementById('bgm-toggle').innerText = '🎵 BGM: 켜짐';
  startBGM();
  startGame();
}

function startGameFromIntro() {
  const nameInput = document.getElementById('player-name').value.trim();
  if (!nameInput) {
    showAlert('잠깐!', '이름을 먼저 입력해주세요!');
    return;
  }

  isTrainingMode = false;
  playerName = nameInput;
  document.getElementById('game-title').innerText = `🔥 랭킹전 출진`;

  remainingWordsPool = shuffleArray([...wordList]);

  hideAllScreens();
  document.getElementById('game-container').classList.remove('screen-hidden');
  document.getElementById('item-zone').style.display = 'flex';

  isBgmPlaying = true;
  document.getElementById('bgm-toggle').innerText = '🎵 BGM: 켜짐';
  startBGM();
  startGame();
}

function surrenderGame() {
  if (timerId) clearInterval(timerId);
  if (isTrainingMode) {
    showAlert('훈련 중단', '훈련을 종료하고 돌아갑니다.', () => {
      backToModeSelect();
    });
  } else {
    showRankingScreen();
  }
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
  isProcessingMatch = false;
  items = { hint: 1, freeze: 1 };
  shieldCount = 0;
  stageTimerSpeed = 0.5;
  eventScoreMultiplier = 1;
  cardsData = { hanja: [], pinyin: [], korean: [] };
  activeIds = [];

  document.getElementById('score').innerText = score;
  document.getElementById('stage').innerText = stage;
  document.getElementById('message').innerText =
    '한자 → 병음 → 뜻 순서로 고르세요!';
  document.getElementById('timer-bar').style.width = '100%';
  document.getElementById('timer-bar').style.background = '#4caf50';
  document.getElementById('hanja-row').innerHTML = '';
  document.getElementById('pinyin-row').innerHTML = '';
  document.getElementById('korean-row').innerHTML = '';

  clearPenaltyEffects();
  updateComboDisplay();
  updateItemDisplay();

  if (timerId) clearInterval(timerId);
  startNextStage();
  startTimer();
}

function startNextStage() {
  // ★ 버그 수정: 여기서 초기화하던 코드를 삭제하여, 이벤트 버프가 지워지지 않게 수정했습니다!

  if (
    remainingWordsPool.length === 0 &&
    cardsData.hanja.every((c) => c.solved)
  ) {
    if (isTrainingMode) {
      if (timerId) clearInterval(timerId);
      let clearedStages = JSON.parse(
        localStorage.getItem('trainingProgressV11') || '[]',
      );
      if (!clearedStages.includes(currentTrainingStage)) {
        clearedStages.push(currentTrainingStage);
        localStorage.setItem(
          'trainingProgressV11',
          JSON.stringify(clearedStages),
        );
      }

      const rankName = trainingTitles[currentTrainingStage - 1];
      showAlert(
        '🎖️ 관직 하사',
        `축하합니다!\n제 ${currentTrainingStage}장을 완벽히 정복하여\n당신을 [${rankName}]에 임명합니다!`,
        () => {
          showTrainingSetup();
        },
      );
      return;
    } else {
      remainingWordsPool = shuffleArray([...wordList]);
    }
  }

  if (cardsData.hanja.length === 0 || cardsData.hanja.every((c) => c.solved)) {
    const currentWords = remainingWordsPool.splice(0, 3);
    if (currentWords.length > 0) {
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
    }
  }

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
        if (isTrainingMode) {
          showAlert(
            '시간 초과!',
            `시간이 다 되었습니다. 조금 더 연습해 봅시다!\n달성한 훈련도: ${stage}단계`,
            () => {
              backToModeSelect();
            },
          );
        } else {
          showAlert(
            '전투 종료!',
            `시간이 모두 흘렀습니다.\n\n최종 달성: STAGE ${stage}\n최종 점수: ${score.toLocaleString()}점`,
            () => {
              showRankingScreen();
            },
          );
        }
      }
    }
  }, 100);
}

// ============= 7. 게임 플레이 =============
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
  if (isFrozen || isProcessingMatch) return;

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
  isProcessingMatch = true;

  if (hanja === pinyin && pinyin === korean) {
    clearPenaltyEffects();
    let timeTaken = (Date.now() - currentTurnStartTime) / 1000;
    let speedBonus = Math.floor(Math.max(0, 5 - timeTaken) * 20);
    combo++;
    let comboMultiplier = 1 + (combo - 1) * 0.2;
    let earnedScore = Math.floor(
      (100 + speedBonus) * comboMultiplier * eventScoreMultiplier,
    );

    score = Number(score) + Number(earnedScore);
    timeLeft = Math.min(100, timeLeft + 15);
    document.getElementById('score').innerText = score.toLocaleString();
    updateComboDisplay();

    let msg = `정답! +${earnedScore}점`;
    if (eventScoreMultiplier > 1) msg += ' (적토마 버프!)';
    document.getElementById('message').innerText = msg;

    cardsData.hanja.find((c) => c.id === hanja).solved = true;
    cardsData.pinyin.find((c) => c.id === hanja).solved = true;
    cardsData.korean.find((c) => c.id === hanja).solved = true;

    if (!isTrainingMode && combo > 0) {
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

      // ★ 버그 수정: 스테이지가 끝났으므로 이전 버프들을 여기서 깔끔하게 리셋합니다. (이후에 이벤트가 덮어씌움)
      stageTimerSpeed = 0.5;
      eventScoreMultiplier = 1;
      isFrozen = false;
      if (eastwindTimeout) clearTimeout(eastwindTimeout);

      if (activePenalty) {
        document.getElementById('message').innerText =
          `STAGE ${stage - 1} 클리어! 페널티가 이어집니다!`;
        setTimeout(() => {
          startNextStage();
          isProcessingMatch = false;
        }, 800);
      } else {
        document.getElementById('message').innerText =
          `STAGE ${stage - 1} 클리어!`;
        setTimeout(() => {
          isProcessingMatch = false;
          if (!isTrainingMode && Math.random() < 0.4) triggerChoiceEvent();
          else startNextStage();
        }, 800);
      }
    } else {
      currentTurnStartTime = Date.now();
      setTimeout(() => {
        refreshBoard();
        isProcessingMatch = false;
      }, 300);
    }
  } else {
    if (shieldCount > 0) {
      shieldCount--;
      document.getElementById('message').innerText = '🛡️ 방패 사용!';
      selections = { hanja: null, pinyin: null, korean: null };
      document
        .querySelectorAll('.card')
        .forEach((c) => c.classList.remove('selected'));
      isProcessingMatch = false;
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
      if (remainingWordsPool.length > 0) {
        const oldWordId = hanja;
        const oldWordData = wordList.find((w) => w.id === oldWordId);
        if (oldWordData) remainingWordsPool.push(oldWordData);

        const newWord = remainingWordsPool.splice(0, 1)[0];
        activeIds = activeIds.filter((id) => id !== oldWordId);
        activeIds.push(newWord.id);

        let hItem = cardsData.hanja.find((c) => c.id === oldWordId);
        if (hItem) {
          hItem.id = newWord.id;
          hItem.text = newWord.cn;
        }
        let pItem = cardsData.pinyin.find((c) => c.id === oldWordId);
        if (pItem) {
          pItem.id = newWord.id;
          pItem.text = newWord.py;
        }
        let kItem = cardsData.korean.find((c) => c.id === oldWordId);
        if (kItem) {
          kItem.id = newWord.id;
          kItem.text = newWord.kr;
        }
      }
      currentTurnStartTime = Date.now();
      refreshBoard();
      isProcessingMatch = false;
    }, 800);
  }
}

// ============= 8. 이벤트 유틸리티 =============
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

function triggerChoiceEvent() {
  if (eventDB.length === 0) {
    startNextStage();
    return;
  }

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

  if (randomEvent.id === 'diaochan') eventDB.splice(randomIndex, 1);

  document.querySelector('.btn-accept').onclick = () => {
    document.getElementById('event-modal').classList.add('hidden');
    isFrozen = false;
    document.getElementById('message').innerText =
      `[${randomEvent.title}] 발동!`;
    randomEvent.action();
    startNextStage();
  };
  document.querySelector('.btn-decline').onclick = () => {
    document.getElementById('event-modal').classList.add('hidden');
    isFrozen = false;
    document.getElementById('message').innerText = `이벤트를 거절했습니다.`;
    startNextStage();
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

// ============= 9. 랭킹 시스템 (최고 기록 유지 + 안내 메시지 강화 V12) =============
function showRankingScreen() {
  hideAllScreens();
  document
    .getElementById('ranking-container')
    .classList.remove('screen-hidden');

  let savedData = localStorage.getItem('chineseRankingsV12');
  let rankings = [];

  try {
    if (savedData) {
      rankings = JSON.parse(savedData);
      if (!Array.isArray(rankings)) rankings = [];

      rankings.forEach((r) => {
        if (r && typeof r === 'object') {
          const isFixedRanker = topFixedRankers.some(
            (fixed) => fixed.name === r.name,
          );
          if (!r.isPlayer && !isFixedRanker) {
            r.score = Math.floor(r.score * 1.005);
          }
        }
      });
    }
  } catch (error) {
    rankings = [];
  }

  if (rankings.length === 0) {
    rankings = JSON.parse(JSON.stringify(topFixedRankers));
    let tempNames = shuffleArray([...fakeNamesPool]);
    for (let i = 0; i < 95; i++) {
      let botScore =
        Math.floor(1000000 * Math.pow(0.92, i)) +
        Math.floor(Math.random() * 500);
      rankings.push({ name: tempNames[i], score: botScore, isPlayer: false });
    }
  }

  let isNewRecord = false;
  let previousBest = 0;

  if (playerName) {
    let pIdx = rankings.findIndex((r) => r.name === playerName && r.isPlayer);

    if (pIdx !== -1) {
      previousBest = rankings[pIdx].score;
      if (score > rankings[pIdx].score) {
        rankings[pIdx].score = score;
        isNewRecord = true;
      }
    } else {
      rankings.push({ name: playerName, score: score, isPlayer: true });
      isNewRecord = true;
    }
  }

  rankings.sort((a, b) => b.score - a.score);
  localStorage.setItem('chineseRankingsV12', JSON.stringify(rankings));

  const listEl = document.getElementById('ranking-list');
  listEl.innerHTML = '';

  let playerFinalRank =
    rankings.findIndex((r) => r.name === playerName && r.isPlayer) + 1;
  let indicesToShow = new Set([0, 1, 2, 3, 4]);
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
    if (!r) return;

    const li = document.createElement('li');
    let medal =
      idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `${idx + 1}위`;
    if (idx === pPos) li.classList.add('player-row');
    li.innerHTML = `<span>${medal} ${r.name}</span> <span>${r.score.toLocaleString()} 점</span>`;
    listEl.appendChild(li);
    lastIdx = idx;
  });

  const msgEl = document.getElementById('ranking-msg');

  if (isNewRecord) {
    if (playerFinalRank === 1)
      msgEl.innerText = '🎉 경이롭습니다! 최고 기록으로 천하를 통일하셨습니다!';
    else if (playerFinalRank <= 5)
      msgEl.innerText = `🔥 최고 기록 달성! 현재 ${playerFinalRank}위! 전설의 영웅들과 어깨를 나란히 했습니다!`;
    else
      msgEl.innerText = `🔥 최고 기록 갱신! 현재 순위는 ${playerFinalRank}위입니다. 조금 더 위를 노려보세요!`;
  } else {
    msgEl.innerHTML = `이번 전투 점수: <b style="color:#333;">${score.toLocaleString()}점</b><br>아쉽게도 최고 기록(${previousBest.toLocaleString()}점)을 넘지 못했습니다. 현재 <b>${playerFinalRank}위</b> 유지 중!`;
  }
}
