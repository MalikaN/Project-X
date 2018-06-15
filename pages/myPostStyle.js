import css from 'styled-jsx/css';

export default css`{
    img {
        height: auto;
        max-width: 100%;
        vertical-align: middle;
      }
      .btn {
        font-family: 'Roboto','Helvetica Neue', Helvetica, Arial, sans-serif;
        background-color: #407FC7;
        border: 1px solid #cccccc;
        color: #fff;
        padding: 0.5rem;
        cursor:pointer;
        border-radius:2px;
        align-items: flex-start;
        text-align: center;
        box-sizing: border-box;
        font: 400 13.3333px Arial;
        text-rendering: auto;
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        margin: 0em;
      }
      .btn:hover{
        background-color:white;
        color:#696969;
        border: 1px solid #696969;
    }
      .btn--block {
        display: block;
        width: 100%;
      }
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
        //   width: 50%;
            width: 30%;
        }
      }
      @media (min-width: 56rem) {
        .cards__item {
          width:25%;
        }
      }
      .card {
        // background-color: white;
        border-radius: 0.25rem;
        // box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        // height: 450px;
        width:344px;
      }
      .card:hover .card__image {
        -webkit-filter: contrast(100%);
                filter: contrast(100%);
      }
    //   .card:hover .editimg{
    //       display:block;
    //   }
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
        padding-bottom:5px;
      }    
      .card__text {
        flex: 1 1 auto;
        font-size: 14px !important;
        line-height: 1.5;
        margin-bottom: 1.25rem;
        letter-spacing: 0.5px !important;
        overflow:hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        max-height:4.5em;
      }
      a{
        cursor:pointer;
        text-decoration: none;
        color:inherit;
      }
      .imgOuterDiv{
        height: 200px;
        overflow: hidden;
        padding: 10px 0 10px 0;
        margin-bottom:10px;
      }
      .editimg{
        height:4%;
        width:4%;
        margin-left:2px; 
        // display:none;
    }
}`