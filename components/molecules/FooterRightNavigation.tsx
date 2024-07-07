import SocialIconList from './SocialIconList';

export default function FooterRightNavigation({
  instagramURL,
  youtubeChannelURL,
  linkedinURL,
  githubURL,
}: {
  instagramURL: string;
  youtubeChannelURL: string;
  linkedinURL: string;
  githubURL: string;
}) {
  return (
    <div className="px-5">
      <SocialIconList
        instagramURL={instagramURL}
        youtubeChannelURL={youtubeChannelURL}
        linkedinURL={linkedinURL}
        githubURL={githubURL}
      />
    </div>
  );
}
