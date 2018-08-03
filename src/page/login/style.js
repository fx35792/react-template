import styled from 'styled-components';

export const LoginWrapper = styled.div`
    position:absolute;
    top:56px;
    left:0;
    right:0;
    bottom:0;
    background:#ccc;
    z-index:0;
`;
export const LoginBox = styled.div`
    width: 400px;
    margin: 80px auto;
    padding-top:30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    overflow:hidden;
`;

export const LoginInput = styled.input`
    display:block;
    width: 200px;
    margin:10px auto;
    height:35px;
    line-height:35px;
    padding: 0px 10px;
    color:#777;
`;

export const LoginButton = styled.div`
    display:block;
    width: 220px;
    margin:20px auto;
    height:40px;
    line-height:40px;
    color:#fff;
    font-weight:bold;
    text-align:center;
    background:#3194d0;
    border-radius:20px;
`;