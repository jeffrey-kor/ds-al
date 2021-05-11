class TreeNode {
  public value: any;
  public left: any;
  public right: any;
  constructor(value: any) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  public root: any;

  constructor() {
    this.root = null;
  }

  async insert(value: number): Promise<any> {
    const node: TreeNode = this.root;
    if (node === null) {
      this.root = new TreeNode(value);
      return;
    }

    async function search(node: TreeNode): Promise<any> {
      if (node < node.value) {
        if (node.left === null) {
          node.left = new TreeNode(value);
          return;
        } else {
          return search(node.left);
        }
      } else if (node > node.value) {
        if (node.right === null) {
          node.right = new TreeNode(value);
          return;
        } else {
          return search(node.right);
        }
      } else {
        return null;
      }
    }
    return search(node);
  }




  async delete(data: number): Promise<any> {
    // 내가 지우고 싶은 값을 입력하면, While문의 반복을 통해 값을 가지고 있는 노드를 찾고 없애주며,
    // 없애는 노드의 왼쪽과 오른쪽 노드가 존재하면 지우기 이전에 노드의 왼쪽과 오른쪽으로 붙여준다.
    // 만약에 찾고자 하는 값이 없다면, return null을 한다.
    const node = this.root
    async function remove(node: TreeNode, data: number) {

    }

    await remove(node, data)


  }




  depth() {}
  search() {}

  traversePreOrder() {}
  traverseInOrder() {}
  traversePostOrder() {}

  async toString(): Promise<any> {
    let current = this.root;
    const show = [];
    while (current !== null) {
      if (current.left !== null) {
        show.push(current);

      }
    }
  }
}



/*
* 이진트리: 자식노드가 왼쪽과 오른쪽 두개뿐인 트리를 말함
*       순회 시간복잡도: O(n)
* 이진탐색트리: 기존 이진트리에 왼쪽 자식이 부모보다 작고 오른쪽 자식이 부모보다 큰 형태로 자료를 저장하는 트리
*       순회 시간복잡도 O(log2(n))
* AVL 트리: 좀 어려운데, 스스로 균형을 잡음, 높이를 최소로 유지
*     이진 검색트리가 한쪽에 치우치지 않게 도와줌.
*     시간복잡도의 log값을 보장함
* */

// let preorderTraversal = function(root: TreeNode) {
//   if (!root) return [];
//
//   let result = [];
//   let stack = [root];
//
//   while(stack.length) {
//     let node = stack.pop();
//     result.push(node.val);
//     if (node.right) stack.push(node.right);
//     if (node.left) stack.push(node.left);
//   }
//   return result;
// }

const preorderTraversal = function(root: TreeNode): Array<any> {
  if (!root) return [];
  let result: Array<number> = [];
  let stack: Array<TreeNode> = [root];

  while (stack.length) {
    let node: TreeNode | undefined = stack.pop();
    if (node !== undefined) {
     result.push(node.value);
     if (node.right) stack.push(node.right);
     if (node.left) stack.push(node.left);
    }
  }
  return result;
};



function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      return `김서방은 ${seoul.indexOf("Kim")}에 있다.`
    }
  }
}

