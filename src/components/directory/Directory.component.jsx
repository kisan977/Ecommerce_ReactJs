import React, { Component } from 'react';
import './Directory.style.css';


import MenuItem from '../menu-item/MenuItem.component'

export class Directory extends Component {
    constructor(){
        super();
        this.state = {
            sections:
            [
                {
                  title: 'hats',
                  imageUrl: 'images/hats.jpg',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'images/jackets.jpg',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'watch',
                  imageUrl: 'images/watch.jpg',
                  id: 3,
                  linkUrl: 'shop/watcg'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'images/sneakers1.jpg',
                  id: 4,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'images/womens.jpg',
                  
                  id: 5,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'images/mens1.jpg',
               
                  id: 6,
                  linkUrl: 'shop/mens'
                }
              ]
              
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({title,id,imageUrl,size})=>(
                    <MenuItem title={title} key={id} imageUrl={imageUrl} size={size}/>
                ))}
               
                
            </div>
        )
    }
}

export default Directory;
