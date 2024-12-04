import React from 'react';

const Card=({image,author,name,description,actress,action}) => {
 return (
<div classNme="card">
<div className="text-frame">
    <h1 className="author">{author}</h1>
    <h2 className="name">{name}</h2>
  </div>
<div >
    <img src={image} alt={name} className="img"  />
</div>
<div className="description">
  <div className="info-frame">
    <div className="desc">{description}</div>
    <div className="char">{actress}</div>
  </div>
</div>
 <button onClick= {() => action(actress)} className="btn"> click</button>
 </div>
 )


}




export default Card