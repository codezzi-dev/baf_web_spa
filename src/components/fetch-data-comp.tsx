import { useGetAllPosts } from "@/hooks/post.hook";

export default function FetchDataComp() {
    const { data, isLoading, error } = useGetAllPosts();
    if (isLoading) {
        return <div>Loading...</div>;
            }
    if (error) {
        return <div>Error fetching data</div>;
            }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Posts</h2>  
            <ul>
                {data?.map(post => (
                    <li key={post.id} className="mb-2 text-white">
                        <h3 className="text-xl font-semibold">{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
