function setup() {
  createCanvas(400, 400);

  let t = new Tree();
  t.insert([3, 7, 5, 6, 12, 23, 4, 7, 2]);

  console.log(t.traverse());
}

function draw() {
  background(220);
}
