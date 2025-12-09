const recipes = [
  {
    "id": 1,
    "name": "キャベツとにんじんのサラダ",
    "category": "サラダ",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとにんじんを使った、手軽に作れるサラダ。",
    "kcal": 96,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "1/4個（約250g）",
        "kcal": 58
      },
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 18
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "キャベツとにんじんを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 2,
    "name": "キャベツとわかめのサラダ",
    "category": "サラダ",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとわかめを使った、手軽に作れるサラダ。",
    "kcal": 83,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "1/4個（約250g）",
        "kcal": 58
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 5
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "キャベツとわかめを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 3,
    "name": "キャベツとハムのサラダ",
    "category": "サラダ",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとハムを使った、手軽に作れるサラダ。",
    "kcal": 102,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "1/4個（約250g）",
        "kcal": 58
      },
      {
        "name": "ハム",
        "amount": "1枚（20g）",
        "kcal": 24
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "キャベツとハムを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 4,
    "name": "白菜ときゅうりのサラダ",
    "category": "サラダ",
    "mainIngredient": "白菜",
    "summary": "白菜ときゅうりを使った、手軽に作れるサラダ。",
    "kcal": 70,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "1/4株（約300g）",
        "kcal": 39
      },
      {
        "name": "きゅうり",
        "amount": "80g",
        "kcal": 11
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "白菜ときゅうりを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 5,
    "name": "白菜とハムのサラダ",
    "category": "サラダ",
    "mainIngredient": "白菜",
    "summary": "白菜とハムを使った、手軽に作れるサラダ。",
    "kcal": 83,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "1/4株（約300g）",
        "kcal": 39
      },
      {
        "name": "ハム",
        "amount": "1枚（20g）",
        "kcal": 24
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "白菜とハムを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 6,
    "name": "レタスとトマトのサラダ",
    "category": "サラダ",
    "mainIngredient": "レタス",
    "summary": "レタスとトマトを使った、手軽に作れるサラダ。",
    "kcal": 54,
    "ingredients": [
      {
        "name": "レタス",
        "amount": "50g",
        "kcal": 6
      },
      {
        "name": "トマト",
        "amount": "1個（150g）",
        "kcal": 28
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "レタスとトマトを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 7,
    "name": "レタスときゅうりのサラダ",
    "category": "サラダ",
    "mainIngredient": "レタス",
    "summary": "レタスときゅうりを使った、手軽に作れるサラダ。",
    "kcal": 37,
    "ingredients": [
      {
        "name": "レタス",
        "amount": "50g",
        "kcal": 6
      },
      {
        "name": "きゅうり",
        "amount": "80g",
        "kcal": 11
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "レタスときゅうりを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 8,
    "name": "レタスとコーンのサラダ",
    "category": "サラダ",
    "mainIngredient": "レタス",
    "summary": "レタスとコーンを使った、手軽に作れるサラダ。",
    "kcal": 54,
    "ingredients": [
      {
        "name": "レタス",
        "amount": "50g",
        "kcal": 6
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 28
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "レタスとコーンを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 9,
    "name": "もやしときゅうりのサラダ",
    "category": "サラダ",
    "mainIngredient": "もやし",
    "summary": "もやしときゅうりを使った、手軽に作れるサラダ。",
    "kcal": 59,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 28
      },
      {
        "name": "きゅうり",
        "amount": "80g",
        "kcal": 11
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "もやしときゅうりを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 10,
    "name": "もやしとハムのサラダ",
    "category": "サラダ",
    "mainIngredient": "もやし",
    "summary": "もやしとハムを使った、手軽に作れるサラダ。",
    "kcal": 72,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 28
      },
      {
        "name": "ハム",
        "amount": "1枚（20g）",
        "kcal": 24
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "もやしとハムを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 11,
    "name": "トマトと木綿豆腐のサラダ",
    "category": "サラダ",
    "mainIngredient": "トマト",
    "summary": "トマトと木綿豆腐を使った、手軽に作れるサラダ。",
    "kcal": 156,
    "ingredients": [
      {
        "name": "トマト",
        "amount": "1個（150g）",
        "kcal": 28
      },
      {
        "name": "木綿豆腐",
        "amount": "1/2丁（150g）",
        "kcal": 108
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "トマトと木綿豆腐を食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 12,
    "name": "トマトと玉ねぎのサラダ",
    "category": "サラダ",
    "mainIngredient": "トマト",
    "summary": "トマトと玉ねぎを使った、手軽に作れるサラダ。",
    "kcal": 78,
    "ingredients": [
      {
        "name": "トマト",
        "amount": "1個（150g）",
        "kcal": 28
      },
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 30
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "トマトと玉ねぎを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 13,
    "name": "大根ときゅうりのサラダ",
    "category": "サラダ",
    "mainIngredient": "大根",
    "summary": "大根ときゅうりを使った、手軽に作れるサラダ。",
    "kcal": 45,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 14
      },
      {
        "name": "きゅうり",
        "amount": "80g",
        "kcal": 11
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "大根ときゅうりを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 14,
    "name": "大根とわかめのサラダ",
    "category": "サラダ",
    "mainIngredient": "大根",
    "summary": "大根とわかめを使った、手軽に作れるサラダ。",
    "kcal": 39,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 14
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 5
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "大根とわかめを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 15,
    "name": "大根とハムのサラダ",
    "category": "サラダ",
    "mainIngredient": "大根",
    "summary": "大根とハムを使った、手軽に作れるサラダ。",
    "kcal": 58,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 14
      },
      {
        "name": "ハム",
        "amount": "1枚（20g）",
        "kcal": 24
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "大根とハムを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 16,
    "name": "ブロッコリーと卵のサラダ",
    "category": "サラダ",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーと卵を使った、手軽に作れるサラダ。",
    "kcal": 115,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 20
      },
      {
        "name": "卵",
        "amount": "50g",
        "kcal": 75
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "ブロッコリーと卵を食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 17,
    "name": "ブロッコリーとハムのサラダ",
    "category": "サラダ",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとハムを使った、手軽に作れるサラダ。",
    "kcal": 64,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 20
      },
      {
        "name": "ハム",
        "amount": "1枚（20g）",
        "kcal": 24
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "ブロッコリーとハムを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 18,
    "name": "ほうれん草とまいたけのサラダ",
    "category": "サラダ",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草とまいたけを使った、手軽に作れるサラダ。",
    "kcal": 42,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 12
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 10
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "ほうれん草とまいたけを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 19,
    "name": "きゅうりとわかめのサラダ",
    "category": "サラダ",
    "mainIngredient": "きゅうり",
    "summary": "きゅうりとわかめを使った、手軽に作れるサラダ。",
    "kcal": 36,
    "ingredients": [
      {
        "name": "きゅうり",
        "amount": "80g",
        "kcal": 11
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 5
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "きゅうりとわかめを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 20,
    "name": "きゅうりとハムのサラダ",
    "category": "サラダ",
    "mainIngredient": "きゅうり",
    "summary": "きゅうりとハムを使った、手軽に作れるサラダ。",
    "kcal": 55,
    "ingredients": [
      {
        "name": "きゅうり",
        "amount": "80g",
        "kcal": 11
      },
      {
        "name": "ハム",
        "amount": "1枚（20g）",
        "kcal": 24
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "きゅうりとハムを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 21,
    "name": "キャベツとブロッコリーのサラダ",
    "category": "サラダ",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとブロッコリーを使った、手軽に作れるサラダ。",
    "kcal": 98,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "1/4個（約250g）",
        "kcal": 58
      },
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 20
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "キャベツとブロッコリーを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 22,
    "name": "キャベツとコーンのサラダ",
    "category": "サラダ",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとコーンを使った、手軽に作れるサラダ。",
    "kcal": 106,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "1/4個（約250g）",
        "kcal": 58
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 28
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "キャベツとコーンを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 23,
    "name": "白菜とブロッコリーのサラダ",
    "category": "サラダ",
    "mainIngredient": "白菜",
    "summary": "白菜とブロッコリーを使った、手軽に作れるサラダ。",
    "kcal": 79,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "1/4株（約300g）",
        "kcal": 39
      },
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 20
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "白菜とブロッコリーを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 24,
    "name": "白菜ともやしのサラダ",
    "category": "サラダ",
    "mainIngredient": "白菜",
    "summary": "白菜ともやしを使った、手軽に作れるサラダ。",
    "kcal": 87,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "1/4株（約300g）",
        "kcal": 39
      },
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 28
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "白菜ともやしを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 25,
    "name": "レタスとわかめのサラダ",
    "category": "サラダ",
    "mainIngredient": "レタス",
    "summary": "レタスとわかめを使った、手軽に作れるサラダ。",
    "kcal": 31,
    "ingredients": [
      {
        "name": "レタス",
        "amount": "50g",
        "kcal": 6
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 5
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "レタスとわかめを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 26,
    "name": "レタスとハムのサラダ",
    "category": "サラダ",
    "mainIngredient": "レタス",
    "summary": "レタスとハムを使った、手軽に作れるサラダ。",
    "kcal": 50,
    "ingredients": [
      {
        "name": "レタス",
        "amount": "50g",
        "kcal": 6
      },
      {
        "name": "ハム",
        "amount": "1枚（20g）",
        "kcal": 24
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "レタスとハムを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 27,
    "name": "大根とブロッコリーのサラダ",
    "category": "サラダ",
    "mainIngredient": "大根",
    "summary": "大根とブロッコリーを使った、手軽に作れるサラダ。",
    "kcal": 54,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 14
      },
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 20
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "大根とブロッコリーを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 28,
    "name": "きゅうりとトマトのサラダ",
    "category": "サラダ",
    "mainIngredient": "きゅうり",
    "summary": "きゅうりとトマトを使った、手軽に作れるサラダ。",
    "kcal": 59,
    "ingredients": [
      {
        "name": "きゅうり",
        "amount": "80g",
        "kcal": 11
      },
      {
        "name": "トマト",
        "amount": "1個（150g）",
        "kcal": 28
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "きゅうりとトマトを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 29,
    "name": "ほうれん草とコーンのサラダ",
    "category": "サラダ",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草とコーンを使った、手軽に作れるサラダ。",
    "kcal": 60,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 12
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 28
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "ほうれん草とコーンを食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 30,
    "name": "もやしと木綿豆腐のサラダ",
    "category": "サラダ",
    "mainIngredient": "もやし",
    "summary": "もやしと木綿豆腐を使った、手軽に作れるサラダ。",
    "kcal": 156,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 28
      },
      {
        "name": "木綿豆腐",
        "amount": "1/2丁（150g）",
        "kcal": 108
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1/2",
        "kcal": 20
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "もやしと木綿豆腐を食べやすい大きさに切る。",
      "ボウルに入れてオリーブ油と塩を加え、やさしく和える。"
    ]
  },
  {
    "id": 31,
    "name": "キャベツと卵のスープ",
    "category": "汁物",
    "mainIngredient": "卵",
    "summary": "キャベツと卵を具にしたあったかスープ。",
    "kcal": 151,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "1/4個（約250g）",
        "kcal": 58
      },
      {
        "name": "卵",
        "amount": "50g",
        "kcal": 75
      },
      {
        "name": "だし汁",
        "amount": "200ml",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      }
    ],
    "steps": [
      "キャベツを食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を加えて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 32,
    "name": "キャベツと木綿豆腐のスープ",
    "category": "汁物",
    "mainIngredient": "キャベツ",
    "summary": "キャベツと木綿豆腐を具にしたあったかスープ。",
    "kcal": 184,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "1/4個（約250g）",
        "kcal": 58
      },
      {
        "name": "木綿豆腐",
        "amount": "1/2丁（150g）",
        "kcal": 108
      },
      {
        "name": "だし汁",
        "amount": "200ml",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      }
    ],
    "steps": [
      "キャベツを食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を加えて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 33,
    "name": "キャベツとハムのスープ",
    "category": "汁物",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとハムを具にしたあったかスープ。",
    "kcal": 100,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "1/4個（約250g）",
        "kcal": 58
      },
      {
        "name": "ハム",
        "amount": "1枚（20g）",
        "kcal": 24
      },
      {
        "name": "だし汁",
        "amount": "200ml",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      }
    ],
    "steps": [
      "キャベツを食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を加えて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 34,
    "name": "白菜と木綿豆腐のスープ",
    "category": "汁物",
    "mainIngredient": "白菜",
    "summary": "白菜と木綿豆腐を具にしたあったかスープ。",
    "kcal": 165,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "1/4株（約300g）",
        "kcal": 39
      },
      {
        "name": "木綿豆腐",
        "amount": "1/2丁（150g）",
        "kcal": 108
      },
      {
        "name": "だし汁",
        "amount": "200ml",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      }
    ],
    "steps": [
      "白菜を食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を加えて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 35,
    "name": "白菜と卵のスープ",
    "category": "汁物",
    "mainIngredient": "卵",
    "summary": "白菜と卵を具にしたあったかスープ。",
    "kcal": 132,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "1/4株（約300g）",
        "kcal": 39
      },
      {
        "name": "卵",
        "amount": "50g",
        "kcal": 75
      },
      {
        "name": "だし汁",
        "amount": "200ml",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      }
    ],
    "steps": [
      "白菜を食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を加えて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 36,
    "name": "大根と木綿豆腐のスープ",
    "category": "汁物",
    "mainIngredient": "大根",
    "summary": "大根と木綿豆腐を具にしたあったかスープ。",
    "kcal": 140,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 14
      },
      {
        "name": "木綿豆腐",
        "amount": "1/2丁（150g）",
        "kcal": 108
      },
      {
        "name": "だし汁",
        "amount": "200ml",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      }
    ],
    "steps": [
      "大根を食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を加えて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 37,
    "name": "大根とハムのスープ",
    "category": "汁物",
    "mainIngredient": "大根",
    "summary": "大根とハムを具にしたあったかスープ。",
    "kcal": 56,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 14
      },
      {
        "name": "ハム",
        "amount": "1枚（20g）",
        "kcal": 24
      },
      {
        "name": "だし汁",
        "amount": "200ml",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      }
    ],
    "steps": [
      "大根を食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を加えて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 38,
    "name": "もやしと卵のスープ",
    "category": "汁物",
    "mainIngredient": "卵",
    "summary": "もやしと卵を具にしたあったかスープ。",
    "kcal": 121,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 28
      },
      {
        "name": "卵",
        "amount": "50g",
        "kcal": 75
      },
      {
        "name": "だし汁",
        "amount": "200ml",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      }
    ],
    "steps": [
      "もやしを食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を加えて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 39,
    "name": "もやしと絹ごし豆腐のスープ",
    "category": "汁物",
    "mainIngredient": "もやし",
    "summary": "もやしと絹ごし豆腐を具にしたあったかスープ。",
    "kcal": 130,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 28
      },
      {
        "name": "絹ごし豆腐",
        "amount": "1/2丁（150g）",
        "kcal": 84
      },
      {
        "name": "だし汁",
        "amount": "200ml",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      }
    ],
    "steps": [
      "もやしを食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を加えて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 40,
    "name": "玉ねぎと卵のスープ",
    "category": "汁物",
    "mainIngredient": "卵",
    "summary": "玉ねぎと卵を具にしたあったかスープ。",
    "kcal": 123,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 30
      },
      {
        "name": "卵",
        "amount": "50g",
        "kcal": 75
      },
      {
        "name": "だし汁",
        "amount": "200ml",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      }
    ],
    "steps": [
      "玉ねぎを食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を加えて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 41,
    "name": "玉ねぎとハムのスープ",
    "category": "汁物",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとハムを具にしたあったかスープ。",
    "kcal": 72,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 30
      },
      {
        "name": "ハム",
        "amount": "1枚（20g）",
        "kcal": 24
      },
      {
        "name": "だし汁",
        "amount": "200ml",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      }
    ],
    "steps": [
      "玉ねぎを食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を加えて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 42,
    "name": "にんじんと絹ごし豆腐のスープ",
    "category": "汁物",
    "mainIngredient": "にんじん",
    "summary": "にんじんと絹ごし豆腐を具にしたあったかスープ。",
    "kcal": 120,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 18
      },
      {
        "name": "絹ごし豆腐",
        "amount": "1/2丁（150g）",
        "kcal": 84
      },
      {
        "name": "だし汁",
        "amount": "200ml",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      }
    ],
    "steps": [
      "にんじんを食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を加えて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 43,
    "name": "にんじんとえのきだけのスープ",
    "category": "汁物",
    "mainIngredient": "にんじん",
    "summary": "にんじんとえのきだけを具にしたあったかスープ。",
    "kcal": 49,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 18
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 13
      },
      {
        "name": "だし汁",
        "amount": "200ml",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      }
    ],
    "steps": [
      "にんじんを食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を加えて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 44,
    "name": "ブロッコリーと絹ごし豆腐のスープ",
    "category": "汁物",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーと絹ごし豆腐を具にしたあったかスープ。",
    "kcal": 122,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 20
      },
      {
        "name": "絹ごし豆腐",
        "amount": "1/2丁（150g）",
        "kcal": 84
      },
      {
        "name": "だし汁",
        "amount": "200ml",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      }
    ],
    "steps": [
      "ブロッコリーを食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を加えて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 45,
    "name": "ブロッコリーと卵のスープ",
    "category": "汁物",
    "mainIngredient": "卵",
    "summary": "ブロッコリーと卵を具にしたあったかスープ。",
    "kcal": 113,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 20
      },
      {
        "name": "卵",
        "amount": "50g",
        "kcal": 75
      },
      {
        "name": "だし汁",
        "amount": "200ml",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      }
    ],
    "steps": [
      "ブロッコリーを食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を加えて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 46,
    "name": "ほうれん草と木綿豆腐のスープ",
    "category": "汁物",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草と木綿豆腐を具にしたあったかスープ。",
    "kcal": 138,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 12
      },
      {
        "name": "木綿豆腐",
        "amount": "1/2丁（150g）",
        "kcal": 108
      },
      {
        "name": "だし汁",
        "amount": "200ml",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      }
    ],
    "steps": [
      "ほうれん草を食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を加えて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 47,
    "name": "ほうれん草とまいたけのスープ",
    "category": "汁物",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草とまいたけを具にしたあったかスープ。",
    "kcal": 40,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 12
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 10
      },
      {
        "name": "だし汁",
        "amount": "200ml",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      }
    ],
    "steps": [
      "ほうれん草を食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を加えて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 48,
    "name": "キャベツとえのきだけのスープ",
    "category": "汁物",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとえのきだけを具にしたあったかスープ。",
    "kcal": 89,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "1/4個（約250g）",
        "kcal": 58
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 13
      },
      {
        "name": "だし汁",
        "amount": "200ml",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      }
    ],
    "steps": [
      "キャベツを食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を加えて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 49,
    "name": "白菜とえのきだけのスープ",
    "category": "汁物",
    "mainIngredient": "白菜",
    "summary": "白菜とえのきだけを具にしたあったかスープ。",
    "kcal": 70,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "1/4株（約300g）",
        "kcal": 39
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 13
      },
      {
        "name": "だし汁",
        "amount": "200ml",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      }
    ],
    "steps": [
      "白菜を食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を加えて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 50,
    "name": "大根とわかめのスープ",
    "category": "汁物",
    "mainIngredient": "大根",
    "summary": "大根とわかめを具にしたあったかスープ。",
    "kcal": 37,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 14
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 5
      },
      {
        "name": "だし汁",
        "amount": "200ml",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      }
    ],
    "steps": [
      "大根を食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を加えて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 51,
    "name": "もやしとわかめのスープ",
    "category": "汁物",
    "mainIngredient": "もやし",
    "summary": "もやしとわかめを具にしたあったかスープ。",
    "kcal": 51,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 28
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 5
      },
      {
        "name": "だし汁",
        "amount": "200ml",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      }
    ],
    "steps": [
      "もやしを食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を加えて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 52,
    "name": "玉ねぎとしめじのスープ",
    "category": "汁物",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとしめじを具にしたあったかスープ。",
    "kcal": 59,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 30
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 11
      },
      {
        "name": "だし汁",
        "amount": "200ml",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      }
    ],
    "steps": [
      "玉ねぎを食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を加えて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 53,
    "name": "にんじんとわかめのスープ",
    "category": "汁物",
    "mainIngredient": "にんじん",
    "summary": "にんじんとわかめを具にしたあったかスープ。",
    "kcal": 41,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 18
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 5
      },
      {
        "name": "だし汁",
        "amount": "200ml",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      }
    ],
    "steps": [
      "にんじんを食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を加えて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 54,
    "name": "ブロッコリーとわかめのスープ",
    "category": "汁物",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとわかめを具にしたあったかスープ。",
    "kcal": 43,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 20
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 5
      },
      {
        "name": "だし汁",
        "amount": "200ml",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      }
    ],
    "steps": [
      "ブロッコリーを食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を加えて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 55,
    "name": "ほうれん草とハムのスープ",
    "category": "汁物",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草とハムを具にしたあったかスープ。",
    "kcal": 54,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 12
      },
      {
        "name": "ハム",
        "amount": "1枚（20g）",
        "kcal": 24
      },
      {
        "name": "だし汁",
        "amount": "200ml",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      }
    ],
    "steps": [
      "ほうれん草を食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を加えて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 56,
    "name": "鶏むね肉とキャベツのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "鶏むね肉",
    "summary": "鶏むね肉とキャベツをさっと炒めて甘辛く仕上げた一品。",
    "kcal": 143,
    "ingredients": [
      {
        "name": "鶏むね肉",
        "amount": "60g",
        "kcal": 65
      },
      {
        "name": "キャベツ",
        "amount": "1/4個（約250g）",
        "kcal": 58
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "鶏むね肉とキャベツを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 57,
    "name": "鶏むね肉と白菜のあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "鶏むね肉",
    "summary": "鶏むね肉と白菜をさっと炒めて甘辛く仕上げた一品。",
    "kcal": 124,
    "ingredients": [
      {
        "name": "鶏むね肉",
        "amount": "60g",
        "kcal": 65
      },
      {
        "name": "白菜",
        "amount": "1/4株（約300g）",
        "kcal": 39
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "鶏むね肉と白菜を食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 58,
    "name": "鶏むね肉と玉ねぎのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "鶏むね肉",
    "summary": "鶏むね肉と玉ねぎをさっと炒めて甘辛く仕上げた一品。",
    "kcal": 115,
    "ingredients": [
      {
        "name": "鶏むね肉",
        "amount": "60g",
        "kcal": 65
      },
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 30
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "鶏むね肉と玉ねぎを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 59,
    "name": "鶏むね肉とブロッコリーのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "鶏むね肉",
    "summary": "鶏むね肉とブロッコリーをさっと炒めて甘辛く仕上げた一品。",
    "kcal": 105,
    "ingredients": [
      {
        "name": "鶏むね肉",
        "amount": "60g",
        "kcal": 65
      },
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 20
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "鶏むね肉とブロッコリーを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 60,
    "name": "鶏ささみとキャベツのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみとキャベツをさっと炒めて甘辛く仕上げた一品。",
    "kcal": 141,
    "ingredients": [
      {
        "name": "鶏ささみ",
        "amount": "60g",
        "kcal": 63
      },
      {
        "name": "キャベツ",
        "amount": "1/4個（約250g）",
        "kcal": 58
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "鶏ささみとキャベツを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 61,
    "name": "鶏ささみともやしのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみともやしをさっと炒めて甘辛く仕上げた一品。",
    "kcal": 111,
    "ingredients": [
      {
        "name": "鶏ささみ",
        "amount": "60g",
        "kcal": 63
      },
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 28
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "鶏ささみともやしを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 62,
    "name": "鶏ささみとにんじんのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみとにんじんをさっと炒めて甘辛く仕上げた一品。",
    "kcal": 101,
    "ingredients": [
      {
        "name": "鶏ささみ",
        "amount": "60g",
        "kcal": 63
      },
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 18
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "鶏ささみとにんじんを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 63,
    "name": "鶏ささみとまいたけのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみとまいたけをさっと炒めて甘辛く仕上げた一品。",
    "kcal": 93,
    "ingredients": [
      {
        "name": "鶏ささみ",
        "amount": "60g",
        "kcal": 63
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "鶏ささみとまいたけを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 64,
    "name": "白身魚と白菜のあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "白身魚",
    "summary": "白身魚と白菜をさっと炒めて甘辛く仕上げた一品。",
    "kcal": 113,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 54
      },
      {
        "name": "白菜",
        "amount": "1/4株（約300g）",
        "kcal": 39
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "白身魚と白菜を食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 65,
    "name": "白身魚とほうれん草のあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "白身魚",
    "summary": "白身魚とほうれん草をさっと炒めて甘辛く仕上げた一品。",
    "kcal": 86,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 54
      },
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 12
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "白身魚とほうれん草を食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 66,
    "name": "白身魚とまいたけのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "白身魚",
    "summary": "白身魚とまいたけをさっと炒めて甘辛く仕上げた一品。",
    "kcal": 84,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 54
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "白身魚とまいたけを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 67,
    "name": "木綿豆腐とキャベツのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐とキャベツをさっと炒めて甘辛く仕上げた一品。",
    "kcal": 186,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "1/2丁（150g）",
        "kcal": 108
      },
      {
        "name": "キャベツ",
        "amount": "1/4個（約250g）",
        "kcal": 58
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "木綿豆腐とキャベツを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 68,
    "name": "木綿豆腐と白菜のあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐と白菜をさっと炒めて甘辛く仕上げた一品。",
    "kcal": 167,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "1/2丁（150g）",
        "kcal": 108
      },
      {
        "name": "白菜",
        "amount": "1/4株（約300g）",
        "kcal": 39
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "木綿豆腐と白菜を食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 69,
    "name": "木綿豆腐とまいたけのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐とまいたけをさっと炒めて甘辛く仕上げた一品。",
    "kcal": 138,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "1/2丁（150g）",
        "kcal": 108
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "木綿豆腐とまいたけを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 70,
    "name": "絹ごし豆腐ともやしのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐ともやしをさっと炒めて甘辛く仕上げた一品。",
    "kcal": 132,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "1/2丁（150g）",
        "kcal": 84
      },
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 28
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "絹ごし豆腐ともやしを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 71,
    "name": "絹ごし豆腐とブロッコリーのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐とブロッコリーをさっと炒めて甘辛く仕上げた一品。",
    "kcal": 124,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "1/2丁（150g）",
        "kcal": 84
      },
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 20
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "絹ごし豆腐とブロッコリーを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 72,
    "name": "卵とキャベツのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "卵",
    "summary": "卵とキャベツをさっと炒めて甘辛く仕上げた一品。",
    "kcal": 153,
    "ingredients": [
      {
        "name": "卵",
        "amount": "50g",
        "kcal": 75
      },
      {
        "name": "キャベツ",
        "amount": "1/4個（約250g）",
        "kcal": 58
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "卵とキャベツを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 73,
    "name": "卵ともやしのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "卵",
    "summary": "卵ともやしをさっと炒めて甘辛く仕上げた一品。",
    "kcal": 123,
    "ingredients": [
      {
        "name": "卵",
        "amount": "50g",
        "kcal": 75
      },
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 28
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "卵ともやしを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 74,
    "name": "卵とほうれん草のあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "卵",
    "summary": "卵とほうれん草をさっと炒めて甘辛く仕上げた一品。",
    "kcal": 107,
    "ingredients": [
      {
        "name": "卵",
        "amount": "50g",
        "kcal": 75
      },
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 12
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "卵とほうれん草を食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 75,
    "name": "卵とじゃがいものあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "卵",
    "summary": "卵とじゃがいもをさっと炒めて甘辛く仕上げた一品。",
    "kcal": 141,
    "ingredients": [
      {
        "name": "卵",
        "amount": "50g",
        "kcal": 75
      },
      {
        "name": "じゃがいも",
        "amount": "60g",
        "kcal": 46
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "卵とじゃがいもを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 76,
    "name": "ハムとキャベツのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "ハム",
    "summary": "ハムとキャベツをさっと炒めて甘辛く仕上げた一品。",
    "kcal": 102,
    "ingredients": [
      {
        "name": "ハム",
        "amount": "1枚（20g）",
        "kcal": 24
      },
      {
        "name": "キャベツ",
        "amount": "1/4個（約250g）",
        "kcal": 58
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "ハムとキャベツを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 77,
    "name": "ハムと白菜のあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "ハム",
    "summary": "ハムと白菜をさっと炒めて甘辛く仕上げた一品。",
    "kcal": 83,
    "ingredients": [
      {
        "name": "ハム",
        "amount": "1枚（20g）",
        "kcal": 24
      },
      {
        "name": "白菜",
        "amount": "1/4株（約300g）",
        "kcal": 39
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "ハムと白菜を食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 78,
    "name": "ハムとじゃがいものあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "ハム",
    "summary": "ハムとじゃがいもをさっと炒めて甘辛く仕上げた一品。",
    "kcal": 90,
    "ingredients": [
      {
        "name": "ハム",
        "amount": "1枚（20g）",
        "kcal": 24
      },
      {
        "name": "じゃがいも",
        "amount": "60g",
        "kcal": 46
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "ハムとじゃがいもを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 79,
    "name": "ハムとブロッコリーのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "ハム",
    "summary": "ハムとブロッコリーをさっと炒めて甘辛く仕上げた一品。",
    "kcal": 64,
    "ingredients": [
      {
        "name": "ハム",
        "amount": "1枚（20g）",
        "kcal": 24
      },
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 20
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "ハムとブロッコリーを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 80,
    "name": "鶏むね肉とじゃがいものあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "鶏むね肉",
    "summary": "鶏むね肉とじゃがいもをさっと炒めて甘辛く仕上げた一品。",
    "kcal": 131,
    "ingredients": [
      {
        "name": "鶏むね肉",
        "amount": "60g",
        "kcal": 65
      },
      {
        "name": "じゃがいも",
        "amount": "60g",
        "kcal": 46
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "鶏むね肉とじゃがいもを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 81,
    "name": "鶏ささみとブロッコリーのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみとブロッコリーをさっと炒めて甘辛く仕上げた一品。",
    "kcal": 103,
    "ingredients": [
      {
        "name": "鶏ささみ",
        "amount": "60g",
        "kcal": 63
      },
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 20
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "鶏ささみとブロッコリーを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 82,
    "name": "白身魚と大根のあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "白身魚",
    "summary": "白身魚と大根をさっと炒めて甘辛く仕上げた一品。",
    "kcal": 88,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 54
      },
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 14
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "白身魚と大根を食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 83,
    "name": "木綿豆腐とほうれん草のあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐とほうれん草をさっと炒めて甘辛く仕上げた一品。",
    "kcal": 140,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "1/2丁（150g）",
        "kcal": 108
      },
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 12
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "木綿豆腐とほうれん草を食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 84,
    "name": "絹ごし豆腐と大根のあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐と大根をさっと炒めて甘辛く仕上げた一品。",
    "kcal": 118,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "1/2丁（150g）",
        "kcal": 84
      },
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 14
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "絹ごし豆腐と大根を食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 85,
    "name": "ハムとまいたけのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "ハム",
    "summary": "ハムとまいたけをさっと炒めて甘辛く仕上げた一品。",
    "kcal": 54,
    "ingredients": [
      {
        "name": "ハム",
        "amount": "1枚（20g）",
        "kcal": 24
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 10
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ2",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ2",
        "kcal": 12
      }
    ],
    "steps": [
      "ハムとまいたけを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんを入れてからめる。"
    ]
  },
  {
    "id": 86,
    "name": "りんごヨーグルトデザート（さっぱり仕立て）",
    "category": "デザート",
    "mainIngredient": "りんご",
    "summary": "りんごとプレーンヨーグルトを合わせた、さっぱりとしたデザート。",
    "kcal": 93,
    "ingredients": [
      {
        "name": "りんご",
        "amount": "小1個（約80g）",
        "kcal": 43
      },
      {
        "name": "プレーンヨーグルト",
        "amount": "80g",
        "kcal": 50
      }
    ],
    "steps": [
      "りんごを一口大に切る。",
      "器にヨーグルトとともに盛り付ける。"
    ]
  },
  {
    "id": 87,
    "name": "バナナヨーグルトデザート（はちみつ風）",
    "category": "デザート",
    "mainIngredient": "バナナ",
    "summary": "バナナとプレーンヨーグルトを合わせた、さっぱりとしたデザート。",
    "kcal": 102,
    "ingredients": [
      {
        "name": "バナナ",
        "amount": "小1本（約60g）",
        "kcal": 52
      },
      {
        "name": "プレーンヨーグルト",
        "amount": "80g",
        "kcal": 50
      }
    ],
    "steps": [
      "バナナを一口大に切る。",
      "器にヨーグルトとともに盛り付ける。"
    ]
  },
  {
    "id": 88,
    "name": "みかんヨーグルトデザート（シンプル）",
    "category": "デザート",
    "mainIngredient": "みかん",
    "summary": "みかんとプレーンヨーグルトを合わせた、さっぱりとしたデザート。",
    "kcal": 86,
    "ingredients": [
      {
        "name": "みかん",
        "amount": "小1個（約80g）",
        "kcal": 36
      },
      {
        "name": "プレーンヨーグルト",
        "amount": "80g",
        "kcal": 50
      }
    ],
    "steps": [
      "みかんを一口大に切る。",
      "器にヨーグルトとともに盛り付ける。"
    ]
  },
  {
    "id": 89,
    "name": "ぶどうヨーグルトデザート（ごろごろ果実）",
    "category": "デザート",
    "mainIngredient": "ぶどう",
    "summary": "ぶどうとプレーンヨーグルトを合わせた、さっぱりとしたデザート。",
    "kcal": 85,
    "ingredients": [
      {
        "name": "ぶどう",
        "amount": "ひと房（約60g）",
        "kcal": 35
      },
      {
        "name": "プレーンヨーグルト",
        "amount": "80g",
        "kcal": 50
      }
    ],
    "steps": [
      "ぶどうを一口大に切る。",
      "器にヨーグルトとともに盛り付ける。"
    ]
  },
  {
    "id": 90,
    "name": "りんごヨーグルトデザート（さっぱり仕立て）（和風）",
    "category": "デザート",
    "mainIngredient": "りんご",
    "summary": "りんごとプレーンヨーグルトを合わせた、さっぱりとしたデザート。",
    "kcal": 93,
    "ingredients": [
      {
        "name": "りんご",
        "amount": "小1個（約80g）",
        "kcal": 43
      },
      {
        "name": "プレーンヨーグルト",
        "amount": "80g",
        "kcal": 50
      }
    ],
    "steps": [
      "りんごを一口大に切る。",
      "器にヨーグルトとともに盛り付ける。"
    ]
  },
  {
    "id": 91,
    "name": "バナナヨーグルトデザート（はちみつ風）（和風）",
    "category": "デザート",
    "mainIngredient": "バナナ",
    "summary": "バナナとプレーンヨーグルトを合わせた、さっぱりとしたデザート。",
    "kcal": 102,
    "ingredients": [
      {
        "name": "バナナ",
        "amount": "小1本（約60g）",
        "kcal": 52
      },
      {
        "name": "プレーンヨーグルト",
        "amount": "80g",
        "kcal": 50
      }
    ],
    "steps": [
      "バナナを一口大に切る。",
      "器にヨーグルトとともに盛り付ける。"
    ]
  },
  {
    "id": 92,
    "name": "みかんヨーグルトデザート（シンプル）（和風）",
    "category": "デザート",
    "mainIngredient": "みかん",
    "summary": "みかんとプレーンヨーグルトを合わせた、さっぱりとしたデザート。",
    "kcal": 86,
    "ingredients": [
      {
        "name": "みかん",
        "amount": "小1個（約80g）",
        "kcal": 36
      },
      {
        "name": "プレーンヨーグルト",
        "amount": "80g",
        "kcal": 50
      }
    ],
    "steps": [
      "みかんを一口大に切る。",
      "器にヨーグルトとともに盛り付ける。"
    ]
  },
  {
    "id": 93,
    "name": "ぶどうヨーグルトデザート（ごろごろ果実）（和風）",
    "category": "デザート",
    "mainIngredient": "ぶどう",
    "summary": "ぶどうとプレーンヨーグルトを合わせた、さっぱりとしたデザート。",
    "kcal": 85,
    "ingredients": [
      {
        "name": "ぶどう",
        "amount": "ひと房（約60g）",
        "kcal": 35
      },
      {
        "name": "プレーンヨーグルト",
        "amount": "80g",
        "kcal": 50
      }
    ],
    "steps": [
      "ぶどうを一口大に切る。",
      "器にヨーグルトとともに盛り付ける。"
    ]
  },
  {
    "id": 94,
    "name": "寒天あんこデザート",
    "category": "デザート",
    "mainIngredient": "寒天",
    "summary": "寒天と少量のあんこを合わせた素朴なデザート。",
    "kcal": 52,
    "ingredients": [
      {
        "name": "寒天",
        "amount": "80g（戻し後）",
        "kcal": 2
      },
      {
        "name": "あんこ",
        "amount": "20g（小さじ約1強）",
        "kcal": 50
      }
    ],
    "steps": [
      "寒天を食べやすい大きさに切る。",
      "器に盛り、トッピングをのせる。"
    ]
  },
  {
    "id": 95,
    "name": "フルーツ寒天みかん入り",
    "category": "デザート",
    "mainIngredient": "寒天",
    "summary": "みかんを加えたさっぱり寒天デザート。",
    "kcal": 38,
    "ingredients": [
      {
        "name": "寒天",
        "amount": "80g（戻し後）",
        "kcal": 2
      },
      {
        "name": "みかん",
        "amount": "小1個（約80g）",
        "kcal": 36
      }
    ],
    "steps": [
      "寒天を食べやすい大きさに切る。",
      "器に盛り、トッピングをのせる。"
    ]
  },
  {
    "id": 96,
    "name": "黒みつ風寒天デザート",
    "category": "デザート",
    "mainIngredient": "寒天",
    "summary": "低脂肪乳を使って黒みつ風の味わいにした寒天デザート。",
    "kcal": 30,
    "ingredients": [
      {
        "name": "寒天",
        "amount": "80g（戻し後）",
        "kcal": 2
      },
      {
        "name": "低脂肪乳",
        "amount": "60ml",
        "kcal": 28
      }
    ],
    "steps": [
      "寒天を食べやすい大きさに切る。",
      "器に盛り、トッピングをのせる。"
    ]
  },
  {
    "id": 97,
    "name": "きなこ寒天デザート",
    "category": "デザート",
    "mainIngredient": "寒天",
    "summary": "きなこをまぶした和風寒天デザート。",
    "kcal": 28,
    "ingredients": [
      {
        "name": "寒天",
        "amount": "80g（戻し後）",
        "kcal": 2
      },
      {
        "name": "きなこ",
        "amount": "6g（小さじ約1）",
        "kcal": 26
      }
    ],
    "steps": [
      "寒天を食べやすい大きさに切る。",
      "器に盛り、トッピングをのせる。"
    ]
  },
  {
    "id": 98,
    "name": "きなこミルクデザート（あっさり）",
    "category": "デザート",
    "mainIngredient": "低脂肪乳",
    "summary": "低脂肪乳にきなこを加えた、飲みやすい和風デザート。",
    "kcal": 72,
    "ingredients": [
      {
        "name": "低脂肪乳",
        "amount": "100ml",
        "kcal": 46
      },
      {
        "name": "きなこ",
        "amount": "6g（小さじ約1）",
        "kcal": 26
      }
    ],
    "steps": [
      "グラスに低脂肪乳を注ぐ。",
      "きなこを加えてよく混ぜる。"
    ]
  },
  {
    "id": 99,
    "name": "きなこミルクデザート（ほんのり甘い）",
    "category": "デザート",
    "mainIngredient": "低脂肪乳",
    "summary": "低脂肪乳にきなこを加えた、飲みやすい和風デザート。",
    "kcal": 72,
    "ingredients": [
      {
        "name": "低脂肪乳",
        "amount": "100ml",
        "kcal": 46
      },
      {
        "name": "きなこ",
        "amount": "6g（小さじ約1）",
        "kcal": 26
      }
    ],
    "steps": [
      "グラスに低脂肪乳を注ぐ。",
      "きなこを加えてよく混ぜる。"
    ]
  },
  {
    "id": 100,
    "name": "きなこミルクデザート（シンプル）",
    "category": "デザート",
    "mainIngredient": "低脂肪乳",
    "summary": "低脂肪乳にきなこを加えた、飲みやすい和風デザート。",
    "kcal": 72,
    "ingredients": [
      {
        "name": "低脂肪乳",
        "amount": "100ml",
        "kcal": 46
      },
      {
        "name": "きなこ",
        "amount": "6g（小さじ約1）",
        "kcal": 26
      }
    ],
    "steps": [
      "グラスに低脂肪乳を注ぐ。",
      "きなこを加えてよく混ぜる。"
    ]
  }
];
