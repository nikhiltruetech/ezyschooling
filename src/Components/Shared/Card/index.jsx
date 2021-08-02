import { Card, Button, ListGroup } from 'react-bootstrap'
import { history } from '../../config/history'
import { Spinner } from "react-bootstrap"
const CardPost = ({ title, body, name, comments, loading }) => {
    const handleClick = () => {
        history.push('/')
    }
    return (
        <div>
            <div className="p-1">
                <Button onClick={() => handleClick()}>Back</Button>
            </div>
            {loading ? <div className="text-center"><Spinner animation="grow" /></div> :
                <Card>
                    <Card.Header as="h5">Title - {title}</Card.Header>
                    <Card.Body>
                        <Card.Title>Author - {name}</Card.Title>
                        <Card.Text>
                            {body}
                        </Card.Text>
                        <h5 className="text-center">Comments</h5>
                        <ListGroup as="ul">
                            {comments ? comments.map((comment) => {
                                const { body } = comment;
                                return (
                                    <ListGroup.Item as="li">
                                        {body}
                                    </ListGroup.Item>
                                )
                            }) : null}
                        </ListGroup>
                    </Card.Body>
                </Card>
            }
        </div>
    )
}

export default CardPost
