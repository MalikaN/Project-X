import css from 'styled-jsx/css';

export default css`{
    .flex-container {
        display: flex;
        flex-direction: column;
        height:100vh;
      }
    .content{
        flex: 1;
        padding-top: 60px !important;
        z-index: 5;
        overflow: auto;
     } 

}`;