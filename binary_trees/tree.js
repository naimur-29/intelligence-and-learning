class Tree {
  constructor() {
    this.root = null;
    this.container = [];
    this.length = 0;
  }
}

Tree.prototype.add = function (val) {
  if (!this.root) {
    this.root = new Node(val);
    return this;
  } else {
    return this.root.add(val);
  }
};

Tree.prototype.traverse = function () {
  if (this.root) {
    if (!this.length) {
      this.container = [];
      this.root.visit(this.container);
      this.length = this.container.length;
    }
  }

  return [...this.container];
};

Tree.prototype.insert = function (arr) {
  if (arr.length) {
    for (let item of arr) {
      this.add(item);
    }
  } else {
    this.add(arr);
  }

  return this;
};

Tree.prototype.clear = function () {
  this.root = null;
  this.container = [];
  this.length = 0;
};
