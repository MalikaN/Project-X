import css from 'styled-jsx/css';

export default css`{
    .container{
        disply:flex;
        flex-direction:row;
        margin:20px 60px;
    }
    .post-img {
        // background-position: center center;
        // background-repeat: no-repeat;
        // background-size: cover;
        // box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
        // border-radius: 0.25rem;
        // overflow: hidden;
        // position: relative;
        // display: block;
        // height: auto;
        // max-width: 100%;
        // vertical-align: middle;
        //to wrap text around image
        float: left;
        width: 400px;
        height: 400px;
        margin:0 20px 20px 20px;
     }
    .post-content{
        display:flex;
        flex-direction:row;
        overflow: hidden;
    }
    .post{
        width:70%;
        margin-left:20px;
        margin-right:40px;
    }
    h3{
        text-transform: UPPERCASE;
    }
    p{
        margin-right:70px;
        font-size:16px;
    }
    
}`