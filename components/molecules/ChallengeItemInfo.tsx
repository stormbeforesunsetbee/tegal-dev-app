import TextHeadingItem from "../atoms/TextHeadingItem";
import TextBodyInfoItem from "../atoms/TextBodyInfoItem";
import { TbProgressBolt } from "react-icons/tb";
import TextBodyItem from "../atoms/TextBodyItem";

export default function ChallengeItemInfo({
  challengeName,
  challengeTotalRegistered,
  challengeMaxCapacity,
  challengeDevPointReward,
  challengeDescription,
}: {
  challengeName: string,
  challengeTotalRegistered: number,
  challengeMaxCapacity: number,
  challengeDevPointReward: number,
  challengeDescription: string,
}) {
  return (
    <div className="flex flex-col gap-5">
      <TextHeadingItem text={challengeName} />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <p className="text-xs">
              {`${challengeTotalRegistered}/${challengeMaxCapacity} Challenger Registered`}
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <TbProgressBolt />
          <TextBodyInfoItem text={`${challengeDevPointReward} Dev Point`} />
        </div>
      </div>
      <TextBodyItem text={challengeDescription} />
    </div>
  );
}