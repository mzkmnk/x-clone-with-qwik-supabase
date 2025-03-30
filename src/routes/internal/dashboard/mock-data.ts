export function getTweets() {
  return tweets;
}

export function getTrends() {
  return trends;
}

export function getRecommendedUsers() {
  return recommendedUsers;
}

const recommendedUsers = [
  {
    id: "1",
    name: "山田 太郎",
    username: "@taro_yamada",
    avatar: "https://example.com/avatar1.png",
    bio: "フロントエンドエンジニア。QwikとReactが大好きです。",
    followersCount: 1520,
    followingCount: 310,
  },
  {
    id: "2",
    name: "佐藤 花子",
    username: "@hanako_sato",
    avatar: "https://example.com/avatar2.png",
    bio: "バックエンド開発者。Ruby on RailsとNode.jsを使って活躍中。",
    followersCount: 980,
    followingCount: 450,
  },
  {
    id: "3",
    name: "鈴木 一郎",
    username: "@ichiro_suzuki",
    avatar: "https://example.com/avatar3.png",
    bio: "UI/UXデザイナー。使いやすいデザインを追求しています。",
    followersCount: 2040,
    followingCount: 500,
  },
  {
    id: "4",
    name: "高橋 次郎",
    username: "@jiro_takahashi",
    avatar: "https://example.com/avatar4.png",
    bio: "データサイエンティスト。PythonとRでデータ解析を行っています。",
    followersCount: 1750,
    followingCount: 620,
  },
  {
    id: "5",
    name: "伊藤 三郎",
    username: "@saburo_ito",
    avatar: "https://example.com/avatar5.png",
    bio: "フルスタックエンジニア。最新技術に常に挑戦中。",
    followersCount: 2300,
    followingCount: 480,
  },
];

const trends = [
  {
    id: "1",
    title: "#Qwik",
    tweetCount: 15432,
    category: "テクノロジー",
    description: "Qwikに関する最新の話題",
  },
  {
    id: "2",
    title: "#JavaScript",
    tweetCount: 20345,
    category: "プログラミング",
    description: "JavaScriptのアップデートやトレンド情報",
  },
  {
    id: "3",
    title: "#WebDevelopment",
    tweetCount: 11200,
    category: "開発",
    description: "ウェブ開発に関するニュースや技術情報",
  },
  {
    id: "4",
    title: "#Startups",
    tweetCount: 8750,
    category: "ビジネス",
    description: "新興企業やスタートアップに関する話題",
  },
  {
    id: "5",
    title: "#OpenSource",
    tweetCount: 18900,
    category: "コミュニティ",
    description: "オープンソースプロジェクトの最新情報",
  },
];

const tweets = [
  {
    id: "1",
    user: {
      id: "u1",
      name: "山田 太郎",
      username: "@taro_yamada",
      avatar: "https://example.com/avatar1.png",
    },
    content: "これは最初のツイートです！ #qwik #TwitterClone",
    createdAt: "2025-03-29T12:00:00Z",
    likes: 10,
    retweets: 2,
    replies: 1,
    images: [],
  },
  {
    id: "2",
    user: {
      id: "u2",
      name: "佐藤 花子",
      username: "@hanako_sato",
      avatar: "https://example.com/avatar2.png",
    },
    content: "Qwikで開発しているTwitterクローン、順調に進んでいます！",
    createdAt: "2025-03-29T12:30:00Z",
    likes: 20,
    retweets: 5,
    replies: 3,
    images: ["https://example.com/tweet-image.png"],
  },
  {
    id: "3",
    user: {
      id: "u3",
      name: "鈴木 一郎",
      username: "@ichiro_suzuki",
      avatar: "https://example.com/avatar3.png",
    },
    content: "今日のランチは美味しかった！",
    createdAt: "2025-03-29T13:00:00Z",
    likes: 15,
    retweets: 3,
    replies: 2,
    images: [],
  },
  {
    id: "4",
    user: {
      id: "u4",
      name: "高橋 次郎",
      username: "@jiro_takahashi",
      avatar: "https://example.com/avatar4.png",
    },
    content: "新しい機能のテスト中です。ご意見お待ちしています。",
    createdAt: "2025-03-29T13:30:00Z",
    likes: 8,
    retweets: 1,
    replies: 0,
    images: [],
  },
  {
    id: "5",
    user: {
      id: "u5",
      name: "伊藤 三郎",
      username: "@saburo_ito",
      avatar: "https://example.com/avatar5.png",
    },
    content: "Qwikはすごい！パフォーマンスが高く、使いやすいです。",
    createdAt: "2025-03-29T14:00:00Z",
    likes: 30,
    retweets: 10,
    replies: 4,
    images: ["https://example.com/tweet-image2.png"],
  },
  {
    id: "6",
    user: {
      id: "u6",
      name: "中村 四郎",
      username: "@shiro_nakamura",
      avatar: "https://example.com/avatar6.png",
    },
    content: "Qwikで新しいチャレンジをしています！",
    createdAt: "2025-03-29T14:30:00Z",
    likes: 12,
    retweets: 3,
    replies: 0,
    images: [],
  },
  {
    id: "7",
    user: {
      id: "u7",
      name: "小林 亮",
      username: "@ryo_kobayashi",
      avatar: "https://example.com/avatar7.png",
    },
    content: "今日は素晴らしいアイディアが浮かびました。",
    createdAt: "2025-03-29T14:45:00Z",
    likes: 7,
    retweets: 1,
    replies: 2,
    images: [],
  },
  {
    id: "8",
    user: {
      id: "u8",
      name: "松本 美咲",
      username: "@misaki_matsumoto",
      avatar: "https://example.com/avatar8.png",
    },
    content: "ランチタイムに美味しいカフェを発見！",
    createdAt: "2025-03-29T15:00:00Z",
    likes: 18,
    retweets: 4,
    replies: 3,
    images: ["https://example.com/cafe.png"],
  },
  {
    id: "9",
    user: {
      id: "u9",
      name: "高木 一也",
      username: "@kazu_takagi",
      avatar: "https://example.com/avatar9.png",
    },
    content: "週末のプログラミング勉強会、最高でした！",
    createdAt: "2025-03-29T15:15:00Z",
    likes: 22,
    retweets: 6,
    replies: 2,
    images: [],
  },
  {
    id: "10",
    user: {
      id: "u10",
      name: "斎藤 奈美",
      username: "@nami_saito",
      avatar: "https://example.com/avatar10.png",
    },
    content: "新しいUIデザインに挑戦中です。",
    createdAt: "2025-03-29T15:30:00Z",
    likes: 9,
    retweets: 2,
    replies: 1,
    images: ["https://example.com/design.png"],
  },
  {
    id: "11",
    user: {
      id: "u11",
      name: "渡辺 剛",
      username: "@tsuyoshi_watanabe",
      avatar: "https://example.com/avatar11.png",
    },
    content: "最近ハマっているプログラミング言語はTypeScript。",
    createdAt: "2025-03-29T15:45:00Z",
    likes: 14,
    retweets: 3,
    replies: 2,
    images: [],
  },
  {
    id: "12",
    user: {
      id: "u12",
      name: "石井 由美",
      username: "@yumi_ishii",
      avatar: "https://example.com/avatar12.png",
    },
    content: "春の陽気に誘われて散歩しました。",
    createdAt: "2025-03-29T16:00:00Z",
    likes: 16,
    retweets: 2,
    replies: 1,
    images: ["https://example.com/spring.png"],
  },
  {
    id: "13",
    user: {
      id: "u13",
      name: "藤田 健",
      username: "@ken_fujita",
      avatar: "https://example.com/avatar13.png",
    },
    content: "プロジェクトのデバッグに苦戦中…",
    createdAt: "2025-03-29T16:15:00Z",
    likes: 5,
    retweets: 1,
    replies: 0,
    images: [],
  },
  {
    id: "14",
    user: {
      id: "u14",
      name: "佐々木 彩",
      username: "@aya_sasaki",
      avatar: "https://example.com/avatar14.png",
    },
    content: "新しいカメラを試してみたら、素晴らしい写真が撮れた！",
    createdAt: "2025-03-29T16:30:00Z",
    likes: 25,
    retweets: 7,
    replies: 4,
    images: ["https://example.com/photo.png"],
  },
  {
    id: "15",
    user: {
      id: "u15",
      name: "村上 悠",
      username: "@yu_murakami",
      avatar: "https://example.com/avatar15.png",
    },
    content: "夜遅くまでコードを書いていたら、ふと気づけば朝に。",
    createdAt: "2025-03-29T16:45:00Z",
    likes: 11,
    retweets: 3,
    replies: 2,
    images: [],
  },
  {
    id: "16",
    user: {
      id: "u16",
      name: "山本 拓也",
      username: "@taku_yamamoto",
      avatar: "https://example.com/avatar16.png",
    },
    content: "今日のミーティングはとても実りあるものだった。",
    createdAt: "2025-03-29T17:00:00Z",
    likes: 20,
    retweets: 5,
    replies: 3,
    images: [],
  },
  {
    id: "17",
    user: {
      id: "u17",
      name: "大野 真由美",
      username: "@mayumi_oono",
      avatar: "https://example.com/avatar17.png",
    },
    content: "週末の旅行計画を立て中。行き先はまだ秘密です。",
    createdAt: "2025-03-29T17:15:00Z",
    likes: 30,
    retweets: 8,
    replies: 5,
    images: ["https://example.com/travel.png"],
  },
  {
    id: "18",
    user: {
      id: "u18",
      name: "川口 智也",
      username: "@tomoya_kawaguchi",
      avatar: "https://example.com/avatar18.png",
    },
    content: "新作の小説を読み始めました。とても引き込まれます。",
    createdAt: "2025-03-29T17:30:00Z",
    likes: 17,
    retweets: 2,
    replies: 2,
    images: [],
  },
  {
    id: "19",
    user: {
      id: "u19",
      name: "岡本 英樹",
      username: "@hideki_okamoto",
      avatar: "https://example.com/avatar19.png",
    },
    content: "朝のジョギングで気分爽快！",
    createdAt: "2025-03-29T17:45:00Z",
    likes: 21,
    retweets: 4,
    replies: 3,
    images: ["https://example.com/jogging.png"],
  },
  {
    id: "20",
    user: {
      id: "u20",
      name: "長谷川 美和",
      username: "@miwa_hasegawa",
      avatar: "https://example.com/avatar20.png",
    },
    content: "最近のアップデートでアプリが劇的に変わりました。",
    createdAt: "2025-03-29T18:00:00Z",
    likes: 28,
    retweets: 6,
    replies: 4,
    images: [],
  },
  {
    id: "21",
    user: {
      id: "u21",
      name: "今井 涼",
      username: "@ryo_imai",
      avatar: "https://example.com/avatar21.png",
    },
    content: "新しいカフェで一息。コーヒーが最高です。",
    createdAt: "2025-03-29T18:15:00Z",
    likes: 19,
    retweets: 3,
    replies: 1,
    images: ["https://example.com/coffee.png"],
  },
  {
    id: "22",
    user: {
      id: "u22",
      name: "森田 直樹",
      username: "@naoki_morita",
      avatar: "https://example.com/avatar22.png",
    },
    content: "週末のハッカソンに向けて準備万端！",
    createdAt: "2025-03-29T18:30:00Z",
    likes: 26,
    retweets: 5,
    replies: 2,
    images: [],
  },
  {
    id: "23",
    user: {
      id: "u23",
      name: "林 真紀子",
      username: "@makiko_hayashi",
      avatar: "https://example.com/avatar23.png",
    },
    content: "新しいレシピを試してみたら、大成功でした！",
    createdAt: "2025-03-29T18:45:00Z",
    likes: 24,
    retweets: 4,
    replies: 3,
    images: ["https://example.com/recipe.png"],
  },
  {
    id: "24",
    user: {
      id: "u24",
      name: "近藤 拓海",
      username: "@takumi_kondo",
      avatar: "https://example.com/avatar24.png",
    },
    content: "技術ブログを更新しました。ぜひチェックしてみてください。",
    createdAt: "2025-03-29T19:00:00Z",
    likes: 15,
    retweets: 2,
    replies: 1,
    images: [],
  },
  {
    id: "25",
    user: {
      id: "u25",
      name: "原田 彩子",
      username: "@ayako_harada",
      avatar: "https://example.com/avatar25.png",
    },
    content: "Qwikの学習が進むにつれて、実装の楽しさを実感中！",
    createdAt: "2025-03-29T19:15:00Z",
    likes: 32,
    retweets: 7,
    replies: 5,
    images: ["https://example.com/learning.png"],
  },
];
