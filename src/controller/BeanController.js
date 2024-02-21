"use client"

import LinkedList from "@/model/LinkedList"

const beanFilenames = ["/brune-bønner.jpg", "/coffee-beans.jpg", "/hvidebønner.jpg"];

export const randomTargetBeans = (size) => {
    const targetBeans = new LinkedList;

    for (let i = 0; i < size; i++) {
        const randomNuber = Math.floor(Math.random() * 3);

        targetBeans.add({
            prev: null,
            next: null,
            data: beanFilenames[randomNuber]
        });
    }

    return targetBeans;
}

export const setupAmmunitionBeansAfterFired = (beansLinkedList) => {
    const newLinkedList = copyLinkedList(beansLinkedList);

    newLinkedList.removeFirst();
    const randomIndexNum = Math.floor(Math.random() * 3);
    const randomImagePath = beanFilenames[randomIndexNum];
    newLinkedList.addLast({ next: null, prev: null, data: randomImagePath });

    return newLinkedList;
}

const copyLinkedList = (beansLinkedList) => {
    if (!beansLinkedList.head) return;

    let newLinkedList = new LinkedList();
    let currentNode = beansLinkedList.head;

    while (currentNode !== null) {
        newLinkedList.add({ next: null, prev: null, data: currentNode.data });
        currentNode = currentNode.next;
    }

    return newLinkedList;
}

export const copyLinkedListAndInsertBefore = (index, node, beansLinkedList) => {
    if (!beansLinkedList.head) return;

    let newLinkedList = new LinkedList();
    let currentNode = beansLinkedList.head;
    let counter = 0;

    while (currentNode !== null) {
        if (counter == index) {
            newLinkedList.add(node);
        } else {
            newLinkedList.add({ next: null, prev: null, data: currentNode.data });
            currentNode = currentNode.next;
        }
        counter++;
    }

    return newLinkedList;
}

export const checkIfBeansMatchAndUpdatesAndCopiesArray = (beansLinkedList) => {
    if (!beansLinkedList.head) return;

    let newLinkedList = copyLinkedList(beansLinkedList);
    let currentNode = beansLinkedList.head;
    let indexPositionToDeleteFrom = 0;
    let matchCounter = 0;
    let indexCounter = 0;
    let currentImageBeanPath = currentNode.data;

    while (currentNode !== null) {
        if (currentNode.data === currentImageBeanPath) {
            matchCounter++;

            if (currentNode.next === null && matchCounter >= 3) {
                return removeIndexTimesX(newLinkedList, indexPositionToDeleteFrom, matchCounter);
            } else if (currentNode.next !== null && currentNode.next.data !== currentImageBeanPath && matchCounter >= 3) {
                return removeIndexTimesX(newLinkedList, indexPositionToDeleteFrom, matchCounter);
            }
        } else {
            matchCounter = 1;
            currentImageBeanPath = currentNode.data;
        }

        if (matchCounter === 1) {
            indexPositionToDeleteFrom = indexCounter;
        }

        currentNode = currentNode.next;
        indexCounter++;
    }

    return newLinkedList;
}

const removeIndexTimesX = (beansLinkedList, indexPos, times) => {
    let newLinkedList = copyLinkedList(beansLinkedList);
    for (let i = 0; i < times; i++) {
        newLinkedList.remove(indexPos);
        console.log("Remvoinc index", indexPos);
    }

    return newLinkedList;
}