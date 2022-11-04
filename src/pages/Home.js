import React from 'react'
import { Link } from 'react-router-dom';
import profileimg from "../assets/images/image.jpg";
import slack from '../assets/images/slack.jpeg'
import github from '../assets/images/Icon.png'
import arrow from '../assets/images/arrow.png'
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="wrapper">

<div className='arrow-img-container'>
<img className='arrow' src={arrow} alt='arrow' />
<p className='dots'>. . .</p>
</div>


<div className="profile">
  <img src={profileimg} alt="profile-img" id="profile__img" />
  <h2 id="twitter">DodoCodesss_</h2>
  <h4 id="slack">Aminat Ahmed</h4>
</div>

<div className="links">
  <Link to='https://www.twitter.com/dodocodesss_'>Twitter</Link>
  <Link id="btn__zuri" to='https://training.zuri.team/'>Zuri Team</Link>
  <Link id="books" to='http://books.zuri.team/'>Zuri Books</Link>
  <Link id="book__python" to='https://books.zuri.team/python-for-beginners?ref_id=dodocodesss'>Python Books</Link>
  <Link id="pitch" to='https://background.zuri.team/'>Background Check for Coders</Link>
  <Link id="book__design" to='https://books.zuri.team/design-rules'>Design Books</Link>
  <Link id='contact' to='/contact'>Contact Me</Link>
</div>

<div className='icons'>
    <img className='slack-icon' src={slack} alt='slack-icon' />
    <img className='github-icon' src={github} alt='github-icon'/>
</div>

<div className='hr' />

<Footer />

</div>
  )
}

export default Home