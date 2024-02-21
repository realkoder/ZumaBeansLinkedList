"use client"

// ------------------------------- MOCKED DATA ----------------------
// const node1 = {
//     prev: null,
//     next: null,
//     data: "A"
// }
// const node2 = {
//     prev: null,
//     next: null,
//     data: "B"
// }
// const node3 = {
//     prev: null,
//     next: null,
//     data: "E"
// }

class LinkedList {
    constructor() {        
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // ------------------------------- PRINT LIST -> DATA ----------------------
    printListData = () => {
        if (this.size === 0) {
            console.log("Empty list");
            return
        }

        if (this.size === 1) {
            console.log("POINTERS DATA size 1: ", this.head.data);
            return
        }

        let pointer = this.head;

        while (pointer !== null) {
            console.log(`POINTER DATA (SIZE ${this.size}): `, pointer.data);
            pointer = pointer.next;
        }
    }

    // ------------------------------- ADD ----------------------
    add = (payload) => {
        if (this.size === 0) {
            this.head = payload;
            this.tail = payload;
        } else {
            this.tail.next = payload;
            payload.prev = this.tail;
            this.tail = payload;
        }
        this.size++;
    }

    // ------------------------------- ADD LAST ----------------------
    addLast = (payload) => {
        this.add(payload);
    }


    // ------------------------------- ADD FIRST ----------------------
    addFirst = (payload) => {
        if (this.size === 0) {
            this.head = payload;
            this.tail = payload;
        } else {
            payload.next = this.head;
            this.head = payload;
        }
        this.size++;
    }

    // ------------------------------- CLEAR ----------------------
    clear = () => {
        if (this.size === 0) return;

        let currentNode = this.head;

        while (currentNode != null) {
            const nextNode = currentNode.next;
            currentNode.next = null;
            currentNode.prev = null;
            currentNode = nextNode;
        }
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // ------------------------------- GET ----------------------
    get = (index) => {
        if (this.size === 0) return;

        let counter = 0;
        let currentNode = this.head;
        while (currentNode != null) {
            if (index === counter) return pointer;

            currentNode = currentNode.next;
            counter++;
        }
    }

    // ------------------------------- INDEX OF ----------------------
    indexOf = (payload) => {
        if (this.size === 0) return;

        let counter = 0;
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.data === payload.data) return counter;

            counter++;
            currentNode = currentNode.next;
        }
    }

    // ------------------------------- INSERT AFTER ----------------------
    insertAfter = (index, payload) => {
        if (index > this.size - 1) return;

        if (this.size === 0) {
            this.head = payload;
            this.tail = payload;
            this.size++;
        } else {

            let counter = 0;
            let currentNode = this.head;

            while (currentNode !== null) {

                if (index === counter) {
                    payload.next = currentNode.next;
                    payload.prev = currentNode;
                    currentNode.next = payload;

                    if (this.size === counter + 1) this.tail = payload;

                    this.size++;
                    return;
                }

                counter++;
                currentNode = currentNode.next;
            }
        }
    }

    // ------------------------------- INSERT BEFORE ----------------------
    insertBefore = (index, payload) => {        
        if (index < 0 || index > this.size - 1) return;
        
        if (this.size === 0) {
            this.head = payload;
            this.tail = payload;
            this.size++;
        } else {

            let counter = 0;
            let currentNode = this.head;            
            while (currentNode !== null) {

                if (index === counter) {
                    payload.next = currentNode;
                    payload.prev = currentNode.prev;                                                

                    if (currentNode.prev === null) {
                        this.head = payload;
                    } else {
                        currentNode.prev.next = payload;
                    }

                    currentNode.prev = payload;

                    this.size++;
                    return;
                }

                counter++;
                currentNode = currentNode.next;
            }
        }
    }

    // ------------------------------- FIRST ----------------------
    first = () => {
        if (this.size === 0) return;
        return this.head;
    }

    // ------------------------------- LAST ----------------------
    last = () => {
        if (this.size === 0) return;
        return this.tail;
    }

    // ------------------------------- REMOVE ----------------------
    remove = (index) => {
        if (this.size === 0 || index > this.size - 1) return;

        if (this.size === 1) {
            const removedNode = this.head;
            this.head = null;
            this.tail = null;
            this.size--;

            return removedNode;
        } else {
            let counter = 0;
            let currentNode = this.head;
            while (currentNode !== null) {
                if (index === counter) {
                    const removedNode = currentNode;

                    if (index === 0) {
                        if (currentNode.next !== null) {
                            currentNode.next.prev = null;
                            this.head = currentNode.next;
                        }
                    } else {
                        if (currentNode.prev !== null) currentNode.prev.next = currentNode.next;
                        if (currentNode.next !== null) currentNode.next.prev = currentNode.prev;
                    }

                    this.size--;
                    return removedNode;
                }

                counter++;
                currentNode = currentNode.next;
            }
        }
    }

    // ------------------------------- REMOVE FIRST ----------------------
    removeFirst = () => {
        if (this.size === 0) return
        if (this.size === 1) {
            const removedNode = this.head;
            this.head = null;
            this.tail = null;

            this.size--;

            return removedNode;
        } else {
            const removedNode = this.head;
            this.head = this.head.next;

            this.size--;
            return removedNode;
        }
    }

    // ------------------------------- REMOVE LAST ----------------------
    removeLast = () => {
        if (this.size === 0) return
        if (this.size === 1) {
            const removedNode = this.head;
            this.head = null;
            this.tail = null;

            this.size--;

            return removedNode;
        } else {
            const removedNode = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;

            this.size--;
            return removedNode;
        }
    }
}


export default LinkedList;
// ------------------------------------------IGNORE ALL THIS - THIS WAS BEFORE REFACTORED TO CLASS

// // ------------------------------- INSTANTIATING THE LINKED LIST ----------------------
// const linkedList = new LinkedList();



// // ------------------------------- PRINT LIST -> DATA ----------------------
// const printListData = () => {
//     if (linkedList.size === 0) {
//         console.log("Empty list");
//         return
//     }

//     if (linkedList.size === 1) {
//         console.log("POINTERS DATA size 1: ", linkedList.head.data);
//         return
//     }

//     let pointer = linkedList.head;

//     while (pointer !== null) {
//         console.log(`POINTER DATA (SIZE ${linkedList.size}): `, pointer.data);
//         pointer = pointer.next;
//     }
// }



// // ------------------------------- ADD ----------------------
// const add = (payload) => {
//     if (linkedList.size === 0) {
//         linkedList.head = payload;
//         linkedList.tail = payload;
//     } else {
//         linkedList.tail.next = payload;
//         payload.prev = linkedList.tail;
//         linkedList.tail = payload;
//     }
//     linkedList.size++;
// }
// // add(node2);
// // add(node3);
// // add({
// //     prev: null,
// //     next: null,
// //     data: "jajaj"
// // })
// // printList();



// // ------------------------------- ADD LAST ----------------------
// const addLast = (payload) => {
//     add(payload);
// }
// // add({
// //     prev: null,
// //     next: null,
// //     data: "jojo"
// // });
// // add({
// //     prev: null,
// //     next: null,
// //     data: "jaja"
// // });
// // add({
// //     prev: null,
// //     next: null,
// //     data: "nejnej"
// // });
// // printListData();



// // ------------------------------- ADD FIRST ----------------------
// const addFirst = (payload) => {
//     if (linkedList.size === 0) {
//         linkedList.head = payload;
//         linkedList.tail = payload;
//     } else {
//         payload.next = linkedList.head;
//         linkedList.head = payload;
//     }
//     linkedList.size++;
// }
// // addFirst({
// //     prev: null,
// //     next: null,
// //     data: "nejnej"
// // }); 
// // addFirst({
// //     prev: null,
// //     next: null,
// //     data: "THIRD"
// // });
// // addFirst({
// //     prev: null,
// //     next: null,
// //     data: "SECOND"
// // });
// // addFirst({
// //     prev: null,
// //     next: null,
// //     data: "FIRST"
// // });

// // printListData();



// // ------------------------------- CLEAR ----------------------
// const clear = () => {
//     if (linkedList.size === 0) return;

//     let currentNode = linkedList.head;

//     while (currentNode != null) {
//         const nextNode = currentNode.next;
//         currentNode.next = null;
//         currentNode.prev = null;
//         currentNode = nextNode;
//     }
//     linkedList.head = null;
//     linkedList.tail = null;
//     linkedList.size = 0;
// }
// // printListData();
// // clear();
// // printListData()



// // ------------------------------- GET ----------------------
// const get = (index) => {
//     if (linkedList.size === 0) return;

//     let counter = 0;
//     let currentNode = linkedList.head;
//     while (currentNode != null) {
//         if (index === counter) return pointer;

//         currentNode = currentNode.next;
//         counter++;
//     }
// }
// // addFirst({
// //     prev: null,
// //     next: null,
// //     data: "SECOND"
// // });
// // addFirst({
// //     prev: null,
// //     next: null,
// //     data: "FIRST"
// // });
// // console.log(get(0).data);
// // console.log(get(1).data);
// // console.log(get(2).data);



// // ------------------------------- INDEX OF ----------------------
// const indexOf = (payload) => {
//     if (linkedList.size === 0) return;

//     let counter = 0;
//     let currentNode = linkedList.head;
//     while (currentNode !== null) {
//         if (currentNode.data === payload.data) return counter;

//         counter++;
//         currentNode = currentNode.next;
//     }
// }
// // addFirst({
// //     prev: null,
// //     next: null,
// //     data: "SECOND"
// // });
// // addFirst({
// //     prev: null,
// //     next: null,
// //     data: "FIRST"
// // });
// // console.log(indexOf({ prev: null, next: null, data: "FIRST" }));
// // console.log(indexOf({ prev: null, next: null, data: "SECOND" }));
// // console.log(indexOf({ prev: null, next: null, data: "A" }));



// // ------------------------------- INSERT AFTER ----------------------
// const insertAfter = (index, payload) => {
//     if (index > linkedList.size - 1) return;

//     if (linkedList.size === 0) {
//         linkedList.head = payload;
//         linkedList.tail = payload;
//         linkedList.size++;
//     } else {

//         let counter = 0;
//         let currentNode = linkedList.head;

//         while (currentNode !== null) {

//             if (index === counter) {
//                 payload.next = currentNode.next;
//                 payload.prev = currentNode;
//                 currentNode.next = payload;

//                 if (linkedList.size === counter + 1) linkedList.tail = payload;

//                 linkedList.size++;
//                 return;
//             }

//             counter++;
//             currentNode = currentNode.next;
//         }
//     }
// }
// // insertAfter(0, {
// //     prev: null,
// //     next: null,
// //     data: "SECOND"
// // });
// // insertAfter(0, {
// //     prev: null,
// //     next: null,
// //     data: "FIRST"
// // });
// // printListData();



// // ------------------------------- INSERT BEFORE ----------------------

// const insertBefore = (index, payload) => {
//     if (index < 0 || index > linkedList.size - 1) return;

//     if (linkedList.size === 0) {
//         linkedList.head = payload;
//         linkedList.tail = payload;
//         linkedList.size++;
//     } else {

//         let counter = 0;
//         let currentNode = linkedList.head;
//         while (currentNode !== null) {

//             if (index === counter) {
//                 payload.next = currentNode;
//                 payload.prev = currentNode.prev;

//                 if (currentNode.prev === null) {
//                     linkedList.head = payload;
//                 } else {
//                     currentNode.prev.next = payload;
//                 }

//                 currentNode.prev = payload;

//                 linkedList.size++;
//                 return;
//             }

//             counter++;
//             currentNode = currentNode.next;
//         }
//     }
// }
// // insertBefore(0, {
// //     prev: null,
// //     next: null,
// //     data: "SECOND"
// // });
// // insertBefore(1, {
// //     prev: null,
// //     next: null,
// //     data: "FIRST"
// // });
// // insertBefore(2, {
// //     prev: null,
// //     next: null,
// //     data: "SOMETHING"
// // });
// // printListData();



// // ------------------------------- FIRST ----------------------
// const first = () => {
//     if (linkedList.size === 0) return;
//     return linkedList.head;
// }
// // insertBefore(0, {prev: null, next: null, data: "HEYO"});
// // insertBefore(0, {prev: null, next: null, data: "LOLOLER"});
// // console.log(first().data)


// // ------------------------------- LAST ----------------------
// const last = () => {
//     if (linkedList.size === 0) return;
//     return linkedList.tail;
// }
// // insertBefore(0, {prev: null, next: null, data: "HEYO"});
// // insertAfter(linkedList.size - 1, {prev: null, next: null, data: "LOLOLER"});
// // console.log(last().data)


// // ------------------------------- REMOVE ----------------------
// const remove = (index) => {
//     if (linkedList.size === 0 || index > linkedList.size - 1) return;

//     if (linkedList.size === 1) {
//         const removedNode = linkedList.head;
//         linkedList.head = null;
//         linkedList.tail = null;
//         linkedList.size--;

//         return removedNode;
//     } else {
//         let counter = 0;
//         let currentNode = linkedList.head;
//         while (currentNode !== null) {
//             if (index === counter) {
//                 const removedNode = currentNode;

//                 if (index === 0) {
//                     if (currentNode.next !== null) {
//                         currentNode.next.prev = null;
//                         linkedList.head = currentNode.next;
//                     }
//                 } else {
//                     if (currentNode.prev !== null) currentNode.prev.next = currentNode.next;
//                     if (currentNode.next !== null) currentNode.next.prev = currentNode.prev;
//                 }

//                 linkedList.size--;
//                 return removedNode;
//             }

//             counter++;
//             currentNode = currentNode.next;
//         }
//     }
// }
// // clear()
// // add({next: null, prev: null, data: "NEWLY"});
// // add({next: null, prev: null, data: "ANOTHER"});
// // add({next: null, prev: null, data: "ANOTHERONE"});
// // printListData();
// // console.log("--------------")
// // console.log(remove(0));
// // console.log(remove(1));
// // console.log("--------------")
// // printListData();



// // ------------------------------- REMOVE FIRST ----------------------
// const removeFirst = () => {
//     if (linkedList.size === 0) return
//     if (linkedList.size === 1) {
//         const removedNode = linkedList.head;
//         linkedList.head = null;
//         linkedList.tail = null;

//         linkedList.size--;

//         return removedNode;
//     } else {
//         const removedNode = linkedList.head;
//         linkedList.head = linkedList.head.next;

//         linkedList.size--;
//         return removedNode;
//     }
// }
// // clear()
// // add({next: null, prev: null, data: "NEWLY"});
// // add({next: null, prev: null, data: "ANOTHER"});
// // add({next: null, prev: null, data: "ANOTHERONE"});
// // printListData();
// // console.log("--------------")
// // console.log(removeFirst());
// // console.log(removeFirst());
// // console.log("--------------")
// // printListData();



// // ------------------------------- REMOVE LAST ----------------------
// const removeLast = () => {
//     if (linkedList.size === 0) return
//     if (linkedList.size === 1) {
//         const removedNode = linkedList.head;
//         linkedList.head = null;
//         linkedList.tail = null;

//         linkedList.size--;

//         return removedNode;
//     } else {
//         const removedNode = linkedList.tail;
//         linkedList.tail = linkedList.tail.prev;
//         linkedList.tail.next = null;

//         linkedList.size--;
//         return removedNode;
//     }
// }
// // clear()
// // add({next: null, prev: null, data: "NEWLY"});
// // add({next: null, prev: null, data: "ANOTHER"});
// // add({next: null, prev: null, data: "ANOTHERONE"});
// // printListData();
// // console.log("--------------")
// // console.log(removeLast());
// // console.log(removeLast());
// // console.log("--------------")
// // printListData();