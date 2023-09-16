import { posts } from "./data";
import {useValue} from "./postContext";

export const List = () => {
  const {handleSavePost,isPostSaved}= useValue();

  return (
    <div className="list">
      {posts.map((p) => (
        <div className="post" key={p.id}>
          <h3>{p.text}</h3>
          <img src={p.img} alt={p.text} />
          {isPostSaved(p) ? (
            <img
              src="https://cdn-icons-png.flaticon.com/512/102/102279.png"
              alt="save"
              onClick={() => handleSavePost(p)}
            />
          ) : (
            <img
              src="https://cdn-icons-png.flaticon.com/512/64/64022.png"
              alt="delete"
              onClick={() => handleSavePost(p)}
            />
          )}
        </div>
      ))}
    </div>
  );
};
