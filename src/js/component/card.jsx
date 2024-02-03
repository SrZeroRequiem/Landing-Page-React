import React from 'react';

const Card = () => {
    return (
        <div className="col">
            <div className="card text-center p-0">
                <img className="card-img-top" src='https://placehold.co/500x325' alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    )
}
const Cards = () => {
    let content = []
    for (let index = 0; index < 4; index++) {
        content.push(<Card />)
    }
    return content;
}
export default Cards;