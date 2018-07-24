import css from 'styled-jsx/css';

export default css`
    .container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        padding: 6%;
        margin: 0;
    }
    .form{
        background-color: #FAFAFA;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        padding: 4rem;
        border-radius: 8px;
        width: 400px;
        border: solid #f7f7f9;
        border-width: .2rem;
    }
    .form-content{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    input{
        color: #384047;
        background-color: #e8eeef;
        border-radius: 4px;
        box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
        border: none;
        width: 100%;
        padding: 1em;
        margin-bottom: 1.2em;
    }
    .button{
        border-radius: 4px;
        background-color: #4bc970;
        padding: 0.8em;
        margin-top: 1em;
        border: none;
        color: #FFF;
        font-weight: 600;
        text-align: center;
        width: 100%;
        transition: all 200ms ease-in-out;
        box-shadow: 0px 2px 6px rgba(0,0,0,0.3);    
        cursor: pointer;
        overflow: hidden;                
    }
    .button:hover{
        box-shadow: 0px 6px 10px rgba(0,0,0,0.3);
        transform: translateY(-4px);
    }
    .loginpath{
        margin-top: 40px;
        color: #484848 !important;
        font-size: 18px;
    }
    .login{
        color: #008489;
        text-decoration: none;
        margin-left: 10px;
    }

`