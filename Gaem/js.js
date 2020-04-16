//1=wall,0=path,2=player,3=end,
let level = 1;
let map = [
    [1, 0, 0, 0],
    [1, 0, 2, 0],
    [1, 0, 0, 0],
    [3, 0, 0, 0]

];
window.onload = () => {

    rendere()
    document.getElementById("W").addEventListener("click", function () {
            for (let i = 0; i < map.length; i++) {
                for (let e = 0; e < map.length; e++) {
                    if (map[i][e] !== undefined) {
                        if (map[i][e] === 2) {
                            if (map[i - 1][e] === 3) {
                                nextlevel()
                            } else if (map[i - 1][e] !== 1 && map[i - 1][e] != undefined) {
                                map[i - 1][e] = 2;
                                map[i][e] = 0;
                                rendere()
                            }

                        }
                    }

                }
            }
        }
    );
    document.getElementById("A").addEventListener("click", function () {
            for (let i = 0; i < map.length; i++) {
                for (let e = 0; e < map.length; e++) {
                    if (map[i][e] !== undefined) {
                        if (map[i][e] === 2) {
                            if (map[i][e - 1] === 3) {
                                nextlevel()
                            } else if (map[i][e - 1] !== 1 && map[i][e - 1] != undefined) {
                                map[i][e - 1] = 2;
                                map[i][e] = 0;
                                rendere()
                            }

                        }
                    }

                }
            }
        }
    );
    document.getElementById("S").addEventListener("click", function () {
            quit:
                for (let i = 0; i < map.length; i++) {
                    for (let e = 0; e < map.length; e++) {
                        if (map[i][e] !== undefined) {
                            if (map[i][e] === 2) {
                                if (map[i + 1][e] === 3) {
                                    nextlevel()
                                } else if (map[i + 1][e] !== 1 && map[i + 1][e] != undefined) {
                                    map[i + 1][e] = 2;
                                    map[i][e] = 0;
                                    rendere()
                                    break quit;
                                }

                            }
                        }

                    }
                }
        }
    );


    document.getElementById("D").addEventListener("click", function () {
            quit:
                for (let i = 0; i < map.length; i++) {
                    for (let e = 0; e < map.length; e++) {
                        if (map[i][e] !== undefined) {
                            if (map[i][e] === 2) {
                                if (map[i][e - 1] === 3) {
                                    nextlevel()
                                } else if (map[i][e + 1] !== 1 && map[i][e + 1] != undefined) {
                                    map[i][e + 1] = 2;
                                    map[i][e] = 0;
                                    rendere()
                                    break quit;
                                }

                            }
                        }

                    }
                }
        }
    );
};

function rendere() {
    document.getElementById("tab").innerHTML = "";
    for (let i = 0; i < map.length; i++) {
        document.getElementById("tab").innerHTML += "<tr></tr>";
        for (let e = 0; e < map.length; e++) {
            document.getElementById("tab").lastElementChild.innerHTML += "<td></td>";
            if (map[i][e] === 0) {
                document.getElementById("tab").lastElementChild.lastElementChild.className = "Path";
            } else if (map[i][e] === 1) {
                document.getElementById("tab").lastElementChild.lastElementChild.className = "Wall";
            } else if (map[i][e] === 2) {
                document.getElementById("tab").lastElementChild.lastElementChild.className = "Player";
            } else if (map[i][e] === 3) {
                document.getElementById("tab").lastElementChild.lastElementChild.className = "End";
            }
        }

    }
}

function nextlevel() {
    level++;
    if (level === 2) {
        map = [
            [2, 0, 0, 1],
            [1, 1, 0, 1],
            [1, 0, 0, 1],
            [3, 0, 1, 1]

        ];
    } else if (level === 3) {
        map = [
            [3, 1, 1, 1],
            [0, 0, 1, 1],
            [1, 0, 1, 1],
            [1, 2, 1, 1]
        ];
    }
    else if (level === 4) {

        map = [
            [0,0,0,0,0,0,0,0],
            [1,1,0,1,0,1,0,0],
            [1,0,0,1,0,1,0,0],
            [1,0,0,1,0,1,0,0],
            [1,0,0,1,0,1,0,0],
            [1,1,0,1,0,1,1,1],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0]
        ];
    }
    rendere()
}