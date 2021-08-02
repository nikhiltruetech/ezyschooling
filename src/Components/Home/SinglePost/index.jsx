import React, { useEffect, useState } from 'react'
import { getAuthor, getComment, getSinglePost } from '../../Service/mainService'
import { useParams } from 'react-router'
import CardPost from '../../Shared/Card';
const SinglePost = () => {
    const [loading, setloading] = useState(false)

    // For fetching Id from URL
    const params = useParams();

    const [title, setTitle] = useState()
    const [body, setbody] = useState()
    const [comment, setComment] = useState()
    const [author, setAuthor] = useState()

    // Destructing Id from params
    const { id } = params
    
    useEffect(() => {
        setloading(true)
        fetchPost()
        fetchComment()
        fetchAuthor()
    }, [])
    const fetchPost = () => {
        // Calling single Post Service
        getSinglePost(id).then(res => {
            setbody(res?.data?.body)
            setTitle(res?.data?.title)
            setloading(false)
        })
    }
    // Calling fetch Comment Service
    const fetchComment = () => {
        getComment(id).then(res => {
            setComment(res?.data)
            setloading(false)
        })
    }
    // Calling fetch Author Service
    const fetchAuthor = () => {
        getAuthor(id).then(res => {
            setAuthor(res.data?.name)
            setloading(false)
        })
    }
    return (
        <div className="singlePost">
            <div className="container p-5">
                <CardPost title={title} body={body} name={author} comments={comment} loading={loading} />
            </div>
        </div>
    )
}

export default SinglePost
