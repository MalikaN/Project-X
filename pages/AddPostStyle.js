import css from 'styled-jsx/css'; 

export default css`
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
    height: 100px;
    margin-top: 20px;
}
.inner-status-bar{
    padding-top: 20px;
    font-size: 1.5rem;
    line-height: 35px!important;
    border-bottom: 1px solid!important;
    color: #0000008a;
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
    color: #000000ad;
    margin-bottom: 20px;
}
.inner-author-pane{
    padding: 10px 0;
    color: #000;
    position: absolute;
}
.title{
    padding-right: 20px;
    margin-right: auto;
    margin-left: auto;
    width: 740px;
    border-left: 1px solid #0000008a;
    resize: vertical;
}
.inner-title{
    padding-right: 20px;
    padding-left: 10px;
    width: 100%;
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
textarea:focus, input:focus .alert{
    content: '';
}
.post-details{
    margin-top: 30px;
    display:flex;
    align-self: center;
    flex-direction:row;
    width: 840px;
}
.inner-post-details{
    width: 740px;
}
.extradet{
    display: flex;
    flex-direction: column;
    width: 740px;
    align-self: center;
    margin-bottom: 100px;
}
.inner-extradet{
    width: 400px;
    margin: 20px 0 20px 0;
}
.input-extradet{
    font-size: 23px;
}
.button{
    border-radius: 4px;
    background-color: #4bc970;
    padding: 0.6em;
    border: none;
    color: #FFF;
    font-weight: 600;
    text-align: center;
    width: 4rem;
    cursor: pointer;
    overflow: hidden;
    float: right;
}

.title-text{
    font-size: 30px;
}

// .post-text{
//     font-size: 24px;
//     width: 100%;
//     border-style: none; 
//     border-color: Transparent; 
//     overflow: auto; 
//     resize: vertical;
//     max-height: 300px; 
//     min-height: 200px;
// }
.imgOuterDiv{
    height: 200px;
    overflow: hidden;
    padding: 10px 0 10px 0;
    margin: auto auto 10px;
}
.buttonDiv{
    position: relative;
    overflow: hidden;
    display: inline-block;
    //margin-left: 280px;
   // margin-right: 30px;
    width: 52px;
}
}
.btn{
    border: 1px solid rgba(0,0,0,.68);
    color: #000;
    background-color: white;
    border-radius: 100%;
    font-size: 20px;
    font-weight: bold;
    height: 40px;
    width: 40px;
    line-height:37px;
}
.fileupload{
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    cursor:pointer;
}
.radioinput{
    border: 0px;
    border-radius: 2px;
    padding-left: 10px;
    width: 12px;
    height: 13px;
}
.post-category{
    display: flex;
    flex-direction: row;
    padding-right: 20px;
    padding-left: 20px; 
    margin-right: auto;
    margin-left: auto;
    width: 740px!important;
    color: #000000ad;
    margin-bottom: 20px;
}
.post-label{
    padding:15px;
}
.alert{
    display: flex;
    justify-content: center;
    color: red;
    visible: flase;
}
// .popup {
//     position: fixed;
//     padding: 14px;
//     max-width: 500px;
//     border-radius: 10px;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%,-50%);
//     background: rgba(255,255,255,.9);
//     visibility: hidden;
//     opacity: 0;
//     /* "delay" the visibility transition */
//     -webkit-transition: opacity .5s, visibility 0s linear .5s;
//     transition: opacity .5s, visibility 0s linear .5s;
//     z-index: 1;
//   }
//   .popup:target {
//     visibility: visible;
//     opacity: 1;
//     /* cancel visibility transition delay */
//     -webkit-transition-delay: 0s;
//     transition-delay: 0s;
//   }
//   .popup-close {
//     position: absolute;
//     padding: 10px;
//     max-width: 500px;
//     border-radius: 10px;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%,-50%);
//     background: rgba(255,255,255,.9);
//   }
//   .popup .close {
//     position: absolute;
//     right: 2px;
//     top: 0px;
//     padding: 5px;
//     color: #000;
//     transition: color .3s;
//     font-size: 23px;
//     line-height: .6em;
//     font-weight: bold;
//   }
//   .popup .close:hover {
//     color: #00E5EE;
//   }
//   h2 {
//     text-align: center;
//     white-space: nowrap;
//     color: #2e86de;
//     font-size:22px;
//     margin-top: 11px;
//   }
//   .close-popup {
//     background: rgba(0,0,0,.7);
//     cursor: default;
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     opacity: 0;
//     visibility: hidden;
//     /* "delay" the visibility transition */
//     -webkit-transition: opacity .5s, visibility 0s linear .5s;
//     transition: opacity .5s, visibility 0s linear .5s;
//   }
//   .popup:target + .close-popup{  
//     opacity: 1;
//     visibility: visible;
//     /* cancel visibility transition delay */
//     -webkit-transition-delay: 0s;
//     transition-delay: 0s;
//   }
`