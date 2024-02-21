import Image from 'next/image';

const ImageBean = ({beanNodeData, indexKey, handleClick}) => {

    return (
        <div key={beanNodeData} style={{ display: 'inline-block', marginRight: '10px' }}>
            <Image key={indexKey}
                src={beanNodeData}
                alt={beanNodeData}
                width={120}
                height={120}
                onClick={handleClick}
                data-key={indexKey}
                className='p-2 border-2 m-2 border-blue-500'
            />
        </div>
    )
}

export default ImageBean;