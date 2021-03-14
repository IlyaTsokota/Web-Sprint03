'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList {
    constructor() {
        this.data = null;
        this.next = null;
        this.length = 0;
    }

    add(value) {
        let node = new Node(value);

        if (this.length === 0) {
            this.data = node;
        } else {
            let current = this.data;

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

        let current = this.data;

        if (position === 0) {
            this.data = current.next;
        } else {
            let prev = null;
            let index = 0;

            while(index < position) {
                prev = current;
                current = current.next;
                index++;
            }

            prev.next = current.next; 
        }

        this.length--;
        return current.value;
    }

    remove(value) {
        if(this.contains(value)){
            this.removeFromPosition(this.getIndexOf(value));
            return true;
        }
        return false;
       
    }

   clear() {
        this.data = null;
   }

    getIndexOf(value) {
        let current = this.data;
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
        let current = this.data,
        arr = [],
        i = 0;
        while(current) {
            arr[i++] =  current.value;
            current = current.next;
        }
        console.log(arr.join(', '));
    }

    [Symbol.iterator]= function*() {
        let current = this.data;
        while (current) {
          yield current.value;
          current = current.next;
        }
    };
}


export function createLinkedList(arr){
    const list = new LinkedList();
    arr.forEach(item=> {
        list.add(item);
    });
    return list;
}


