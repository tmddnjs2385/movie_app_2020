import React from 'react';
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {// {fav} 대신에 props.fav
    return (
        <div>
            <h1>i like {name}</h1>
            <img alt={name} src={picture} width="500" />
            <h1>{rating}/5.0</h1>
        </div>
    ); // ctrl + d를 하면 함수 이름을 한번에 변경할 수 있다. 
} //img에는 반드시 alt를 설정해야한다

Food.propTypes = {//propTypes로 해야한다. 
    name: PropTypes.string.isRequired,// 반드시 호출되어야 한다. 
    picture: PropTypes.string.isRequired,// 반드시 호출되어야 한다. 
    rating: PropTypes.number// 반그시 호출이 될 필요는 없다
}

const foodILike = [{
    id: 1,
    name: "kimchi",
    image: "https://steemitimages.com/DQmX3EbDRWDggnw6L43QyQA8Az8CaQMXJqRXVJwqzek2DGY/images%20(4).jpg",
    rating: 4.8
},
{
    id: 2,
    name: "samyeopsal",
    image: "https://www.shinsegaegroupinside.com/wp-content/uploads/2019/12/%EC%A3%BC%EB%A7%90%EC%9D%84-%EC%9E%A1%EC%95%84%EB%9D%BC-%EC%9D%B4%EB%A7%88%ED%8A%B8-%EC%82%BC%EA%B2%B9%EC%82%B4-990%EC%9B%90-1.jpg",
    rating: 4.2
},
{
    id: 3,
    name: "Bibimbap",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2018/10/03/355b5cd5c3beb1a775c82ee425dcd1931.jpg",
    rating: 3.1
}
];

function renderfood(dish) {
    return (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />);
}


function App2() {
    return (
        <div>
            <div className="App">
                hello!
     </div>
            {/* <Food fav="seunsdswong" something={true} papapapa={["hello", 1, 2, 3, 4, true]} /> */};
            {foodILike.map(renderfood)};
            {/* {foodILike.map(dish=><Food key={dish.id} name={dish.name} picture={dish.image}></Food>)}; */};
        </div>
    );
}

export default App2;
