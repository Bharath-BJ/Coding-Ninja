import { useValue } from "./postContext";

export const Navbar = () => {
  // remove this and get the value from context
  const {savedPosts,showSavedList,setShowSavedList, handleReset}=useValue();

  return (
    <div className="navbar">
      <span onClick={() => setShowSavedList(!showSavedList)}>
        Saved Posts: {savedPosts.length} {/* show length of saved posts here */}
      </span>
      {showSavedList && (
        <div className="saved-list">
          {savedPosts.map((p) => (
            <div className="saved-post" key={p.id}>
              <h3>{p.text}</h3>
              <img src={p.img} alt={p.text} />
            </div>
          ))}
        </div>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
