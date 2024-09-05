import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import { useSelector } from 'react-redux';


function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading,setLoading]=useState(true)
    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        if (userData && userData.$id) {
            appwriteService.getPosts([]).then((posts) => {
                if (posts) {
                    const userPosts = posts.documents.filter(post => post.userId === userData.$id);
                    setPosts(userPosts);
                    setLoading(false);
                }
            });
        }
    }, [userData]);

    if(loading)
    {
        return <div>Loading...</div>
    }
    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts