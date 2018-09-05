import css from 'styled-jsx/css';

export default css`
.container{
    // display: flex;
    // flex-direction: column;
    // margin: 20px 60px;
    flex: 1;
    margin-top: 10px;
}
.inner-container{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
.upper-div{
    width: 60%;
    align-self: center;
    margin-top: 20px;
    text-align: center;
}
.inner-upper-div{
    padding: 0.8rem;
}
h2{
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 3rem;
    margin: 10px 10px 20px 10px;
}
h2:after {
	content: '';
    left: 0;
    display: inherit;
    // height: 1em;
    width: inherit;
    border-bottom: 1px solid;
    margin-top: 5px;
    opacity: 0;
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        transition: opacity 0.35s, transform 0.35s;
        -webkit-transform: scale(0,1);
        transform: scale(0,1);
}
h2:hover:after {
    opacity: 1;
	-webkit-transform: scale(1);
	transform: scale(1);
}
.created-user{
    color: #656969;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    text-align: center;
}
.middle-div{
    display: flex;
    flex-direction: row;
    width: 88%;
    align-self: center;
    height: 46%;
    margin-bottom: 3rem;
}
.img-container{
    width: 70%;
    margin-right: 20px;
}
.inner-img-container{
    width: 100%;
    height: 100%;
}
.card__image {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0.25rem 0.25rem;
    -webkit-filter: contrast(70%);
      filter: contrast(70%);
    overflow: hidden;
    position: relative;
    transition: -webkit-filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
    transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
    transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91), -webkit-filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
    // to auto-resize an image
    width:100%;
    height: 100%;
    object-fit: fill;
}
.right-box-pane{
    padding: 20px 20px 0 20px;
    width: 30%;
    display: flex;
    flex-direction: column;
}
.rbp{
    padding: 10px;
    letter-spacing: 2px;
}
.rbp-details{
    font-size: 1.5rem;
    line-height: 1.6em;
}
.rbp-title{
    color: #656969;
    font-size: 0.9rem;
    font-weight: 500;
}
.social-media-icons{
    padding:10px 35px;
}
ul {
    padding:0;
    list-style: none;
}
.social-icon {
    color: #fff;
}
.social-icons li {
    vertical-align: top;
    display: inline;
    height: 100px;
}
.social-icons a {
    color: #fff;
    text-decoration: none;
}
.fa-facebook {
    padding:13px 17px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition: .5s;
    background-color: #322f30;
    border-radius: 4px;
}
.fa-facebook:hover {
    background-color: #3d5b99;
}
.fa-twitter {
    padding:13px 14px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition: .5s;
    background-color: #322f30;
    border-radius: 4px;
}
.fa-twitter:hover {
    background-color: #00aced;
}
.fa-instagram {
    padding:13px 16px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition: .5s;
    background-color: #322f30;
    border-radius: 4px;
}
.fa-instagram:hover {
    background-color: #eb8231;
}
.middle-navbar{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 5%;
    border-top: 1px solid #DCDEDD;
    border-bottom: 1px solid #DCDEDD;
}
.inner-middle-navbar{
    width: 75%;
    height: 100%;
    margin-left: 5.8rem;
}
.row{
    height: 100%;
    display: flex;
    align-items: center;
}
.nav-item{
    position: relative;
    padding: 1.5rem 0.5rem 1.5rem 0.5rem;
    color: #2e86de;
    text-decoration: none;
    color: #484848;
    text-decoration: none;
    letter-spacing: 2px;
    cursor:pointer;
    border-bottom: 3px solid #000;
    transition: color 0.1s,background-color 0.1s,padding 0.2s ease-in;
}
.lower-div{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}
.inner-lower-div{
    width: 87%;
    padding-top: 2rem;
}



// .nav-item:after {
//     content: '';
//     display: block;
//     position: absolute;
//     bottom: 6px;
//     left: 0;
//     height: 3px;
//     width: 100%;
//     background-color: #000;
//     transform-origin: right top;
//     transform: scale(0, 1);
//     transition: color 0.1s,transform 0.2s ease-out;
// }
// .nav-item:active:before {
//     background-color: #000;
// }
// .nav-item:hover:before, .nav-item:focus:before {
//     transform-origin: left top;
//     transform: scale(1, 1);
}
`