import css  from 'styled-jsx/css';

export default css`{
  
      .cardOuterDiv{
        width: 90%;
        display: flex;
        flex-direction: column;
        align-self: center;
      }
      .cards {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .mainDiv {
        display: flex;
        flex-direction: column;
      }
      .cards__item {
        display: flex;
        // padding: 2.5rem;//0.85rem
      }
      // @media only screen and (max-width : 992px)  {
      //   .cards__item {
      //     width: 40%;
      //   }
      // }
      // @media only screen and (max-width : 320px)  {
      //   .cards__item {
      //     width:100%;
      //   }
      // }
      @media screen and (min-width: 769px) {
        .cards__item {
          width: 33.33%;
        }
      }  
      @media screen and (min-device-width: 481px) and (max-device-width: 768px) { 
        .cards__item {
          width: 100%;
        }
      }
    @media only screen and (max-device-width: 480px) {
      .cards__item {
        width:100%;
      }
      }
      .card {
        border-radius: 0.25rem;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        min-width: 100%;
      }
      .card:hover .card__image {
        -webkit-filter: contrast(100%);
                filter: contrast(100%);
      }
      .outerCard{
        display: flex;
        justify-content: center;
        width:96%;
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
        font-weight: 600;
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
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        margin-bottom: 1.25rem;
        letter-spacing: 0.5px !important;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        max-height:1.5em;
      }
      h3{
        font-weight: 800 !important;
        margin-bottom: 20px !important;
        font-size: 24px !important;
        line-height: 30px !important;
        letter-spacing: normal !important;
        color: rgb(72, 72, 72) !important;
        padding-top: 2px !important;
        padding-bottom: 2px !important;
      }
      .link{
        cursor: pointer;
        text-decoration: none;
        min-width: 100%;
      }
      .imgOuterDiv{
        height: 300px; //first value 200px
        overflow: hidden;
        padding: 10px 0 10px 0;
        margin-bottom: 10px;
      }
      .outerImagesDIv{
        height: 75vh;   
        position: relative;
        margin-bottom:25px;

      }

      .innerImagesDiv>img{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        color: transparent;
        z-index: 0;
        flex-shrink: 0;
        min-width: 100%;
        min-height: 100;
        -webkit-transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;
        animation-name: imageAnimation !important;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-duration: 15s;//15
        // animation-direction: alternate;
        animation-delay: 0s;
        
      }
      .innerImagesDiv >img:nth-child(2)  {
        animation-delay: 3s;
       // -webkit-animation-delay: 4s; //6
       // -moz-animation-delay: 4s;
        -webkit-transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;
   }
   
   .innerImagesDiv >img:nth-child(3) {
    animation-delay: 6s;
      //  -webkit-animation-delay: 8s;//12
       // -moz-animation-delay: 8s;
        -webkit-transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;
   }
   
   .innerImagesDiv >img:nth-child(4) {
    animation-delay: 9s;
       // -webkit-animation-delay: 12s;
       // -moz-animation-delay: 12s;//18
        -webkit-transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;
   }
   
   .innerImagesDiv >img:nth-child(5) {
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
  .button-bar-overflow{
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 80%;
    margin-bottom: 40px;
  }
  .button-bar-overflow .button-bar{
    margin-top: 0px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .button-bar{
    display: block;
    width: auto;
    white-space: nowrap;
    text-align: center;
    padding-top: 2px;
    margin: 0;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
  }
  .button{
    -webkit-appearance:none;
    -moz-appearance:none;
    appearance:none;
    border:none;
    cursor:pointer;
    font-weight:900;
    letter-spacing:0.9px;
    font-size:13px;
    line-height:100%;
    box-shadow:0 0px 9px 0 rgba(0,0,0,0.11);
    -webkit-backface-visibility:hidden;
    -webkit-transform:translate3D(0, 0, 0);
    -webkit-transition:-webkit-box-shadow 0.35s, -webkit-transform 0.35s;
    transition:-webkit-box-shadow 0.35s, -webkit-transform 0.35s;
    transition:box-shadow 0.35s, transform 0.35s;
    transition:box-shadow 0.35s, transform 0.35s, -webkit-box-shadow 0.35s, -webkit-transform 0.35s;
    -webkit-font-smoothing:subpixel-antialiased;
    text-align:center;
    border-radius:40px;
    text-transform:uppercase;
    padding:10px 17px 9px 17px;
    text-decoration:none;
    }
    .button:hover{
      box-shadow:0 0px 18px 0 rgba(0,0,0,0.2);
      -webkit-backface-visibility:hidden;
      backface-visibility:hidden
  }
    .no-bs .button{
      -webkit-box-shadow:none;
      box-shadow:none
    }
    .no-bs .button:hover{
      -webkit-box-shadow:none;
      box-shadow:none;
      background-color:#E6E6E6
    }
    .button.active{
      background-color:#333;
      color:white
    }
    .button.active:hover{
      background-color:#333;
      color:white
    }
    .button-bar .button {
      display: inline-block;
      margin: 10px 10px 10px 5px;
      white-space: nowrap;
    }
    .button.grey {
      background-color: #F9F9FA;
      color: #333;
    }
    @media only screen and (max-width: 991px)
    .button-bar {
      display: block;
      width: auto;
      white-space: nowrap;
      text-align: center;
      padding-top: 2px;
      margin: 0;
    }

}`
