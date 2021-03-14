'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    add(value) {
        let node = new Node(value);

        if (this.length === 0) {
            this.head = node;
        } else {
            let current = this.head;

            while(current.next) {
                current = current.next;
            }

            current.next = new Node(value);
        }

        this.length++;
    }

    removeFromPosition(position) {
        if (position < 0 || position > this.length) {
            return 'Incorrect value of position';
        }

        let current = this.head;

        if (position === 0) {
            this.head = current.next;
        } else {
            let prev = null;
            let index = 0;

            while(index < position) {
                prev = current;
                current = current.next;
                index++;
            }

            prev.next = current.next; // За левым элементом будет следовать не current, а следующий элемент за current.
        }

        this.length--;
        return current.value;
    }

    remove(value) {
        this.removeFromPosition(this.getIndexOf(value));
        return -1;
    }

   clear() {
        this.head = null;
   }

    getIndexOf(value) {
        let current = this.head;
        let index = 0;

        while(current) {
            if (current.value === value) {
                return index;
            }
            
            current = current.next;
            index++;
        }

        return -1;
    }

    contains(value) {
      return this.getIndexOf(value) == -1 ? false :  true;
    }


    count() {
        return this.length;
    }

    log() {
        let current = this.head,
        arr = [],
        i = 0;
        while(current) {
            arr[i] =  current.value;
            current = current.next;
        }
        console.log(arr.join(', '));
    }
}


function createLinkedList(arr){
    const list = new LinkedList();
    arr.forEach(item=> {
        list.add(item);
    });
    return list;
}


const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
ll.log();
// "100, 1, 2, 3, 100, 4, 5, 100"
while(ll.remove(100));
ll.log();
// "1, 2, 3, 4, 5"
ll.add(10);

ll.log();
// "1, 2, 3, 4, 5, 10"
console.log(ll.contains(10));
// "true"
let sum = 0;
for(const n of ll) 
{sum += n;}
console.log(sum);
// "25"
ll.clear();
ll.log();
// ""