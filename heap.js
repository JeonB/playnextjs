class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 헬퍼 메서드 : 부모와 자식 인덱스 계산
  getParentIndex = (idx) => Math.floor((idx - 1) / 2);
  getLeftChildIndex = (idx) => idx * 2 + 1;
  getRightChildIndex = (idx) => idx * 2 + 2;

  // 헬퍼 메서드 : 노드 교환
  swap = (idx1, idx2) => {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  };

  // 최솟값 조회
  peek = () => this.heap[0];

  // 삽입 연산
  insert = (value) => {
    this.heap.push(value);
    this.heapifyUp();
  };

  // 삽입 후 힙 속성 유지
  heapifyUp = () => {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      const parentIdx = this.getParentIndex(idx);
      if (this.heap[parentIdx] > this.heap[idx]) {
        this.swap(parentIdx, idx);
        idx = parentIdx;
      } else break;
    }
  };

  // 삭제 연산
  remove = () => {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return root;
  };

  // 삭제 후 힙 속성 유지
  heapifyDown = (idx) => {
    let leftChildIdx = this.getLeftChildIndex(idx);
    let rightChildIdx = this.getRightChildIndex(idx);
    let smallest = idx;

    if (
      leftChildIdx < this.heap.length &&
      this.heap[leftChildIdx] < this.heap[smallest]
    ) {
      smallest = leftChildIdx;
    }

    if (
      rightChildIdx < this.heap.length &&
      this.heap[rightChildIdx] < this.heap[smallest]
    ) {
      smallest = rightChildIdx;
    }

    if (smallest !== idx) {
      this.swap(smallest, idx);
      this.heapifyDown(smallest);
    }
  };
}
