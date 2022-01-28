let population, phenotype;
let populationSize = 1000, geneLength;
let mutationRate = 0.05;


function setup() {
  createCanvas(400, 400);
  phenotype = new Phenotype()
  geneLength = phenotype.coordinates.length;
  population = new Population(populationSize, geneLength);

}

function draw() {
  background(220);

  population.calcFitness();
  population.createMatingPool();
  population.reproduce();
  population.mutation(mutationRate);


  population.calcFitness();

  population.displayDetails();
  phenotype.display(population.globalbestgenes);



  if(population.generations == 2000){
    print(" ");
    print("2000 generations complete");
    noLoop();
  }



}
