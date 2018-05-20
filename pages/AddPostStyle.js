import css from 'styled-jsx/css';

export default css`{
    .container{
        display: flex;
        flex-direction: column;
    }
    .status-bar{
        box-sizing: border-box;
        padding-right: 20px;
        padding-left: 20px;                     
        margin-right: auto;
        margin-left: auto;
        height:100px;
       
       
    }
    .inner-status-bar{
        padding-top:40px;
        font-size:1.5rem;
        line-height: 35px!important;
        border-bottom: 1px solid!important;
        color:#0000008a;
        position: relative!important;
        width: 740px!important;
        padding-bottom: 10px;
    }
    .author-pane{
        padding-right: 20px;
        padding-left: 20px; 
        margin-right: auto;
        margin-left: auto;
        width: 740px!important;
        color:#000000ad;
    }
    .inner-author-pane{
        padding:20px 0;
        color:#000;
    }
    .title{
        padding-right: 20px;
        margin-right: auto;
        margin-left: auto;
        width: 740px;
        border-left: 1px solid #0000008a;
    }
    .inner-title{
        padding-right: 20px;
        padding-left:10px;
        width:100%;
        margin: 0 auto;
    }
    input{
        border: 0px;
        border-radius: 2px;
        width: 100%;
        height: 44.5px;
        padding-left: 10px;
    }
    textarea:focus, input:focus{
        outline: none;
    }
    .post-details{
        margin-top:30px;
    }
    .inner-post-details{
        padding-right: 20px;
        margin-right: auto;
        margin-left: auto;
        width: 740px;
    }
   .title-text{
    font-size: 30px;
    }
   .post-text{
    font-size: 24px;
   }

}`