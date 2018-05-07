import Link from 'next/link'

const Header = () =>(
    <div> 
        <div className="menu">
            <div className="logo">
            <Link href="/" >
                    <a className="title">Project X</a>
                </Link>
            </div>
            <div className="submenu">
                <Link href="/add-post" >
                    <a className="addpost">Add Post</a>
                </Link>
                <Link href="/login" >
                    <a className="login">Login</a>
                </Link>
                <Link href="/signup">
                    <a  className="signup">Signup</a>
                </Link>
            </div>
           
        </div>
       
        <style jsx>{`
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
            .addpost{
                margin: 13px 0 10px 30px;
                text-decoration:none;
                color:#000;  
            }
            .login{
                margin: 13px 0 10px 20px;
                text-decoration:none;
                color:#407FC7;
              
            }
            .signup{
                margin:  13px 10px 10px 20px;
                text-decoration:none;
                color:#407FC7;
            }
        `}</style>
    </div>
   
)
export default Header