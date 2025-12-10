const recipes = [
  {
    "id": 1,
    "name": "キャベツとぶどうの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとぶどうを使った温かいおかず風アレンジ料理。",
    "kcal": 134,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "250g",
        "kcal": 75
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 11
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 6
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 2,
    "name": "鶏むね肉とコーンの洋食",
    "category": "洋食",
    "mainIngredient": "鶏むね肉",
    "summary": "鶏むね肉とコーンを使った洋食風アレンジ料理。",
    "kcal": 121,
    "ingredients": [
      {
        "name": "鶏むね肉",
        "amount": "60g",
        "kcal": 84
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 4
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 3,
    "name": "にんじんとぶどうの中華",
    "category": "中華",
    "mainIngredient": "にんじん",
    "summary": "にんじんとぶどうを使った中華風アレンジ料理。",
    "kcal": 77,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 22
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 3
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 10
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 4,
    "name": "鶏ささみとハムの中華",
    "category": "中華",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみとハムを使った中華風アレンジ料理。",
    "kcal": 134,
    "ingredients": [
      {
        "name": "鶏ささみ",
        "amount": "60g",
        "kcal": 72
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 32
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 5,
    "name": "大根とみかんのサラダ",
    "category": "サラダ",
    "mainIngredient": "大根",
    "summary": "大根とみかんを使ったサラダ風アレンジ料理。",
    "kcal": 128,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 20
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 22
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 35
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 7
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 6,
    "name": "卵とりんごの汁物",
    "category": "汁物",
    "mainIngredient": "卵",
    "summary": "卵とりんごを使った汁物風アレンジ料理。",
    "kcal": 173,
    "ingredients": [
      {
        "name": "卵",
        "amount": "70g",
        "kcal": 90
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 9
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 26
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 7,
    "name": "ブロッコリーとハムの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとハムを使った冷たいおかず風アレンジ料理。",
    "kcal": 87,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 24
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 33
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 8,
    "name": "もやしとコーンの汁物",
    "category": "汁物",
    "mainIngredient": "もやし",
    "summary": "もやしとコーンを使った汁物風アレンジ料理。",
    "kcal": 76,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 40
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 3
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 9,
    "name": "ブロッコリーとわかめの和食",
    "category": "和食",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとわかめを使った和食風アレンジ料理。",
    "kcal": 107,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 24
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 32
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 20
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 22
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 3
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 10,
    "name": "にんじんとえのきだけのサラダ",
    "category": "サラダ",
    "mainIngredient": "にんじん",
    "summary": "にんじんとえのきだけを使ったサラダ風アレンジ料理。",
    "kcal": 97,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 22
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 20
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 19
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 10
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 11,
    "name": "鶏むね肉とぶどうの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "鶏むね肉",
    "summary": "鶏むね肉とぶどうを使った温かいおかず風アレンジ料理。",
    "kcal": 160,
    "ingredients": [
      {
        "name": "鶏むね肉",
        "amount": "60g",
        "kcal": 84
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 13
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 21
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 12,
    "name": "キャベツとえのきだけの中華",
    "category": "中華",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとえのきだけを使った中華風アレンジ料理。",
    "kcal": 96,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "250g",
        "kcal": 75
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 3
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 13,
    "name": "にんじんとハムの和食",
    "category": "和食",
    "mainIngredient": "にんじん",
    "summary": "にんじんとハムを使った和食風アレンジ料理。",
    "kcal": 169,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 22
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 32
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 25
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 33
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 27
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 14,
    "name": "卵とコーンの和食",
    "category": "和食",
    "mainIngredient": "卵",
    "summary": "卵とコーンを使った和食風アレンジ料理。",
    "kcal": 204,
    "ingredients": [
      {
        "name": "卵",
        "amount": "70g",
        "kcal": 90
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 31
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 25
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 25
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 15,
    "name": "白身魚とハムの汁物",
    "category": "汁物",
    "mainIngredient": "白身魚",
    "summary": "白身魚とハムを使った汁物風アレンジ料理。",
    "kcal": 122,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 66
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 26
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 16,
    "name": "鶏ささみとりんごのデザート",
    "category": "デザート",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみとりんごを使ったデザート風アレンジ料理。",
    "kcal": 154,
    "ingredients": [
      {
        "name": "鶏ささみ",
        "amount": "60g",
        "kcal": 72
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 34
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 17,
    "name": "ブロッコリーとしめじの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとしめじを使った温かいおかず風アレンジ料理。",
    "kcal": 128,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 24
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 29
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 5
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 28
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 27
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 18,
    "name": "玉ねぎとまいたけの和食",
    "category": "和食",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとまいたけを使った和食風アレンジ料理。",
    "kcal": 80,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 33
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 19,
    "name": "ブロッコリーとえのきだけのデザート",
    "category": "デザート",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとえのきだけを使ったデザート風アレンジ料理。",
    "kcal": 107,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 24
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 23
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 11
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 31
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 20,
    "name": "木綿豆腐としめじのデザート",
    "category": "デザート",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐としめじを使ったデザート風アレンジ料理。",
    "kcal": 207,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "150g",
        "kcal": 135
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 19
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 11
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 27
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 21,
    "name": "絹ごし豆腐とまいたけの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐とまいたけを使った温かいおかず風アレンジ料理。",
    "kcal": 146,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "150g",
        "kcal": 105
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 26
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 22,
    "name": "木綿豆腐とまいたけの韓国風",
    "category": "韓国風",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐とまいたけを使った韓国風風アレンジ料理。",
    "kcal": 218,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "150g",
        "kcal": 135
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 28
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 32
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 8
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 23,
    "name": "木綿豆腐としめじの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐としめじを使った温かいおかず風アレンジ料理。",
    "kcal": 197,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "150g",
        "kcal": 135
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 11
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 3
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 33
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 24,
    "name": "卵とわかめの汁物",
    "category": "汁物",
    "mainIngredient": "卵",
    "summary": "卵とわかめを使った汁物風アレンジ料理。",
    "kcal": 112,
    "ingredients": [
      {
        "name": "卵",
        "amount": "70g",
        "kcal": 90
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 16
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 25,
    "name": "もやしとしめじのサラダ",
    "category": "サラダ",
    "mainIngredient": "もやし",
    "summary": "もやしとしめじを使ったサラダ風アレンジ料理。",
    "kcal": 120,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 40
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 34
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 3
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 14
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 14
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 26,
    "name": "鶏ささみとえのきだけの韓国風",
    "category": "韓国風",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみとえのきだけを使った韓国風風アレンジ料理。",
    "kcal": 97,
    "ingredients": [
      {
        "name": "鶏ささみ",
        "amount": "60g",
        "kcal": 72
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 7
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 27,
    "name": "鶏むね肉とみかんの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "鶏むね肉",
    "summary": "鶏むね肉とみかんを使った温かいおかず風アレンジ料理。",
    "kcal": 189,
    "ingredients": [
      {
        "name": "鶏むね肉",
        "amount": "60g",
        "kcal": 84
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 10
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 25
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 26
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 28,
    "name": "大根とわかめの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "大根",
    "summary": "大根とわかめを使った冷たいおかず風アレンジ料理。",
    "kcal": 105,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 20
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 6
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 27
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 27
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 19
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 29,
    "name": "絹ごし豆腐とぶどうの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐とぶどうを使った温かいおかず風アレンジ料理。",
    "kcal": 208,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "150g",
        "kcal": 105
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 5
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 14
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 14
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 28
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 30,
    "name": "白菜とコーンの韓国風",
    "category": "韓国風",
    "mainIngredient": "白菜",
    "summary": "白菜とコーンを使った韓国風風アレンジ料理。",
    "kcal": 126,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "300g",
        "kcal": 69
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 24
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 31,
    "name": "大根とえのきだけの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "大根",
    "summary": "大根とえのきだけを使った冷たいおかず風アレンジ料理。",
    "kcal": 60,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 20
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 22
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 32,
    "name": "白身魚とみかんのデザート",
    "category": "デザート",
    "mainIngredient": "白身魚",
    "summary": "白身魚とみかんを使ったデザート風アレンジ料理。",
    "kcal": 127,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 66
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 17
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 33,
    "name": "玉ねぎとわかめの中華",
    "category": "中華",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとわかめを使った中華風アレンジ料理。",
    "kcal": 69,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 27
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 4
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 34,
    "name": "白菜としめじの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "白菜",
    "summary": "白菜としめじを使った冷たいおかず風アレンジ料理。",
    "kcal": 152,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "300g",
        "kcal": 69
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 34
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 34
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 35,
    "name": "白身魚とみかんの韓国風",
    "category": "韓国風",
    "mainIngredient": "白身魚",
    "summary": "白身魚とみかんを使った韓国風風アレンジ料理。",
    "kcal": 139,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 66
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 29
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 36,
    "name": "キャベツとえのきだけの汁物",
    "category": "汁物",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとえのきだけを使った汁物風アレンジ料理。",
    "kcal": 119,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "250g",
        "kcal": 75
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 26
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 37,
    "name": "白菜とハムの汁物",
    "category": "汁物",
    "mainIngredient": "白菜",
    "summary": "白菜とハムを使った汁物風アレンジ料理。",
    "kcal": 120,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "300g",
        "kcal": 69
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 21
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 38,
    "name": "ほうれん草とりんごの和食",
    "category": "和食",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草とりんごを使った和食風アレンジ料理。",
    "kcal": 80,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 7
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 4
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 3
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 39,
    "name": "玉ねぎとバナナのデザート",
    "category": "デザート",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとバナナを使ったデザート風アレンジ料理。",
    "kcal": 138,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 34
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 3
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 9
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 40,
    "name": "にんじんとりんごの汁物",
    "category": "汁物",
    "mainIngredient": "にんじん",
    "summary": "にんじんとりんごを使った汁物風アレンジ料理。",
    "kcal": 93,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 22
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 23
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 41,
    "name": "玉ねぎとわかめの和食",
    "category": "和食",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとわかめを使った和食風アレンジ料理。",
    "kcal": 84,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 24
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 6
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 16
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 42,
    "name": "鶏ささみとわかめの中華",
    "category": "中華",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみとわかめを使った中華風アレンジ料理。",
    "kcal": 131,
    "ingredients": [
      {
        "name": "鶏ささみ",
        "amount": "60g",
        "kcal": 72
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 21
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 32
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 43,
    "name": "にんじんとぶどうの中華#2",
    "category": "中華",
    "mainIngredient": "にんじん",
    "summary": "にんじんとぶどうを使った中華風アレンジ料理。",
    "kcal": 83,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 22
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 19
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 44,
    "name": "にんじんとコーンのサラダ",
    "category": "サラダ",
    "mainIngredient": "にんじん",
    "summary": "にんじんとコーンを使ったサラダ風アレンジ料理。",
    "kcal": 148,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 22
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 26
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 35
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 26
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 6
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 45,
    "name": "ほうれん草とりんごの中華",
    "category": "中華",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草とりんごを使った中華風アレンジ料理。",
    "kcal": 142,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 13
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 25
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 3
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 35
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 46,
    "name": "白菜とハムのデザート",
    "category": "デザート",
    "mainIngredient": "白菜",
    "summary": "白菜とハムを使ったデザート風アレンジ料理。",
    "kcal": 166,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "300g",
        "kcal": 69
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 5
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 35
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 22
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 5
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 47,
    "name": "木綿豆腐とバナナの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐とバナナを使った温かいおかず風アレンジ料理。",
    "kcal": 213,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "150g",
        "kcal": 135
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 18
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 48,
    "name": "玉ねぎとわかめの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとわかめを使った温かいおかず風アレンジ料理。",
    "kcal": 88,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 7
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 30
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 13
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 49,
    "name": "絹ごし豆腐としめじの洋食",
    "category": "洋食",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐としめじを使った洋食風アレンジ料理。",
    "kcal": 197,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "150g",
        "kcal": 105
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 26
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 34
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 17
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 50,
    "name": "木綿豆腐としめじのデザート#2",
    "category": "デザート",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐としめじを使ったデザート風アレンジ料理。",
    "kcal": 182,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "150g",
        "kcal": 135
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 32
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 51,
    "name": "キャベツとえのきだけの韓国風",
    "category": "韓国風",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとえのきだけを使った韓国風風アレンジ料理。",
    "kcal": 155,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "250g",
        "kcal": 75
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 35
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 27
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 52,
    "name": "キャベツとわかめの韓国風",
    "category": "韓国風",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとわかめを使った韓国風風アレンジ料理。",
    "kcal": 110,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "250g",
        "kcal": 75
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 29
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 53,
    "name": "キャベツとぶどうの和食",
    "category": "和食",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとぶどうを使った和食風アレンジ料理。",
    "kcal": 126,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "250g",
        "kcal": 75
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 6
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 3
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 54,
    "name": "もやしとしめじのサラダ#2",
    "category": "サラダ",
    "mainIngredient": "もやし",
    "summary": "もやしとしめじを使ったサラダ風アレンジ料理。",
    "kcal": 91,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 40
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 27
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 9
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 55,
    "name": "ほうれん草とまいたけの洋食",
    "category": "洋食",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草とまいたけを使った洋食風アレンジ料理。",
    "kcal": 38,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 5
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 56,
    "name": "もやしとみかんの韓国風",
    "category": "韓国風",
    "mainIngredient": "もやし",
    "summary": "もやしとみかんを使った韓国風風アレンジ料理。",
    "kcal": 173,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 40
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 24
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 16
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 28
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 21
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 57,
    "name": "にんじんとバナナの汁物",
    "category": "汁物",
    "mainIngredient": "にんじん",
    "summary": "にんじんとバナナを使った汁物風アレンジ料理。",
    "kcal": 112,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 22
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 12
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 18
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 58,
    "name": "にんじんとぶどうの汁物",
    "category": "汁物",
    "mainIngredient": "にんじん",
    "summary": "にんじんとぶどうを使った汁物風アレンジ料理。",
    "kcal": 114,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 22
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 32
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 10
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 8
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 59,
    "name": "もやしとぶどうの中華",
    "category": "中華",
    "mainIngredient": "もやし",
    "summary": "もやしとぶどうを使った中華風アレンジ料理。",
    "kcal": 165,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 40
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 19
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 34
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 30
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 60,
    "name": "玉ねぎとコーンの韓国風",
    "category": "韓国風",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとコーンを使った韓国風風アレンジ料理。",
    "kcal": 150,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 11
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 20
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 23
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 31
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 61,
    "name": "白菜とりんごの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "白菜",
    "summary": "白菜とりんごを使った冷たいおかず風アレンジ料理。",
    "kcal": 120,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "300g",
        "kcal": 69
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 3
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 62,
    "name": "ほうれん草とわかめの汁物",
    "category": "汁物",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草とわかめを使った汁物風アレンジ料理。",
    "kcal": 96,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 29
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 31
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 4
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 8
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 63,
    "name": "鶏むね肉とえのきだけの和食",
    "category": "和食",
    "mainIngredient": "鶏むね肉",
    "summary": "鶏むね肉とえのきだけを使った和食風アレンジ料理。",
    "kcal": 191,
    "ingredients": [
      {
        "name": "鶏むね肉",
        "amount": "60g",
        "kcal": 84
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 26
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 30
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 4
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 29
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 64,
    "name": "白菜とコーンのデザート",
    "category": "デザート",
    "mainIngredient": "白菜",
    "summary": "白菜とコーンを使ったデザート風アレンジ料理。",
    "kcal": 159,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "300g",
        "kcal": 69
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 22
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 18
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 12
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 5
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 65,
    "name": "白身魚とコーンの和食",
    "category": "和食",
    "mainIngredient": "白身魚",
    "summary": "白身魚とコーンを使った和食風アレンジ料理。",
    "kcal": 151,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 66
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 18
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 34
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 66,
    "name": "ほうれん草とまいたけのデザート",
    "category": "デザート",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草とまいたけを使ったデザート風アレンジ料理。",
    "kcal": 96,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 5
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 15
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 31
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 12
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 67,
    "name": "ブロッコリーとぶどうの韓国風",
    "category": "韓国風",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとぶどうを使った韓国風風アレンジ料理。",
    "kcal": 94,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 24
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 28
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 68,
    "name": "絹ごし豆腐とコーンの和食",
    "category": "和食",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐とコーンを使った和食風アレンジ料理。",
    "kcal": 231,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "150g",
        "kcal": 105
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 12
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 34
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 17
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 30
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 69,
    "name": "卵とぶどうの洋食",
    "category": "洋食",
    "mainIngredient": "卵",
    "summary": "卵とぶどうを使った洋食風アレンジ料理。",
    "kcal": 167,
    "ingredients": [
      {
        "name": "卵",
        "amount": "70g",
        "kcal": 90
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 7
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 5
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 12
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 11
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 70,
    "name": "ブロッコリーとみかんの汁物",
    "category": "汁物",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとみかんを使った汁物風アレンジ料理。",
    "kcal": 128,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 24
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 29
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 31
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 71,
    "name": "ブロッコリーとハムの中華",
    "category": "中華",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとハムを使った中華風アレンジ料理。",
    "kcal": 86,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 24
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 19
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 6
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 7
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 72,
    "name": "鶏ささみとバナナの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみとバナナを使った冷たいおかず風アレンジ料理。",
    "kcal": 182,
    "ingredients": [
      {
        "name": "鶏ささみ",
        "amount": "60g",
        "kcal": 72
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 21
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 29
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 73,
    "name": "白身魚とえのきだけのサラダ",
    "category": "サラダ",
    "mainIngredient": "白身魚",
    "summary": "白身魚とえのきだけを使ったサラダ風アレンジ料理。",
    "kcal": 136,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 66
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 19
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 12
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 21
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 74,
    "name": "キャベツとハムの洋食",
    "category": "洋食",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとハムを使った洋食風アレンジ料理。",
    "kcal": 116,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "250g",
        "kcal": 75
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 11
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 75,
    "name": "卵としめじの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "卵",
    "summary": "卵としめじを使った冷たいおかず風アレンジ料理。",
    "kcal": 188,
    "ingredients": [
      {
        "name": "卵",
        "amount": "70g",
        "kcal": 90
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 23
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 21
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 26
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 13
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 76,
    "name": "木綿豆腐とえのきだけのデザート",
    "category": "デザート",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐とえのきだけを使ったデザート風アレンジ料理。",
    "kcal": 241,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "150g",
        "kcal": 135
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 35
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 13
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 17
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 23
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 77,
    "name": "にんじんとコーンの韓国風",
    "category": "韓国風",
    "mainIngredient": "にんじん",
    "summary": "にんじんとコーンを使った韓国風風アレンジ料理。",
    "kcal": 113,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 22
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 25
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 5
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 10
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 18
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 78,
    "name": "絹ごし豆腐とみかんの中華",
    "category": "中華",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐とみかんを使った中華風アレンジ料理。",
    "kcal": 165,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "150g",
        "kcal": 105
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 12
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 4
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 79,
    "name": "白菜としめじのデザート",
    "category": "デザート",
    "mainIngredient": "白菜",
    "summary": "白菜としめじを使ったデザート風アレンジ料理。",
    "kcal": 159,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "300g",
        "kcal": 69
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 9
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 21
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 11
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 34
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 80,
    "name": "木綿豆腐とぶどうのデザート",
    "category": "デザート",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐とぶどうを使ったデザート風アレンジ料理。",
    "kcal": 247,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "150g",
        "kcal": 135
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 3
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 35
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 32
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 81,
    "name": "もやしとハムのサラダ",
    "category": "サラダ",
    "mainIngredient": "もやし",
    "summary": "もやしとハムを使ったサラダ風アレンジ料理。",
    "kcal": 85,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 40
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 15
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 82,
    "name": "もやしとハムの汁物",
    "category": "汁物",
    "mainIngredient": "もやし",
    "summary": "もやしとハムを使った汁物風アレンジ料理。",
    "kcal": 92,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 40
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 3
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 11
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 8
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 83,
    "name": "絹ごし豆腐とコーンの和食#2",
    "category": "和食",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐とコーンを使った和食風アレンジ料理。",
    "kcal": 173,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "150g",
        "kcal": 105
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 35
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 84,
    "name": "もやしとりんごの汁物",
    "category": "汁物",
    "mainIngredient": "もやし",
    "summary": "もやしとりんごを使った汁物風アレンジ料理。",
    "kcal": 105,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 40
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 12
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 5
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 85,
    "name": "木綿豆腐とハムの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐とハムを使った冷たいおかず風アレンジ料理。",
    "kcal": 217,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "150g",
        "kcal": 135
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 14
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 4
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 34
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 86,
    "name": "ほうれん草とえのきだけの中華",
    "category": "中華",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草とえのきだけを使った中華風アレンジ料理。",
    "kcal": 84,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 32
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 16
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 87,
    "name": "ブロッコリーとみかんの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとみかんを使った温かいおかず風アレンジ料理。",
    "kcal": 90,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 24
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 22
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 88,
    "name": "もやしとバナナの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "もやし",
    "summary": "もやしとバナナを使った温かいおかず風アレンジ料理。",
    "kcal": 157,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 40
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 25
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 17
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 15
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 89,
    "name": "ほうれん草とバナナの中華",
    "category": "中華",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草とバナナを使った中華風アレンジ料理。",
    "kcal": 113,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 15
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 7
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 10
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 3
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 90,
    "name": "絹ごし豆腐とえのきだけの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐とえのきだけを使った冷たいおかず風アレンジ料理。",
    "kcal": 220,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "150g",
        "kcal": 105
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 22
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 14
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 31
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 30
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 91,
    "name": "木綿豆腐とまいたけのデザート",
    "category": "デザート",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐とまいたけを使ったデザート風アレンジ料理。",
    "kcal": 201,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "150g",
        "kcal": 135
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 12
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 14
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 16
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 9
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 92,
    "name": "絹ごし豆腐とぶどうの汁物",
    "category": "汁物",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐とぶどうを使った汁物風アレンジ料理。",
    "kcal": 178,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "150g",
        "kcal": 105
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 24
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 7
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 93,
    "name": "玉ねぎとわかめの汁物",
    "category": "汁物",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとわかめを使った汁物風アレンジ料理。",
    "kcal": 114,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 15
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 22
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 15
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 24
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 94,
    "name": "白菜とバナナの洋食",
    "category": "洋食",
    "mainIngredient": "白菜",
    "summary": "白菜とバナナを使った洋食風アレンジ料理。",
    "kcal": 200,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "300g",
        "kcal": 69
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 35
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 9
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 24
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 3
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 95,
    "name": "鶏ささみとりんごの汁物",
    "category": "汁物",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみとりんごを使った汁物風アレンジ料理。",
    "kcal": 139,
    "ingredients": [
      {
        "name": "鶏ささみ",
        "amount": "60g",
        "kcal": 72
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 4
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 15
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 96,
    "name": "鶏むね肉とハムのサラダ",
    "category": "サラダ",
    "mainIngredient": "鶏むね肉",
    "summary": "鶏むね肉とハムを使ったサラダ風アレンジ料理。",
    "kcal": 212,
    "ingredients": [
      {
        "name": "鶏むね肉",
        "amount": "60g",
        "kcal": 84
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 34
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 5
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 24
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 35
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 97,
    "name": "玉ねぎとバナナのデザート#2",
    "category": "デザート",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとバナナを使ったデザート風アレンジ料理。",
    "kcal": 104,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 12
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 98,
    "name": "鶏むね肉とハムの汁物",
    "category": "汁物",
    "mainIngredient": "鶏むね肉",
    "summary": "鶏むね肉とハムを使った汁物風アレンジ料理。",
    "kcal": 117,
    "ingredients": [
      {
        "name": "鶏むね肉",
        "amount": "60g",
        "kcal": 84
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 3
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 99,
    "name": "絹ごし豆腐とコーンの和食#3",
    "category": "和食",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐とコーンを使った和食風アレンジ料理。",
    "kcal": 198,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "150g",
        "kcal": 105
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 30
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 26
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 4
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 100,
    "name": "卵とりんごの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "卵",
    "summary": "卵とりんごを使った冷たいおかず風アレンジ料理。",
    "kcal": 190,
    "ingredients": [
      {
        "name": "卵",
        "amount": "70g",
        "kcal": 90
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 26
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 26
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 101,
    "name": "白身魚とコーンのサラダ",
    "category": "サラダ",
    "mainIngredient": "白身魚",
    "summary": "白身魚とコーンを使ったサラダ風アレンジ料理。",
    "kcal": 122,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 66
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 23
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 102,
    "name": "大根としめじの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "大根",
    "summary": "大根としめじを使った冷たいおかず風アレンジ料理。",
    "kcal": 74,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 20
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 31
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 103,
    "name": "キャベツとバナナの韓国風",
    "category": "韓国風",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとバナナを使った韓国風風アレンジ料理。",
    "kcal": 160,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "250g",
        "kcal": 75
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 25
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 104,
    "name": "大根とわかめのサラダ",
    "category": "サラダ",
    "mainIngredient": "大根",
    "summary": "大根とわかめを使ったサラダ風アレンジ料理。",
    "kcal": 75,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 20
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 13
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 25
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 11
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 105,
    "name": "ブロッコリーとえのきだけの和食",
    "category": "和食",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとえのきだけを使った和食風アレンジ料理。",
    "kcal": 117,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 24
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 27
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 25
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 23
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 106,
    "name": "木綿豆腐とバナナの温かいおかず#2",
    "category": "温かいおかず",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐とバナナを使った温かいおかず風アレンジ料理。",
    "kcal": 259,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "150g",
        "kcal": 135
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 33
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 31
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 107,
    "name": "玉ねぎとバナナの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとバナナを使った冷たいおかず風アレンジ料理。",
    "kcal": 131,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 34
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 5
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 108,
    "name": "ブロッコリーとみかんの中華",
    "category": "中華",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとみかんを使った中華風アレンジ料理。",
    "kcal": 151,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 24
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 34
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 31
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 18
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 109,
    "name": "卵とバナナの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "卵",
    "summary": "卵とバナナを使った温かいおかず風アレンジ料理。",
    "kcal": 230,
    "ingredients": [
      {
        "name": "卵",
        "amount": "70g",
        "kcal": 90
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 24
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 30
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 26
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 110,
    "name": "もやしとみかんの韓国風#2",
    "category": "韓国風",
    "mainIngredient": "もやし",
    "summary": "もやしとみかんを使った韓国風風アレンジ料理。",
    "kcal": 104,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 40
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 20
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 111,
    "name": "ブロッコリーとぶどうの汁物",
    "category": "汁物",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとぶどうを使った汁物風アレンジ料理。",
    "kcal": 69,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 24
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 3
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 112,
    "name": "卵としめじの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "卵",
    "summary": "卵としめじを使った温かいおかず風アレンジ料理。",
    "kcal": 131,
    "ingredients": [
      {
        "name": "卵",
        "amount": "70g",
        "kcal": 90
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 26
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 113,
    "name": "木綿豆腐とまいたけのデザート#2",
    "category": "デザート",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐とまいたけを使ったデザート風アレンジ料理。",
    "kcal": 258,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "150g",
        "kcal": 135
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 32
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 11
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 30
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 35
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 114,
    "name": "木綿豆腐とコーンのデザート",
    "category": "デザート",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐とコーンを使ったデザート風アレンジ料理。",
    "kcal": 200,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "150g",
        "kcal": 135
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 19
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 13
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 115,
    "name": "卵とわかめの中華",
    "category": "中華",
    "mainIngredient": "卵",
    "summary": "卵とわかめを使った中華風アレンジ料理。",
    "kcal": 129,
    "ingredients": [
      {
        "name": "卵",
        "amount": "70g",
        "kcal": 90
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 33
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 116,
    "name": "玉ねぎとバナナのサラダ",
    "category": "サラダ",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとバナナを使ったサラダ風アレンジ料理。",
    "kcal": 99,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 7
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 117,
    "name": "玉ねぎとバナナのデザート#3",
    "category": "デザート",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとバナナを使ったデザート風アレンジ料理。",
    "kcal": 135,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 7
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 27
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 9
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 118,
    "name": "にんじんとぶどうの汁物#2",
    "category": "汁物",
    "mainIngredient": "にんじん",
    "summary": "にんじんとぶどうを使った汁物風アレンジ料理。",
    "kcal": 78,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 22
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 11
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 3
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 119,
    "name": "絹ごし豆腐とバナナの韓国風",
    "category": "韓国風",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐とバナナを使った韓国風風アレンジ料理。",
    "kcal": 220,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "150g",
        "kcal": 105
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 16
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 3
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 15
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 21
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 120,
    "name": "鶏むね肉とぶどうの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "鶏むね肉",
    "summary": "鶏むね肉とぶどうを使った冷たいおかず風アレンジ料理。",
    "kcal": 152,
    "ingredients": [
      {
        "name": "鶏むね肉",
        "amount": "60g",
        "kcal": 84
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 19
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 7
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 121,
    "name": "もやしとハムの洋食",
    "category": "洋食",
    "mainIngredient": "もやし",
    "summary": "もやしとハムを使った洋食風アレンジ料理。",
    "kcal": 78,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 40
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 8
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 122,
    "name": "白菜とえのきだけのデザート",
    "category": "デザート",
    "mainIngredient": "白菜",
    "summary": "白菜とえのきだけを使ったデザート風アレンジ料理。",
    "kcal": 130,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "300g",
        "kcal": 69
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 23
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 20
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 123,
    "name": "ブロッコリーとコーンの洋食",
    "category": "洋食",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとコーンを使った洋食風アレンジ料理。",
    "kcal": 148,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 24
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 35
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 17
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 22
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 17
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 124,
    "name": "卵とわかめの韓国風",
    "category": "韓国風",
    "mainIngredient": "卵",
    "summary": "卵とわかめを使った韓国風風アレンジ料理。",
    "kcal": 149,
    "ingredients": [
      {
        "name": "卵",
        "amount": "70g",
        "kcal": 90
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 23
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 30
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 125,
    "name": "白菜とわかめのデザート",
    "category": "デザート",
    "mainIngredient": "白菜",
    "summary": "白菜とわかめを使ったデザート風アレンジ料理。",
    "kcal": 134,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "300g",
        "kcal": 69
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 25
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 34
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 126,
    "name": "白菜とバナナの汁物",
    "category": "汁物",
    "mainIngredient": "白菜",
    "summary": "白菜とバナナを使った汁物風アレンジ料理。",
    "kcal": 175,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "300g",
        "kcal": 69
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 19
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 27
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 127,
    "name": "ほうれん草とみかんのデザート",
    "category": "デザート",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草とみかんを使ったデザート風アレンジ料理。",
    "kcal": 71,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 9
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 128,
    "name": "もやしとえのきだけの汁物",
    "category": "汁物",
    "mainIngredient": "もやし",
    "summary": "もやしとえのきだけを使った汁物風アレンジ料理。",
    "kcal": 155,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 40
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 24
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 30
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 34
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 9
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 129,
    "name": "にんじんとハムのデザート",
    "category": "デザート",
    "mainIngredient": "にんじん",
    "summary": "にんじんとハムを使ったデザート風アレンジ料理。",
    "kcal": 110,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 22
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 12
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 25
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 21
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 130,
    "name": "玉ねぎとりんごの中華",
    "category": "中華",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとりんごを使った中華風アレンジ料理。",
    "kcal": 187,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 32
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 12
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 35
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 28
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 131,
    "name": "大根とまいたけの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "大根",
    "summary": "大根とまいたけを使った冷たいおかず風アレンジ料理。",
    "kcal": 72,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 20
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 24
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 4
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 9
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 132,
    "name": "大根とみかんの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "大根",
    "summary": "大根とみかんを使った温かいおかず風アレンジ料理。",
    "kcal": 118,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 20
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 11
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 19
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 8
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 16
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 133,
    "name": "木綿豆腐とりんごの洋食",
    "category": "洋食",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐とりんごを使った洋食風アレンジ料理。",
    "kcal": 258,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "150g",
        "kcal": 135
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 27
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 16
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 28
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 4
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 134,
    "name": "木綿豆腐とバナナの中華",
    "category": "中華",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐とバナナを使った中華風アレンジ料理。",
    "kcal": 242,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "150g",
        "kcal": 135
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 15
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 32
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 135,
    "name": "玉ねぎとわかめのデザート",
    "category": "デザート",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとわかめを使ったデザート風アレンジ料理。",
    "kcal": 116,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 33
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 19
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 26
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 136,
    "name": "ほうれん草とりんごの中華#2",
    "category": "中華",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草とりんごを使った中華風アレンジ料理。",
    "kcal": 117,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 35
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 7
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 3
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 6
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 137,
    "name": "もやしとバナナの洋食",
    "category": "洋食",
    "mainIngredient": "もやし",
    "summary": "もやしとバナナを使った洋食風アレンジ料理。",
    "kcal": 127,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 40
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 11
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 16
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 138,
    "name": "鶏むね肉とりんごの中華",
    "category": "中華",
    "mainIngredient": "鶏むね肉",
    "summary": "鶏むね肉とりんごを使った中華風アレンジ料理。",
    "kcal": 161,
    "ingredients": [
      {
        "name": "鶏むね肉",
        "amount": "60g",
        "kcal": 84
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 29
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 139,
    "name": "にんじんとハムの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "にんじん",
    "summary": "にんじんとハムを使った温かいおかず風アレンジ料理。",
    "kcal": 156,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 22
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 33
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 28
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 12
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 31
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 140,
    "name": "大根とぶどうの和食",
    "category": "和食",
    "mainIngredient": "大根",
    "summary": "大根とぶどうを使った和食風アレンジ料理。",
    "kcal": 117,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 20
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 24
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 5
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 26
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 141,
    "name": "鶏むね肉とコーンの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "鶏むね肉",
    "summary": "鶏むね肉とコーンを使った冷たいおかず風アレンジ料理。",
    "kcal": 140,
    "ingredients": [
      {
        "name": "鶏むね肉",
        "amount": "60g",
        "kcal": 84
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 23
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 142,
    "name": "白身魚とわかめの和食",
    "category": "和食",
    "mainIngredient": "白身魚",
    "summary": "白身魚とわかめを使った和食風アレンジ料理。",
    "kcal": 132,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 66
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 3
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 23
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 6
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 28
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 143,
    "name": "白菜とりんごの汁物",
    "category": "汁物",
    "mainIngredient": "白菜",
    "summary": "白菜とりんごを使った汁物風アレンジ料理。",
    "kcal": 120,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "300g",
        "kcal": 69
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 3
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 144,
    "name": "玉ねぎとぶどうの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとぶどうを使った冷たいおかず風アレンジ料理。",
    "kcal": 162,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 30
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 23
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 16
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 19
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 145,
    "name": "ブロッコリーとぶどうのデザート",
    "category": "デザート",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとぶどうを使ったデザート風アレンジ料理。",
    "kcal": 152,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 24
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 16
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 20
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 25
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 25
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 146,
    "name": "ほうれん草とバナナのデザート",
    "category": "デザート",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草とバナナを使ったデザート風アレンジ料理。",
    "kcal": 88,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 10
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 147,
    "name": "絹ごし豆腐とハムの洋食",
    "category": "洋食",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐とハムを使った洋食風アレンジ料理。",
    "kcal": 161,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "150g",
        "kcal": 105
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 3
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 23
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 148,
    "name": "玉ねぎとえのきだけの和食",
    "category": "和食",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとえのきだけを使った和食風アレンジ料理。",
    "kcal": 74,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 13
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 11
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 149,
    "name": "鶏ささみとハムの汁物",
    "category": "汁物",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみとハムを使った汁物風アレンジ料理。",
    "kcal": 140,
    "ingredients": [
      {
        "name": "鶏ささみ",
        "amount": "60g",
        "kcal": 72
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 14
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 4
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 16
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 4
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 150,
    "name": "絹ごし豆腐とコーンの洋食",
    "category": "洋食",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐とコーンを使った洋食風アレンジ料理。",
    "kcal": 145,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "150g",
        "kcal": 105
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 7
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 151,
    "name": "にんじんとバナナの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "にんじん",
    "summary": "にんじんとバナナを使った温かいおかず風アレンジ料理。",
    "kcal": 109,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 22
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 27
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 152,
    "name": "大根とハムの中華",
    "category": "中華",
    "mainIngredient": "大根",
    "summary": "大根とハムを使った中華風アレンジ料理。",
    "kcal": 81,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 20
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 7
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 24
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 153,
    "name": "鶏ささみとバナナの韓国風",
    "category": "韓国風",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみとバナナを使った韓国風風アレンジ料理。",
    "kcal": 174,
    "ingredients": [
      {
        "name": "鶏ささみ",
        "amount": "60g",
        "kcal": 72
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 28
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 14
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 154,
    "name": "キャベツとハムの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとハムを使った冷たいおかず風アレンジ料理。",
    "kcal": 113,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "250g",
        "kcal": 75
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 8
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 155,
    "name": "大根とバナナの中華",
    "category": "中華",
    "mainIngredient": "大根",
    "summary": "大根とバナナを使った中華風アレンジ料理。",
    "kcal": 141,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 20
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 32
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 29
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 156,
    "name": "ほうれん草とりんごの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草とりんごを使った温かいおかず風アレンジ料理。",
    "kcal": 108,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 13
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 9
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 20
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 157,
    "name": "玉ねぎとバナナの和食",
    "category": "和食",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとバナナを使った和食風アレンジ料理。",
    "kcal": 188,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 22
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 20
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 31
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 23
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 158,
    "name": "もやしとりんごの和食",
    "category": "和食",
    "mainIngredient": "もやし",
    "summary": "もやしとりんごを使った和食風アレンジ料理。",
    "kcal": 157,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 40
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 28
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 24
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 17
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 159,
    "name": "木綿豆腐とぶどうのデザート#2",
    "category": "デザート",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐とぶどうを使ったデザート風アレンジ料理。",
    "kcal": 184,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "150g",
        "kcal": 135
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 7
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 160,
    "name": "木綿豆腐としめじの中華",
    "category": "中華",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐としめじを使った中華風アレンジ料理。",
    "kcal": 209,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "150g",
        "kcal": 135
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 22
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 23
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 14
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 161,
    "name": "もやしとわかめの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "もやし",
    "summary": "もやしとわかめを使った温かいおかず風アレンジ料理。",
    "kcal": 117,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 40
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 18
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 17
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 11
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 25
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 162,
    "name": "ブロッコリーとみかんの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとみかんを使った冷たいおかず風アレンジ料理。",
    "kcal": 116,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 24
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 5
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 27
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 16
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 163,
    "name": "玉ねぎとまいたけの汁物",
    "category": "汁物",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとまいたけを使った汁物風アレンジ料理。",
    "kcal": 99,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 19
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 10
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 12
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 11
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 164,
    "name": "玉ねぎとハムの韓国風",
    "category": "韓国風",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとハムを使った韓国風風アレンジ料理。",
    "kcal": 106,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 23
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 21
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 165,
    "name": "キャベツとしめじの汁物",
    "category": "汁物",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとしめじを使った汁物風アレンジ料理。",
    "kcal": 179,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "250g",
        "kcal": 75
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 34
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 27
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 28
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 166,
    "name": "白身魚とハムの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "白身魚",
    "summary": "白身魚とハムを使った冷たいおかず風アレンジ料理。",
    "kcal": 167,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 66
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 5
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 35
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 9
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 22
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 167,
    "name": "鶏ささみとみかんのサラダ",
    "category": "サラダ",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみとみかんを使ったサラダ風アレンジ料理。",
    "kcal": 229,
    "ingredients": [
      {
        "name": "鶏ささみ",
        "amount": "60g",
        "kcal": 72
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 34
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 33
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 26
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 20
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 168,
    "name": "白菜とバナナのデザート",
    "category": "デザート",
    "mainIngredient": "白菜",
    "summary": "白菜とバナナを使ったデザート風アレンジ料理。",
    "kcal": 191,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "300g",
        "kcal": 69
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 11
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 33
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 18
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 169,
    "name": "鶏ささみとハムの和食",
    "category": "和食",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみとハムを使った和食風アレンジ料理。",
    "kcal": 201,
    "ingredients": [
      {
        "name": "鶏ささみ",
        "amount": "60g",
        "kcal": 72
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 20
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 25
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 28
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 26
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 170,
    "name": "白身魚とりんごの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "白身魚",
    "summary": "白身魚とりんごを使った温かいおかず風アレンジ料理。",
    "kcal": 188,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 66
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 28
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 11
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 35
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 171,
    "name": "ほうれん草とりんごの和食#2",
    "category": "和食",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草とりんごを使った和食風アレンジ料理。",
    "kcal": 120,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 18
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 27
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 9
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 172,
    "name": "卵とぶどうの汁物",
    "category": "汁物",
    "mainIngredient": "卵",
    "summary": "卵とぶどうを使った汁物風アレンジ料理。",
    "kcal": 155,
    "ingredients": [
      {
        "name": "卵",
        "amount": "70g",
        "kcal": 90
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 5
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 18
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 173,
    "name": "ブロッコリーとみかんの汁物#2",
    "category": "汁物",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとみかんを使った汁物風アレンジ料理。",
    "kcal": 117,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 24
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 25
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 24
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 174,
    "name": "もやしとまいたけの洋食",
    "category": "洋食",
    "mainIngredient": "もやし",
    "summary": "もやしとまいたけを使った洋食風アレンジ料理。",
    "kcal": 101,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 40
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 26
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 20
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 175,
    "name": "ブロッコリーとえのきだけのデザート#2",
    "category": "デザート",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとえのきだけを使ったデザート風アレンジ料理。",
    "kcal": 70,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 24
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 7
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 21
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 176,
    "name": "にんじんとコーンの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "にんじん",
    "summary": "にんじんとコーンを使った冷たいおかず風アレンジ料理。",
    "kcal": 162,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 22
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 29
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 18
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 28
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 32
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 177,
    "name": "木綿豆腐とえのきだけの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐とえのきだけを使った温かいおかず風アレンジ料理。",
    "kcal": 201,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "150g",
        "kcal": 135
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 28
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 15
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 5
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 178,
    "name": "キャベツとわかめのサラダ",
    "category": "サラダ",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとわかめを使ったサラダ風アレンジ料理。",
    "kcal": 188,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "250g",
        "kcal": 75
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 35
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 12
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 35
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 25
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 179,
    "name": "絹ごし豆腐としめじのサラダ",
    "category": "サラダ",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐としめじを使ったサラダ風アレンジ料理。",
    "kcal": 134,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "150g",
        "kcal": 105
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 4
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 10
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 180,
    "name": "卵とわかめの韓国風#2",
    "category": "韓国風",
    "mainIngredient": "卵",
    "summary": "卵とわかめを使った韓国風風アレンジ料理。",
    "kcal": 112,
    "ingredients": [
      {
        "name": "卵",
        "amount": "70g",
        "kcal": 90
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 8
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 8
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 181,
    "name": "卵としめじのサラダ",
    "category": "サラダ",
    "mainIngredient": "卵",
    "summary": "卵としめじを使ったサラダ風アレンジ料理。",
    "kcal": 175,
    "ingredients": [
      {
        "name": "卵",
        "amount": "70g",
        "kcal": 90
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 35
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 35
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 182,
    "name": "白身魚とぶどうの中華",
    "category": "中華",
    "mainIngredient": "白身魚",
    "summary": "白身魚とぶどうを使った中華風アレンジ料理。",
    "kcal": 124,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 66
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 16
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 183,
    "name": "玉ねぎとしめじのサラダ",
    "category": "サラダ",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとしめじを使ったサラダ風アレンジ料理。",
    "kcal": 122,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 14
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 33
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 28
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 184,
    "name": "ブロッコリーとみかんの和食",
    "category": "和食",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとみかんを使った和食風アレンジ料理。",
    "kcal": 126,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 24
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 26
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 32
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 185,
    "name": "卵とハムの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "卵",
    "summary": "卵とハムを使った冷たいおかず風アレンジ料理。",
    "kcal": 143,
    "ingredients": [
      {
        "name": "卵",
        "amount": "70g",
        "kcal": 90
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 3
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 20
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 186,
    "name": "白菜とコーンの和食",
    "category": "和食",
    "mainIngredient": "白菜",
    "summary": "白菜とコーンを使った和食風アレンジ料理。",
    "kcal": 138,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "300g",
        "kcal": 69
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 9
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 14
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 13
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 187,
    "name": "白身魚とハムの韓国風",
    "category": "韓国風",
    "mainIngredient": "白身魚",
    "summary": "白身魚とハムを使った韓国風風アレンジ料理。",
    "kcal": 158,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 66
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 7
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 8
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 18
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 29
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 188,
    "name": "ブロッコリーとりんごの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとりんごを使った冷たいおかず風アレンジ料理。",
    "kcal": 134,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 24
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 19
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 20
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 23
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 189,
    "name": "大根とえのきだけの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "大根",
    "summary": "大根とえのきだけを使った温かいおかず風アレンジ料理。",
    "kcal": 70,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 20
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 3
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 14
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 15
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 190,
    "name": "ブロッコリーとみかんの韓国風",
    "category": "韓国風",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとみかんを使った韓国風風アレンジ料理。",
    "kcal": 113,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 24
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 19
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 21
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 5
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 191,
    "name": "玉ねぎとみかんの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとみかんを使った温かいおかず風アレンジ料理。",
    "kcal": 169,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 3
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 34
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 30
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 26
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 192,
    "name": "玉ねぎとコーンの洋食",
    "category": "洋食",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとコーンを使った洋食風アレンジ料理。",
    "kcal": 174,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 28
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 35
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 18
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 28
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 193,
    "name": "白身魚とぶどうの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "白身魚",
    "summary": "白身魚とぶどうを使った温かいおかず風アレンジ料理。",
    "kcal": 139,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 66
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 15
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 3
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 13
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 194,
    "name": "鶏ささみとわかめの中華#2",
    "category": "中華",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみとわかめを使った中華風アレンジ料理。",
    "kcal": 81,
    "ingredients": [
      {
        "name": "鶏ささみ",
        "amount": "60g",
        "kcal": 72
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 3
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 195,
    "name": "にんじんとコーンのデザート",
    "category": "デザート",
    "mainIngredient": "にんじん",
    "summary": "にんじんとコーンを使ったデザート風アレンジ料理。",
    "kcal": 104,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 22
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 22
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 27
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 196,
    "name": "白身魚とまいたけの中華",
    "category": "中華",
    "mainIngredient": "白身魚",
    "summary": "白身魚とまいたけを使った中華風アレンジ料理。",
    "kcal": 115,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 66
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 29
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 5
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 197,
    "name": "白身魚とコーンの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "白身魚",
    "summary": "白身魚とコーンを使った冷たいおかず風アレンジ料理。",
    "kcal": 168,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 66
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 31
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 3
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 35
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 198,
    "name": "ほうれん草とぶどうの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草とぶどうを使った冷たいおかず風アレンジ料理。",
    "kcal": 124,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 22
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 35
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 7
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 199,
    "name": "木綿豆腐とりんごの韓国風",
    "category": "韓国風",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐とりんごを使った韓国風風アレンジ料理。",
    "kcal": 283,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "150g",
        "kcal": 135
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 21
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 33
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 18
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 28
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 200,
    "name": "大根とぶどうの中華",
    "category": "中華",
    "mainIngredient": "大根",
    "summary": "大根とぶどうを使った中華風アレンジ料理。",
    "kcal": 102,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 20
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 31
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 5
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 4
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 201,
    "name": "卵としめじの汁物",
    "category": "汁物",
    "mainIngredient": "卵",
    "summary": "卵としめじを使った汁物風アレンジ料理。",
    "kcal": 160,
    "ingredients": [
      {
        "name": "卵",
        "amount": "70g",
        "kcal": 90
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 27
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 28
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 202,
    "name": "木綿豆腐とまいたけの中華",
    "category": "中華",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐とまいたけを使った中華風アレンジ料理。",
    "kcal": 205,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "150g",
        "kcal": 135
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 10
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 16
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 29
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 203,
    "name": "白身魚とえのきだけのデザート",
    "category": "デザート",
    "mainIngredient": "白身魚",
    "summary": "白身魚とえのきだけを使ったデザート風アレンジ料理。",
    "kcal": 165,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 66
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 24
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 15
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 26
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 16
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 204,
    "name": "キャベツとわかめの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとわかめを使った冷たいおかず風アレンジ料理。",
    "kcal": 152,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "250g",
        "kcal": 75
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 28
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 31
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 4
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 8
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 205,
    "name": "もやしとハムの和食",
    "category": "和食",
    "mainIngredient": "もやし",
    "summary": "もやしとハムを使った和食風アレンジ料理。",
    "kcal": 114,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 40
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 3
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 3
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 7
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 31
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 206,
    "name": "木綿豆腐とバナナのデザート",
    "category": "デザート",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐とバナナを使ったデザート風アレンジ料理。",
    "kcal": 239,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "150g",
        "kcal": 135
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 23
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 18
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 3
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 207,
    "name": "大根とわかめの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "大根",
    "summary": "大根とわかめを使った温かいおかず風アレンジ料理。",
    "kcal": 55,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 20
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 29
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 208,
    "name": "白菜とみかんの韓国風",
    "category": "韓国風",
    "mainIngredient": "白菜",
    "summary": "白菜とみかんを使った韓国風風アレンジ料理。",
    "kcal": 203,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "300g",
        "kcal": 69
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 33
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 11
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 21
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 25
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 209,
    "name": "鶏ささみとしめじのサラダ",
    "category": "サラダ",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみとしめじを使ったサラダ風アレンジ料理。",
    "kcal": 142,
    "ingredients": [
      {
        "name": "鶏ささみ",
        "amount": "60g",
        "kcal": 72
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 23
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 6
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 26
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 210,
    "name": "鶏ささみとえのきだけのサラダ",
    "category": "サラダ",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみとえのきだけを使ったサラダ風アレンジ料理。",
    "kcal": 153,
    "ingredients": [
      {
        "name": "鶏ささみ",
        "amount": "60g",
        "kcal": 72
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 25
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 32
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 6
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 211,
    "name": "白菜とバナナの中華",
    "category": "中華",
    "mainIngredient": "白菜",
    "summary": "白菜とバナナを使った中華風アレンジ料理。",
    "kcal": 163,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "300g",
        "kcal": 69
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 27
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 7
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 212,
    "name": "玉ねぎとハムの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとハムを使った冷たいおかず風アレンジ料理。",
    "kcal": 84,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 22
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 213,
    "name": "玉ねぎとしめじの韓国風",
    "category": "韓国風",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとしめじを使った韓国風風アレンジ料理。",
    "kcal": 80,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 33
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 214,
    "name": "白菜とぶどうの韓国風",
    "category": "韓国風",
    "mainIngredient": "白菜",
    "summary": "白菜とぶどうを使った韓国風風アレンジ料理。",
    "kcal": 180,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "300g",
        "kcal": 69
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 11
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 35
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 23
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 215,
    "name": "大根としめじの韓国風",
    "category": "韓国風",
    "mainIngredient": "大根",
    "summary": "大根としめじを使った韓国風風アレンジ料理。",
    "kcal": 111,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 20
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 19
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 30
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 27
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 216,
    "name": "鶏ささみとみかんのサラダ#2",
    "category": "サラダ",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみとみかんを使ったサラダ風アレンジ料理。",
    "kcal": 145,
    "ingredients": [
      {
        "name": "鶏ささみ",
        "amount": "60g",
        "kcal": 72
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 29
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 217,
    "name": "玉ねぎとりんごの韓国風",
    "category": "韓国風",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとりんごを使った韓国風風アレンジ料理。",
    "kcal": 112,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 17
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 15
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 218,
    "name": "白身魚とわかめの中華",
    "category": "中華",
    "mainIngredient": "白身魚",
    "summary": "白身魚とわかめを使った中華風アレンジ料理。",
    "kcal": 147,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 66
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 13
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 35
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 27
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 219,
    "name": "大根とまいたけの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "大根",
    "summary": "大根とまいたけを使った温かいおかず風アレンジ料理。",
    "kcal": 122,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 20
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 24
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 32
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 26
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 5
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 220,
    "name": "大根とコーンのサラダ",
    "category": "サラダ",
    "mainIngredient": "大根",
    "summary": "大根とコーンを使ったサラダ風アレンジ料理。",
    "kcal": 137,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 20
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 29
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 24
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 31
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 221,
    "name": "もやしとわかめの和食",
    "category": "和食",
    "mainIngredient": "もやし",
    "summary": "もやしとわかめを使った和食風アレンジ料理。",
    "kcal": 112,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 40
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 10
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 23
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 33
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 222,
    "name": "白身魚とまいたけの和食",
    "category": "和食",
    "mainIngredient": "白身魚",
    "summary": "白身魚とまいたけを使った和食風アレンジ料理。",
    "kcal": 145,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 66
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 20
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 26
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 6
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 12
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 223,
    "name": "鶏むね肉とハムの汁物#2",
    "category": "汁物",
    "mainIngredient": "鶏むね肉",
    "summary": "鶏むね肉とハムを使った汁物風アレンジ料理。",
    "kcal": 119,
    "ingredients": [
      {
        "name": "鶏むね肉",
        "amount": "60g",
        "kcal": 84
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 5
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 224,
    "name": "白菜とえのきだけのサラダ",
    "category": "サラダ",
    "mainIngredient": "白菜",
    "summary": "白菜とえのきだけを使ったサラダ風アレンジ料理。",
    "kcal": 131,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "300g",
        "kcal": 69
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 15
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 21
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 5
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 3
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 225,
    "name": "白身魚とハムのサラダ",
    "category": "サラダ",
    "mainIngredient": "白身魚",
    "summary": "白身魚とハムを使ったサラダ風アレンジ料理。",
    "kcal": 169,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 66
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 34
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 22
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 10
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 7
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 226,
    "name": "卵とまいたけの汁物",
    "category": "汁物",
    "mainIngredient": "卵",
    "summary": "卵とまいたけを使った汁物風アレンジ料理。",
    "kcal": 159,
    "ingredients": [
      {
        "name": "卵",
        "amount": "70g",
        "kcal": 90
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 15
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 34
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 5
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 227,
    "name": "玉ねぎとまいたけのサラダ",
    "category": "サラダ",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとまいたけを使ったサラダ風アレンジ料理。",
    "kcal": 83,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 33
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 3
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 228,
    "name": "にんじんとまいたけの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "にんじん",
    "summary": "にんじんとまいたけを使った冷たいおかず風アレンジ料理。",
    "kcal": 54,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 22
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 17
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 229,
    "name": "白身魚とぶどうのデザート",
    "category": "デザート",
    "mainIngredient": "白身魚",
    "summary": "白身魚とぶどうを使ったデザート風アレンジ料理。",
    "kcal": 190,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 66
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 22
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 3
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 22
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 35
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 230,
    "name": "キャベツとみかんの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとみかんを使った冷たいおかず風アレンジ料理。",
    "kcal": 125,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "250g",
        "kcal": 75
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 6
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 231,
    "name": "にんじんとハムのデザート#2",
    "category": "デザート",
    "mainIngredient": "にんじん",
    "summary": "にんじんとハムを使ったデザート風アレンジ料理。",
    "kcal": 107,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 22
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 26
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 4
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 25
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 232,
    "name": "絹ごし豆腐とまいたけの汁物",
    "category": "汁物",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐とまいたけを使った汁物風アレンジ料理。",
    "kcal": 220,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "150g",
        "kcal": 105
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 22
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 28
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 28
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 22
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 233,
    "name": "卵とコーンの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "卵",
    "summary": "卵とコーンを使った冷たいおかず風アレンジ料理。",
    "kcal": 203,
    "ingredients": [
      {
        "name": "卵",
        "amount": "70g",
        "kcal": 90
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 4
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 32
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 14
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 30
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 234,
    "name": "絹ごし豆腐とぶどうの洋食",
    "category": "洋食",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐とぶどうを使った洋食風アレンジ料理。",
    "kcal": 217,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "150g",
        "kcal": 105
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 26
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 14
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 20
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 10
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 235,
    "name": "白菜とぶどうの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "白菜",
    "summary": "白菜とぶどうを使った冷たいおかず風アレンジ料理。",
    "kcal": 167,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "300g",
        "kcal": 69
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 23
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 21
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 8
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 4
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 236,
    "name": "白身魚とまいたけの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "白身魚",
    "summary": "白身魚とまいたけを使った温かいおかず風アレンジ料理。",
    "kcal": 91,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 66
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 10
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 237,
    "name": "木綿豆腐とぶどうのデザート#3",
    "category": "デザート",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐とぶどうを使ったデザート風アレンジ料理。",
    "kcal": 220,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "150g",
        "kcal": 135
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 16
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 27
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 238,
    "name": "にんじんとまいたけの洋食",
    "category": "洋食",
    "mainIngredient": "にんじん",
    "summary": "にんじんとまいたけを使った洋食風アレンジ料理。",
    "kcal": 99,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 22
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 3
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 29
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 5
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 25
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 239,
    "name": "卵としめじの韓国風",
    "category": "韓国風",
    "mainIngredient": "卵",
    "summary": "卵としめじを使った韓国風風アレンジ料理。",
    "kcal": 200,
    "ingredients": [
      {
        "name": "卵",
        "amount": "70g",
        "kcal": 90
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 27
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 35
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 33
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 240,
    "name": "にんじんとハムの洋食",
    "category": "洋食",
    "mainIngredient": "にんじん",
    "summary": "にんじんとハムを使った洋食風アレンジ料理。",
    "kcal": 57,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 22
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 5
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 241,
    "name": "ほうれん草とえのきだけの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草とえのきだけを使った冷たいおかず風アレンジ料理。",
    "kcal": 96,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 10
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 21
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 29
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 242,
    "name": "ほうれん草とみかんの洋食",
    "category": "洋食",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草とみかんを使った洋食風アレンジ料理。",
    "kcal": 89,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 27
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 243,
    "name": "キャベツとみかんの中華",
    "category": "中華",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとみかんを使った中華風アレンジ料理。",
    "kcal": 153,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "250g",
        "kcal": 75
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 5
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 8
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 21
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 244,
    "name": "キャベツとしめじの汁物#2",
    "category": "汁物",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとしめじを使った汁物風アレンジ料理。",
    "kcal": 172,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "250g",
        "kcal": 75
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 18
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 9
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 20
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 35
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 245,
    "name": "玉ねぎとしめじの中華",
    "category": "中華",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとしめじを使った中華風アレンジ料理。",
    "kcal": 83,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 6
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 19
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 11
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 246,
    "name": "鶏ささみとわかめの和食",
    "category": "和食",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみとわかめを使った和食風アレンジ料理。",
    "kcal": 172,
    "ingredients": [
      {
        "name": "鶏ささみ",
        "amount": "60g",
        "kcal": 72
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 17
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 17
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 28
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 32
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 247,
    "name": "大根としめじの洋食",
    "category": "洋食",
    "mainIngredient": "大根",
    "summary": "大根としめじを使った洋食風アレンジ料理。",
    "kcal": 80,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 20
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 11
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 34
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 248,
    "name": "玉ねぎとまいたけの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとまいたけを使った冷たいおかず風アレンジ料理。",
    "kcal": 103,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 13
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 3
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 10
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 30
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 249,
    "name": "もやしとバナナの汁物",
    "category": "汁物",
    "mainIngredient": "もやし",
    "summary": "もやしとバナナを使った汁物風アレンジ料理。",
    "kcal": 166,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 40
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 13
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 21
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 32
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 250,
    "name": "白菜とわかめの洋食",
    "category": "洋食",
    "mainIngredient": "白菜",
    "summary": "白菜とわかめを使った洋食風アレンジ料理。",
    "kcal": 114,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "300g",
        "kcal": 69
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 16
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 6
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 17
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 251,
    "name": "ほうれん草としめじの韓国風",
    "category": "韓国風",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草としめじを使った韓国風風アレンジ料理。",
    "kcal": 57,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 24
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 252,
    "name": "キャベツとぶどうの和食#2",
    "category": "和食",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとぶどうを使った和食風アレンジ料理。",
    "kcal": 202,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "250g",
        "kcal": 75
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 17
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 19
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 34
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 15
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 253,
    "name": "大根とバナナの洋食",
    "category": "洋食",
    "mainIngredient": "大根",
    "summary": "大根とバナナを使った洋食風アレンジ料理。",
    "kcal": 133,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 20
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 24
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 25
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 4
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 254,
    "name": "大根とハムのデザート",
    "category": "デザート",
    "mainIngredient": "大根",
    "summary": "大根とハムを使ったデザート風アレンジ料理。",
    "kcal": 96,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 20
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 20
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 17
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 9
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 255,
    "name": "卵とりんごの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "卵",
    "summary": "卵とりんごを使った温かいおかず風アレンジ料理。",
    "kcal": 191,
    "ingredients": [
      {
        "name": "卵",
        "amount": "70g",
        "kcal": 90
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 13
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 19
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 8
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 13
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 256,
    "name": "木綿豆腐とみかんの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐とみかんを使った温かいおかず風アレンジ料理。",
    "kcal": 217,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "150g",
        "kcal": 135
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 33
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 5
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 257,
    "name": "木綿豆腐とえのきだけの温かいおかず#2",
    "category": "温かいおかず",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐とえのきだけを使った温かいおかず風アレンジ料理。",
    "kcal": 187,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "150g",
        "kcal": 135
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 31
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 3
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 258,
    "name": "ブロッコリーとハムの韓国風",
    "category": "韓国風",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとハムを使った韓国風風アレンジ料理。",
    "kcal": 95,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 24
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 29
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 7
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 5
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 259,
    "name": "にんじんとハムの汁物",
    "category": "汁物",
    "mainIngredient": "にんじん",
    "summary": "にんじんとハムを使った汁物風アレンジ料理。",
    "kcal": 74,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 22
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 22
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 260,
    "name": "大根とぶどうのデザート",
    "category": "デザート",
    "mainIngredient": "大根",
    "summary": "大根とぶどうを使ったデザート風アレンジ料理。",
    "kcal": 129,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 20
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 28
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 4
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 35
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 261,
    "name": "卵とぶどうの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "卵",
    "summary": "卵とぶどうを使った冷たいおかず風アレンジ料理。",
    "kcal": 210,
    "ingredients": [
      {
        "name": "卵",
        "amount": "70g",
        "kcal": 90
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 14
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 30
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 34
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 262,
    "name": "キャベツとわかめの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとわかめを使った温かいおかず風アレンジ料理。",
    "kcal": 154,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "250g",
        "kcal": 75
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 3
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 27
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 29
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 14
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 263,
    "name": "絹ごし豆腐とコーンの汁物",
    "category": "汁物",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐とコーンを使った汁物風アレンジ料理。",
    "kcal": 230,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "150g",
        "kcal": 105
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 31
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 28
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 27
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 6
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 264,
    "name": "卵としめじの汁物#2",
    "category": "汁物",
    "mainIngredient": "卵",
    "summary": "卵としめじを使った汁物風アレンジ料理。",
    "kcal": 119,
    "ingredients": [
      {
        "name": "卵",
        "amount": "70g",
        "kcal": 90
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 5
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 9
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 265,
    "name": "ブロッコリーとりんごのサラダ",
    "category": "サラダ",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとりんごを使ったサラダ風アレンジ料理。",
    "kcal": 151,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 24
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 18
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 6
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 26
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 29
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 266,
    "name": "木綿豆腐としめじの中華#2",
    "category": "中華",
    "mainIngredient": "木綿豆腐",
    "summary": "木綿豆腐としめじを使った中華風アレンジ料理。",
    "kcal": 157,
    "ingredients": [
      {
        "name": "木綿豆腐",
        "amount": "150g",
        "kcal": 135
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 7
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 267,
    "name": "玉ねぎとえのきだけの洋食",
    "category": "洋食",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとえのきだけを使った洋食風アレンジ料理。",
    "kcal": 91,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "えのきだけ",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 17
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 12
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 12
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 268,
    "name": "絹ごし豆腐とぶどうの中華",
    "category": "中華",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐とぶどうを使った中華風アレンジ料理。",
    "kcal": 240,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "150g",
        "kcal": 105
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 16
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 29
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 33
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 15
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 269,
    "name": "玉ねぎとバナナの洋食",
    "category": "洋食",
    "mainIngredient": "玉ねぎ",
    "summary": "玉ねぎとバナナを使った洋食風アレンジ料理。",
    "kcal": 114,
    "ingredients": [
      {
        "name": "玉ねぎ",
        "amount": "80g",
        "kcal": 32
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 22
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 270,
    "name": "キャベツとりんごの洋食",
    "category": "洋食",
    "mainIngredient": "キャベツ",
    "summary": "キャベツとりんごを使った洋食風アレンジ料理。",
    "kcal": 137,
    "ingredients": [
      {
        "name": "キャベツ",
        "amount": "250g",
        "kcal": 75
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 14
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 271,
    "name": "鶏ささみとぶどうの中華",
    "category": "中華",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみとぶどうを使った中華風アレンジ料理。",
    "kcal": 186,
    "ingredients": [
      {
        "name": "鶏ささみ",
        "amount": "60g",
        "kcal": 72
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 22
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 22
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 28
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 272,
    "name": "もやしとしめじのサラダ#3",
    "category": "サラダ",
    "mainIngredient": "もやし",
    "summary": "もやしとしめじを使ったサラダ風アレンジ料理。",
    "kcal": 82,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 40
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 27
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 273,
    "name": "鶏むね肉とコーンの中華",
    "category": "中華",
    "mainIngredient": "鶏むね肉",
    "summary": "鶏むね肉とコーンを使った中華風アレンジ料理。",
    "kcal": 131,
    "ingredients": [
      {
        "name": "鶏むね肉",
        "amount": "60g",
        "kcal": 84
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 14
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 274,
    "name": "ほうれん草とコーンの中華",
    "category": "中華",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草とコーンを使った中華風アレンジ料理。",
    "kcal": 78,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 16
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 11
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 275,
    "name": "絹ごし豆腐とみかんの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐とみかんを使った冷たいおかず風アレンジ料理。",
    "kcal": 163,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "150g",
        "kcal": 105
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 14
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 276,
    "name": "もやしとまいたけの汁物",
    "category": "汁物",
    "mainIngredient": "もやし",
    "summary": "もやしとまいたけを使った汁物風アレンジ料理。",
    "kcal": 78,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 40
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 14
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 5
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 4
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 277,
    "name": "鶏ささみとバナナの洋食",
    "category": "洋食",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみとバナナを使った洋食風アレンジ料理。",
    "kcal": 193,
    "ingredients": [
      {
        "name": "鶏ささみ",
        "amount": "60g",
        "kcal": 72
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 30
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 31
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 278,
    "name": "ブロッコリーとぶどうの冷たいおかず",
    "category": "冷たいおかず",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとぶどうを使った冷たいおかず風アレンジ料理。",
    "kcal": 81,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 24
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 15
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 279,
    "name": "絹ごし豆腐としめじのデザート",
    "category": "デザート",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐としめじを使ったデザート風アレンジ料理。",
    "kcal": 154,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "150g",
        "kcal": 105
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 19
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 4
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 11
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 280,
    "name": "にんじんとみかんの韓国風",
    "category": "韓国風",
    "mainIngredient": "にんじん",
    "summary": "にんじんとみかんを使った韓国風風アレンジ料理。",
    "kcal": 129,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 22
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 26
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 23
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 14
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 281,
    "name": "大根とみかんの温かいおかず#2",
    "category": "温かいおかず",
    "mainIngredient": "大根",
    "summary": "大根とみかんを使った温かいおかず風アレンジ料理。",
    "kcal": 76,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 20
      },
      {
        "name": "みかん",
        "amount": "80g",
        "kcal": 44
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 12
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 282,
    "name": "卵としめじの韓国風#2",
    "category": "韓国風",
    "mainIngredient": "卵",
    "summary": "卵としめじを使った韓国風風アレンジ料理。",
    "kcal": 148,
    "ingredients": [
      {
        "name": "卵",
        "amount": "70g",
        "kcal": 90
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 14
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 14
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 15
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 283,
    "name": "鶏ささみとりんごの和食",
    "category": "和食",
    "mainIngredient": "鶏ささみ",
    "summary": "鶏ささみとりんごを使った和食風アレンジ料理。",
    "kcal": 141,
    "ingredients": [
      {
        "name": "鶏ささみ",
        "amount": "60g",
        "kcal": 72
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 21
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 284,
    "name": "大根とバナナの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "大根",
    "summary": "大根とバナナを使った温かいおかず風アレンジ料理。",
    "kcal": 100,
    "ingredients": [
      {
        "name": "大根",
        "amount": "80g",
        "kcal": 20
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 6
      },
      {
        "name": "にんにく",
        "amount": "小さじ1",
        "kcal": 14
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 285,
    "name": "ブロッコリーとまいたけの和食",
    "category": "和食",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとまいたけを使った和食風アレンジ料理。",
    "kcal": 69,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 24
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 30
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 286,
    "name": "ブロッコリーとりんごの冷たいおかず#2",
    "category": "冷たいおかず",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとりんごを使った冷たいおかず風アレンジ料理。",
    "kcal": 145,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 24
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 33
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 9
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 10
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 21
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 287,
    "name": "ほうれん草とわかめの汁物#2",
    "category": "汁物",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草とわかめを使った汁物風アレンジ料理。",
    "kcal": 54,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 27
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 3
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 288,
    "name": "絹ごし豆腐とまいたけの中華",
    "category": "中華",
    "mainIngredient": "絹ごし豆腐",
    "summary": "絹ごし豆腐とまいたけを使った中華風アレンジ料理。",
    "kcal": 212,
    "ingredients": [
      {
        "name": "絹ごし豆腐",
        "amount": "150g",
        "kcal": 105
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 19
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 19
      },
      {
        "name": "めんつゆ",
        "amount": "小さじ1",
        "kcal": 35
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 19
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 289,
    "name": "鶏むね肉とバナナの和食",
    "category": "和食",
    "mainIngredient": "鶏むね肉",
    "summary": "鶏むね肉とバナナを使った和食風アレンジ料理。",
    "kcal": 226,
    "ingredients": [
      {
        "name": "鶏むね肉",
        "amount": "60g",
        "kcal": 84
      },
      {
        "name": "バナナ",
        "amount": "60g",
        "kcal": 60
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 35
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 24
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 23
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 290,
    "name": "白身魚としめじの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "白身魚",
    "summary": "白身魚としめじを使った温かいおかず風アレンジ料理。",
    "kcal": 153,
    "ingredients": [
      {
        "name": "白身魚",
        "amount": "60g",
        "kcal": 66
      },
      {
        "name": "しめじ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 27
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 28
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 4
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 13
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 291,
    "name": "にんじんとわかめのデザート",
    "category": "デザート",
    "mainIngredient": "にんじん",
    "summary": "にんじんとわかめを使ったデザート風アレンジ料理。",
    "kcal": 58,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 22
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "酢",
        "amount": "小さじ1",
        "kcal": 4
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 26
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 292,
    "name": "ブロッコリーとまいたけのサラダ",
    "category": "サラダ",
    "mainIngredient": "ブロッコリー",
    "summary": "ブロッコリーとまいたけを使ったサラダ風アレンジ料理。",
    "kcal": 70,
    "ingredients": [
      {
        "name": "ブロッコリー",
        "amount": "60g",
        "kcal": 24
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 8
      },
      {
        "name": "味噌",
        "amount": "小さじ1",
        "kcal": 23
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 293,
    "name": "ほうれん草とわかめの中華",
    "category": "中華",
    "mainIngredient": "ほうれん草",
    "summary": "ほうれん草とわかめを使った中華風アレンジ料理。",
    "kcal": 71,
    "ingredients": [
      {
        "name": "ほうれん草",
        "amount": "60g",
        "kcal": 18
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 27
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 4
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 16
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 294,
    "name": "にんじんとぶどうの中華#3",
    "category": "中華",
    "mainIngredient": "にんじん",
    "summary": "にんじんとぶどうを使った中華風アレンジ料理。",
    "kcal": 121,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 22
      },
      {
        "name": "ぶどう",
        "amount": "60g",
        "kcal": 42
      },
      {
        "name": "ポン酢",
        "amount": "小さじ1",
        "kcal": 19
      },
      {
        "name": "ケチャップ",
        "amount": "小さじ1",
        "kcal": 4
      },
      {
        "name": "ごま油",
        "amount": "小さじ1",
        "kcal": 20
      },
      {
        "name": "マヨネーズ",
        "amount": "小さじ1",
        "kcal": 14
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 295,
    "name": "白菜とハムの洋食",
    "category": "洋食",
    "mainIngredient": "白菜",
    "summary": "白菜とハムを使った洋食風アレンジ料理。",
    "kcal": 150,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "300g",
        "kcal": 69
      },
      {
        "name": "ハム",
        "amount": "20g",
        "kcal": 30
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 26
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 25
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 296,
    "name": "白菜とわかめの和食",
    "category": "和食",
    "mainIngredient": "白菜",
    "summary": "白菜とわかめを使った和食風アレンジ料理。",
    "kcal": 106,
    "ingredients": [
      {
        "name": "白菜",
        "amount": "300g",
        "kcal": 69
      },
      {
        "name": "わかめ",
        "amount": "30g",
        "kcal": 6
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 20
      },
      {
        "name": "はちみつ",
        "amount": "小さじ1",
        "kcal": 5
      },
      {
        "name": "コチュジャン",
        "amount": "小さじ1",
        "kcal": 6
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 297,
    "name": "もやしとコーンのサラダ",
    "category": "サラダ",
    "mainIngredient": "もやし",
    "summary": "もやしとコーンを使ったサラダ風アレンジ料理。",
    "kcal": 77,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 40
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "ラー油",
        "amount": "小さじ1",
        "kcal": 4
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 298,
    "name": "もやしとまいたけの洋食#2",
    "category": "洋食",
    "mainIngredient": "もやし",
    "summary": "もやしとまいたけを使った洋食風アレンジ料理。",
    "kcal": 93,
    "ingredients": [
      {
        "name": "もやし",
        "amount": "200g",
        "kcal": 40
      },
      {
        "name": "まいたけ",
        "amount": "60g",
        "kcal": 15
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 8
      },
      {
        "name": "バター",
        "amount": "小さじ1",
        "kcal": 30
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 299,
    "name": "鶏むね肉とりんごの温かいおかず",
    "category": "温かいおかず",
    "mainIngredient": "鶏むね肉",
    "summary": "鶏むね肉とりんごを使った温かいおかず風アレンジ料理。",
    "kcal": 216,
    "ingredients": [
      {
        "name": "鶏むね肉",
        "amount": "60g",
        "kcal": 84
      },
      {
        "name": "りんご",
        "amount": "80g",
        "kcal": 48
      },
      {
        "name": "粒マスタード",
        "amount": "小さじ1",
        "kcal": 15
      },
      {
        "name": "みりん",
        "amount": "小さじ1",
        "kcal": 27
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 30
      },
      {
        "name": "ウスターソース",
        "amount": "小さじ1",
        "kcal": 12
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  },
  {
    "id": 300,
    "name": "にんじんとコーンの洋食",
    "category": "洋食",
    "mainIngredient": "にんじん",
    "summary": "にんじんとコーンを使った洋食風アレンジ料理。",
    "kcal": 99,
    "ingredients": [
      {
        "name": "にんじん",
        "amount": "50g",
        "kcal": 22
      },
      {
        "name": "コーン",
        "amount": "30g",
        "kcal": 33
      },
      {
        "name": "砂糖",
        "amount": "小さじ1",
        "kcal": 9
      },
      {
        "name": "豆板醤",
        "amount": "小さじ1",
        "kcal": 29
      },
      {
        "name": "しょうゆ",
        "amount": "小さじ1",
        "kcal": 6
      }
    ],
    "steps": [
      "材料を切る",
      "調味料を合わせる",
      "加熱または和える",
      "仕上げる"
    ]
  }
];