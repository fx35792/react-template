import styled from 'styled-components';
import logo from '../../static/logo.png'

export const WrapperHeader = styled.div`
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0;
`;

export const Logo = styled.div`
    position:absolute;
    display:block;
    width:100px;
    height:56px;
    background:url(${logo});
    background-size:contain;
    cursor:pointer;
`;

export const Nav = styled.div`
    width:960px;
    padding-right:70px;
    border-sizing:border-box;
    height:100%;
    margin:0 auto;
`;

export const NavItem = styled.div`
    cursor: pointer;
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
        i.Aa{
            font-size:20px !important;
        }
    }
    &.active{
        color:#ea6f5a;
    }
`;


export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    .zoom{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        border-radius:50%;
        text-align:center;
        &.focused{
            background:#999;
            color:#fff;    
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    padding: 0 40px 0 20px;
    margin-top:9px;
    margin-left:20px;
    width: 160px;
    height: 38px;
    font-size: 14px;
    border: none;
    outline:none;
    border-radius: 40px;
    background: #eee;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
    &.slide-enter {
        transition:all .2s ease-out;
    }
    &.slide-enter-active {
        width:240px;
    }
    &.slide-exit {
        transition:all .2s ease-out;
    }
    &.slide-exit-active {
        width:160px;
    }
`;

export const SearchInfo = styled.div`
    position:absolute;
    top:56px;
    left:25px;
    width:240px;
    padding: 0 20px 20px;
    z-index: 999;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
`;

export const SearchTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size: 14px;
    color: #969696;
    overflow:hidden;
    .spin{
        font-size:12px;
        display:block;
        float:left;
        margin-right:3px;
        transition:all .2s ease-in;
        transform-origin: center center;
    }
`;

export const SearchInfoSwitch = styled.div`
    cursor:pointer;
    float: right;
    font-size: 13px;
    color: #969696;
    background-color: transparent;
    border-width: 0;
    padding: 0;
    &:hover{
        color: #2f2f2f;
    }
`;

export const SearchInfoItem = styled.a`
    cursor:pointer;
    margin-right: 10px;
    margin-bottom: 10px;
    display: block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    &:hover{
        color: #333;
        border-color: #b4b4b4;
    }
`;

export const Addition = styled.div`
    position:absolute;
    top:0;
    right:0;
`;

export const Button = styled.a`
    float:right;
    width: 80px;
    height: 38px;
    line-height: 36px;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 14px;
    color: #ea6f5a;
    background-color: transparent;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    &.reg{
        color:#ea6f5a;
    }
    &.writing{
        color:#fff;
        background:#ea6f5a;
    }
`;

