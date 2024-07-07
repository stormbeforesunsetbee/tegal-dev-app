import BlogSection from '@/components/organisms/BlogSection';
import Template from '@/components/templates/Template';
import getAllNewestBlogsByPage from '@/data/remote/strapi/collection/get-all-newest-blogs-by-page';
import getBlogsPageContent from '@/data/remote/strapi/single/get-blogs-page-content';

export default async function Blogs() {
  const blogsPageContent = await getBlogsPageContent();
  const newestBlogs = await getAllNewestBlogsByPage(1);

  return (
    <Template>
      <BlogSection
        blogHeading={blogsPageContent?.data?.heading}
        blogs={newestBlogs?.data}
      />
    </Template>
  );
}
