import css from 'styled-jsx/css';

export default css`{
    .menu{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 60px;
        background-color: #FFFFFF;
        // box-shadow: 0 2px 0 rgba(93, 96, 99, .1);
        border-bottom: 1px solid rgb(228, 228, 228) !important;
        position: fixed;
        z-index: 10;
     }
     .submenu{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        margin-right: 10px;
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
        font-size: 20px;   
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
    }

    // .signup >a{
    //     margin: 13px 10px 10px 20px;
    //     text-decoration: none;
    //     // color:#407FC7;
    //     // vertical-align:-webkit-baseline-middle;
    // }
    // .auth >a{
    //     text-decoration:none;
    //     // color:#407FC7;
    // }
    .buttonLink> a{
        background: none!important;
        border: none;
        padding: 0!important;
        text-decoration: none;
        cursor: pointer;
        // color:#407FC7;
        margin:  13px 10px 10px 20px;
    }
    .buttonLink:focus {
        outline: 0;
    }
}`