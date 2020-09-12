import React, { Component } from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav, 
    NavItem,
    Addition,
    Button,
    SearchWrapper,
    NavSearch
} from './style'

class Header extends Component {
    render() {
        return ( 
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className="left">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                    <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                    <NavSearch></NavSearch>
                    <i className="iconfont">&#xe614;</i>
                    </SearchWrapper>
                    <Addition>
                        <Button className="reg">注册</Button>
                        <Button className="writting">
                            <i className="iconfont">&#xe615;</i>
                            写文章
                        </Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
         );
    }
}
 
export default Header;