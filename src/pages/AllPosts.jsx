import service from "../appwrite/config"
import { useEffect, useState } from "react"
import { Container, PostCard } from "../components"

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {});
    service.getPosts([]).then((posts) => {
        if(posts){
            setPosts(posts.documents);
        }
    }) 

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="w-1/4 p-2">
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
