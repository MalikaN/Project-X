import css from 'styled-jsx/css';


export default css`
   
    .menu{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 70px;
        background-color: #FFFFFF;
        border-bottom: 1px solid rgb(228, 228, 228) !important;
        position: fixed;
        z-index: 10;
    }
     .submenu{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        margin-right: 30px;
        font-weight: 500;
        letter-spacing: 2px;
    }
    .logo{
        margin-left: 10px;
        display: flex;
        align-items: center;
        width: 60px;
        height: auto;
        cursor: pointer;
    }
    .title{
        font-size: 25px;   
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
    a{
        color: #484848;
        margin: 13px 10px 10px 20px;
        text-decoration: none;
    }
    .addpost >a{
        margin: 13px 10px 10px 20px;
        text-decoration: none;
        color: #49c5b6;
    }
    .buttonLink> a{
        background: none!important;
        border: none;
        padding: 0!important;
        text-decoration: none;
        cursor: pointer;
        margin:  13px 10px 10px 20px;
    }
    .buttonLink:focus {
        outline: 0;
    }
    .auth {
        color: #49c5b6;
    }
    .signup{
        color: #49c5b6;
    }
    .auth:hover{
        color: #484848;
    }
    .signup:hover{
        color: #484848;
    }
`