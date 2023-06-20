import React, { useEffect, useState } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takimport Home from './Home';


function Home() {
    
    const [posts, setPost] = useState([]);

    useEffect(() => {
        fetch(`https://www.homeopet.com/wp-json/wp/v2/posts/`)
        .then(response => {
        return response.json();
        })
        .then(data =>{
            setPost(data);
        })
    })

    return (
        <>
          <div className='container'>
            <div className='row'>
              {posts.map(P => (
                <div className="col-lg-4" key={P.id} data-animate="fadeInLeft" aria-selected="true">
                    <a href={P.link} className="plain">
                    <div className="box box-text-bottom box-blog-post has-hover">
                        <div className="box-image">
                            <div classNameName="image-cover">
                                {/* <img width="100%" height="200" src={P.yoast_head_json.og_image.url} /> */}
                                <img width="100%" height="200" src = {P.yoast_head_json.og_image[0].url} />
                            </div>
                        </div>
                        <div className="box-text text-center">
                            <div className="box-text-inner blog-post-inner">
                            <h5 className="post-title is-large">{P.title.rendered}</h5>
                              {P.excerpt.rendered.replace('<p>', '').replace('</p>','')}
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
              ))}
            </div>
          </div>
        </>
      );
}

export default Home;
