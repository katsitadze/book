const Card=({image,author,name,description,charachters}) => {
 return (
<div classNme="card">
<h1 className="author">{author}</h1>
<h2 className="name">{name}</h2>
<div>
    <img src={image} alt={name} />
</div>
<div className="descrption">
<p className="desc">{description}</p>
<p className="char">{charachters}</p>
</div>
 <button onClick= {() => action(charachters)} className="btn"> </button>
 </div>
 )


}




export default Card