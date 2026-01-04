import { Row, Col, Card, Button } from "react-bootstrap"


export const Feed = () => {
    const posts = [
        {
            "_id": "695a776d40047aa44197c8ed",
            "imageUrl": "https://searchengineland.com/wp-content/seloads/2014/08/google-images3-ss-1920-768x432.jpg",
            "caption": "this is a google image 6",
            "user": {
                "_id": "695a760c15fd6d80982bf840",
                "username": "kundan",
                "email": "kundankv2@gmail.com",
                "password": "$2b$10$mq/0T980otvOc5/ynSnV0etXH2XXoXj4SkzcTsJVc4p0bFWf9.L52",
                "__v": 0
            },
            "createdAt": "2026-01-04T14:21:33.833Z",
            "updatedAt": "2026-01-04T14:21:33.833Z",
            "__v": 0
        },
        {
            "_id": "695a77e340047aa44197c8f3",
            "imageUrl": "https://s3.amazonaws.com/images.seroundtable.com/google-logo-leaking-1717014604.jpg",
            "caption": "this is a google image 6",
            "user": {
                "_id": "695a760c15fd6d80982bf840",
                "username": "kundan",
                "email": "kundankv2@gmail.com",
                "password": "$2b$10$mq/0T980otvOc5/ynSnV0etXH2XXoXj4SkzcTsJVc4p0bFWf9.L52",
                "__v": 0
            },
            "createdAt": "2026-01-04T14:23:31.306Z",
            "updatedAt": "2026-01-04T14:23:31.306Z",
            "__v": 0
        }
    ]
    return (
        <>
            <Row>
                {posts.map(post => (
                    <Col lg={4} md={6} xs={12} className="mt-2" key={post._id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={post.imageUrl} />
                            <Card.Body>
                                <Card.Text>
                                    {post.caption}
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card></Col>
                ))}

            </Row>
        </>
    )
}