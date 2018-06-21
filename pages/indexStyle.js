import css from 'styled-jsx/css';

export default css`{
    img {
        height: auto;
        max-width: 100%;
        vertical-align: middle;
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
}`