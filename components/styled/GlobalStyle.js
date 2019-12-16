import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body,div,form,p,h1,h2,h3,h4,h5,h6,dl,dt,dd,ul,ol,li,em,p,span,textarea,pre,label,fieldset,th,td,button,a,input,select,hr, figure {margin:0;padding:0;font-family:'Noto Sans KR', 'Roboto', Arial, dotum;word-break:break-all;vertical-align:top;}
  h1,h2,h3,h4,h5,h6,strong,th {font-weight:normal;}
  em,span,strong,a,button,i {font-size:100%;}
  em,address {font-style:normal;}
  ol,ul,dl {list-style:none;}
  fieldset,img,hr,button {border:0;}
  img,input,textarea,select {vertical-align:top;}
  table {width:100%;border-collapse:collapse;border-spacing:0;table-layout:fixed;}
  legend,caption {overflow:hidden;width:0;height:0;padding:0;font-size:0;line-height:0;}
  a {text-decoration:none;}
  button {overflow:visible;margin:0;padding:0;background:none;border-radius:0;cursor:pointer;outline:none;}
  input,textarea,select {background:transparent;border:none;border-radius:0;-webkit-border-radius:0;-moz-appearance:none;-webkit-appearance:none;appearance:none;outline:none;} /* 모바일 한정 */
  textarea {resize:none;}
  input[type=text]::-ms-clear,input[type=password]::-ms-clear,input[type=text]::-ms-reveal,input[type=password]::-ms-reveal {display:none;}
  select {outline:none;border:none;border-radius:0;}
  select::-ms-expand {display:none;}
  .blind {position:absolute;top:0;left:0;overflow:hidden;width:0;height:0;font-size:0;line-height:0;}
  .clfix:after {content:"";display:block;clear:both;visibility:hidden;height:0;}
`

export default GlobalStyle;