import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function SocialIconList({
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
    <div className="flex gap-3">
      <Link href={instagramURL} target="_blank">
        <FaInstagram size={20} className="cursor-pointer hover:text-gray-300" />
      </Link>
      <Link href={youtubeChannelURL} target="_blank">
        <FaYoutube size={20} className="cursor-pointer hover:text-gray-300" />
      </Link>
      <Link href={linkedinURL} target="_blank">
        <FaLinkedinIn
          size={20}
          className="cursor-pointer hover:text-gray-300"
        />
      </Link>
      <Link href={githubURL} target="_blank">
        <FaGithub size={20} className="cursor-pointer hover:text-gray-300" />
      </Link>
    </div>
  );
}
