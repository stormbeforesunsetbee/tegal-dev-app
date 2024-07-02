import { usePathname } from 'next/navigation';
import ChallengeItem from './ChallengeItem';

export default function ChallengeItemList({ challenges }: { challenges: any }) {
  const pathname = usePathname();

  return (
    <div
      className={`flex gap-10 w-full py-5 ${pathname === '/events'
        ? 'flex-wrap justify-center'
        : 'overflow-x-scroll md:overflow-hidden md:justify-center'
        }`}
    >
      {challenges?.map((challenge: any) => (
        <ChallengeItem
          key={challenge?.id}
          challengeSlug={challenge?.slug}
          challengeImage={challenge?.flyer_image?.url}
          challengeName={challenge?.name}
          challengeTotalRegistered={challenge?.total_registered}
          challengeMaxCapacity={challenge?.max_capacity}
          challengeDevPointReward={challenge?.dev_point}
          challengeDescription={challenge?.description}
        />
      ))}
    </div>
  );
}
