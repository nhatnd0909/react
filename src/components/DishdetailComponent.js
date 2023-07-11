import React, { Component } from "react";
import { Card, CardTitle, CardImg, CardImgOverlay, CardBody, CardText, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';
// class DishDetail extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedDishdetail: this.props.dish
//         }
//     }
//     renderDish(dish) {
//         if (dish != null)
//             return (
//                 <Card>
//                     <CardImg width="100%" src={dish.image} alt={dish.name} />
//                     <CardImgOverlay >
//                         <CardTitle>{dish.name}</CardTitle>
//                         <CardBody>{dish.description}</CardBody>
//                     </CardImgOverlay>
//                 </Card>
//             )
//         else {
//             return (
//                 <div></div>
//             )
//         }
//     }

//     renderComments(comments) {
//         if (comments != null) {
//             const comment = comments.map((comment) => {
//                 return (
//                     <div key={comment.id}>
//                         <li key={comment.id}>
//                             <p>{comment.comment}</p>
//                             <p>-- {comment.author},
//                                 &nbsp;
//                                 {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
//                             </p>
//                         </li>
//                     </div>
//                 );
//             });
//             return (
//                 <div >
//                     <h4> Comments </h4>
//                     <ul>
//                         {comment}
//                     </ul>

//                 </div>
//             )
//         }

//         else {
//             return (
//                 <div></div>
//             )
//         }
//     }

//     render() {
//         const dish = this.props.dish;
//         console.log(dish);

//         if (dish == null) {
//             return (<div></div>);
//         }
//         const dishItem = this.renderDish(dish);
//         const commentItem = this.renderComments(dish.comments);
//         return (
//             <div className='col-12 col-md-5 m-1'>
//                 {dishItem}
//                 {commentItem}
//             </div>
//         )
//     }



// }

function RenderDish({ dish }) {
    if (dish != null)
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody >
                    <CardTitle ><h5>{dish.name}</h5></CardTitle>
                    <CardText >{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    else {
        return (
            <div></div>
        )
    }

}

function RenderComments({ comments, addComment, dishId }) {

    if (comments != null) {
        const comment = comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author},
                            &nbsp;
                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                        </p>
                    </li>
                </div>
            );
        });
        return (
            <div >
                <h4> Comments </h4>
                <ul>
                    {comment}
                </ul>

            </div>
        )
    }
}

const DishDetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        </div>
    );


}

export default DishDetail;

