const recipes = [
  {
    "id": 1,
    "name": "キャベツときゅうりのサラダ",
    "category": "サラダ",
    "mainIngredient": "キャベツ",
    "summary": "キャベツときゅうりを使ったシンプルなサラダ。",
    "kcal": 106,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "1/4個（約250g）",
        "kcal": 58
      },
      {
        "name": "きゅうり",
        "amount": "80g",
        "kcal": 11
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "キャベツときゅうりを食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 2,
    "name": "白菜ときゅうりのサラダ",
    "category": "サラダ",
    "mainIngredient": "白菜",
    "summary": "白菜ときゅうりを使ったシンプルなサラダ。",
    "kcal": 87,
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
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "白菜ときゅうりを食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 3,
    "name": "レタスときゅうりのサラダ",
    "category": "サラダ",
    "mainIngredient": "レタス",
    "summary": "レタスときゅうりを使ったシンプルなサラダ。",
    "kcal": 54,
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
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "レタスときゅうりを食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 4,
    "name": "もやしときゅうりのサラダ",
    "category": "サラダ",
    "mainIngredient": "もやし",
    "summary": "もやしときゅうりを使ったシンプルなサラダ。",
    "kcal": 76,
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
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "もやしときゅうりを食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 5,
    "name": "トマトときゅうりのサラダ",
    "category": "サラダ",
    "mainIngredient": "トマト",
    "summary": "トマトときゅうりを使ったシンプルなサラダ。",
    "kcal": 76,
    "ingredients": [
      {
        "name": "トマト",
        "amount": "1個（150g）",
        "kcal": 28
      },
      {
        "name": "きゅうり",
        "amount": "80g",
        "kcal": 11
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "トマトときゅうりを食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 6,
    "name": "大根ときゅうりのサラダ",
    "category": "サラダ",
    "mainIngredient": "大根",
    "summary": "大根ときゅうりを使ったシンプルなサラダ。",
    "kcal": 62,
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
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "大根ときゅうりを食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 7,
    "name": "ブロッコリーときゅうりのサラダ",
    "category": "サラダ",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーときゅうりを使ったシンプルなサラダ。",
    "kcal": 68,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 20
      },
      {
        "name": "きゅうり",
        "amount": "80g",
        "kcal": 11
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "ブロッコリーときゅうりを食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 8,
    "name": "ほうれん草ときゅうりのサラダ",
    "category": "サラダ",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草ときゅうりを使ったシンプルなサラダ。",
    "kcal": 60,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 12
      },
      {
        "name": "きゅうり",
        "amount": "80g",
        "kcal": 11
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "ほうれん草ときゅうりを食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 9,
    "name": "キャベツとトマトのサラダ",
    "category": "サラダ",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとトマトを使ったシンプルなサラダ。",
    "kcal": 123,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "1/4個（約250g）",
        "kcal": 58
      },
      {
        "name": "トマト",
        "amount": "1個（150g）",
        "kcal": 28
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "キャベツとトマトを食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 10,
    "name": "白菜とトマトのサラダ",
    "category": "サラダ",
    "mainIngredient": "白菜",
    "summary": "白菜とトマトを使ったシンプルなサラダ。",
    "kcal": 104,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "1/4株（約300g）",
        "kcal": 39
      },
      {
        "name": "トマト",
        "amount": "1個（150g）",
        "kcal": 28
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "白菜とトマトを食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 11,
    "name": "レタスとトマトのサラダ",
    "category": "サラダ",
    "mainIngredient": "レタス",
    "summary": "レタスとトマトを使ったシンプルなサラダ。",
    "kcal": 71,
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
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "レタスとトマトを食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 12,
    "name": "もやしとトマトのサラダ",
    "category": "サラダ",
    "mainIngredient": "もやし",
    "summary": "もやしとトマトを使ったシンプルなサラダ。",
    "kcal": 93,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 28
      },
      {
        "name": "トマト",
        "amount": "1個（150g）",
        "kcal": 28
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "もやしとトマトを食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 13,
    "name": "きゅうりとトマトのサラダ",
    "category": "サラダ",
    "mainIngredient": "きゅうり",
    "summary": "きゅうりとトマトを使ったシンプルなサラダ。",
    "kcal": 76,
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
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "きゅうりとトマトを食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 14,
    "name": "大根とトマトのサラダ",
    "category": "サラダ",
    "mainIngredient": "大根",
    "summary": "大根とトマトを使ったシンプルなサラダ。",
    "kcal": 79,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 14
      },
      {
        "name": "トマト",
        "amount": "1個（150g）",
        "kcal": 28
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "大根とトマトを食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 15,
    "name": "ブロッコリーとトマトのサラダ",
    "category": "サラダ",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとトマトを使ったシンプルなサラダ。",
    "kcal": 85,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 20
      },
      {
        "name": "トマト",
        "amount": "1個（150g）",
        "kcal": 28
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "ブロッコリーとトマトを食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 16,
    "name": "ほうれん草とトマトのサラダ",
    "category": "サラダ",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草とトマトを使ったシンプルなサラダ。",
    "kcal": 77,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 12
      },
      {
        "name": "トマト",
        "amount": "1個（150g）",
        "kcal": 28
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "ほうれん草とトマトを食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 17,
    "name": "キャベツとにんじんのサラダ",
    "category": "サラダ",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとにんじんを使ったシンプルなサラダ。",
    "kcal": 113,
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
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "キャベツとにんじんを食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 18,
    "name": "白菜とにんじんのサラダ",
    "category": "サラダ",
    "mainIngredient": "白菜",
    "summary": "白菜とにんじんを使ったシンプルなサラダ。",
    "kcal": 94,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "1/4株（約300g）",
        "kcal": 39
      },
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 18
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "白菜とにんじんを食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 19,
    "name": "レタスとにんじんのサラダ",
    "category": "サラダ",
    "mainIngredient": "レタス",
    "summary": "レタスとにんじんを使ったシンプルなサラダ。",
    "kcal": 61,
    "ingredients": [
      {
        "name": "レタス",
        "amount": "50g",
        "kcal": 6
      },
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 18
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "レタスとにんじんを食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 20,
    "name": "もやしとにんじんのサラダ",
    "category": "サラダ",
    "mainIngredient": "もやし",
    "summary": "もやしとにんじんを使ったシンプルなサラダ。",
    "kcal": 83,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 28
      },
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 18
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "もやしとにんじんを食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 21,
    "name": "きゅうりとにんじんのサラダ",
    "category": "サラダ",
    "mainIngredient": "きゅうり",
    "summary": "きゅうりとにんじんを使ったシンプルなサラダ。",
    "kcal": 66,
    "ingredients": [
      {
        "name": "きゅうり",
        "amount": "80g",
        "kcal": 11
      },
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 18
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "きゅうりとにんじんを食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 22,
    "name": "トマトとにんじんのサラダ",
    "category": "サラダ",
    "mainIngredient": "トマト",
    "summary": "トマトとにんじんを使ったシンプルなサラダ。",
    "kcal": 83,
    "ingredients": [
      {
        "name": "トマト",
        "amount": "1個（150g）",
        "kcal": 28
      },
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 18
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "トマトとにんじんを食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 23,
    "name": "大根とにんじんのサラダ",
    "category": "サラダ",
    "mainIngredient": "大根",
    "summary": "大根とにんじんを使ったシンプルなサラダ。",
    "kcal": 69,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 14
      },
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 18
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "大根とにんじんを食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 24,
    "name": "ブロッコリーとにんじんのサラダ",
    "category": "サラダ",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとにんじんを使ったシンプルなサラダ。",
    "kcal": 75,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 20
      },
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 18
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "ブロッコリーとにんじんを食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 25,
    "name": "ほうれん草とにんじんのサラダ",
    "category": "サラダ",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草とにんじんを使ったシンプルなサラダ。",
    "kcal": 67,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 12
      },
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 18
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "ほうれん草とにんじんを食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 26,
    "name": "キャベツと大根のサラダ",
    "category": "サラダ",
    "mainIngredient": "キャベツ",
    "summary": "キャベツと大根を使ったシンプルなサラダ。",
    "kcal": 109,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "1/4個（約250g）",
        "kcal": 58
      },
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 14
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "キャベツと大根を食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 27,
    "name": "白菜と大根のサラダ",
    "category": "サラダ",
    "mainIngredient": "白菜",
    "summary": "白菜と大根を使ったシンプルなサラダ。",
    "kcal": 90,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "1/4株（約300g）",
        "kcal": 39
      },
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 14
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "白菜と大根を食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 28,
    "name": "レタスと大根のサラダ",
    "category": "サラダ",
    "mainIngredient": "レタス",
    "summary": "レタスと大根を使ったシンプルなサラダ。",
    "kcal": 57,
    "ingredients": [
      {
        "name": "レタス",
        "amount": "50g",
        "kcal": 6
      },
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 14
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "レタスと大根を食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 29,
    "name": "もやしと大根のサラダ",
    "category": "サラダ",
    "mainIngredient": "もやし",
    "summary": "もやしと大根を使ったシンプルなサラダ。",
    "kcal": 79,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 28
      },
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 14
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "もやしと大根を食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 30,
    "name": "きゅうりと大根のサラダ",
    "category": "サラダ",
    "mainIngredient": "きゅうり",
    "summary": "きゅうりと大根を使ったシンプルなサラダ。",
    "kcal": 62,
    "ingredients": [
      {
        "name": "きゅうり",
        "amount": "80g",
        "kcal": 11
      },
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 14
      },
      {
        "name": "オリーブ油",
        "amount": "小さじ1",
        "kcal": 37
      },
      {
        "name": "塩",
        "amount": "少々",
        "kcal": 0
      }
    ],
    "steps": [
      "きゅうりと大根を食べやすい大きさに切る。",
      "ボウルに入れ、オリーブ油と塩を加えて全体を和える。"
    ]
  },
  {
    "id": 31,
    "name": "キャベツと卵のスープ",
    "category": "汁物",
    "mainIngredient": "卵",
    "summary": "キャベツと卵を具にしたあったかスープ。",
    "kcal": 163,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "175g",
        "kcal": 40
      },
      {
        "name": "卵",
        "amount": "1個（70g）",
        "kcal": 105
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
      "鍋にだし汁を沸かし、具材を入れて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 32,
    "name": "白菜と卵のスープ",
    "category": "汁物",
    "mainIngredient": "卵",
    "summary": "白菜と卵を具にしたあったかスープ。",
    "kcal": 150,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "210g",
        "kcal": 27
      },
      {
        "name": "卵",
        "amount": "1個（70g）",
        "kcal": 105
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
      "鍋にだし汁を沸かし、具材を入れて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 33,
    "name": "大根と卵のスープ",
    "category": "汁物",
    "mainIngredient": "卵",
    "summary": "大根と卵を具にしたあったかスープ。",
    "kcal": 137,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 14
      },
      {
        "name": "卵",
        "amount": "1個（70g）",
        "kcal": 105
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
      "鍋にだし汁を沸かし、具材を入れて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 34,
    "name": "もやしと卵のスープ",
    "category": "汁物",
    "mainIngredient": "卵",
    "summary": "もやしと卵を具にしたあったかスープ。",
    "kcal": 143,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "140g",
        "kcal": 20
      },
      {
        "name": "卵",
        "amount": "1個（70g）",
        "kcal": 105
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
      "鍋にだし汁を沸かし、具材を入れて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 35,
    "name": "玉ねぎと卵のスープ",
    "category": "汁物",
    "mainIngredient": "卵",
    "summary": "玉ねぎと卵を具にしたあったかスープ。",
    "kcal": 144,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "56g",
        "kcal": 21
      },
      {
        "name": "卵",
        "amount": "1個（70g）",
        "kcal": 105
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
      "鍋にだし汁を沸かし、具材を入れて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 36,
    "name": "にんじんと卵のスープ",
    "category": "汁物",
    "mainIngredient": "卵",
    "summary": "にんじんと卵を具にしたあったかスープ。",
    "kcal": 141,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 18
      },
      {
        "name": "卵",
        "amount": "1個（70g）",
        "kcal": 105
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
      "鍋にだし汁を沸かし、具材を入れて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 37,
    "name": "ブロッコリーと卵のスープ",
    "category": "汁物",
    "mainIngredient": "卵",
    "summary": "ブロッコリーと卵を具にしたあったかスープ。",
    "kcal": 143,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 20
      },
      {
        "name": "卵",
        "amount": "1個（70g）",
        "kcal": 105
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
      "鍋にだし汁を沸かし、具材を入れて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 38,
    "name": "ほうれん草と卵のスープ",
    "category": "汁物",
    "mainIngredient": "卵",
    "summary": "ほうれん草と卵を具にしたあったかスープ。",
    "kcal": 135,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 12
      },
      {
        "name": "卵",
        "amount": "1個（70g）",
        "kcal": 105
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
      "鍋にだし汁を沸かし、具材を入れて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 39,
    "name": "キャベツと木綿豆腐のスープ",
    "category": "汁物",
    "mainIngredient": "キャベツ",
    "summary": "キャベツと木綿豆腐を具にしたあったかスープ。",
    "kcal": 166,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "175g",
        "kcal": 40
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
      "鍋にだし汁を沸かし、具材を入れて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 40,
    "name": "白菜と木綿豆腐のスープ",
    "category": "汁物",
    "mainIngredient": "白菜",
    "summary": "白菜と木綿豆腐を具にしたあったかスープ。",
    "kcal": 153,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "210g",
        "kcal": 27
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
      "鍋にだし汁を沸かし、具材を入れて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 41,
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
      "鍋にだし汁を沸かし、具材を入れて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 42,
    "name": "もやしと木綿豆腐のスープ",
    "category": "汁物",
    "mainIngredient": "もやし",
    "summary": "もやしと木綿豆腐を具にしたあったかスープ。",
    "kcal": 146,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "140g",
        "kcal": 20
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
      "もやしを食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を入れて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 43,
    "name": "玉ねぎと木綿豆腐のスープ",
    "category": "汁物",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎと木綿豆腐を具にしたあったかスープ。",
    "kcal": 147,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "56g",
        "kcal": 21
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
      "玉ねぎを食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を入れて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 44,
    "name": "にんじんと木綿豆腐のスープ",
    "category": "汁物",
    "mainIngredient": "にんじん",
    "summary": "にんじんと木綿豆腐を具にしたあったかスープ。",
    "kcal": 144,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 18
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
      "にんじんを食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を入れて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 45,
    "name": "ブロッコリーと木綿豆腐のスープ",
    "category": "汁物",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーと木綿豆腐を具にしたあったかスープ。",
    "kcal": 146,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 20
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
      "ブロッコリーを食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を入れて火が通るまで煮る。",
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
      "鍋にだし汁を沸かし、具材を入れて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 47,
    "name": "キャベツと絹ごし豆腐のスープ",
    "category": "汁物",
    "mainIngredient": "キャベツ",
    "summary": "キャベツと絹ごし豆腐を具にしたあったかスープ。",
    "kcal": 142,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "175g",
        "kcal": 40
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
      "キャベツを食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を入れて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 48,
    "name": "白菜と絹ごし豆腐のスープ",
    "category": "汁物",
    "mainIngredient": "白菜",
    "summary": "白菜と絹ごし豆腐を具にしたあったかスープ。",
    "kcal": 141,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "1/4株（約300g）",
        "kcal": 39
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
      "白菜を食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を入れて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 49,
    "name": "大根と絹ごし豆腐のスープ",
    "category": "汁物",
    "mainIngredient": "大根",
    "summary": "大根と絹ごし豆腐を具にしたあったかスープ。",
    "kcal": 116,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 14
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
      "大根を食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を入れて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 50,
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
      "鍋にだし汁を沸かし、具材を入れて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 51,
    "name": "玉ねぎと絹ごし豆腐のスープ",
    "category": "汁物",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎと絹ごし豆腐を具にしたあったかスープ。",
    "kcal": 132,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 30
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
      "玉ねぎを食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を入れて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 52,
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
      "鍋にだし汁を沸かし、具材を入れて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 53,
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
      "鍋にだし汁を沸かし、具材を入れて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 54,
    "name": "ほうれん草と絹ごし豆腐のスープ",
    "category": "汁物",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草と絹ごし豆腐を具にしたあったかスープ。",
    "kcal": 114,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 12
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
      "ほうれん草を食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を入れて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 55,
    "name": "キャベツとわかめ（生）のスープ",
    "category": "汁物",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとわかめ（生）を具にしたあったかスープ。",
    "kcal": 81,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "1/4個（約250g）",
        "kcal": 58
      },
      {
        "name": "わかめ（生）",
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
      "キャベツを食べやすい大きさに切る。",
      "鍋にだし汁を沸かし、具材を入れて火が通るまで煮る。",
      "しょうゆで味を調える。"
    ]
  },
  {
    "id": 56,
    "name": "鶏むね肉とキャベツのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "鶏むね肉",
    "summary": "鶏むね肉とキャベツを炒め煮にしたあったかおかず。",
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
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 57,
    "name": "鶏ささみとキャベツのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみとキャベツを炒め煮にしたあったかおかず。",
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
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 58,
    "name": "白身魚とキャベツのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "白身魚",
    "summary": "白身魚とキャベツを炒め煮にしたあったかおかず。",
    "kcal": 132,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 54
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
      "白身魚とキャベツを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 59,
    "name": "木綿豆腐とキャベツのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐とキャベツを炒め煮にしたあったかおかず。",
    "kcal": 154,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "105g",
        "kcal": 76
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
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 60,
    "name": "絹ごし豆腐とキャベツのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐とキャベツを炒め煮にしたあったかおかず。",
    "kcal": 137,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "105g",
        "kcal": 59
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
      "絹ごし豆腐とキャベツを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 61,
    "name": "卵とキャベツのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "卵",
    "summary": "卵とキャベツを炒め煮にしたあったかおかず。",
    "kcal": 152,
    "ingredients": [
      {
        "name": "卵",
        "amount": "49g",
        "kcal": 74
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
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 62,
    "name": "ハムとキャベツのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "ハム",
    "summary": "ハムとキャベツを炒め煮にしたあったかおかず。",
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
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 63,
    "name": "鶏むね肉と白菜のあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "鶏むね肉",
    "summary": "鶏むね肉と白菜を炒め煮にしたあったかおかず。",
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
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 64,
    "name": "鶏ささみと白菜のあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみと白菜を炒め煮にしたあったかおかず。",
    "kcal": 122,
    "ingredients": [
      {
        "name": "鶏ささみ",
        "amount": "60g",
        "kcal": 63
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
      "鶏ささみと白菜を食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 65,
    "name": "白身魚と白菜のあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "白身魚",
    "summary": "白身魚と白菜を炒め煮にしたあったかおかず。",
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
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 66,
    "name": "木綿豆腐と白菜のあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐と白菜を炒め煮にしたあったかおかず。",
    "kcal": 135,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "105g",
        "kcal": 76
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
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 67,
    "name": "絹ごし豆腐と白菜のあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐と白菜を炒め煮にしたあったかおかず。",
    "kcal": 143,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "1/2丁（150g）",
        "kcal": 84
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
      "絹ごし豆腐と白菜を食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 68,
    "name": "卵と白菜のあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "卵",
    "summary": "卵と白菜を炒め煮にしたあったかおかず。",
    "kcal": 133,
    "ingredients": [
      {
        "name": "卵",
        "amount": "49g",
        "kcal": 74
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
      "卵と白菜を食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 69,
    "name": "ハムと白菜のあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "ハム",
    "summary": "ハムと白菜を炒め煮にしたあったかおかず。",
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
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 70,
    "name": "鶏むね肉ともやしのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "鶏むね肉",
    "summary": "鶏むね肉ともやしを炒め煮にしたあったかおかず。",
    "kcal": 113,
    "ingredients": [
      {
        "name": "鶏むね肉",
        "amount": "60g",
        "kcal": 65
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
      "鶏むね肉ともやしを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 71,
    "name": "鶏ささみともやしのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみともやしを炒め煮にしたあったかおかず。",
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
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 72,
    "name": "白身魚ともやしのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "白身魚",
    "summary": "白身魚ともやしを炒め煮にしたあったかおかず。",
    "kcal": 102,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 54
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
      "白身魚ともやしを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 73,
    "name": "木綿豆腐ともやしのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐ともやしを炒め煮にしたあったかおかず。",
    "kcal": 124,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "105g",
        "kcal": 76
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
      "木綿豆腐ともやしを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 74,
    "name": "絹ごし豆腐ともやしのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐ともやしを炒め煮にしたあったかおかず。",
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
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 75,
    "name": "卵ともやしのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "卵",
    "summary": "卵ともやしを炒め煮にしたあったかおかず。",
    "kcal": 122,
    "ingredients": [
      {
        "name": "卵",
        "amount": "49g",
        "kcal": 74
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
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 76,
    "name": "ハムともやしのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "ハム",
    "summary": "ハムともやしを炒め煮にしたあったかおかず。",
    "kcal": 72,
    "ingredients": [
      {
        "name": "ハム",
        "amount": "1枚（20g）",
        "kcal": 24
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
      "ハムともやしを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 77,
    "name": "鶏むね肉と玉ねぎのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "鶏むね肉",
    "summary": "鶏むね肉と玉ねぎを炒め煮にしたあったかおかず。",
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
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 78,
    "name": "鶏ささみと玉ねぎのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみと玉ねぎを炒め煮にしたあったかおかず。",
    "kcal": 113,
    "ingredients": [
      {
        "name": "鶏ささみ",
        "amount": "60g",
        "kcal": 63
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
      "鶏ささみと玉ねぎを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 79,
    "name": "白身魚と玉ねぎのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "白身魚",
    "summary": "白身魚と玉ねぎを炒め煮にしたあったかおかず。",
    "kcal": 104,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 54
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
      "白身魚と玉ねぎを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 80,
    "name": "木綿豆腐と玉ねぎのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐と玉ねぎを炒め煮にしたあったかおかず。",
    "kcal": 126,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "105g",
        "kcal": 76
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
      "木綿豆腐と玉ねぎを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 81,
    "name": "絹ごし豆腐と玉ねぎのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐と玉ねぎを炒め煮にしたあったかおかず。",
    "kcal": 134,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "1/2丁（150g）",
        "kcal": 84
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
      "絹ごし豆腐と玉ねぎを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 82,
    "name": "卵と玉ねぎのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "卵",
    "summary": "卵と玉ねぎを炒め煮にしたあったかおかず。",
    "kcal": 124,
    "ingredients": [
      {
        "name": "卵",
        "amount": "49g",
        "kcal": 74
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
      "卵と玉ねぎを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 83,
    "name": "ハムと玉ねぎのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "ハム",
    "summary": "ハムと玉ねぎを炒め煮にしたあったかおかず。",
    "kcal": 74,
    "ingredients": [
      {
        "name": "ハム",
        "amount": "1枚（20g）",
        "kcal": 24
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
      "ハムと玉ねぎを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 84,
    "name": "鶏むね肉とにんじんのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "鶏むね肉",
    "summary": "鶏むね肉とにんじんを炒め煮にしたあったかおかず。",
    "kcal": 103,
    "ingredients": [
      {
        "name": "鶏むね肉",
        "amount": "60g",
        "kcal": 65
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
      "鶏むね肉とにんじんを食べやすい大きさに切る。",
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 85,
    "name": "鶏ささみとにんじんのあったかおかず",
    "category": "温かいおかず",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみとにんじんを炒め煮にしたあったかおかず。",
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
      "フライパンで炒め、しょうゆとみりんで味をからめる。"
    ]
  },
  {
    "id": 86,
    "name": "りんごとヨーグルトのデザート",
    "category": "デザート",
    "mainIngredient": "りんご",
    "summary": "りんごとプレーンヨーグルトを合わせたさっぱりデザート。",
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
    "name": "バナナとヨーグルトのデザート",
    "category": "デザート",
    "mainIngredient": "バナナ",
    "summary": "バナナとプレーンヨーグルトを合わせたさっぱりデザート。",
    "kcal": 119,
    "ingredients": [
      {
        "name": "バナナ",
        "amount": "小1個（約80g）",
        "kcal": 69
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
    "name": "みかんとヨーグルトのデザート",
    "category": "デザート",
    "mainIngredient": "みかん",
    "summary": "みかんとプレーンヨーグルトを合わせたさっぱりデザート。",
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
    "name": "ぶどうとヨーグルトのデザート",
    "category": "デザート",
    "mainIngredient": "ぶどう",
    "summary": "ぶどうとプレーンヨーグルトを合わせたさっぱりデザート。",
    "kcal": 85,
    "ingredients": [
      {
        "name": "ぶどう",
        "amount": "60g",
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
    "name": "りんごとヨーグルトのデザート",
    "category": "デザート",
    "mainIngredient": "りんご",
    "summary": "りんごとプレーンヨーグルトを合わせたさっぱりデザート。",
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
    "name": "バナナとヨーグルトのデザート",
    "category": "デザート",
    "mainIngredient": "バナナ",
    "summary": "バナナとプレーンヨーグルトを合わせたさっぱりデザート。",
    "kcal": 119,
    "ingredients": [
      {
        "name": "バナナ",
        "amount": "小1個（約80g）",
        "kcal": 69
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
    "name": "みかんとヨーグルトのデザート",
    "category": "デザート",
    "mainIngredient": "みかん",
    "summary": "みかんとプレーンヨーグルトを合わせたさっぱりデザート。",
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
    "name": "ぶどうとヨーグルトのデザート",
    "category": "デザート",
    "mainIngredient": "ぶどう",
    "summary": "ぶどうとプレーンヨーグルトを合わせたさっぱりデザート。",
    "kcal": 85,
    "ingredients": [
      {
        "name": "ぶどう",
        "amount": "60g",
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
    "name": "寒天とあんこの和風デザート",
    "category": "デザート",
    "mainIngredient": "寒天",
    "summary": "寒天と少量のあんこを合わせた素朴な和風デザート。",
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
      "器に盛り、上からあんこをのせる。"
    ]
  },
  {
    "id": 95,
    "name": "寒天とあんこの和風デザート",
    "category": "デザート",
    "mainIngredient": "寒天",
    "summary": "寒天と少量のあんこを合わせた素朴な和風デザート。",
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
      "器に盛り、上からあんこをのせる。"
    ]
  },
  {
    "id": 96,
    "name": "寒天とあんこの和風デザート",
    "category": "デザート",
    "mainIngredient": "寒天",
    "summary": "寒天と少量のあんこを合わせた素朴な和風デザート。",
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
      "器に盛り、上からあんこをのせる。"
    ]
  },
  {
    "id": 97,
    "name": "寒天とあんこの和風デザート",
    "category": "デザート",
    "mainIngredient": "寒天",
    "summary": "寒天と少量のあんこを合わせた素朴な和風デザート。",
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
      "器に盛り、上からあんこをのせる。"
    ]
  },
  {
    "id": 98,
    "name": "きなこミルク風デザート",
    "category": "デザート",
    "mainIngredient": "低脂肪乳",
    "summary": "低脂肪乳にきなこを加えた和風デザートドリンク。",
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
      "グラスに低脂肪乳を入れる。",
      "きなこを加えてよく混ぜる。"
    ]
  },
  {
    "id": 99,
    "name": "きなこミルク風デザート",
    "category": "デザート",
    "mainIngredient": "低脂肪乳",
    "summary": "低脂肪乳にきなこを加えた和風デザートドリンク。",
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
      "グラスに低脂肪乳を入れる。",
      "きなこを加えてよく混ぜる。"
    ]
  },
  {
    "id": 100,
    "name": "きなこミルク風デザート",
    "category": "デザート",
    "mainIngredient": "低脂肪乳",
    "summary": "低脂肪乳にきなこを加えた和風デザートドリンク。",
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
      "グラスに低脂肪乳を入れる。",
      "きなこを加えてよく混ぜる。"
    ]
  }
];
