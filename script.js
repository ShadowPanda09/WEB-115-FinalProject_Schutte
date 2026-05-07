let alivePieces = [];

class Piece{
    constructor(y, x, color, node){
        this.x;
        this.y;
        this.captured = false;
        this.color;
        this.move;
        this.possibleMoves = [];
        this.node;
        this.tile;
        this.change = [];
    }

    makeMove(move){
        let newNode = []
        this.tile.innerHTML = "";
        this.move = move
        this.move.innerHTML = "<img src = \"" + this.image + "\">"

        newNode.push(this.node.coords[0] + this.change[this.possibleMoves.indexOf(move)][0])
        if (this.color == "white"){
            newNode.push(this.node.coords[1] + this.change[this.possibleMoves.indexOf(move)][1])
        } else{
            newNode.push(this.node.coords[1] - this.change[this.possibleMoves.indexOf(move)][1])
        }
        
        this.possibleMoves = []
        this.displayMoves();
        this.tile = move
        
        if (this.color == "white"){
            if (map[newNode[0]][newNode[1]].hasBlackPiece == true){
                map[newNode[0]][newNode[1]].piece.captured = true;
                map[newNode[0]][newNode[1]].piece = ""
            }
            map[newNode[0]][newNode[1]].hasBlackPiece = false
            map[newNode[0]][newNode[1]].hasWhitePiece = true
            map[newNode[0]][newNode[1]].piece = this
        } else{
            if (map[newNode[0]][newNode[1]].hasWhitePiece == true){
                map[newNode[0]][newNode[1]].piece.captured = true;
                map[newNode[0]][newNode[1]].piece = ""
            }
            map[newNode[0]][newNode[1]].hasBlackPiece = true
            map[newNode[0]][newNode[1]].hasWhitePiece = false
            map[newNode[0]][newNode[1]].piece = this
        }
        this.node = map[newNode[0]][newNode[1]]
        this.y = this.node.coords[0]
        this.x = this.node.coords[1]
        
        setMoves()
        this.move = ""
        this.hasmoved = true
    }

    verifyMove(){}

    displayPiece(){
        if (this.color == "white"){
            map[this.y][this.x].tile.innerHTML = "<img src = \"" + this.image + "\">"
        } else{
            map[this.y][this.x].tile.innerHTML = "<img src = \"" + this.image + "\">"
        }
    }

    displayMoves(){
        for(let i = 0; i < 8; i++){
            if (i % 2 == 0){
                for(let j = 0; j < 8; j++){
                    map[i][j].tile.style.backgroundColor = "white"
                    j++;
                    map[i][j].tile.style.backgroundColor = "tan"
                }}
            else{
                for(let j = 0; j < 8; j++){
                    map[i][j].tile.style.backgroundColor = "tan"
                    j++;
                    map[i][j].tile.style.backgroundColor = "white"
                }
            }
        }

        for (let i = 0; i < this.possibleMoves.length; i++){
            this.possibleMoves[i].style.backgroundColor = "orange"
        }
    }
}

class Pawn extends Piece{
    constructor(y, x, color, node){
        super()
        this.x = x;
        this.y = y;
        this.color = color;
        this.node = node
        this.tile = node.tile
        this.hasmoved = false;
        if(this.color == "white"){
            this.image = "whitePawn.png"
        } else{
            this.image = "blackPawn.png"
        }
    }


    verifyMove(){
        this.change = []
        this.possibleMoves = []
        if (this.color == "white"){
            try{
                if (this.hasmoved == false && map[this.y-2][this.x].hasBlackPiece == false &&this.hasmoved == false && map[this.y-2][this.x].hasWhitePiece == false){
                    this.possibleMoves.push(map[this.y - 2][this.x].tile)
                    this.change.push([-2, 0])
                }} 
            catch {}

            try{
                if (map[this.y - 1][this.x + 1].hasBlackPiece == true){
                    this.possibleMoves.push(map[this.y - 1][this.x + 1].tile)
                    this.change.push([-1, 1])
                }}
            catch{}

            try{
                if (map[this.y - 1][this.x - 1].hasBlackPiece == true){
                    this.possibleMoves.push(map[this.y - 1][this.x - 1].tile)
                    this.change.push([-1, -1])
                }}
            catch{}

            try{
                if (map[this.y - 1][this.x].hasBlackPiece == false && map[this.y - 1][this.x].hasWhitePiece == false){
                    this.possibleMoves.push(map[this.y - 1][this.x].tile)
                    this.change.push([-1, 0])
                }}
            catch{}
        }
        else{
            try{
                if (this.hasmoved == false && map[this.y + 2][this.x].hasWhitePiece == false){
                    this.possibleMoves.push(map[this.y + 2][this.x].tile)
                    this.change.push([2, 0])
                }}
            catch{}
            
            try{
                if (map[this.y + 1][this.x + 1].hasWhitePiece == true){
                    this.possibleMoves.push(map[this.y + 1][this.x + 1].tile)
                    this.change.push([1, 1])
                }}
            catch{}

            try{
                if (map[this.y + 1][this.x - 1].hasWhitePiece == true){
                    this.possibleMoves.push(map[this.y + 1][this.x - 1].tile)
                    this.change.push([1, -1])
                }}
            catch{}

            try{
                if (map[this.y + 1][this.x].hasWhitePiece == false){
                    this.possibleMoves.push(map[this.y + 1][this.x].tile)
                    this.change.push([1, 0])
                }}
            catch{}
        }

        this.displayMoves()
    }
}

class Knight extends Piece{
    constructor(y, x, color, node){
        super()
        this.x = x;
        this.y = y;
        this.color = color;
        this.node = node
        this.tile = node.tile
        this.hasmoved = false;
        if(this.color == "white"){
            this.image = "whiteKnight.png"
        } else{
            this.image = "blackKnight.png"
        }
    }
}
class Bishop extends Piece{
    constructor(y, x, color, node){
        super()
        this.x = x;
        this.y = y;
        this.color = color;
        this.node = node
        this.tile = node.tile
        this.hasmoved = false;
        if(this.color == "white"){
            this.image = "whiteBishop.png"
        } else{
            this.image = "blackBishop.png"
        }
    }
}
class Rook extends Piece{
    constructor(y, x, color, node){
        super()
        this.x = x;
        this.y = y;
        this.color = color;
        this.node = node
        this.tile = node.tile
        this.hasmoved = false;
        if(this.color == "white"){
            this.image = "whiteRook.png"
        } else{
            this.image = "blackRook.png"
        }
    }

    verifyMove(){
        this.change = []
        this.possibleMoves = []
        let yCounter = this.y
        let xCounter = this.x
        if (this.color == "white"){
            try{
                while(yCounter < 8 && map[yCounter][this.x].hasWhitePiece == false || yCounter == this.y){
                    if (yCounter == this.y){
                        yCounter++
                        continue
                    }
                    if (map[yCounter][this.x].hasBlackPiece == true){
                        this.possibleMoves.push(map[yCounter][this.x].tile);
                        break
                    }
                    this.possibleMoves.push(map[yCounter][this.x].tile)
                    yCounter++;
                }} catch{}
            try{
                while(yCounter > -1 && map[yCounter][this.x].hasWhitePiece == false || yCounter == this.y){
                    if (yCounter == this.y){
                        yCounter--
                        continue
                    }
                    if (map[yCounter][this.x].hasBlackPiece == true){
                        this.possibleMoves.push(map[yCounter][this.x].tile);
                        break
                    }
                    this.possibleMoves.push(map[yCounter][this.x].tile)
                    yCounter--;
                }} catch{}
            try{
                while(xCounter < 8 && map[this.y][xCounter].hasWhitePiece == false || xCounter == this.x){
                    if (xCounter == this.x){
                        xCounter++
                        continue
                    }
                    if (map[this.y][xCounter].hasBlackPiece == true){
                        this.possibleMoves.push(map[this.y][xCounter].tile);
                        break
                    }
                    this.possibleMoves.push(map[this.y][xCounter].tile)
                    xCounter++;
                }}
            catch{}
            try{
                while(xCounter > -1 && map[this.y][xCounter].hasWhitePiece == false || xCounter == this.x){
                    if (xCounter == this.x){
                        xCounter--
                        continue
                    }
                    if (map[this.y][xCounter].hasBlackPiece == true){
                        this.possibleMoves.push(map[this.y][xCounter].tile);
                        break
                    }
                    this.possibleMoves.push(map[this.y][xCounter].tile)
                    xCounter--;
            }}catch{}
        } else{
            try{
                while(yCounter < 8 && map[yCounter][this.x].hasBlackPiece == false || yCounter == this.y){
                    if (yCounter == this.y){
                        yCounter++
                        continue
                    }
                    if (map[yCounter][this.x].hasWhitePiece == true){
                        this.possibleMoves.push(map[yCounter][this.x].tile);
                        break
                    }
                    this.possibleMoves.push(map[yCounter][this.x].tile)
                    yCounter++;
            }}catch{}
            try{
                while(yCounter > -1 && map[yCounter][this.x].hasBlackPiece == false || yCounter == this.y){
                    if (yCounter == this.y){
                        yCounter--
                        continue
                    }
                    if (map[yCounter][this.x].hasWhitePiece == true){
                        this.possibleMoves.push(map[yCounter][this.x].tile);
                        break
                    }
                    this.possibleMoves.push(map[yCounter][this.x].tile)
                    yCounter--;
            }}catch{}
            try{
                while(xCounter < 8 && map[this.y][xCounter].hasBlackPiece == false || xCounter == this.x){
                    if (xCounter == this.x){
                        xCounter++
                        continue
                    }
                    if (map[yCounter][this.x].hasWhitePiece == true){
                        this.possibleMoves.push(map[this.y][xCounter].tile);
                        break
                    }
                    this.possibleMoves.push(map[this.y][xCounter].tile)
                    xCounter++;
                }}catch{} 
            try{
                while(xCounter > -1 && map[this.y][xCounter].hasBlackPiece == false || xCounter == this.x){
                    if (xCounter == this.x){
                        xCounter--
                        continue
                    }
                    if (map[yCounter][this.x].hasWhitePiece == true){
                        this.possibleMoves.push(map[this.y][xCounter].tile);
                        break
                    }
                    this.possibleMoves.push(map[this.y][xCounter].tile)
                    xCounter--;
            }} catch{}
        }
        this.displayMoves()
    }
}
class Queen extends Piece{
    constructor(y, x, color, node){
        super()
        this.x = x;
        this.y = y;
        this.color = color;
        this.node = node
        this.tile = node.tile
        this.hasmoved = false;
        if(this.color == "white"){
            this.image = "whiteQueen.png"
        } else{
            this.image = "blackQueen.png"
        }
    }
}

class King extends Piece{
    constructor(y, x, color, node){
        super()
        this.x = x;
        this.y = y;
        this.color = color;
        this.node = node
        this.tile = node.tile
        this.hasmoved = false;
        if(this.color == "white"){
            this.image = "whiteKing.png"
        } else{
            this.image = "blackKing.png"
        }
    }

}

class Node{
    constructor(coords, tile, piece){
        this.hasBlackPiece = false;
        this.hasWhitePiece = false;
        this.coords = coords;
        this.tile = tile
        this.piece;
    }
}




function createMap(){    
    let nodes = [];
    let x = 0;
    let y = 0;

    for (let i = 0; i < 8; i++){
        let row = document.createElement("tr")
        document.getElementById("table").appendChild(row)
        nodes.push([])
        if (i % 2 == 0){
            for (let j = 0; j < 8; j++){
                nodes[i].push(new Node([y, x], document.createElement("td")));
                nodes[i][j].tile.style.width = "80px";
                nodes[i][j].tile.style.height = "80px"; 
                nodes[i][j].tile.style.border = "3px solid black";
                row.appendChild(nodes[i][j].tile)
                x++;
                j++;
                nodes[i].push(new Node([y, x], document.createElement("td")));
                nodes[i][j].tile.style.width = "80px";
                nodes[i][j].tile.style.height = "80px"  ;
                nodes[i][j].tile.style.border = "3px solid black";
                nodes[i][j].tile.style.backgroundColor = "tan";
                row.appendChild(nodes[i][j].tile)
                x++;
            }
            x = 0;
        }else {
            for (let j = 0; j < 8; j++){
                nodes[i].push(new Node([y, x], document.createElement("td")));
                nodes[i][j].tile.style.width = "80px";
                nodes[i][j].tile.style.height = "80px"; 
                nodes[i][j].tile.style.border = "3px solid black";
                 nodes[i][j].tile.style.backgroundColor = "tan";
                row.appendChild(nodes[i][j].tile);
                x++;
                j++;
                nodes[i].push(new Node([y, x], document.createElement("td")));
                nodes[i][j].tile.style.width = "80px";
                nodes[i][j].tile.style.height = "80px"  ;
                nodes[i][j].tile.style.border = "3px solid black";
                row.appendChild(nodes[i][j].tile);
                x++;
            }
            x = 0;
        }
        y++;
    }
    return nodes
}

function resetBoard(){
    alivePieces = []
    for (let i = 0; i < 8; i++){
        let cur = map[6][i];
        cur.piece = new Pawn(6, i, "white", map[6][i]);
        cur.hasWhitePiece = true;
        alivePieces.push(cur.piece)
        cur.piece.displayPiece();
    }
    for (let i = 0; i < 8; i++){
        let cur = map[1][i];
        cur.piece = new Pawn(1, i, "black", map[1][i]);
        cur.hasBlackPiece = true;
        alivePieces.push(cur.piece)
        cur.piece.displayPiece();  
    }
    let cur = map[0][0];
    cur.piece = new Rook(0, 0, "black", map[0][0])
    cur.hasBlackPiece = true;
    alivePieces.push(cur.piece)
    cur.piece.displayPiece()

    cur = map[0][1];
    cur.piece = new Knight(0, 1, "black", map[0][1])
    cur.hasBlackPiece = true;
    alivePieces.push(cur.piece)
    cur.piece.displayPiece()

    cur = map[0][2];
    cur.piece = new Bishop(0, 2, "black", map[0][2])
    cur.hasBlackPiece = true;
    alivePieces.push(cur.piece)
    cur.piece.displayPiece()

    cur = map[0][3];
    cur.piece = new Queen(0, 3, "black", map[0][3])
    cur.hasBlackPiece = true;
    alivePieces.push(cur.piece)
    cur.piece.displayPiece()

    cur = map[0][4];
    cur.piece = new King(0, 4, "black", map[0][4])
    cur.hasBlackPiece = true;
    alivePieces.push(cur.piece)
    cur.piece.displayPiece()

    cur = map[0][5];
    cur.piece = new Bishop(0, 5, "black", map[0][5])
    cur.hasBlackPiece = true;
    alivePieces.push(cur.piece)
    cur.piece.displayPiece()

    cur = map[0][6];
    cur.piece = new Knight(0, 6, "black", map[0][6])
    cur.hasBlackPiece = true;
    alivePieces.push(cur.piece)
    cur.piece.displayPiece()

    cur = map[0][7];
    cur.piece = new Rook(0, 7, "black", map[0][7])
    cur.hasBlackPiece = true;
    alivePieces.push(cur.piece)
    cur.piece.displayPiece()

    //White Pieces]
    cur = map[7][0]
    cur.piece = new Rook(7, 0, "white", map[7][0])
    cur.hasBlackPiece = true;
    alivePieces.push(cur.piece)
    cur.piece.displayPiece()

    cur = map[7][1];
    cur.piece = new Knight(7, 1, "white", map[7][1])
    cur.hasBlackPiece = true;
    alivePieces.push(cur.piece)
    cur.piece.displayPiece()

    cur = map[7][2];
    cur.piece = new Bishop(7, 2, "white", map[7][2])
    cur.hasBlackPiece = true;
    alivePieces.push(cur.piece)
    cur.piece.displayPiece()

    cur = map[7][3];
    cur.piece = new Queen(7, 3, "white", map[7][3])
    cur.hasBlackPiece = true;
    alivePieces.push(cur.piece)
    cur.piece.displayPiece()

    cur = map[7][4];
    cur.piece = new King(7, 4, "white", map[7][4])
    cur.hasBlackPiece = true;
    alivePieces.push(cur.piece)
    cur.piece.displayPiece()

    cur = map[7][5];
    cur.piece = new Bishop(7, 5, "white", map[7][5])
    cur.hasBlackPiece = true;
    alivePieces.push(cur.piece)
    cur.piece.displayPiece()

    cur = map[7][6];
    cur.piece = new Knight(7, 6, "white", map[7][6])
    cur.hasBlackPiece = true;
    alivePieces.push(cur.piece)
    cur.piece.displayPiece()

    cur = map[7][7];
    cur.piece = new Rook(7, 7, "white", map[7][7])
    cur.hasBlackPiece = true;
    alivePieces.push(cur.piece)
    cur.piece.displayPiece()


    setMoves()
}

function setMoves(){
    for (let i = 0; i < alivePieces.length; i++){
        let curPiece = alivePieces[i];
        
        
        let verFunc = function ver(){
            curPiece.verifyMove();
            for (let j = 0; j < curPiece.possibleMoves.length; j++){
                


                let moveFunc = function movePiece(){
                    for (let n = 0; n < curPiece.possibleMoves.length; n++){
                        let tile = curPiece.possibleMoves[n]
                        if (tile._moveFunc){
                            tile.removeEventListener("click", tile._moveFunc)
                        } 
                    }

                    for (let b = 0; b < alivePieces.length; b++){
                        let piece = alivePieces[b];
                        if(piece._verFunc){
                            piece.tile.removeEventListener("click", piece._verFunc)}
                        }

                    curPiece.makeMove(curPiece.possibleMoves[j]);
                }  

                curPiece.possibleMoves[j]._moveFunc = moveFunc
                curPiece.possibleMoves[j].addEventListener("click", moveFunc); 
            }   
        }
        curPiece._verFunc = verFunc
        curPiece.tile.addEventListener("click", verFunc);
    }
}

let map = createMap();
resetBoard();