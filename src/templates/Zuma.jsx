"use client"

import { checkIfBeansMatch, checkIfBeansMatchAndUpdatesAndCopiesArray, copyLinkedListAndInsertBefore, randomTargetBeans, setupAmmunitionBeansAfterFired } from "@/controller/BeanController";
import LinkedList from "@/model/LinkedList";
import { useEffect, useState } from "react";
import ImageBean from "@/components/ImageBean";


const Zuma = () => {
    const [targetBeans, setTargetBeans] = useState(new LinkedList);
    const [ammunitionBeans, setAmmunitionBeans] = useState(new LinkedList);
    const [renderedTargetBeanItems, setRenderedTargetBeanItems] = useState([]);
    const [renderedAmmunitionBeanItems, setRenderedAmmunitionBeanItems] = useState([]);    

    // Set the targetBeans and ammunitionBeans for each rendering
    useEffect(() => {
        const createdAmmunitionBeans = randomTargetBeans(2);
        const createdTargetBeans = randomTargetBeans(4);
        setAmmunitionBeans(createdAmmunitionBeans);
        setTargetBeans(createdTargetBeans);
    }, []);

    const handleTargetBeanClick = (event) => {
        // Setting the ammunitionBeans after bean is fired
        const updatedAmmunitionBeans = setupAmmunitionBeansAfterFired(ammunitionBeans);
        setAmmunitionBeans(updatedAmmunitionBeans);

        // Setting the targetBeans
        const clickedBeanKeyId = event.target.getAttribute('data-key');               
        const updatedTargetBeans = copyLinkedListAndInsertBefore(clickedBeanKeyId, { next: null, prev: null, data: ammunitionBeans.head.data }, targetBeans,)
        //setTargetBeans(updatedTargetBeans);
        
        // Check if there is any matches after fired bean is inserted
        const updatedTargetBeansAfterFire = checkIfBeansMatchAndUpdatesAndCopiesArray(updatedTargetBeans);
        setTargetBeans(updatedTargetBeansAfterFire);
    }

    useEffect(() => {
        if (!targetBeans) return;

        const currentTargetBeansImages = [];
        let currentTargetBeanNode = targetBeans.head;
        let counter = 0;

        while (currentTargetBeanNode !== null) {
            currentTargetBeansImages.push((
                <ImageBean
                    beanNodeData={currentTargetBeanNode.data}
                    indexKey={counter}
                    handleClick={handleTargetBeanClick}
                />))

            if (!currentTargetBeanNode.next) {
                setRenderedTargetBeanItems(currentTargetBeansImages);
                break;
            } else {
                counter++;
                currentTargetBeanNode = currentTargetBeanNode.next;
            }
        }

    }, [targetBeans]);


    useEffect(() => {
        if (!ammunitionBeans) return;

        const currentAmmunitionBeansImages = [];
        let currentAmmunitionBeanNode = ammunitionBeans.head;

        while (currentAmmunitionBeanNode !== null) {
            currentAmmunitionBeansImages.push((<ImageBean beanNodeData={currentAmmunitionBeanNode.data} handleTargetBeanClick={() => undefined} />))

            if (!currentAmmunitionBeanNode.next) {
                setRenderedAmmunitionBeanItems(currentAmmunitionBeansImages);
                break;
            } else {
                currentAmmunitionBeanNode = currentAmmunitionBeanNode.next;
            }
        }

    }, [ammunitionBeans]);


    return (
        <div className="flex flex-col items-center">
            <h1>IM A ZUMA</h1>

            <div className="mb-40 flex justify-center">
                {renderedTargetBeanItems}
            </div>
            <div className="border-t border-gray-400 pt-4 w-full"/>
            <h1>AMMUNITION BEANS</h1> <div className="flex flex-col justify-center"> {renderedAmmunitionBeanItems}
            </div>
        </div>
    )
}


export default Zuma;
