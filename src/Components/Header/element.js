import styled from "styled-components"

export const HeaderContainer = styled.div`
    /* dark #2c3240 */
    /* yellow #dba334 */
    webkit-box-shadow: 0 0 15px 1px rgba(0,0,0,0.07);
    box-shadow: 0 0 15px 1px rgba(0,0,0,0.07);
    background: #fff;
`;

export const Flexbox = styled.div`
      /* dark #2c3240 */
      /* yellow #dba334 */
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-content: center;
      padding-top: 10px;
      padding-bottom: 10px;
      .nav-desktop{
            margin: auto 0 auto 0;
      }
      .nav-desktop ul{
            display: flex;
            margin-bottom: 0;
      }
      .nav-desktop ul li{
            list-style-type: none;
            padding: 0 20px 0 20px;
            text-transform: uppercase;
      }
      .nav-desktop ul li a{
            color: #2c3240;
            font-weight: bold;
            text-decoration: none;
      }
      .nav-desktop ul li a:hover{
            color: #8bdae2;
            text-decoration: none;
            transition: all ease-in 0.5s;
      }
      .nav-mobile{
            display: none;
      }
      .logo{
            width: 80px;
      }
  

  @media (max-width: 768px){
    .nav-desktop{
      display: none;
    }
    .nav-mobile{
      display: block;
    }
    h1{
      font-size: 50px !important;
    }
    #sidebarMenu {
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      transform: translateX(-1000px);
      transition: transform 250ms ease-in-out;
      background: rgba(0,0,0,0.7);
      z-index: 300;
    }
    .sidebarMenuMain{
      height: 100%;
      position: fixed;
      left: 0;
      width: 240px;
      background: #8bdae2;
    }

    .sidebarMenuInner {
      margin: 0;
      padding: 70px 0 0 0;
      border-top: 1px solid rgba(255, 255, 255, 0.10);
    }

    .sidebarMenuInner li {
      list-style: none;
      color: #fff;
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
      padding: 20px;
      cursor: pointer;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }

    .sidebarMenuInner li span {
      display: block;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.50);
    }

    .sidebarMenuInner li a {
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;
      text-decoration: none;
    }

    input[type="checkbox"]:checked ~ #sidebarMenu { transform: translateX(0); }

    input[type=checkbox] {
      transition: all 0.3s;
      box-sizing: border-box;
      display: none;
    }

    .sidebarIconToggle {
      transition: all 0.3s;
      box-sizing: border-box;
      cursor: pointer;
      position: absolute;
      z-index: 99;
      height: 100%;
      width: 100%;
      top: 37px;
      right: 30px;
      height: 30px; 
      width: 30px;
      z-index: 400;
    }

    .spinner {
      transition: all 0.3s;
      box-sizing: border-box;
      position: absolute;
      height: 3px;
      width: 100%;
      background-color: #8bdae2;
    }

    .horizontal {
      transition: all 0.3s;
      box-sizing: border-box;
      position: relative;
      float: left;
      margin-top: 5px;
    }

    .diagonal.part-1 {
      position: relative;
      transition: all 0.3s;
      box-sizing: border-box;
      float: left;
    }

    .diagonal.part-2 {
      transition: all 0.3s;
      box-sizing: border-box;
      position: relative;
      float: left;
      margin-top: 5px;
    }

    input[type=checkbox]:checked ~ .sidebarIconToggle > .horizontal {
      transition: all 0.3s;
      box-sizing: border-box;
      opacity: 0;
    }

    input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-1 {
      transition: all 0.3s;
      box-sizing: border-box;
      transform: rotate(135deg);
      margin-top: 7px;
    }

    input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-2 {
      transition: all 0.3s;
      box-sizing: border-box;
      transform: rotate(-135deg);
      margin-top: -11px;
    }
  }
  @media (max-width: 425px){
    h1{
    font-size: 25px !important;
    letter-spacing: 3px;
    }
  }
  /* @media (max-width: 375px){
    h1{
    font-size: 20px !important;
    letter-spacing: 3px;
    }
  } */
  @media (max-width: 320px){
    h1{
    font-size: 18px !important;
    }
  }
`;