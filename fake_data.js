var json = 
    {
    "id":"Parent",
    "name":"World",
    "data": 
        {
        "$type":"none"
        },
    "children":[
        {
        "id":"A",
        "name":"Project A",
        "data": {
            "description":"some stuff about project A",
            "$color":"#3366FF",
            },
        "children":[
                {
                "id":"A-498",
                "name":"A-498",
                "data": {
                    "project":"Project A",
                    "$angularWidth":2,
                    "$color":"#00B8F5",
                    "population":2 },
                "children":[]
                },
                {
                "id":"A-517",
                "name":"A-517",
                "data": { 
                    "project":"Project A",
                    "$angularWidth":4,
                    "$color":"#00B8F5", 
                    "population":4
                    },
                "children":[]
                }],
        },  
        {
            "id":"B",
            "name":"Project B",
            "data": {
                "description":"some stuff about project B",
                "$color":"#FFCC00",
                "size":24 },
            "children":[
                {
                "id":"B-498",
                "name":"B-498",
                "data": {
                    "project":"Project B",
                    "$angularWidth":2,
                    "$color":"#FFDE00",
                    "population":4
                    },
                "children":[]
                },
                {
                "id":"B-517",
                "name":"B-517",
                "data": { 
                    "project":"Project B",
                    "$angularWidth":4,
                    "$color":"#FFDE00", 
                    "population":4
                    },
                "children":[]
                }],
    }]
  }
