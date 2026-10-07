/**
 * 卑弥呼の野望：データバンク（UTF-8）
 * このファイルを himiko_map.html と同じフォルダに置いてください。
 *
 * metadata : タイトル、更新日、時代設定
 * map      : 背景画像、拡大中心、倍率、地図上の拠点の並び
 * yamatai  : 全国図の邪馬台国データ
 * settlements : 拠点情報、所属人物・能力値、座標、ピン・ラベル設定
 * routes   : 連絡路。points に通過する拠点IDを順番に指定
 *
 * 座標 x/y は元の地図の左上を基準にした百分率（0～100）です。
 * centerX/centerY は0～1の比率です。labelOffsetX/Y は画面上のpxです。
 * markerType : settlement（赤）、supplement（白）、placeholder（灰）
 * drilldown  : true=環濠詳細へ拡大、false=情報のみ表示
 * 拠点ID（nabari等）は人物・連絡路との対応を保つため変更しないでください。
 * 人物配置・能力値・説明は提供された最新版HTMLからそのまま移行しています。
 * 更新する際は文字列を引用符で囲み、項目間のカンマを維持してください。
 */
window.HIMIKO_DATA = {
  "metadata": {
    "title": "卑弥呼の野望",
    "updatedAt": "2026/09/02",
    "era": "185年ごろ",
    "schemaVersion": 1
  },
  "map": {
    "imageUrl": "https://raw.githubusercontent.com/geolonia/japanese-prefectures/master/map-full.svg",
    "centerX": 0.405,
    "centerY": 0.723,
    "kinaiScale": 10,
    "settlementScale": 20,
    "markerOrder": [
      "miwa",
      "soga",
      "abeno",
      "katsuragi",
      "otomo",
      "nabari",
      "haibara",
      "iga",
      "aoyama",
      "kashio",
      "shironokoshi",
      "inako",
      "biwako",
      "koga",
      "abe",
      "mino",
      "hata",
      "kamo"
    ],
    "overviewOrder": [
      "biwako",
      "koga",
      "abe",
      "inako",
      "shironokoshi",
      "iga",
      "aoyama",
      "kashio",
      "mino",
      "hata",
      "nabari",
      "haibara",
      "miwa",
      "soga",
      "abeno",
      "katsuragi",
      "otomo",
      "kamo"
    ]
  },
  "yamatai": {
    "name": "邪馬台国",
    "type": "地域・勢力圏",
    "representative": "火の巫女 イミコ",
    "population": "各環濠・勢力の集合",
    "people": "イミナ、イミコ、および畿内各地の氏族・環濠",
    "description": "『卑弥呼転生』における物語の中心地域。",
    "map": {
      "x": 40.55,
      "y": 71.7
    }
  },
  "settlements": {
    "soga": {
      "name": "蘇我",
      "drilldown": false,
      "characters": [],
      "type": "地域勢力",
      "representative": "未設定",
      "population": "未設定",
      "people": "未設定",
      "description": "未設定。詳細は不明。",
      "map": {
        "x": 38.63,
        "y": 74.32,
        "markerType": "placeholder",
        "ariaLabel": "蘇我（未設定）",
        "label": "蘇我",
        "labelOffsetX": -18,
        "labelOffsetY": -24,
        "hideLabelInOverview": false
      }
    },
    "katsuragi": {
      "name": "葛城",
      "drilldown": false,
      "characters": [],
      "type": "地域勢力",
      "representative": "未設定",
      "population": "未設定",
      "people": "未設定",
      "description": "未設定。詳細は不明。",
      "map": {
        "x": 38.24,
        "y": 75.18,
        "markerType": "placeholder",
        "ariaLabel": "葛城（未設定）",
        "label": "葛城",
        "labelOffsetX": -18,
        "labelOffsetY": -24,
        "hideLabelInOverview": false
      }
    },
    "otomo": {
      "name": "大伴",
      "drilldown": false,
      "characters": [],
      "type": "地域勢力",
      "representative": "未設定",
      "population": "未設定",
      "people": "未設定",
      "description": "未設定。詳細は不明。",
      "map": {
        "x": 37.36,
        "y": 73.55,
        "markerType": "placeholder",
        "ariaLabel": "大伴（未設定）",
        "label": "大伴",
        "labelOffsetX": -18,
        "labelOffsetY": -24,
        "hideLabelInOverview": false
      }
    },
    "inako": {
      "name": "依那古",
      "drilldown": true,
      "characters": [],
      "type": "環濠集落",
      "representative": "未設定",
      "population": "未設定",
      "people": "未設定",
      "description": "伊賀群の環濠。城之越の北側に位置し、その北東側には阿閉がある。",
      "map": {
        "x": 40.873,
        "y": 72.06,
        "markerType": "settlement",
        "ariaLabel": "依那古",
        "label": "依那古",
        "labelOffsetX": -44,
        "labelOffsetY": -12,
        "hideLabelInOverview": false
      }
    },
    "kashio": {
      "name": "柏尾",
      "drilldown": true,
      "characters": [],
      "type": "環濠集落",
      "representative": "未設定",
      "population": "未設定",
      "people": "未設定",
      "description": "伊賀群の環濠。青山の東側に位置する。",
      "map": {
        "x": 41.65,
        "y": 72.62,
        "markerType": "settlement",
        "ariaLabel": "柏尾",
        "label": "柏尾",
        "labelOffsetX": 13,
        "labelOffsetY": -12,
        "hideLabelInOverview": false
      }
    },
    "aoyama": {
      "name": "青山",
      "drilldown": true,
      "characters": [
        {
          "name": "ナギト",
          "force": 56,
          "intellect": 68,
          "charm": 72
        }
      ],
      "type": "環濠集落",
      "representative": "未設定",
      "population": "未設定",
      "people": "ナギト",
      "description": "伊賀群の東側に位置する環濠。青山の伊賀出身である行商人ナギトが、名張と青山を結ぶ縁を残している。東側には柏尾がある。",
      "map": {
        "x": 41.24,
        "y": 72.88,
        "markerType": "settlement",
        "ariaLabel": "青山",
        "label": "青山",
        "labelOffsetX": 13,
        "labelOffsetY": -12,
        "hideLabelInOverview": false
      }
    },
    "shironokoshi": {
      "name": "城之越",
      "drilldown": true,
      "characters": [
        {
          "name": "伊賀臣瀬渡",
          "force": 71,
          "intellect": 73,
          "charm": 65
        },
        {
          "name": "伊賀之火子",
          "force": 82,
          "intellect": 48,
          "charm": 52
        },
        {
          "name": "伊賀之水瀬",
          "force": 58,
          "intellect": 72,
          "charm": 61
        }
      ],
      "type": "環濠集落",
      "representative": "伊賀臣瀬渡",
      "population": "未設定",
      "people": "伊賀臣瀬渡（セト）、伊賀之火子（ヒコ）、伊賀之水瀬（ミナセ）",
      "description": "伊賀群の地域表示より北側に位置する環濠。伊賀臣瀬渡と、その息子である火子・水瀬が所属する。",
      "map": {
        "x": 40.873,
        "y": 72.43,
        "markerType": "settlement",
        "ariaLabel": "城之越",
        "label": "城之越",
        "labelOffsetX": -52,
        "labelOffsetY": -12,
        "hideLabelInOverview": false
      }
    },
    "haibara": {
      "name": "榛原",
      "drilldown": false,
      "characters": [],
      "type": "地形・中継地点",
      "representative": "未設定",
      "population": "未設定",
      "people": "未設定",
      "description": "三輪と名張の間に位置する中継地点。名張から三輪方面へ向かう経路上の基準点として表示し、南側には加茂が位置する。",
      "map": {
        "x": 40.05,
        "y": 74.197,
        "markerType": "supplement",
        "ariaLabel": "榛原",
        "label": "榛原",
        "labelOffsetX": 13,
        "labelOffsetY": -12,
        "hideLabelInOverview": true
      }
    },
    "hata": {
      "name": "波多",
      "drilldown": true,
      "characters": [
        {
          "name": "鳴鳥",
          "force": 58,
          "intellect": 72,
          "charm": 82
        },
        {
          "name": "古鷹",
          "force": 75,
          "intellect": 70,
          "charm": 65
        },
        {
          "name": "若羽",
          "force": 64,
          "intellect": 56,
          "charm": 48
        },
        {
          "name": "カゲハ",
          "force": 80,
          "intellect": 68,
          "charm": 60
        },
        {
          "name": "ホナミ",
          "force": 30,
          "intellect": 64,
          "charm": 70
        }
      ],
      "type": "環濠集落",
      "representative": "鳴鳥",
      "population": "未設定",
      "people": "鳴鳥、古鷹、若羽、カゲハ、ホナミ",
      "description": "三野のすぐ西側に位置する環濠。鳴鳥を中心に、古鷹・若羽・カゲハらが波多を支え、三野との再編と名張との連携を進めている。",
      "map": {
        "x": 40.39,
        "y": 73.527,
        "markerType": "settlement",
        "ariaLabel": "波多",
        "label": "波多",
        "labelOffsetX": -18,
        "labelOffsetY": -24,
        "hideLabelInOverview": false
      }
    },
    "abeno": {
      "name": "安倍",
      "drilldown": true,
      "characters": [
        {
          "name": "阿倍臣",
          "force": 46,
          "intellect": 86,
          "charm": 78
        }
      ],
      "type": "環濠・地域勢力",
      "representative": "阿倍臣",
      "population": "未設定",
      "people": "阿倍臣",
      "description": "三輪の南西側に位置する阿倍の環濠・地域勢力。阿倍臣は三輪の評定で二番手格に座り、祭祀と政治に関わる。",
      "map": {
        "x": 39.2,
        "y": 74.85,
        "markerType": "settlement",
        "ariaLabel": "安倍",
        "label": "安倍",
        "labelOffsetX": -18,
        "labelOffsetY": 12,
        "hideLabelInOverview": false
      }
    },
    "biwako": {
      "name": "淡海",
      "drilldown": false,
      "characters": [],
      "type": "地形",
      "representative": "―",
      "population": "―",
      "people": "―",
      "description": "滋賀県に位置する日本最大の湖。",
      "map": {
        "x": 40.903,
        "y": 69.187,
        "markerType": "supplement",
        "ariaLabel": "琵琶湖",
        "label": "淡海",
        "labelOffsetX": -48,
        "labelOffsetY": -12,
        "hideLabelInOverview": false
      }
    },
    "koga": {
      "name": "甲賀",
      "drilldown": false,
      "characters": [],
      "type": "地域勢力",
      "representative": "未設定",
      "population": "未設定",
      "people": "未設定",
      "description": "詳細は不明。",
      "map": {
        "x": 40.873,
        "y": 71.157,
        "markerType": "placeholder",
        "ariaLabel": "甲賀（未設定）",
        "label": "甲賀",
        "labelOffsetX": 13,
        "labelOffsetY": -12,
        "hideLabelInOverview": false
      }
    },
    "nabari": {
      "name": "名張",
      "drilldown": true,
      "characters": [
        {
          "name": "イミナ",
          "force": 7,
          "intellect": 86,
          "charm": 48
        },
        {
          "name": "イミコ",
          "force": 3,
          "intellect": 38,
          "charm": 98
        },
        {
          "name": "シラガ",
          "force": 54,
          "intellect": 72,
          "charm": 70
        },
        {
          "name": "タケ",
          "force": 84,
          "intellect": 64,
          "charm": 60
        },
        {
          "name": "イワホコ",
          "force": 74,
          "intellect": 38,
          "charm": 68
        },
        {
          "name": "アサメ",
          "force": 26,
          "intellect": 68,
          "charm": 78
        },
        {
          "name": "コイシ",
          "force": 14,
          "intellect": 24,
          "charm": 68
        },
        {
          "name": "カヤ",
          "force": 58,
          "intellect": 56,
          "charm": 60
        },
        {
          "name": "ハヤト",
          "force": 72,
          "intellect": 54,
          "charm": 67
        },
        {
          "name": "トネ",
          "force": 64,
          "intellect": 64,
          "charm": 54
        },
        {
          "name": "アシ",
          "force": 40,
          "intellect": 58,
          "charm": 56
        },
        {
          "name": "シロ",
          "force": 68,
          "intellect": 42,
          "charm": 80
        },
        {
          "name": "クロ",
          "force": 72,
          "intellect": 36,
          "charm": 76
        }
      ],
      "type": "環濠集落",
      "representative": "名張臣 白髪",
      "population": "約100人規模",
      "people": "イミナ、イミコ、白髪、武、岩矛、朝目、小石、萱、ハヤト、トネ、アシ、シロ、クロ",
      "description": "物語の中心となる環濠。イミナと火の巫女イミコを中心に、白髪・武・岩矛・朝目らが衛生、農業、交易、防衛、制度を支えている。シロとクロも名張側のキャラクターとして登録。",
      "map": {
        "x": 40.633,
        "y": 74.107,
        "markerType": "settlement",
        "ariaLabel": "名張",
        "label": "名張",
        "labelOffsetX": 13,
        "labelOffsetY": 3,
        "hideLabelInOverview": false
      }
    },
    "miwa": {
      "name": "三輪",
      "drilldown": true,
      "characters": [
        {
          "name": "意富多多泥古",
          "force": 46,
          "intellect": 91,
          "charm": 86
        },
        {
          "name": "真人",
          "force": 68,
          "intellect": 78,
          "charm": 82
        },
        {
          "name": "由良",
          "force": 46,
          "intellect": 72,
          "charm": 72
        },
        {
          "name": "オシ",
          "force": 68,
          "intellect": 62,
          "charm": 48
        },
        {
          "name": "ジン",
          "force": 54,
          "intellect": 72,
          "charm": 56
        },
        {
          "name": "サン",
          "force": 62,
          "intellect": 42,
          "charm": 74
        }
      ],
      "type": "有力勢力",
      "representative": "三輪君 意富多多泥古",
      "population": "約4,000人規模",
      "people": "意富多多泥古、真人、由良、オシ、ジン、サン",
      "description": "名張西方の有力勢力。三輪君意富多多泥古を中心に、真人・由良・オシらが政治、実務、名張支援を担う。",
      "map": {
        "x": 39.68,
        "y": 74.242,
        "markerType": "settlement",
        "ariaLabel": "三輪",
        "label": "三輪",
        "labelOffsetX": -18,
        "labelOffsetY": -24,
        "hideLabelInOverview": false
      }
    },
    "iga": {
      "name": "伊賀",
      "drilldown": false,
      "characters": [],
      "type": "地域表示・伊賀群",
      "representative": "伊賀群",
      "population": "複数環濠の集合",
      "people": "城之越、依那古、青山、柏尾など各地の伊賀諸勢力",
      "description": "単一の環濠ではなく『伊賀群』を示す地域表示。城之越、依那古、青山、柏尾など複数の環濠に分かれ、同じ伊賀を名乗りながら長も利害も異なる。",
      "map": {
        "x": 40.873,
        "y": 72.807,
        "markerType": "supplement",
        "ariaLabel": "伊賀",
        "label": "伊賀",
        "labelOffsetX": 13,
        "labelOffsetY": -12,
        "hideLabelInOverview": true
      }
    },
    "abe": {
      "name": "阿閉",
      "drilldown": true,
      "characters": [
        {
          "name": "饗守",
          "force": 40,
          "intellect": 84,
          "charm": 68
        },
        {
          "name": "高彦",
          "force": 86,
          "intellect": 80,
          "charm": 72
        },
        {
          "name": "梟",
          "force": 62,
          "intellect": 78,
          "charm": 38
        }
      ],
      "type": "地域勢力",
      "representative": "阿閉臣 饗守",
      "population": "約2,000人規模",
      "people": "饗守、高彦、梟",
      "description": "伊賀と隣接する北方勢力。阿閉臣饗守が統べる。旧三野臣・高彦は現在、阿閉で『客』として厚遇されながら実質的に拘束されており、梟も阿閉側にいる。",
      "map": {
        "x": 41.18,
        "y": 71.72,
        "markerType": "settlement",
        "ariaLabel": "阿閉",
        "label": "阿閉",
        "labelOffsetX": 13,
        "labelOffsetY": -12,
        "hideLabelInOverview": false
      }
    },
    "mino": {
      "name": "三野",
      "drilldown": true,
      "characters": [
        {
          "name": "黒犬",
          "force": 76,
          "intellect": 82,
          "charm": 72
        },
        {
          "name": "岩根",
          "force": 64,
          "intellect": 58,
          "charm": 62
        },
        {
          "name": "長見",
          "force": 46,
          "intellect": 56,
          "charm": 42
        },
        {
          "name": "カナメ",
          "force": 54,
          "intellect": 56,
          "charm": 60
        }
      ],
      "type": "環濠・地域勢力",
      "representative": "三野臣 黒犬",
      "population": "約1,000人規模",
      "people": "黒犬、岩根、長見、カナメ",
      "description": "名張と強く関わる周辺勢力。現在は黒犬が新たな三野臣となり、名張と友好関係を結び、道と市庭の安全を共同で守る。ヌマルはフリーの行商人のため所属人物から除外。",
      "map": {
        "x": 40.753,
        "y": 73.527,
        "markerType": "settlement",
        "ariaLabel": "三野",
        "label": "三野",
        "labelOffsetX": 13,
        "labelOffsetY": -16,
        "hideLabelInOverview": false
      }
    },
    "kamo": {
      "name": "加茂",
      "drilldown": true,
      "characters": [
        {
          "name": "古道",
          "force": 30,
          "intellect": 68,
          "charm": 60
        },
        {
          "name": "東",
          "force": 76,
          "intellect": 58,
          "charm": 58
        },
        {
          "name": "土床",
          "force": 62,
          "intellect": 64,
          "charm": 60
        }
      ],
      "type": "環濠・産地",
      "representative": "加茂臣 古道",
      "population": "未設定",
      "people": "古道、東、土床",
      "description": "赤い土――辰砂に関わる土地。加茂臣古道のもと、東ら丹守と土床が採掘・加工・安全管理を担う。",
      "map": {
        "x": 40.05,
        "y": 74.827,
        "markerType": "settlement",
        "ariaLabel": "加茂",
        "label": "加茂",
        "labelOffsetX": -18,
        "labelOffsetY": 12,
        "hideLabelInOverview": false
      }
    }
  },
  "routes": [
    {
      "id": "route_1",
      "points": [
        "iga",
        "mino",
        "nabari",
        "haibara",
        "miwa"
      ]
    },
    {
      "id": "route_2",
      "points": [
        "iga",
        "shironokoshi",
        "inako",
        "abe"
      ]
    },
    {
      "id": "route_3",
      "points": [
        "shironokoshi",
        "iga",
        "aoyama"
      ]
    },
    {
      "id": "route_4",
      "points": [
        "miwa",
        "abeno"
      ]
    },
    {
      "id": "route_5",
      "points": [
        "nabari",
        "hata"
      ]
    },
    {
      "id": "route_6",
      "points": [
        "shironokoshi",
        "kashio"
      ]
    },
    {
      "id": "route_7",
      "points": [
        "aoyama",
        "kashio"
      ]
    },
    {
      "id": "route_8",
      "points": [
        "hata",
        "mino"
      ]
    },
    {
      "id": "route_9",
      "points": [
        "haibara",
        "kamo"
      ]
    }
  ]
};
