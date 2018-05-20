import css from 'styled-jsx/css';

export default css`{
    .menu{
        display:flex;
        justify-content:space-between;
        width: 100%;
        height:40px;
        background-color:#FFFFFF;
        box-shadow: 0 2px 0 rgba(93, 96, 99, .1);
        font-family: 'Century';
      
     }
     .submenu{
       display:flex;
       justify-content: space-around;
       width:250px;
    }
    .logo{
        margin:10px;
    }
    .title{
        font-size:20px; 
        text-decoration:none;
        color:#000;  

    }
    .addpost >a{
        margin: 13px 0 10px 0px;
        text-decoration:none;
        color:#000;  
        vertical-align:-webkit-baseline-middle;
    }

    .signup >a{
        margin:  13px 10px 10px 20px;
        text-decoration:none;
        color:#407FC7;
        vertical-align:-webkit-baseline-middle;
    }
}`