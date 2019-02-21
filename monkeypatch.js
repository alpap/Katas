function augment() {
    this.monkey = "monkey";
}

// file 2

function augmentMore() {
    this.patch = "patch";
}

// file 3

var o = {};
augment.call(o);
augmentMore.call(o);
console.log(o.monkey + o.patch);

