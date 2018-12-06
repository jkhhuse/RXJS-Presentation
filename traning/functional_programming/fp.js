/*
 * 本文件食用姿势
 * 复制每一个题目下的Js代码至浏览器开发者工具的snippet功能下
 * 填充符合题目要求的代码
 * 使用eval in console指令在控制台输出函数
 * 根据函数输出结果参考标准答案
 * 本js函数式训练旨在培养函数式思维和锻炼抽象的能力
 * 本js训练难度呈现阶梯式增长
 * 本训练除最后一题外均提供标准答案
 * 最后一题答案存在于本项目中的某个位置，请自行寻找
 * Good Luck
 */

// 1️⃣遍历一个数组，打印数组中的所有元素

function func1() {
    var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"],
        counter;

    // 请输入代码
}

func1();

// 标准答案

function func1() {
    var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"],
        counter;

    for (counter = 0; counter < names.length; counter++) {
        console.log(names[counter]);
    }
}

func1();


// 2️⃣使用forEach方法打印数组中的每一个元素

function func2() {
    var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];
    // 请输入代码
}

func2();

// 标准答案

function func2() {
    var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

    names.forEach(function (name) {
        console.log(name);
    });
}

func2();


// 3️⃣使用forEach函数将下面的array投影为一个元素格式为{id, title}的新数组

function func3() {
    var newReleases = [{
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{
            id: 432534,
            time: 65876586
        }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{
            id: 432534,
            time: 65876586
        }]
    }
    ],
        videoAndTitlePairs = [];

    // 请输入代码

    return videoAndTitlePairs;
}

console.log(func3());

// 标准答案

function func3() {
    var newReleases = [{
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{
            id: 432534,
            time: 65876586
        }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{
            id: 432534,
            time: 65876586
        }]
    }
    ],
        videoAndTitlePairs = [];

    newReleases.forEach(function (video) {
        videoAndTitlePairs.push({
            id: video.id,
            title: video.title
        });
    });

    return videoAndTitlePairs;
}

console.log(func3());


// 4️⃣使用map方法实现问题3的要求

function func4() {
    var newReleases = [{
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{
            id: 432534,
            time: 65876586
        }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{
            id: 432534,
            time: 65876586
        }]
    }
    ],
    return // 请输入代码
}

console.log(func4());

// 标准答案

function func3() {
    var newReleases = [{
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{
            id: 432534,
            time: 65876586
        }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{
            id: 432534,
            time: 65876586
        }]
    }
    ],
    return newReleases.map(function (video) {
        return {
            id: video.id,
            title: video.title
        };
    });
}

console.log(func3());

// 5️⃣使用forEach方法收集数组中rating参数>5.0的元素

function func5() {
    var newReleases = [{
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{
            id: 432534,
            time: 65876586
        }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{
            id: 432534,
            time: 65876586
        }]
    }
    ],
        videos = [];

    // 请输入代码

    return videos;
}

console.log(func5());

// 标准答案

function func5() {
    var newReleases = [{
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{
            id: 432534,
            time: 65876586
        }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{
            id: 432534,
            time: 65876586
        }]
    }
    ],
        videos = [];

    newReleases.forEach(function (video) {
        if (video.rating === 5.0) {
            videos.push(video);
        }
    });

    return videos;
}

console.log(func5());

// 6️⃣使用map和filter方法实现问题5的要求

function func6() {
    var newReleases = [{
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{
            id: 432534,
            time: 65876586
        }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{
            id: 432534,
            time: 65876586
        }]
    }
    ];

    return // 请输入代码
}

console.log(func6())

// 标准答案

function func6() {
    var newReleases = [{
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{
            id: 432534,
            time: 65876586
        }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{
            id: 432534,
            time: 65876586
        }]
    }
    ];

    return newReleases.
        filter(function (video) {
            return video.rating === 5.0;
        }).
        map(function (video) {
            return video.id;
        });
}

console.log(func6())

// 7️⃣将下述数组展平为以video id为元素的新数组

function func7() {
    var movieLists = [{
        name: "New Releases",
        videos: [{
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{
                id: 432534,
                time: 65876586
            }]
        }
        ]
    },
    {
        name: "Dramas",
        videos: [{
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{
                id: 432534,
                time: 65876586
            }]
        }
        ]
    }
    ],
        allVideoIdsInMovieLists = [];

    // 请输入代码
    return allVideoIdsInMovieLists;

}

console.log(func7())

// 标准答案

function func7() {
    var movieLists = [{
        name: "New Releases",
        videos: [{
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{
                id: 432534,
                time: 65876586
            }]
        }
        ]
    },
    {
        name: "Dramas",
        videos: [{
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{
                id: 432534,
                time: 65876586
            }]
        }
        ]
    }
    ],
        allVideoIdsInMovieLists = [];

    movieLists.forEach(function (movieList) {
        movieList.videos.forEach(function (video) {
            allVideoIdsInMovieLists.push(video.id);
        });
    });

    return allVideoIdsInMovieLists;

}

console.log(func7())

// 8️⃣实现一个concatAll函数并添加到Array的原型链上

Array.prototype.concatAll = function () {
    var results = [];
    this.forEach(function (subArray) {
        results.push.apply(results, subArray);
    });

    return results;
};

// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll()) === "[1,2,3,4,5,6,7,8,9]"
// [1,2,3].concatAll(); // throws an error because this is a one-dimensional array


// 9️⃣使用map和concatAll函数投影并展平下面的数组为以video id为元素的数组

function func9() {
    var movieLists = [{
        name: "New Releases",
        videos: [{
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{
                id: 432534,
                time: 65876586
            }]
        }
        ]
    },
    {
        name: "Dramas",
        videos: [{
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{
                id: 432534,
                time: 65876586
            }]
        }
        ]
    }
    ];

    return movieLists // 请输入代码
}
console.log(func9())

// 标准答案

function func9() {
    var movieLists = [{
        name: "New Releases",
        videos: [{
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{
                id: 432534,
                time: 65876586
            }]
        }
        ]
    },
    {
        name: "Dramas",
        videos: [{
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{
                id: 432534,
                time: 65876586
            }]
        }
        ]
    }
    ];

    return movieLists.
        map(function (movieList) {
            return movieList.videos.map(function (video) {
                return video.id;
            });
        }).
        concatAll();

}
console.log(func9())

// 🔟根据上述函数根据下述数组产生一个新video数组格式如{id， title， boxart的url属性且box art为 150 * 200}
// 请注意，使用数组的下标作为捷径是不可取的

function func10() {
    var movieLists = [{
        name: "Instant Queue",
        videos: [{
            "id": 70111470,
            "title": "Die Hard",
            "boxarts": [{
                width: 150,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
            },
            {
                width: 200,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"
            }
            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxarts": [{
                width: 200,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
            },
            {
                width: 150,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"
            }

            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{
                id: 432534,
                time: 65876586
            }]
        }
        ]
    },
    {
        name: "New Releases",
        videos: [{
            "id": 65432445,
            "title": "The Chamber",
            "boxarts": [{
                width: 150,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"
            },
            {
                width: 200,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"
            }
            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxarts": [{
                width: 200,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
            },
            {
                width: 150,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
            },
            {
                width: 300,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
            }
            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{
                id: 432534,
                time: 65876586
            }]
        }
        ]
    }
    ];

    return movieLists // 请输入代码
}
console.log(func10())

// 标准答案

function func10() {
    var movieLists = [
        {
            name: "Instant Queue",
            videos: [
                {
                    "id": 70111470,
                    "title": "Die Hard",
                    "boxarts": [
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 654356453,
                    "title": "Bad Boys",
                    "boxarts": [
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
            ]
        },
        {
            name: "New Releases",
            videos: [
                {
                    "id": 65432445,
                    "title": "The Chamber",
                    "boxarts": [
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 675465,
                    "title": "Fracture",
                    "boxarts": [
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                        { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
            ]
        }
    ];

    return movieLists.
        map(function (movieList) {
            return movieList.videos.
                map(function (video) {
                    return video.boxarts.
                        filter(function (boxart) {
                            return boxart.width === 150 && boxart.height === 200;
                        }).
                        map(function (boxart) {
                            return { id: video.id, title: video.title, boxart: boxart.url };
                        });
                }).
                concatAll();
        }).
        concatAll();

}
console.log(func10())

// 1️⃣1️⃣ 实现concatMap方法

Array.prototype.concatMap = function (projectionFunctionThatReturnsArray) {
    return this.
        map(function (item) {
            return projectionFunctionThatReturnsArray(item);
        }).
        // apply the concatAll function to flatten the two-dimensional array
        concatAll();
};


// var spanishFrenchEnglishWords = [["cero", "rien", "zero"], ["uno", "un", "one"], ["dos", "deux", "two"]];
// // collect all the words for each number, in every language, in a single, flat list
// var allWords = [0, 1, 2].
//     concatMap(function (index) {
//         return spanishFrenchEnglishWords[index];
//     });

JSON.stringify(allWords) === '["cero","rien","zero","uno","un","one","dos","deux","two"]';

// 1️⃣2️⃣ 使用concatMap方法实现问题10的需求

function func12() {
    var movieLists = [
        {
            name: "Instant Queue",
            videos: [
                {
                    "id": 70111470,
                    "title": "Die Hard",
                    "boxarts": [
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 654356453,
                    "title": "Bad Boys",
                    "boxarts": [
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
            ]
        },
        {
            name: "New Releases",
            videos: [
                {
                    "id": 65432445,
                    "title": "The Chamber",
                    "boxarts": [
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 675465,
                    "title": "Fracture",
                    "boxarts": [
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                        { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
            ]
        }
    ];

    return movieLists // 请输入代码
}


console.log(func12());

// 标准答案

function func12() {
    var movieLists = [
        {
            name: "Instant Queue",
            videos: [
                {
                    "id": 70111470,
                    "title": "Die Hard",
                    "boxarts": [
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 654356453,
                    "title": "Bad Boys",
                    "boxarts": [
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
            ]
        },
        {
            name: "New Releases",
            videos: [
                {
                    "id": 65432445,
                    "title": "The Chamber",
                    "boxarts": [
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 675465,
                    "title": "Fracture",
                    "boxarts": [
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                        { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
            ]
        }
    ];

    return movieLists.concatMap(function (movieList) {
        return movieList.videos.concatMap(function (video) {
            return video.boxarts.
                filter(function (boxart) {
                    return boxart.width === 150 && boxart.height === 200;
                }).
                map(function (boxart) {
                    return { id: video.id, title: video.title, boxart: boxart.url };
                });
        });
    });
}


console.log(func12());

// 1️⃣3️⃣ 使用forEach方法找到数组中box art最大的那个元素

function func13() {
    var boxarts = [
        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
        { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
        { width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
    ],
        currentSize,
        maxSize = -1,
        largestBoxart;

    // 请输入代码

    return largestBoxart;
}
console.log(func13());

// 标准答案

function func13() {
    var boxarts = [
        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
        { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
        { width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
    ],
        currentSize,
        maxSize = -1,
        largestBoxart;

    boxarts.forEach(function (boxart) {
        currentSize = boxart.width * boxart.height;
        if (currentSize > maxSize) {
            largestBoxart = boxart;
            maxSize = currentSize;
        }
    });

    return largestBoxart;
}
console.log(func13())

// 1️⃣4️⃣ 实现一个reduce方法，注意该reduce方法与原生Js的reduce方法略有不同，返回一个数组而不是一个数字


Array.prototype.reduce = function (combiner, initialValue) {
    var counter,
        accumulatedValue;

    // If the array is empty, do nothing
    if (this.length === 0) {
        return this;
    }
    else {
        // If the user didn't pass an initial value, use the first item.
        if (arguments.length === 1) {
            counter = 1;
            accumulatedValue = this[0];
        }
        else if (arguments.length >= 2) {
            counter = 0;
            accumulatedValue = initialValue;
        }
        else {
            throw "Invalid arguments.";
        }

        // Loop through the array, feeding the current value and the result of
        // the previous computation back into the combiner function until
        // we've exhausted the entire array and are left with only one function.
        while (counter < this.length) {
            accumulatedValue = combiner(accumulatedValue, this[counter])
            counter++;
        }

        return [accumulatedValue];
    }
};
console.log([1, 2, 3].reduce(function (accumulatedValue, currentValue) { return accumulatedValue + currentValue; }));
console.log([1, 2, 3].reduce(function (accumulatedValue, currentValue) { return accumulatedValue + currentValue; }, 10));

// 1️⃣5️⃣使用reduce方法获取数组中最大的值,返回维数组

function func14() {
    var ratings = [2, 3, 1, 4, 5];

    return ratings // 请输入代码
}

console.log(func14());

// 标准答案

function func14() {
    var ratings = [2, 3, 1, 4, 5];

    return ratings.
        reduce(function (acc, curr) {
            if (acc > curr) {
                return acc;
            }
            else {
                return curr;
            }
        });
}

console.log(func14())

// 1️⃣5️⃣使用map和reduce方法实现获取数组中最大的boxart参数的url属性

function func15() {
    var boxarts = [
        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
        { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
        { width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
    ];

    return boxarts // 请输入密码
}
console.log(func15());

// 标准答案

function func15() {
    var boxarts = [
        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
        { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
        { width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
    ];

    return boxarts.
        reduce(function (acc, curr) {
            if (acc.width * acc.height > curr.width * curr.height) {
                return acc;
            }
            else {
                return curr;
            }
        }).
        map(function (boxart) {
            return boxart.url;
        });
}
console.log(func15());

// 1️⃣6️⃣使用reduce而不是filter实现获取数组中每个video的id， title， 和最小的box art的url

function func16() {
    var movieLists = [
        {
            name: "New Releases",
            videos: [
                {
                    "id": 70111470,
                    "title": "Die Hard",
                    "boxarts": [
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 654356453,
                    "title": "Bad Boys",
                    "boxarts": [
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                        { width: 140, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }

                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
            ]
        },
        {
            name: "Thrillers",
            videos: [
                {
                    "id": 65432445,
                    "title": "The Chamber",
                    "boxarts": [
                        { width: 130, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 675465,
                    "title": "Fracture",
                    "boxarts": [
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                        { width: 120, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
                        { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
            ]
        }
    ];


    // Use one or more concatMap, map, and reduce calls to create an array with the following items (order doesn't matter)
    // [
    //     {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
    //     {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
    //     {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" },
    //     {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
    // ];

    return movieLists // 请输入代码

}

console.log(func16());

// 标准答案

function func16() {
    var movieLists = [
        {
            name: "New Releases",
            videos: [
                {
                    "id": 70111470,
                    "title": "Die Hard",
                    "boxarts": [
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 654356453,
                    "title": "Bad Boys",
                    "boxarts": [
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                        { width: 140, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }

                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
            ]
        },
        {
            name: "Thrillers",
            videos: [
                {
                    "id": 65432445,
                    "title": "The Chamber",
                    "boxarts": [
                        { width: 130, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 675465,
                    "title": "Fracture",
                    "boxarts": [
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                        { width: 120, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
                        { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
            ]
        }
    ];


    // Use one or more concatMap, map, and reduce calls to create an array with the following items (order doesn't matter)
    // [
    //     {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
    //     {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
    //     {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" },
    //     {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
    // ];

    return movieLists.concatMap(function (movieList) {
        return movieList.videos.concatMap(function (video) {
            return video.boxarts.
                reduce(function (acc, curr) {
                    if (acc.width * acc.height < curr.width * curr.height) {
                        return acc;
                    }
                    else {
                        return curr;
                    }
                }).
                map(function (boxart) {
                    return { id: video.id, title: video.title, boxart: boxart.url };
                });
        });
    });

}

console.log(func16());

//  1️⃣7️⃣通过index搭配videos和bookmark数组为一个相对应的数组

function func17() {
    var videos = [
        {
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
        },
        {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
        }
    ],
        bookmarks = [
            { id: 470, time: 23432 },
            { id: 453, time: 234324 },
            { id: 445, time: 987834 }
        ],
        counter,
        videoIdAndBookmarkIdPairs = [];

    // 请输入代码

    return videoIdAndBookmarkIdPairs;
}
console.log(func17());

// 标准答案

function func17() {
    var videos = [
        {
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
        },
        {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
        }
    ],
        bookmarks = [
            { id: 470, time: 23432 },
            { id: 453, time: 234324 },
            { id: 445, time: 987834 }
        ],
        counter,
        videoIdAndBookmarkIdPairs = [];

    for (counter = 0; counter < Math.min(videos.length, bookmarks.length); counter++) {
        videoIdAndBookmarkIdPairs.push({ videoId: videos[counter].id, bookmarkId: bookmarks[counter].id });
    }

    return videoIdAndBookmarkIdPairs;
}
console.log(func17())

// 1️⃣8️⃣实现zip方法

// JSON.stringify(Array.zip([1,2,3],[4,5,6], function(left, right) { return left + right })) === '[5,7,9]'

Array.zip = function (left, right, combinerFunction) {
    var counter,
        results = [];

    for (counter = 0; counter < Math.min(left.length, right.length); counter++) {
        results.push(combinerFunction(left[counter], right[counter]));
    }

    return results;
};

// 1️⃣9️⃣使用zip方法实现问题17

// 标准答案

function func18() {
    var videos = [
        {
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
        },
        {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
        }
    ],
        bookmarks = [
            { id: 470, time: 23432 },
            { id: 453, time: 234324 },
            { id: 445, time: 987834 }
        ];

    return Array.
        zip(
            videos,
            bookmarks,
            function (video, bookmark) {
                return { videoId: video.id, bookmarkId: bookmark.id };
            });
}

console.log(func18());

// 🐒最终问题
// 尽可能使用上述所有创造的操作符实现检索每个视频的id，title，中等有趣的time和最小的box art url

function func() {
	var movieLists = [
			{
				name: "New Releases",
				videos: [
					{
						"id": 70111470,
						"title": "Die Hard",
						"boxarts": [
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"interestingMoments": [
							{ type: "End", time:213432 },
							{ type: "Start", time: 64534 },
							{ type: "Middle", time: 323133}
						]
					},
					{
						"id": 654356453,
						"title": "Bad Boys",
						"boxarts": [
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
							{ width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }

						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"interestingMoments": [
							{ type: "End", time:54654754 },
							{ type: "Start", time: 43524243 },
							{ type: "Middle", time: 6575665}
						]
					}
				]
			},
			{
				name: "Instant Queue",
				videos: [
					{
						"id": 65432445,
						"title": "The Chamber",
						"boxarts": [
							{ width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"interestingMoments": [
							{ type: "End", time:132423 },
							{ type: "Start", time: 54637425 },
							{ type: "Middle", time: 3452343}
						]
					},
					{
						"id": 675465,
						"title": "Fracture",
						"boxarts": [
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
							{ width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
							{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"interestingMoments": [
							{ type: "End", time:45632456 },
							{ type: "Start", time: 234534 },
							{ type: "Middle", time: 3453434}
						]
					}
				]
			}
		];

	//------------ 完成后续的代码 --------------
	
}
console.log(func());

