import { usePathname } from 'next/navigation';
import BlogItem from './BlogItem';

export default function BlogItemList({ blogs }: { blogs: any }) {
  const pathname = usePathname();

  return (
    <div
      className={`flex gap-10 w-full py-5 ${
        pathname === '/blogs'
          ? 'flex-wrap justify-center'
          : 'overflow-x-scroll md:overflow-hidden md:justify-center'
      }`}
    >
      {blogs?.map((blog: any) => (
        <BlogItem
          key={blog?.id}
          blogSlug={blog?.slug}
          blogImageSource={blog?.image?.url}
          blogTitle={blog?.title}
          blogPublishedDate={blog?.publishedAt}
          blogCreator={blog?.user?.name}
          blogBody={blog?.body}
        />
      ))}
    </div>
  );
}
