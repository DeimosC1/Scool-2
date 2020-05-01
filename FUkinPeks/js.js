window.onload = () =>{
let array = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E",];
let values = [];
let tile_ids = [];
let flip = 0;

Array.prototype.memory_shuffle = function () {
    let i = this.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;

    }
};

    function newBoard(){
        tiles_flipped = 0;
        var output = '';
        array.tile_shuffle();
        for(var i = 0; i < memory_array.length; i++){
            output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+array[i]+'\')"></div>';
        }
        document.getElementById('board').innerHTML = output;
}


function memoryFlipTile(tile, val) {
    if (tile.innerHTML == "" && values.length < 2) {
        tile.style.background = '#FFF';
        tile.innerHTML = val;
        if (values.length == 0) {
            values.push(val);
            tile_ids.push(tile.id);
        } else if (values.length == 1) {
            values.push(val);
            tile_ids.push(tile.id);
            if (values[0] == values[1]) {
                flip += 2;
                values = [];
                tile_ids = [];
                if (flip == array.length) {
                    alert("You won...tenhle krok mě stál 4 hodiny");
                    document.getElementById('board').innerHTML = "";
                    newBoard();
                }
            } else {
                function flip2Back() {
                    let tile_1 = document.getElementById(tile_ids[0]);
                    let tile_2 = document.getElementById(tile_ids[1]);
                    tile_1.style.background = 'stažený soubor.jpg';
                    tile_1.innerHTML = "";
                    tile_2.style.background = 'stažený soubor.jpg';
                    tile_2.innerHTML = "";
                    values = [];
                    tile_ids = [];
                }

                setTimeout(flip2Back, 700);
            }
        }
    }


}
};