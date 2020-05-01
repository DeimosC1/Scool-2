window.onload = () => {

    let cards = [' 🤬 ', ' 🖕 ', ' 👌 ', ' 🤬 ', ' 🖕 ', ' 👌 ', "👿", "👿"];
    let mixarray = function (arr) {
        let newPos,
            temp;
        for (let i = arr.length - 1; i > 0; i--) {
            newPos = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[newPos];
            arr[newPos] = temp;
        }
        return arr;
    };
    let newCard = mixarray(cards);


    for (let i = 0; i < cards.length; i++) {
        document.getElementById("card1").innerHTML = "<div class +=\"card\"></div>"
    }


    document.write(cards);
};

//lepší než nic LULW

