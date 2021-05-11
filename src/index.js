const { BinarySearchTree } = require("./ds/BinarySearchTree");

(async function main() {
  const bst = new BinarySearchTree();
  await bst.insert(3);
  await bst.insert(4);
  await bst.insert(5);
  console.log(bst.toString());
})();
