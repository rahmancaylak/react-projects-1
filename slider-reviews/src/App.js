import React,{useState, useEffect} from 'react';
import Data from './data'

function App() {
  const [data, setData] = useState(Data);
  const [index, setIndex] = useState(0);

  const prevSlide = () => index === 0 ? setIndex(data.length - 1) : setIndex(index - 1)
  const nextSlide = () => index === data.length - 1 ? setIndex(0) : setIndex(index + 1)

  useEffect(() => {
    const interval = setInterval(() => {nextSlide()}, 5000)
    return () => {
      clearInterval(interval)
    }
  }, [index])
  

  return (
    <section className="section">
      <div className='title'>
      <h2><span>/</span>Reviews</h2>
      </div>
      <div className='section-center'>
        {
          data.map((singleData, key) => {
            const {id, image, name, title, quote} = singleData
            let slideClass = 'nextSlide';
            if(index === key){
              slideClass = 'activeSlide' 
            }else if(key === index - 1 || (index === 0 && key === data.length - 1)){
              slideClass = 'lastSlide'
            }else{
              slideClass = 'nextSlide'
            }
            return(
            <article key={id} className={slideClass}>
              <img src={image} alt={name} className='person-img'/>
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path></svg>
            </article>
          )
          })}
        <button className="prev" onClick={prevSlide}><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
        <button className="next" onClick={nextSlide}><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
      </div>
    </section>
  );
}

export default App;
