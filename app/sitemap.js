const allBlogData = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`);
  const blogs = await response.json();
  return blogs;
};

// const allLatesBlogsData = async () => {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/seo`);
//   const blogs = await response.json();

//   return blogs.content;
// };
const URL = "https://www.zigzagdigitalsolutions.com/";

export default async function sitemap() {
  const getSortedPostsData = await allBlogData();
  // const latesBlogsData = await allLatesBlogsData();
  let posts = getSortedPostsData.map(({ _id, date }) => ({
    url: `${URL}/blogs/${_id}`,
    lastModified: new Date().toISOString(),
  }));
  // posts = latesBlogsData.map(({ path }) => ({
  //   url: `${URL}/blogs/latest/${path}`,
  //   lastModified: new Date().toISOString(),
  // }));

  const routes = [
    "",
    "portfolio?type=Brand%20Identity",
    "portfolio?type=Social%20Media",
    "contact",
    "portfolio",
    "portfolio?type=all",
    "services/Media",
    "services/Performance",
    "services/Website",
    "services/SEO",
    "services/Social",
    "services",
    "services/Corporate",
    "blogs",
    "about",
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}
