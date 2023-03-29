import { FeaturedPosts } from '../sections/index';
// eslint-disable-next-line import/named
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-10">
      <h2 className="text-center my-8 text-3xl font-semibold text-white">Featured Post</h2>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

        {/* Categories widget with 3 columns out of 12 */}
        <div className="lg:col-span-3 col-span-1">
          <div className="lg:sticky relative top-8">
            <Categories />
          </div>
        </div>

        {/* Post Card with 6 columns out of 12 */}
        <div className="lg:col-span-6 col-span-1">
          {posts.reverse().map((post, index) => (
            <PostCard key={index} post={post.node} />))}
        </div>

        {/* Post Widget (Previous Post/Related post) with 3 columns out of 12 */}
        <div className="lg:col-span-3 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

