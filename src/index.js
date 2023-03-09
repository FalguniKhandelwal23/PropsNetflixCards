import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

import Card  from './Cards';

ReactDOM.render(
  <>
  <h1 className='heading_style'> List of top 3 Netflix Series in 2020</h1>
<Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
  title="A Netflix Original Series"
  sname='DARK'
  LINK="https://www.netflix.com/in/title/80100172?source=35"
/>
<Card imgsrc="https://wallpapercave.com/wp/wp7418473.jpg"
  title="A Netflix Original Series"
  sname='extra curricular'
  LINK="https://www.netflix.com/in/title/80990668?source=35"

/>
<Card imgsrc="https://wallpapercave.com/wp/wp5522061.jpg"
  title="A Netflix Original Series"
  sname='Stanger Things'
  LINK="https://www.netflix.com/in/title/80057281?source=35"

/>


</>
 ,document.getElementById('root')
);