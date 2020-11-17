import React from "react";
import "./home.scss";

import Dashboard from "../../layout/dashboard/dashboard";
import PostCard from "../../components/post-card/post-card";

import avatar from "../../assets/images/face-portrait.jpg";
import palmTrees from "../../assets/images/palm-trees.jpg";
import pridePerson from "../../assets/images/pride-person.jpg";
import mountain from "../../assets/images/mountain.jpg";

function Home(props) {
  return (
    <Dashboard>
      <div className="home">
        <div className="home__post-container">
          {posts.map((post, i) => {
            return (
              <div key={i} className="home__post-item">
                <PostCard post={post} />
              </div>
            );
          })}
        </div>
      </div>
    </Dashboard>
  );
}

const posts = [
  {
    avatar: avatar,
    name: "Kyle Lambert",
    createdAt: "10th March, 2019",
    post:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ducimus doloremque labore obcaecati aut ratione maiores animi cupiditate veniam quae architecto sed inventore, itaque dolore. Accusantium itaque quo debitis eveniet?Nulla doloremque suscipit eius quis animi deleniti cupiditate sint provident impedit. Ipsam ullam doloremque temporibus repellat dicta repudiandae rerum enim quam, consectetur perferendis corrupti officia. Voluptatum non et architecto repellendus.",
    image: mountain,
  },
  {
    avatar: avatar,
    name: "Bobby Daws",
    createdAt: "1st December, 2020",
    post:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore natus fugit modi voluptates, obcaecati repellat totam illo rerum veniam temporibus dolor quas suscipit ad, fugiat doloremque. Quibusdam, doloribus deserunt. Possimus.",
    image: pridePerson,
  },
  {
    avatar: avatar,
    name: "Troy Mitchell",
    createdAt: "26th September, 2018",
    post:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deleniti mollitia eos error nihil inventore assumenda. Esse tenetur suscipit fugiat. Ipsum nostrum assumenda ad ducimus, numquam quod nisi! Fuga, atque! Esse sapiente eos nisi! Error voluptatem tenetur aspernatur, velit et laborum blanditiis expedita nostrum at. Qui facere eaque voluptas dolore, excepturi in quibusdam quo hic vel rerum id culpa aut. Asperiores veniam facere, vitae in sed alias a omnis dolorem nam, adipisci mollitia neque, error blanditiis atque? Ipsum alias animi eum amet quasi, cum delectus veritatis soluta, reiciendis consequuntur possimus?",
    image: palmTrees,
  },
];

export default Home;
