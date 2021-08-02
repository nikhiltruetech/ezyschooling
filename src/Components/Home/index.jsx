import { useEffect, useState } from "react"
import { ListGroup } from "react-bootstrap"
import { history } from "../config/history"
import { getPost } from "../Service/mainService"

const Home = () => {
    const [post, setPost] = useState()
    useEffect(() => {
        fetchPost();
    }, [])
    const fetchPost = () => {
        getPost().then(res => {
            setPost(res)
        })
    }
    const handleClick = (id) => {
        history.push(`/post/${id}`)
    }
    return (
        <div className="home">

            <h2 className="text-center">Available Posts</h2>
            <div className="container p-4">
                <ListGroup as="ul">
                    {post ? post.map((post) => {
                        const { title, id } = post
                        return (
                            <div key={id} className="cursor-pointer" onClick={() => handleClick(id)}>
                                <ListGroup.Item as="li">
                                    {title}
                                </ListGroup.Item>
                            </div>
                        )
                    }) : null}
                </ListGroup>
            </div>
        </div >
    )
}

export default Home
