import React from "react";
import "./post-card-content.scss";

import landscape from "../../../assets/images/landscape.jpg";

function PostCardContent(props) {
  return (
    <div className="post-card-content">
      <p className="post-card-content__text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem mollitia
        at saepe minus, possimus iste obcaecati vitae voluptates tenetur
        deleniti placeat deserunt provident sapiente earum repellendus
        recusandae? Iste, facere asperiores. Impedit dignissimos ad molestias
        adipisci aperiam itaque quod doloremque id quaerat eveniet nihil eum
        dolorem eos animi corrupti aut, fuga a labore. Vitae, ut architecto.
        Itaque ea numquam distinctio animi? Itaque, id? Quam veritatis ex
        adipisci veniam ratione vel eligendi excepturi, itaque dolores! Saepe
        blanditiis tempora fugit in beatae. Eligendi, consequuntur. At quisquam
        numquam earum, neque fugiat tempore nesciunt in. Ratione aliquid
        sapiente eveniet temporibus omnis explicabo, alias error est earum dolor
        amet dolore hic mollitia vitae animi nihil doloribus, incidunt nam fuga.
        Ex nesciunt dolorem sunt, illo cum consectetur.
      </p>
      <img
        src={landscape}
        alt="Post Image"
        className="post-card-content__image"
      />
    </div>
  );
}

export default PostCardContent;
