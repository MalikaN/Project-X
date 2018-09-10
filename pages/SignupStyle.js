import css from 'styled-jsx/css';

export default css`
.signup-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    padding: 6%;
    margin: 0;
}
.form{
    // background-color: #FAFAFA;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    border-radius: 8px;
    width: 400px;
    // border: solid #f7f7f9;
    border-width: .2rem;
}
.form-content{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75%;
}
.inner-form-content{
    background-color: #e8eeef;
    box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
    width: 100%;
    /* padding: 1em; */
    margin-bottom: 1.2em;
    /* font-size: 13px; */
    border: 0px;
    border-radius: 22px;
    padding-left: 24px;
    /* font-weight: 500; */
    display: flex;
    align-items: center;
}
input{
    background-color: #e8eeef;
    padding: 9px;
    font-size: 13px;
    border: 1px;
    border-radius: 22px;
    font-weight: 500;
    margin: 0.5em 0 0.5em 0;
}
input:focus{
    outline: none;
}
.button{
    border-radius: 22px;
    background-color: #2e86de;
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
    color: #2e86de;
    text-decoration: none;
    margin-left: 10px;
}

`