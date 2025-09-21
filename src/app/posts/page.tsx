import PostCard from "@/components/Posts/PostCard";
import { IPost } from "@/type";


const PostPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=9",
        {
            // cache: 'force-cache',
            // next: {
            //     revalidate: 30,
            // }
            cache: 'no-store'
        }
    );
    const posts = await res.json();
    console.log(posts);

    return (
        <div>
            <h1 className="text-center text-xl my-5">All Posts</h1>
            <div className="grid grid-cols-3 gap-4 w-[90%] mx-auto my-5">
                {posts.map((post: IPost) => (
                    <PostCard key={post?.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default PostPage;