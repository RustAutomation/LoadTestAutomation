var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "3056",
        "ok": "164",
        "ko": "2892"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "194",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60025",
        "ok": "17062",
        "ko": "60025"
    },
    "meanResponseTime": {
        "total": "17318",
        "ok": "11107",
        "ko": "17670"
    },
    "standardDeviation": {
        "total": "23523",
        "ok": "4971",
        "ko": "24104"
    },
    "percentiles1": {
        "total": "10006",
        "ok": "12701",
        "ko": "10003"
    },
    "percentiles2": {
        "total": "18845",
        "ok": "14289",
        "ko": "19578"
    },
    "percentiles3": {
        "total": "60012",
        "ok": "16005",
        "ko": "60013"
    },
    "percentiles4": {
        "total": "60015",
        "ok": "16127",
        "ko": "60015"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 19,
    "percentage": 1
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 142,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2892,
    "percentage": 95
},
    "meanNumberOfRequestsPerSecond": {
        "total": "35.126",
        "ok": "1.885",
        "ko": "33.241"
    }
},
contents: {
"req_get-all-games-c1289": {
        type: "REQUEST",
        name: "Get all games",
path: "Get all games",
pathFormatted: "req_get-all-games-c1289",
stats: {
    "name": "Get all games",
    "numberOfRequests": {
        "total": "1000",
        "ok": "136",
        "ko": "864"
    },
    "minResponseTime": {
        "total": "194",
        "ok": "194",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60025",
        "ok": "17062",
        "ko": "60025"
    },
    "meanResponseTime": {
        "total": "37902",
        "ok": "11161",
        "ko": "42111"
    },
    "standardDeviation": {
        "total": "23709",
        "ok": "5443",
        "ko": "22708"
    },
    "percentiles1": {
        "total": "60001",
        "ok": "13308",
        "ko": "60002"
    },
    "percentiles2": {
        "total": "60007",
        "ok": "14445",
        "ko": "60008"
    },
    "percentiles3": {
        "total": "60014",
        "ok": "16026",
        "ko": "60014"
    },
    "percentiles4": {
        "total": "60016",
        "ok": "16136",
        "ko": "60016"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 19,
    "percentage": 2
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 114,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 864,
    "percentage": 86
},
    "meanNumberOfRequestsPerSecond": {
        "total": "11.494",
        "ok": "1.563",
        "ko": "9.931"
    }
}
    },"req_authenticate-ea80a": {
        type: "REQUEST",
        name: "Authenticate",
path: "Authenticate",
pathFormatted: "req_authenticate-ea80a",
stats: {
    "name": "Authenticate",
    "numberOfRequests": {
        "total": "1000",
        "ok": "28",
        "ko": "972"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "8535",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60018",
        "ok": "11842",
        "ko": "60018"
    },
    "meanResponseTime": {
        "total": "12247",
        "ok": "10843",
        "ko": "12287"
    },
    "standardDeviation": {
        "total": "20322",
        "ok": "871",
        "ko": "20611"
    },
    "percentiles1": {
        "total": "1",
        "ok": "11166",
        "ko": "0"
    },
    "percentiles2": {
        "total": "11166",
        "ok": "11484",
        "ko": "11101"
    },
    "percentiles3": {
        "total": "60009",
        "ok": "11837",
        "ko": "60009"
    },
    "percentiles4": {
        "total": "60014",
        "ok": "11842",
        "ko": "60014"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 28,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 972,
    "percentage": 97
},
    "meanNumberOfRequestsPerSecond": {
        "total": "11.494",
        "ok": "0.322",
        "ko": "11.172"
    }
}
    },"req_create-new-game-17c84": {
        type: "REQUEST",
        name: "Create New Game - Tetris",
path: "Create New Game - Tetris",
pathFormatted: "req_create-new-game-17c84",
stats: {
    "name": "Create New Game - Tetris",
    "numberOfRequests": {
        "total": "5",
        "ok": "0",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "3298",
        "ok": "-",
        "ko": "3298"
    },
    "maxResponseTime": {
        "total": "60015",
        "ok": "-",
        "ko": "60015"
    },
    "meanResponseTime": {
        "total": "30635",
        "ok": "-",
        "ko": "30635"
    },
    "standardDeviation": {
        "total": "18021",
        "ok": "-",
        "ko": "18021"
    },
    "percentiles1": {
        "total": "31143",
        "ok": "-",
        "ko": "31143"
    },
    "percentiles2": {
        "total": "31573",
        "ok": "-",
        "ko": "31573"
    },
    "percentiles3": {
        "total": "54327",
        "ok": "-",
        "ko": "54327"
    },
    "percentiles4": {
        "total": "58877",
        "ok": "-",
        "ko": "58877"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 5,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.057",
        "ok": "-",
        "ko": "0.057"
    }
}
    },"req_create-new-game-fadb3": {
        type: "REQUEST",
        name: "Create New Game - Doom",
path: "Create New Game - Doom",
pathFormatted: "req_create-new-game-fadb3",
stats: {
    "name": "Create New Game - Doom",
    "numberOfRequests": {
        "total": "3",
        "ok": "0",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "25599",
        "ok": "-",
        "ko": "25599"
    },
    "maxResponseTime": {
        "total": "31504",
        "ok": "-",
        "ko": "31504"
    },
    "meanResponseTime": {
        "total": "27742",
        "ok": "-",
        "ko": "27742"
    },
    "standardDeviation": {
        "total": "2669",
        "ok": "-",
        "ko": "2669"
    },
    "percentiles1": {
        "total": "26123",
        "ok": "-",
        "ko": "26123"
    },
    "percentiles2": {
        "total": "28814",
        "ok": "-",
        "ko": "28814"
    },
    "percentiles3": {
        "total": "30966",
        "ok": "-",
        "ko": "30966"
    },
    "percentiles4": {
        "total": "31396",
        "ok": "-",
        "ko": "31396"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.034",
        "ok": "-",
        "ko": "0.034"
    }
}
    },"req_create-new-game-1c229": {
        type: "REQUEST",
        name: "Create New Game - Minecraft",
path: "Create New Game - Minecraft",
pathFormatted: "req_create-new-game-1c229",
stats: {
    "name": "Create New Game - Minecraft",
    "numberOfRequests": {
        "total": "6",
        "ok": "0",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "27145",
        "ok": "-",
        "ko": "27145"
    },
    "maxResponseTime": {
        "total": "31874",
        "ok": "-",
        "ko": "31874"
    },
    "meanResponseTime": {
        "total": "30363",
        "ok": "-",
        "ko": "30363"
    },
    "standardDeviation": {
        "total": "1634",
        "ok": "-",
        "ko": "1634"
    },
    "percentiles1": {
        "total": "30823",
        "ok": "-",
        "ko": "30823"
    },
    "percentiles2": {
        "total": "31677",
        "ok": "-",
        "ko": "31677"
    },
    "percentiles3": {
        "total": "31854",
        "ok": "-",
        "ko": "31854"
    },
    "percentiles4": {
        "total": "31870",
        "ok": "-",
        "ko": "31870"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.069",
        "ok": "-",
        "ko": "0.069"
    }
}
    },"req_create-new-game-84def": {
        type: "REQUEST",
        name: "Create New Game - SimCity 2000",
path: "Create New Game - SimCity 2000",
pathFormatted: "req_create-new-game-84def",
stats: {
    "name": "Create New Game - SimCity 2000",
    "numberOfRequests": {
        "total": "3",
        "ok": "0",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "31506",
        "ok": "-",
        "ko": "31506"
    },
    "maxResponseTime": {
        "total": "31873",
        "ok": "-",
        "ko": "31873"
    },
    "meanResponseTime": {
        "total": "31653",
        "ok": "-",
        "ko": "31653"
    },
    "standardDeviation": {
        "total": "158",
        "ok": "-",
        "ko": "158"
    },
    "percentiles1": {
        "total": "31580",
        "ok": "-",
        "ko": "31580"
    },
    "percentiles2": {
        "total": "31727",
        "ok": "-",
        "ko": "31727"
    },
    "percentiles3": {
        "total": "31844",
        "ok": "-",
        "ko": "31844"
    },
    "percentiles4": {
        "total": "31867",
        "ok": "-",
        "ko": "31867"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.034",
        "ok": "-",
        "ko": "0.034"
    }
}
    },"req_create-new-game-ed5b3": {
        type: "REQUEST",
        name: "Create New Game - Final Fantasy VII",
path: "Create New Game - Final Fantasy VII",
pathFormatted: "req_create-new-game-ed5b3",
stats: {
    "name": "Create New Game - Final Fantasy VII",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "31474",
        "ok": "-",
        "ko": "31474"
    },
    "maxResponseTime": {
        "total": "31474",
        "ok": "-",
        "ko": "31474"
    },
    "meanResponseTime": {
        "total": "31474",
        "ok": "-",
        "ko": "31474"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "31474",
        "ok": "-",
        "ko": "31474"
    },
    "percentiles2": {
        "total": "31474",
        "ok": "-",
        "ko": "31474"
    },
    "percentiles3": {
        "total": "31474",
        "ok": "-",
        "ko": "31474"
    },
    "percentiles4": {
        "total": "31474",
        "ok": "-",
        "ko": "31474"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.011",
        "ok": "-",
        "ko": "0.011"
    }
}
    },"req_create-new-game-98820": {
        type: "REQUEST",
        name: "Create New Game - Gran Turismo 3",
path: "Create New Game - Gran Turismo 3",
pathFormatted: "req_create-new-game-98820",
stats: {
    "name": "Create New Game - Gran Turismo 3",
    "numberOfRequests": {
        "total": "5",
        "ok": "0",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "27113",
        "ok": "-",
        "ko": "27113"
    },
    "maxResponseTime": {
        "total": "31321",
        "ok": "-",
        "ko": "31321"
    },
    "meanResponseTime": {
        "total": "29091",
        "ok": "-",
        "ko": "29091"
    },
    "standardDeviation": {
        "total": "1805",
        "ok": "-",
        "ko": "1805"
    },
    "percentiles1": {
        "total": "28951",
        "ok": "-",
        "ko": "28951"
    },
    "percentiles2": {
        "total": "30956",
        "ok": "-",
        "ko": "30956"
    },
    "percentiles3": {
        "total": "31248",
        "ok": "-",
        "ko": "31248"
    },
    "percentiles4": {
        "total": "31306",
        "ok": "-",
        "ko": "31306"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 5,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.057",
        "ok": "-",
        "ko": "0.057"
    }
}
    },"req_create-new-game-68ba7": {
        type: "REQUEST",
        name: "Create New Game - Grand Theft Auto III",
path: "Create New Game - Grand Theft Auto III",
pathFormatted: "req_create-new-game-68ba7",
stats: {
    "name": "Create New Game - Grand Theft Auto III",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "26235",
        "ok": "-",
        "ko": "26235"
    },
    "maxResponseTime": {
        "total": "26235",
        "ok": "-",
        "ko": "26235"
    },
    "meanResponseTime": {
        "total": "26235",
        "ok": "-",
        "ko": "26235"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "26235",
        "ok": "-",
        "ko": "26235"
    },
    "percentiles2": {
        "total": "26235",
        "ok": "-",
        "ko": "26235"
    },
    "percentiles3": {
        "total": "26235",
        "ok": "-",
        "ko": "26235"
    },
    "percentiles4": {
        "total": "26235",
        "ok": "-",
        "ko": "26235"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.011",
        "ok": "-",
        "ko": "0.011"
    }
}
    },"req_create-new-game-fa629": {
        type: "REQUEST",
        name: "Create New Game - Resident Evil 4",
path: "Create New Game - Resident Evil 4",
pathFormatted: "req_create-new-game-fa629",
stats: {
    "name": "Create New Game - Resident Evil 4",
    "numberOfRequests": {
        "total": "2",
        "ok": "0",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "27128",
        "ok": "-",
        "ko": "27128"
    },
    "maxResponseTime": {
        "total": "28936",
        "ok": "-",
        "ko": "28936"
    },
    "meanResponseTime": {
        "total": "28032",
        "ok": "-",
        "ko": "28032"
    },
    "standardDeviation": {
        "total": "904",
        "ok": "-",
        "ko": "904"
    },
    "percentiles1": {
        "total": "28032",
        "ok": "-",
        "ko": "28032"
    },
    "percentiles2": {
        "total": "28484",
        "ok": "-",
        "ko": "28484"
    },
    "percentiles3": {
        "total": "28846",
        "ok": "-",
        "ko": "28846"
    },
    "percentiles4": {
        "total": "28918",
        "ok": "-",
        "ko": "28918"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.023",
        "ok": "-",
        "ko": "0.023"
    }
}
    },"req_create-new-game-fee1d": {
        type: "REQUEST",
        name: "Create New Game - The Legend of Zelda: Ocarina of Time",
path: "Create New Game - The Legend of Zelda: Ocarina of Time",
pathFormatted: "req_create-new-game-fee1d",
stats: {
    "name": "Create New Game - The Legend of Zelda: Ocarina of Time",
    "numberOfRequests": {
        "total": "2",
        "ok": "0",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "28952",
        "ok": "-",
        "ko": "28952"
    },
    "maxResponseTime": {
        "total": "31324",
        "ok": "-",
        "ko": "31324"
    },
    "meanResponseTime": {
        "total": "30138",
        "ok": "-",
        "ko": "30138"
    },
    "standardDeviation": {
        "total": "1186",
        "ok": "-",
        "ko": "1186"
    },
    "percentiles1": {
        "total": "30138",
        "ok": "-",
        "ko": "30138"
    },
    "percentiles2": {
        "total": "30731",
        "ok": "-",
        "ko": "30731"
    },
    "percentiles3": {
        "total": "31205",
        "ok": "-",
        "ko": "31205"
    },
    "percentiles4": {
        "total": "31300",
        "ok": "-",
        "ko": "31300"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.023",
        "ok": "-",
        "ko": "0.023"
    }
}
    },"req_get-last-posted-76387": {
        type: "REQUEST",
        name: "Get Last Posted Game - Tetris",
path: "Get Last Posted Game - Tetris",
pathFormatted: "req_get-last-posted-76387",
stats: {
    "name": "Get Last Posted Game - Tetris",
    "numberOfRequests": {
        "total": "102",
        "ok": "0",
        "ko": "102"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "10017",
        "ok": "-",
        "ko": "10017"
    },
    "meanResponseTime": {
        "total": "2159",
        "ok": "-",
        "ko": "2159"
    },
    "standardDeviation": {
        "total": "4116",
        "ok": "-",
        "ko": "4116"
    },
    "percentiles1": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "percentiles3": {
        "total": "10010",
        "ok": "-",
        "ko": "10010"
    },
    "percentiles4": {
        "total": "10016",
        "ok": "-",
        "ko": "10016"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 102,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.172",
        "ok": "-",
        "ko": "1.172"
    }
}
    },"req_get-last-posted-e3170": {
        type: "REQUEST",
        name: "Get Last Posted Game - Final Fantasy VII",
path: "Get Last Posted Game - Final Fantasy VII",
pathFormatted: "req_get-last-posted-e3170",
stats: {
    "name": "Get Last Posted Game - Final Fantasy VII",
    "numberOfRequests": {
        "total": "103",
        "ok": "0",
        "ko": "103"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "10014",
        "ok": "-",
        "ko": "10014"
    },
    "meanResponseTime": {
        "total": "1943",
        "ok": "-",
        "ko": "1943"
    },
    "standardDeviation": {
        "total": "3958",
        "ok": "-",
        "ko": "3958"
    },
    "percentiles1": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "percentiles3": {
        "total": "10009",
        "ok": "-",
        "ko": "10009"
    },
    "percentiles4": {
        "total": "10014",
        "ok": "-",
        "ko": "10014"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 103,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.184",
        "ok": "-",
        "ko": "1.184"
    }
}
    },"req_get-last-posted-7a9a5": {
        type: "REQUEST",
        name: "Get Last Posted Game - Super Mario 64",
path: "Get Last Posted Game - Super Mario 64",
pathFormatted: "req_get-last-posted-7a9a5",
stats: {
    "name": "Get Last Posted Game - Super Mario 64",
    "numberOfRequests": {
        "total": "95",
        "ok": "0",
        "ko": "95"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "10017",
        "ok": "-",
        "ko": "10017"
    },
    "meanResponseTime": {
        "total": "1791",
        "ok": "-",
        "ko": "1791"
    },
    "standardDeviation": {
        "total": "3836",
        "ok": "-",
        "ko": "3836"
    },
    "percentiles1": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "percentiles3": {
        "total": "10010",
        "ok": "-",
        "ko": "10010"
    },
    "percentiles4": {
        "total": "10013",
        "ok": "-",
        "ko": "10013"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 95,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.092",
        "ok": "-",
        "ko": "1.092"
    }
}
    },"req_get-last-posted-790dd": {
        type: "REQUEST",
        name: "Get Last Posted Game - Resident Evil 4",
path: "Get Last Posted Game - Resident Evil 4",
pathFormatted: "req_get-last-posted-790dd",
stats: {
    "name": "Get Last Posted Game - Resident Evil 4",
    "numberOfRequests": {
        "total": "111",
        "ok": "0",
        "ko": "111"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "10023",
        "ok": "-",
        "ko": "10023"
    },
    "meanResponseTime": {
        "total": "1985",
        "ok": "-",
        "ko": "1985"
    },
    "standardDeviation": {
        "total": "3991",
        "ok": "-",
        "ko": "3991"
    },
    "percentiles1": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "percentiles3": {
        "total": "10015",
        "ok": "-",
        "ko": "10015"
    },
    "percentiles4": {
        "total": "10019",
        "ok": "-",
        "ko": "10019"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 111,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.276",
        "ok": "-",
        "ko": "1.276"
    }
}
    },"req_get-last-posted-ec76f": {
        type: "REQUEST",
        name: "Get Last Posted Game - The Legend of Zelda: Ocarina of Time",
path: "Get Last Posted Game - The Legend of Zelda: Ocarina of Time",
pathFormatted: "req_get-last-posted-ec76f",
stats: {
    "name": "Get Last Posted Game - The Legend of Zelda: Ocarina of Time",
    "numberOfRequests": {
        "total": "95",
        "ok": "0",
        "ko": "95"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "10015",
        "ok": "-",
        "ko": "10015"
    },
    "meanResponseTime": {
        "total": "2318",
        "ok": "-",
        "ko": "2318"
    },
    "standardDeviation": {
        "total": "4222",
        "ok": "-",
        "ko": "4222"
    },
    "percentiles1": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles2": {
        "total": "9",
        "ok": "-",
        "ko": "9"
    },
    "percentiles3": {
        "total": "10013",
        "ok": "-",
        "ko": "10013"
    },
    "percentiles4": {
        "total": "10014",
        "ok": "-",
        "ko": "10014"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 95,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.092",
        "ok": "-",
        "ko": "1.092"
    }
}
    },"req_get-last-posted-08bde": {
        type: "REQUEST",
        name: "Get Last Posted Game - SimCity 2000",
path: "Get Last Posted Game - SimCity 2000",
pathFormatted: "req_get-last-posted-08bde",
stats: {
    "name": "Get Last Posted Game - SimCity 2000",
    "numberOfRequests": {
        "total": "77",
        "ok": "0",
        "ko": "77"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "10014",
        "ok": "-",
        "ko": "10014"
    },
    "meanResponseTime": {
        "total": "1300",
        "ok": "-",
        "ko": "1300"
    },
    "standardDeviation": {
        "total": "3364",
        "ok": "-",
        "ko": "3364"
    },
    "percentiles1": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles3": {
        "total": "10008",
        "ok": "-",
        "ko": "10008"
    },
    "percentiles4": {
        "total": "10012",
        "ok": "-",
        "ko": "10012"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 77,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.885",
        "ok": "-",
        "ko": "0.885"
    }
}
    },"req_get-last-posted-22607": {
        type: "REQUEST",
        name: "Get Last Posted Game - Minecraft",
path: "Get Last Posted Game - Minecraft",
pathFormatted: "req_get-last-posted-22607",
stats: {
    "name": "Get Last Posted Game - Minecraft",
    "numberOfRequests": {
        "total": "107",
        "ok": "0",
        "ko": "107"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "10016",
        "ok": "-",
        "ko": "10016"
    },
    "meanResponseTime": {
        "total": "2245",
        "ok": "-",
        "ko": "2245"
    },
    "standardDeviation": {
        "total": "4174",
        "ok": "-",
        "ko": "4174"
    },
    "percentiles1": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles2": {
        "total": "2",
        "ok": "-",
        "ko": "2"
    },
    "percentiles3": {
        "total": "10009",
        "ok": "-",
        "ko": "10009"
    },
    "percentiles4": {
        "total": "10014",
        "ok": "-",
        "ko": "10014"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 107,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.23",
        "ok": "-",
        "ko": "1.23"
    }
}
    },"req_get-last-posted-cf930": {
        type: "REQUEST",
        name: "Get Last Posted Game - Gran Turismo 3",
path: "Get Last Posted Game - Gran Turismo 3",
pathFormatted: "req_get-last-posted-cf930",
stats: {
    "name": "Get Last Posted Game - Gran Turismo 3",
    "numberOfRequests": {
        "total": "100",
        "ok": "0",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "10019",
        "ok": "-",
        "ko": "10019"
    },
    "meanResponseTime": {
        "total": "2002",
        "ok": "-",
        "ko": "2002"
    },
    "standardDeviation": {
        "total": "4004",
        "ok": "-",
        "ko": "4004"
    },
    "percentiles1": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "percentiles3": {
        "total": "10014",
        "ok": "-",
        "ko": "10014"
    },
    "percentiles4": {
        "total": "10016",
        "ok": "-",
        "ko": "10016"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 100,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.149",
        "ok": "-",
        "ko": "1.149"
    }
}
    },"req_get-last-posted-b36f1": {
        type: "REQUEST",
        name: "Get Last Posted Game - Grand Theft Auto III",
path: "Get Last Posted Game - Grand Theft Auto III",
pathFormatted: "req_get-last-posted-b36f1",
stats: {
    "name": "Get Last Posted Game - Grand Theft Auto III",
    "numberOfRequests": {
        "total": "123",
        "ok": "0",
        "ko": "123"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "10017",
        "ok": "-",
        "ko": "10017"
    },
    "meanResponseTime": {
        "total": "1872",
        "ok": "-",
        "ko": "1872"
    },
    "standardDeviation": {
        "total": "3902",
        "ok": "-",
        "ko": "3902"
    },
    "percentiles1": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "percentiles3": {
        "total": "10013",
        "ok": "-",
        "ko": "10013"
    },
    "percentiles4": {
        "total": "10016",
        "ok": "-",
        "ko": "10016"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 123,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.414",
        "ok": "-",
        "ko": "1.414"
    }
}
    },"req_get-last-posted-d86f5": {
        type: "REQUEST",
        name: "Get Last Posted Game - Doom",
path: "Get Last Posted Game - Doom",
pathFormatted: "req_get-last-posted-d86f5",
stats: {
    "name": "Get Last Posted Game - Doom",
    "numberOfRequests": {
        "total": "87",
        "ok": "0",
        "ko": "87"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "10015",
        "ok": "-",
        "ko": "10015"
    },
    "meanResponseTime": {
        "total": "1496",
        "ok": "-",
        "ko": "1496"
    },
    "standardDeviation": {
        "total": "3568",
        "ok": "-",
        "ko": "3568"
    },
    "percentiles1": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "percentiles3": {
        "total": "10012",
        "ok": "-",
        "ko": "10012"
    },
    "percentiles4": {
        "total": "10015",
        "ok": "-",
        "ko": "10015"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 87,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    }
}
    },"req_delete-game---t-a02aa": {
        type: "REQUEST",
        name: "Delete Game - Tetris",
path: "Delete Game - Tetris",
pathFormatted: "req_delete-game---t-a02aa",
stats: {
    "name": "Delete Game - Tetris",
    "numberOfRequests": {
        "total": "5",
        "ok": "0",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "10011",
        "ok": "-",
        "ko": "10011"
    },
    "meanResponseTime": {
        "total": "2008",
        "ok": "-",
        "ko": "2008"
    },
    "standardDeviation": {
        "total": "4001",
        "ok": "-",
        "ko": "4001"
    },
    "percentiles1": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "percentiles2": {
        "total": "28",
        "ok": "-",
        "ko": "28"
    },
    "percentiles3": {
        "total": "8014",
        "ok": "-",
        "ko": "8014"
    },
    "percentiles4": {
        "total": "9612",
        "ok": "-",
        "ko": "9612"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 5,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.057",
        "ok": "-",
        "ko": "0.057"
    }
}
    },"req_delete-game---d-a646a": {
        type: "REQUEST",
        name: "Delete Game - Doom",
path: "Delete Game - Doom",
pathFormatted: "req_delete-game---d-a646a",
stats: {
    "name": "Delete Game - Doom",
    "numberOfRequests": {
        "total": "3",
        "ok": "0",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "15",
        "ok": "-",
        "ko": "15"
    },
    "maxResponseTime": {
        "total": "16",
        "ok": "-",
        "ko": "16"
    },
    "meanResponseTime": {
        "total": "15",
        "ok": "-",
        "ko": "15"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "15",
        "ok": "-",
        "ko": "15"
    },
    "percentiles2": {
        "total": "16",
        "ok": "-",
        "ko": "16"
    },
    "percentiles3": {
        "total": "16",
        "ok": "-",
        "ko": "16"
    },
    "percentiles4": {
        "total": "16",
        "ok": "-",
        "ko": "16"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.034",
        "ok": "-",
        "ko": "0.034"
    }
}
    },"req_delete-game---g-61292": {
        type: "REQUEST",
        name: "Delete Game - Grand Theft Auto III",
path: "Delete Game - Grand Theft Auto III",
pathFormatted: "req_delete-game---g-61292",
stats: {
    "name": "Delete Game - Grand Theft Auto III",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "meanResponseTime": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "percentiles2": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "percentiles3": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "percentiles4": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.011",
        "ok": "-",
        "ko": "0.011"
    }
}
    },"req_delete-game---r-e2b2d": {
        type: "REQUEST",
        name: "Delete Game - Resident Evil 4",
path: "Delete Game - Resident Evil 4",
pathFormatted: "req_delete-game---r-e2b2d",
stats: {
    "name": "Delete Game - Resident Evil 4",
    "numberOfRequests": {
        "total": "2",
        "ok": "0",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "meanResponseTime": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "percentiles2": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "percentiles3": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "percentiles4": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.023",
        "ok": "-",
        "ko": "0.023"
    }
}
    },"req_delete-game---g-c2447": {
        type: "REQUEST",
        name: "Delete Game - Gran Turismo 3",
path: "Delete Game - Gran Turismo 3",
pathFormatted: "req_delete-game---g-c2447",
stats: {
    "name": "Delete Game - Gran Turismo 3",
    "numberOfRequests": {
        "total": "5",
        "ok": "0",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "16",
        "ok": "-",
        "ko": "16"
    },
    "meanResponseTime": {
        "total": "7",
        "ok": "-",
        "ko": "7"
    },
    "standardDeviation": {
        "total": "7",
        "ok": "-",
        "ko": "7"
    },
    "percentiles1": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "percentiles2": {
        "total": "15",
        "ok": "-",
        "ko": "15"
    },
    "percentiles3": {
        "total": "16",
        "ok": "-",
        "ko": "16"
    },
    "percentiles4": {
        "total": "16",
        "ok": "-",
        "ko": "16"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 5,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.057",
        "ok": "-",
        "ko": "0.057"
    }
}
    },"req_delete-game---m-55726": {
        type: "REQUEST",
        name: "Delete Game - Minecraft",
path: "Delete Game - Minecraft",
pathFormatted: "req_delete-game---m-55726",
stats: {
    "name": "Delete Game - Minecraft",
    "numberOfRequests": {
        "total": "6",
        "ok": "0",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "16",
        "ok": "-",
        "ko": "16"
    },
    "meanResponseTime": {
        "total": "6",
        "ok": "-",
        "ko": "6"
    },
    "standardDeviation": {
        "total": "7",
        "ok": "-",
        "ko": "7"
    },
    "percentiles1": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "percentiles2": {
        "total": "12",
        "ok": "-",
        "ko": "12"
    },
    "percentiles3": {
        "total": "16",
        "ok": "-",
        "ko": "16"
    },
    "percentiles4": {
        "total": "16",
        "ok": "-",
        "ko": "16"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.069",
        "ok": "-",
        "ko": "0.069"
    }
}
    },"req_delete-game---t-356cf": {
        type: "REQUEST",
        name: "Delete Game - The Legend of Zelda: Ocarina of Time",
path: "Delete Game - The Legend of Zelda: Ocarina of Time",
pathFormatted: "req_delete-game---t-356cf",
stats: {
    "name": "Delete Game - The Legend of Zelda: Ocarina of Time",
    "numberOfRequests": {
        "total": "2",
        "ok": "0",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "meanResponseTime": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "percentiles2": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "percentiles3": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "percentiles4": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.023",
        "ok": "-",
        "ko": "0.023"
    }
}
    },"req_delete-game---f-38060": {
        type: "REQUEST",
        name: "Delete Game - Final Fantasy VII",
path: "Delete Game - Final Fantasy VII",
pathFormatted: "req_delete-game---f-38060",
stats: {
    "name": "Delete Game - Final Fantasy VII",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "meanResponseTime": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "percentiles2": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "percentiles3": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "percentiles4": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.011",
        "ok": "-",
        "ko": "0.011"
    }
}
    },"req_delete-game---s-7581e": {
        type: "REQUEST",
        name: "Delete Game - SimCity 2000",
path: "Delete Game - SimCity 2000",
pathFormatted: "req_delete-game---s-7581e",
stats: {
    "name": "Delete Game - SimCity 2000",
    "numberOfRequests": {
        "total": "3",
        "ok": "0",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "16",
        "ok": "-",
        "ko": "16"
    },
    "meanResponseTime": {
        "total": "6",
        "ok": "-",
        "ko": "6"
    },
    "standardDeviation": {
        "total": "7",
        "ok": "-",
        "ko": "7"
    },
    "percentiles1": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "percentiles2": {
        "total": "9",
        "ok": "-",
        "ko": "9"
    },
    "percentiles3": {
        "total": "14",
        "ok": "-",
        "ko": "14"
    },
    "percentiles4": {
        "total": "16",
        "ok": "-",
        "ko": "16"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.034",
        "ok": "-",
        "ko": "0.034"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
