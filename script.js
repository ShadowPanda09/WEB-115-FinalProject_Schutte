let board = document.getElementById("board")
let square;
let movePiece;
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
        this.tile.innerHTML = "";
        this.move = move
        console.log(move)
        this.move.innerHTML = "<img src = \"" + this.image + "\">"
        this.node.coords[0] += this.change[this.possibleMoves.indexOf(move)][0]
        this.node.coords[1] += this.change[this.possibleMoves.indexOf(move)][1]
        this.possibleMoves = []
        this.displayMoves();
        this.tile = move
        console.log(this.node)
        this.y = this.node.coords[0]
        this.x = this.node.coords[1]
        setMoves()
        this.move = ""
        this.hasmoved = true
    }

    verifyMove(){}

    displayPiece(){}

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
                if (this.hasmoved == false && map[this.y-2][this.x].hasPiece == false){
                    this.possibleMoves.push(map[this.y - 2][this.x].tile)
                    this.change.push([-2, 0])
                }} 
            catch {}

            try{
                if (map[this.y - 1][this.x + 1].hasPiece == true){
                    this.possibleMoves.push(map[this.y - 1][this.x + 1].tile)
                    this.change.push([-1, 1])
                }}
            catch{}

            try{
                if (map[this.y - 1][this.x - 1].hasPiece == true){
                    this.possibleMoves.push(map[this.y - 1][this.x - 1].tile)
                    this.change.push([-1, -1])
                }}
            catch{}

            try{
                if (map[this.y - 1][this.x].hasPiece == false){
                    this.possibleMoves.push(map[this.y - 1][this.x].tile)
                    this.change.push([-1, 0])
                }}
            catch{}
        }
        else{
            try{
                if (this.hasmoved == false && map[this.y + 2][this.x].hasPiece == false){
                    this.possibleMoves.push(map[this.y + 2][this.x].tile)
                    this.change.push([2, 0])
                }}
            catch{}
            
            try{
                if (map[this.y + 1][this.x + 1].hasPiece == true){
                    this.possibleMoves.push(map[this.y + 1][this.x + 1].tile)
                    this.change.push([1, 1])
                }}
            catch{}

            try{
                if (map[this.y + 1][this.x - 1].hasPiece == true){
                    this.possibleMoves.push(map[this.y + 1][this.x - 1].tile)
                    this.change.push([1, -1])
                }}
            catch{}

            try{
                if (map[this.y + 1][this.x].hasPiece == false){
                    this.possibleMoves.push(map[this.y + 1][this.x].tile)
                    this.change.push([1, 0])
                }}
            catch{}
        }
        this.displayMoves()
    }

    displayPiece(){
        if (this.color == "white"){
            map[this.y][this.x].tile.innerHTML = "<img src = \"whitePawn.png\">"
        } else{
            map[this.y][this.x].tile.innerHTML = "<img src = \"blackPawn.png\">"
        }
    }
}

class Knight extends Piece{
    constructor(){
        super();
    }
    
    move(newCoords){
        if (this.verifyMove()){
            this.coords = newCoords;
            this.display()
        } else{
            
        }
    }

    verifyMove(){
    }
}
class Bishop extends Piece{
    constructor(){
        super();
    }
    
    move(newCoords){
        this.verifyMove()
        this.displayMoves()
        //if (this.possibleMoves.includes(this.move)){
            //this.coords = newCoords;
            //this.display()
        //} else{
            
        //}
    }

    verifyMove(){
    }
}
class Rook extends Piece{
    constructor(){
        super();
        this.displayPiece()
    }
    
    move(newCoords){
        this.verifyMove()
        this.displayMoves()
        //if (this.possibleMoves.includes(this.move)){
            //this.coords = newCoords;
            //this.display()
        //} else{
            
        //}
    }

    verifyMove(){
        let yCounter = this.y
        let xCounter = this.x
        while(yCounter < 8)
            if (board[yCounter][this.x].hasPiece == false){
                this.possibleMoves.push(board[yCounter][this.x])
            }
            yCounter++;
        while(yCounter > -1){
            if (board[yCounter][this.x].hasPiece == false){
                this.possibleMoves.push(board[yCounter][this.x])
            }
            yCounter--;
        }
        while(xCounter < 8){
            if (board[this.y][xCounter].hasPiece == false){
                this.possibleMoves.push(board[this.y][xCounter])
            }
            xCounter++;
        }
        while(xCounter > -1){
            if (board[this.y][xCounter].hasPiece == false){
                this.possibleMoves.push(board[this.y][xCounter])
            }
            xCounter--;
        }
    }
    displayPiece(){
        map[this.y][this.x].style.backgroundImage = "rook.png"
    }
}
class Queen extends Piece{
    constructor(){
        super();
    }
    
    move(newCoords){
        if (this.verifyMove()){
            this.coords = newCoords;
            this.display()
        } else{
            
        }
    }

    verifyMove(){
    }
}

class King extends Piece{
    constructor(){
        super();
    }
    
    move(newCoords){
        if (this.verifyMove()){
            this.coords = newCoords;
            this.display()
        } else{
            
        }
    }

    verifyMove(){
    }

}

class Node{
    constructor(coords, tile, piece){
        this.hasPiece = false;
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
        alivePieces.push(cur.piece)
        cur.piece.displayPiece();
    }
    for (let i = 0; i < 8; i++){
        let cur = map[1][i];
        cur.piece = new Pawn(1, i, "black", map[1][i]);
        alivePieces.push(cur.piece)
        cur.piece.displayPiece();  
    }

    setMoves()
}

function setMoves(){
    console.log(alivePieces)
    for (let i = 0; i < alivePieces.length; i++){
        let curPiece = alivePieces[i];
        curPiece.tile.addEventListener("click", ver);
        function ver(){
            curPiece.verifyMove();
            for (let j = 0; j < curPiece.possibleMoves.length; j++){
                curPiece.possibleMoves[j].addEventListener("click", movePiece); 


                function movePiece(){
                    for (let j = 0; j < curPiece.possibleMoves.length; j++){
                        curPiece.possibleMoves[j].removeEventListener("click", movePiece)
                    }

                    curPiece.tile.removeEventListener("click", ver)

                    curPiece.makeMove(curPiece.possibleMoves[j]);
                }  
            }   
        }
        
    }
}

let map = createMap();
resetBoard();