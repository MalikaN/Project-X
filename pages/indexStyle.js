import css  from 'styled-jsx/css';

export default css`{
  
    // img {
    //     height: auto;
    //     max-width: 100%;
    //     vertical-align: middle;
    //   }
      .cards {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .cards__item {
        display: flex;
        padding: 0.85rem;
      }
      @media (min-width: 40rem) {
        .cards__item {
            width: 30%;
        }
      }
      @media (min-width: 56rem) {
        .cards__item {
          width:23%;
        }
      }
      .card {
        border-radius: 0.25rem;
        display: flex;
        flex-direction: column;
        overflow: hidden;
       
      }
      .card:hover .card__image {
        -webkit-filter: contrast(100%);
                filter: contrast(100%);
      }
      .card__content {
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        padding: 2px 2px 2px 2px;
        text-transform:capitalize;  
        height:110px;
        margin-top:5px;
      }
      .card__image {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 0.25rem 0.25rem;
        -webkit-filter: contrast(70%);
                filter: contrast(70%);
        overflow: hidden;
        position: relative;
        transition: -webkit-filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
        transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
        transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91), -webkit-filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
        // to auto-resize an image
        width:100%;
        height: 100%;
        object-fit: fill;
      }
      .card__image::before {
        content: "";
        display: block;
        padding-top: 56.25%;
      }
      @media (min-width: 40rem) {
        .card__image::before {
          padding-top: 66.6%;
        }
      }
      .card__title {
        font-size: 1.15rem;
        font-weight: 400;
        letter-spacing: 0.5px;
        font-size: 16px !important;
        line-height: 22px !important;
        padding-bottom: 5px;
        //Readmore 3 dots for title
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 300px;
      }    
      .card__text {
        flex: 1 1 auto;
        font-size: 13px;
        line-height: 1.5;
        margin-bottom: 1.25rem;
        letter-spacing: 0.5px !important;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        max-height:1.5em;
      }
      .link{
        cursor: pointer;
        text-decoration: none;
      }
      .imgOuterDiv{
        height: 300px; //first value 200px
        overflow: hidden;
        padding: 10px 0 10px 0;
        margin-bottom: 10px;
      }
      // .section {
      //   // position: relative;
      //   width: 100% !important;
      //   position: absolute !important;
      //   height: 100vh !important;
      //   min-height: 550px !important;
      //   /* overflow: hidden !important; */
      //   contain: strict !important;
      // }
      
      // .section img {
      //   position: absolute;
      // }
      
      // .topone {
      //   animation-name: fade;
      //   animation-timing-function: ease-in-out;
      //   animation-iteration-count: infinite;
      //   animation-duration: 2s;
      //   animation-direction: alternate;
      // }    
      // @keyframes fade {
      //   0% {
      //     opacity: 1;
      //   }
      //   25% {
      //     opacity: 1;
      //   }
      //   75% {
      //     opacity: 0;
      //   }
      //   100% {
      //     opacity: 0;
      //   }
      // }

      .crossfade > img{
        width: 100%;
        height: 70%;
        position: absolute;
        top: 0px;
        left: 0px;
        color: transparent;
        opacity: 0;
        z-index: 0;
        flex-shrink: 0;
        min-width: 100%;
        min-height: 100%
        // -webkit-animation: imageAnimation 14s linear infinite;
        // -moz-animation:  imageAnimation 14s linear infinite;
        -webkit-transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;
        animation-name: imageAnimation;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-duration: 15s;
        // animation-direction: alternate;
        animation-delay: 0s;
        
      }
      .crossfade > img:nth-child(2)  {
        animation-delay: 3s;
       // -webkit-animation-delay: 4s; //6
       // -moz-animation-delay: 4s;
        -webkit-transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;
   }
   
   .crossfade > img:nth-child(3) {
    animation-delay: 6s;
      //  -webkit-animation-delay: 8s;//12
       // -moz-animation-delay: 8s;
        -webkit-transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;
   }
   
   .crossfade > img:nth-child(4) {
    animation-delay: 9s;
       // -webkit-animation-delay: 12s;
       // -moz-animation-delay: 12s;//18
        -webkit-transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;
   }
   
   .crossfade > img:nth-child(5) {
    animation-delay: 12s;
       // -webkit-animation-delay: 16s;
       // -moz-animation-delay: 16s;//24
        -webkit-transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;
   }

  @keyframes imageAnimation { 
    0% { opacity: 0; animation-timing-function: ease-in;}
      8% { opacity: 1; animation-timing-function: ease-out; }
      17% { opacity: 1; }
      25% { opacity: 0; }
      100% { opacity: 0; }
}
   
}`