import React, { useEffect, useState } from 'react'
import { getAuthor, getComment, getSinglePost } from '../../Service/mainService'
import { useParams } from 'react-router'
import CardPost from '../../Shared/Card';
const SinglePost = () => {
    const [loading, setloading] = useState(false)
    const params = useParams();
    const [title, setTitle] = useState()
    const [body, setbody] = useState()
    const [comment, setComment] = useState()
    const [author, setAuthor] = useState()
    const { id } = params
    useEffect(() => {
        setloading(true)
        fetchPost()
        fetchComment()
        fetchAuthor()
    }, [])
    const fetchPost = () => {

        getSinglePost(id).then(res => {
            setbody(res?.data?.body)
            setTitle(res?.data?.title)
            setloading(false)
        })
    }
    const fetchComment = () => {
        getComment(id).then(res => {
            setComment(res?.data)
            setloading(false)
        })
    }
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
