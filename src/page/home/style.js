import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`;

export const HomeLeft = styled.div`
    float:left;
    width:625px;
    margin-top:30px;
    .banner-img{
        width:625px;
        height:270px;
    }
`;

export const HomeRight = styled.div`
    float:right;
    width:320px;
    margin-top:30px;
`;

export const TopicWrapper = styled.div`
    overflow:hidden;
    padding:20px 0 0;
    border-bottom: 1px solid #f0f0f0;
`;

export const TopicItem = styled.div`
    overflow:hidden;
    display: inline-block;
    margin: 0 18px 18px 0;
    height: 32px;
    line-height:32px;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    font-size:14px;
    padding-right:10px;
    .top-item{
        float:left;
        width: 32px;
        height: 32px;
        margin-right:10px;
    }
`;

export const ListWrapper = styled.div`
    position: relative;
    width: 100%;
    margin: 0 0 15px;
    word-wrap: break-word;
`;

export const ListItem = styled.div`
    padding:20px 0;
    overflow:hidden;
    cursor:pointer;
    border-bottom: 1px solid #f0f0f0;
    .list-img{
        float:right;
        display:block;
        width:125px;
        height:100px;
    }
`;

export const ListInfo = styled.div`
    float:left;
    width:480px;
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
    .title{
        font-size: 18px;
        font-weight: bold;
        color:#333;
        line-height: 27px;
    }
`;

export const RecommendWrapper = styled.div`
    width:280px;
    margin:30px 0;
`;


export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    margin-bottom:5px;
    border-radius:4px;
    background:url(${(props) => props.imgUrl});
    background-size:contain;
`;

