class Phenotype{

    constructor(){
        this.coordinates = [ ];

        for (let i = 0 ; i < 10; i++){
            this.coordinates.push(createVector(Math.random(), Math.random()).mult(width));
        }
    }

    display(cityOrderlist){

        for (let i = 0; i < this.coordinates.length - 1; i++){
            stroke(0);
            strokeWeight(1);
            line(this.coordinates[cityOrderlist[i]].x, this.coordinates[cityOrderlist[i]].y,
            this.coordinates[cityOrderlist[i+1]].x, this.coordinates[cityOrderlist[i+1]].y );

            fill(255, 0 ,0);
            circle(this.coordinates[cityOrderlist[i]].x, this.coordinates[cityOrderlist[i]].y, 10);
            fill(0);
            text(cityOrderlist[i], this.coordinates[cityOrderlist[i]].x, this.coordinates[cityOrderlist[i]].y);
        }

        fill(255, 0 ,0);
        circle(this.coordinates[cityOrderlist[this.coordinates.length - 1]].x, this.coordinates[cityOrderlist[this.coordinates.length - 1]].y, 10);
        fill(0);
        text(cityOrderlist[this.coordinates.length - 1], this.coordinates[cityOrderlist[this.coordinates.length - 1]].x, this.coordinates[cityOrderlist[this.coordinates.length - 1]].y);
    
    }

}