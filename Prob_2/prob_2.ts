class Matrix{
    private rows: number;
    private columns: number;
    private elements: number[][];


    constructor (rows : number, columns : number)
    {
        this.rows = rows;
        this.columns = columns;
        //this.elements = [[1,2],[3,4],[5,6]]//new Array(rows).fill(new Array(columns).fill(0));
        this.elements = this.initializeMatrix();
    }

    private initializeMatrix() : number[][]{

        let array : number[][] = [];
        for(let i=0;i<this.rows;i++)
        {
            array[i] = [];
            for(let j=0;j<this.columns;j++)
            {
                array[i][j] = 0;
            }
        }

        return array;
    }


    public getRows(): number {
        return this.rows;
    }
    public getColumn(): number {
        return this.columns;
    }

    public getElements() {
        return this.elements;
    }

    setElementsOnGivenPosition(row:number, column:number, value:number) : void{

        this.elements[row][column] = value;

    }

     sumMatrix(otherMatrix: number[][]){

        if(this.rows === otherMatrix.length && this.columns === otherMatrix[0].length)
        {
            for(let i=0;i<this.rows;i++)
            {
                for(let j=0;j<this.columns;j++)
                {
                    this.elements[i][j] += otherMatrix[i][j];
                }
            }   
        }
        else
        {
            console.log("NOOP");
        }

    }

    multiplyMatrix(otherMatrix: number[][])
    {
        //otherMatrix.length == rows
        //otherMatrix[0].length == columns

        if(this.columns === otherMatrix.length)
        {
            let array :number[][] = [];
            for(let i=0;i<this.rows;i++)
            {
                array[i] = [];
                for(let j=0;j<otherMatrix[0].length;j++)
                {
                    let aux = 0;
                    for(let k = 0;k < this.columns;k++)
                    {
                        aux += this.elements[i][k] * otherMatrix[k][j];
                    }
                    array[i][j] = aux;
                    
                }
            }  
    
            this.elements = array;
            this.rows = this.elements.length;
            this.columns = this.elements[0].length;
        }
        else
        {
            console.log("NOOP");
        }
    }


}


const ma = new Matrix(3,3);
const ma2 = new Matrix(3,3);

ma.setElementsOnGivenPosition(0,0,1);
ma.setElementsOnGivenPosition(0,1,6);
ma.setElementsOnGivenPosition(0,2,0);
ma.setElementsOnGivenPosition(1,0,-1);
ma.setElementsOnGivenPosition(1,1,3);
ma.setElementsOnGivenPosition(1,2,1);
ma.setElementsOnGivenPosition(2,0,4);
ma.setElementsOnGivenPosition(2,1,6);
ma.setElementsOnGivenPosition(2,2,2);

ma2.setElementsOnGivenPosition(0,0,0);
ma2.setElementsOnGivenPosition(0,1,4);
ma2.setElementsOnGivenPosition(0,2,0);
ma2.setElementsOnGivenPosition(1,0,2);
ma2.setElementsOnGivenPosition(1,1,3);
ma2.setElementsOnGivenPosition(1,2,1);
ma2.setElementsOnGivenPosition(2,0,1);
ma2.setElementsOnGivenPosition(2,1,-2);
ma2.setElementsOnGivenPosition(2,2,1);

/* const ma = new Matrix(2,3);
const ma2 = new Matrix(3,2);

ma.setElementsOnGivenPosition(0,0,0);
ma.setElementsOnGivenPosition(0,1,-1);
ma.setElementsOnGivenPosition(0,2,2);
ma.setElementsOnGivenPosition(1,0,4);
ma.setElementsOnGivenPosition(1,1,11);
ma.setElementsOnGivenPosition(1,2,2);

ma2.setElementsOnGivenPosition(0,0,3);
ma2.setElementsOnGivenPosition(0,1,-1);
ma2.setElementsOnGivenPosition(1,0,1);
ma2.setElementsOnGivenPosition(1,1,2);
ma2.setElementsOnGivenPosition(2,0,6);
ma2.setElementsOnGivenPosition(2,1,1); */

console.log(ma.getElements());


console.log(ma2.getElements());

ma.multiplyMatrix(ma2.getElements());

console.log(ma.getElements());