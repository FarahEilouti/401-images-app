import React,{useState} from 'react';
import ChildCard from "./CatChild";
import data from "./Images.json";

function Parent() {
  const [AllLikes, setAllLikes] = useState(0);

  const increase = () => {
    setAllLikes(AllLikes + 1);

  };


  return (
    <>
    <div>
      {data.map((D) => {
        return <ChildCard img={D.image_url} title={D.title} total={increase}/>;
      })}
    </div>
    <h1>
      Total likes = {AllLikes}
    </h1>
    </>

    
  );
}

export default Parent;
