'use client'
import { getAllCollectionInfo } from '@/api/thegraphApi';
import BuyButton from '@/components/Button/BuyBtn';
import { CollectionDone } from '@/components/Collection/CollectionCards';
import { CollectionInfoData } from '@/constants';
import { CollectionInfo } from '@/lib/type';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// const fakeData=Array.from({length:5}).fill(1).map(i=>CollectionInfoData)

const Collections = () => {
    const [collections, setCollections] = useState<CollectionInfo[]>([])
    useEffect(()=>{
        getAllCollectionInfo().then(res=>{
            setCollections(res as CollectionInfo[])
        })
    }, [])
    return (
        <div className='grid grid-cols-4 gap-4 py-8'>
            {collections?.map(card => (
                <Link key={card.id} href={`/collection/${card?.collectionId}`}>
                    <CollectionDone sampleData={card} >
                        <div className="absolute w-full bottom-0 h-11 flex items-center justify-between bg-[#404833] px-2 text-white gap-2">
                            <div>{card.detailJson.name}</div>
                            <BuyButton data={card as any} />
                        </div>
                    </CollectionDone>
                </Link>
            ))}
        </div>
    )
}


export default Collections 