class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

Node.prototype.add = function (val) {
  if (val < this.val) {
    if (this.left) {
      this.left.add(val);
    } else {
      this.left = new Node(val);
    }
  } else if (val > this.val) {
    if (this.right) {
      this.right.add(val);
    } else {
      this.right = new Node(val);
    }
  }

  return this;
};

Node.prototype.visit = function (arr) {
  this.left?.visit(arr);
  arr.push(this.val);
  this.right?.visit(arr);
};
