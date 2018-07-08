import css from 'styled-jsx/css';

export default css`{
    .flex-container {
        display: flex;
        flex-direction: column;
        min-height:100%;
      }
    .content{
       flex: 1;
        padding-top: 60px !important;
        z-index: 5;
        overflow: auto;
      
     }  

}`;