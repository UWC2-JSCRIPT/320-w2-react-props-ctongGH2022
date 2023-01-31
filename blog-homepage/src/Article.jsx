import './Article.css';
import React from 'react';
import PropTypes from 'prop-types';

function Article({article}){ 
  // Display date in 'Month Day'  
  function formatDate(date){
      return new Date(date).toLocaleDateString('en-us',{month:"short",  day:"numeric"})
  }

  //Display text if Audio available
  function isAudioAvailable(audio){
    if(audio){
      return '* Audio available';
    }
    return null;
   }

  //Display text if Member preview
  function isMemberPreview(preview){
   if(preview){
     return '* Member preview';
   }
   return null;
  }

  const{
      title, 
      description, 
      image, 
      link, 
      author, 
      postedDate, 
      minutesToRead,      
      audioAvailable,
      memberPreview} = article

   return(
      <div className='article'> 
        <p>
          <a href={article.link}><img src={article.image} className='image' alt="image" width="250" height="250"></img></a>
        </p>
        <p>
          {isAudioAvailable(article.hasAudioAvailable)}<br></br>
           {isMemberPreview(article.memberPreview)}
           <h4>{article.title}</h4>
          {article.description}
        </p> 
        <p>
        <img src={article.author.image}></img>
        </p>     
        <p>{article.author.name}<br></br>      
          {formatDate(article.postedDate)} - {article.minutesToRead} min read
        </p>       
      </div>
   ) 
}

export default Article;