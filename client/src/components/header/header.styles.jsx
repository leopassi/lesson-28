import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { ReactComponent as LanguageIconSVG } from '../../assets/language_icon.svg';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px 0px
        margin-bottom: 20px;
        font-size: 15px
    }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
   @media screen and (max-width: 800px) {
        width: 40px;
        padding: 0 0 15px 2px;
       
    }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
      @media screen and (max-width: 800px) {
        width: 80%;
        padding: 0 0 0 2px
    }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    padding: 5px 5px;
  }
`;


export const WelcomeContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 15px;
      @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const WelcomeMessage = styled.div`
  padding: 0px 4px;
`;

// export const LanguageIcon = styled(LanguageIconSVG)`{
//   width: 18px;
//   height: 18px;
// }`

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 15px;
  select {
    padding: 4px;
    border-radius: 3px;
    height: 38px;
    /* color: black; */
    padding-right: 28px;
    font-size: 16px;
    /* border-color: lightgrey; */
    position: relative;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background-color: white;
    background-image: url("data:image/svg+xml;utf8,<svg height='30' viewBox='0 0 48 48' width='30' xmlns='http://www.w3.org/2000/svg'><path d='M0 0h48v48h-48z' fill='none'/><path d='M23.99 4c-11.05 0-19.99 8.95-19.99 20s8.94 20 19.99 20c11.05 0 20.01-8.95 20.01-20s-8.96-20-20.01-20zm13.85 12h-5.9c-.65-2.5-1.56-4.9-2.76-7.12 3.68 1.26 6.74 3.81 8.66 7.12zm-13.84-7.93c1.67 2.4 2.97 5.07 3.82 7.93h-7.64c.85-2.86 2.15-5.53 3.82-7.93zm-15.48 19.93c-.33-1.28-.52-2.62-.52-4s.19-2.72.52-4h6.75c-.16 1.31-.27 2.64-.27 4 0 1.36.11 2.69.28 4h-6.76zm1.63 4h5.9c.65 2.5 1.56 4.9 2.76 7.13-3.68-1.26-6.74-3.82-8.66-7.13zm5.9-16h-5.9c1.92-3.31 4.98-5.87 8.66-7.13-1.2 2.23-2.11 4.63-2.76 7.13zm7.95 23.93c-1.66-2.4-2.96-5.07-3.82-7.93h7.64c-.86 2.86-2.16 5.53-3.82 7.93zm4.68-11.93h-9.36c-.19-1.31-.32-2.64-.32-4 0-1.36.13-2.69.32-4h9.36c.19 1.31.32 2.64.32 4 0 1.36-.13 2.69-.32 4zm.51 11.12c1.2-2.23 2.11-4.62 2.76-7.12h5.9c-1.93 3.31-4.99 5.86-8.66 7.12zm3.53-11.12c.16-1.31.28-2.64.28-4 0-1.36-.11-2.69-.28-4h6.75c.33 1.28.53 2.62.53 4s-.19 2.72-.53 4h-6.75z'/></svg>"),
      url("data:image/svg+xml;utf8,<svg viewBox='0 0 320 512' width='30' height='30' xmlns='http://www.w3.org/2000/svg'><path d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/></svg>");
    background-repeat: no-repeat, no-repeat;
    /* background-position: right 5px top 50%; */
    background-position: left center, right center;
    cursor: pointer;
    padding-left: 33px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 2px 0 0; 
    font-size: 15px    
  }
`;

/* select option[selected] {
  font-weight: bold ;
  }` */
