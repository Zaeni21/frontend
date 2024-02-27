import { getRankCreatorByItemCollectionAmount } from '@/api/thegraphApi';
import { CreatorRank } from '@/lib/type';
import { cn, getEllipseAddress } from '@/lib/utils';
import { useState, useEffect } from 'react';

function TopParticipatingCreator() {
  const [creators, setCreators] = useState<CreatorRank[]>([])

  useEffect(() => {
    getRankCreatorByItemCollectionAmount().then((res) => setCreators(res));
  }, []);

  return (
    <div>
      <div className='text-white text-2xl font-bold'>Top Participating Creator</div>
      <div className='text-darkgreen mt-2'>
        <div className={cn('flex py-2 border-y border-darkgreen text-xl',)}>
          <div className='w-40'>RANK</div>
          <div className='flex-1'>ADDR</div>
          <div className='w-60 text-center'>Participating Collections</div>
        </div>
        {creators.map((creator, i) => (
          <ListItem index={i} data={creator} key={creator.address} />
          ))}
      </div>
    </div>
  );
}
function ListItem(props: { index?: number, data: CreatorRank }) {
  const { index, data } = props
  return (
    <div className={cn('flex py-2 text-2xl')}>
      <div className='w-40 indent-4'>{index ?? 0 + 1}</div>
      <div className='flex-1'>{getEllipseAddress(data.address)}</div>
      <div className='w-60 text-center'>{data.itemsCollection}</div>
    </div>
  );
}
export default TopParticipatingCreator;
