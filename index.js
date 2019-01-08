function getName(node) {
  return node.name;
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(head, collection) {
  let nextAddress = head.next;
  return collection[nextAddress];
}

function nodeAt(index, linkedList, collection) {
  let node = headNode(linkedList, collection);
  for (let i = 0; i < index; i++) {
    node = next(node, collection);
  }
  return node;
}

function addressAt(index, linkedList, collection) {
  if (index === 0) {
    return linkedList;
  } else {
    let node = nodeAt(index - 1, linkedList, collection);
    return node.next;
  }
}

function indexAt(node, collection, linkedList) {
  let currentIdx = 0;
  let currentNode = headNode(linkedList, collection);
  while (currentNode != node) {
    currentIdx++;
    currentNode = next(currentNode, collection);
  }
  return currentIdx;
}

function insertNodeAt(index, newNodeAddress, linkedList, collection) {
  let currentNode = nodeAt(index, linkedList, collection);
  let previousNode = nodeAt(index - 1, linkedList, collection);
  let currentIndex = indexAt(currentNode, collection, linkedList);
  let currentAddress = addressAt(currentIndex, linkedList, collection);

  previousNode.next = newNodeAddress;
  let newNode = collection[newNodeAddress];
  newNode.next = currentAddress;
}

function deleteNodeAt(index, linkedList, collection) {
  let previousNode = nodeAt(index - 1, linkedList, collection);
  let nextAddress = addressAt(index + 1, linkedList, collection);

  previousNode.next = nextAddress;
}
