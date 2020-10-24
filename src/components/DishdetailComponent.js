import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';


class Dishdetail extends Component {

    renderComments(dish) {
        return (
                 <Card className="col-12 col-md-5 m-1">
                    <CardBody>
                        <CardTitle>Comments</CardTitle>
                        {
                            dish.comments.map((item, index) => {
                                return (
                                    <ListGroup style={{marginBottom:10}}>
                                        <ListGroupItem>{item.author}</ListGroupItem>
                                        <ListGroupItem>{item.comment}</ListGroupItem>
                                        <ListGroupItem>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))}</ListGroupItem>
                                    </ListGroup>

                                )
                            })
                        }
                    </CardBody>
                </Card>
        )
    }
    render() {
        var dish = this.props.dish
        console.log(dish)
        return (
            dish != null ?
                <div className="container">
                    <Card className="col-12 col-md-5 m-1">
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    {this.renderComments(dish)}
                </div> :
                <div></div>
        );
    }
}

export default Dishdetail;


