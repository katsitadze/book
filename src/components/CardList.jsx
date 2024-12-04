import React from "react";
import Card from "../components/Card";
import karimage from "../assets/karamazov.jpg"
import remimage from "../assets/remarki.jpg"
import jorjimage from "../assets/orveli.png"
import marimage from "../assets/piuzo.png"
import '../App.css';

const data=[
   {id:1, author:"Fyodor Dostoyevsky", name:"Brother Karamazov" ,image:karimage,
   description:'The Brothers Karamazov is a murder mystery, a courtroom drama, and an exploration of erotic rivalry in a series of triangular love affairs involving the “wicked and sentimental” Fyodor Pavlovich Karamazov and his three sons',
   actress:"Fyodor ,Dmitri , Ivan , Alexei , Smerdyakov"},
   { id:2, author:"Erich Maria Remarque", name:"Three comrades", image:remimage,
    description:'Three Comrades portrays the greatness of the human spirit, manifested through characters who must find the inner resources to live in a world they did not make, but must endure.',
     actress:"Robert Locamp, Otto Kester,Gottfried Lenz"},
   { id:3, author:"George Orwell", name:"1984", image:jorjimage,
   description:"It tells the story of Winston Smith, a citizen of the miserable society of Oceania, who is trying to rebel against the Party and its omnipresent symbol, Big Brother",
    actress:"Winston Smith,  Julia, O'Brien"},
   { id:4, author:"Mario Puzo", name:"The Godfather", image:marimage,
   description:"A violent, emotionally charged exploration of a Mafia family, The Godfather is a mythic gangster film, but it is also the story of a father and his sons.",
    actress:"Vito Corleone , Michael Corleone , Sonny Corleone ,Tom Hagen"}
]

const CardList =()=>{
  function action(charachters){
   alert(`characters are ${charachters}`)
  }
  return (
    <div className="data">
      {data.map((card) => <Card key={card.key} author={card.author} name={card.name} image={card.image} description={card.description} actress={card.actress} action={action}/>)}

    </div>
  )
  }
export default CardList