import React from 'react';
import {IconfontStyle} from '../../static/iconfont/iconfont';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'

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

const Header = (props) => {
    return ( 
        <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className="left">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">
                <IconfontStyle />
                <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                <CSSTransition
                    in={props.focused}
                    timeout={200}
                    classNames="slide"
                >
                <NavSearch
                    className={props.focused ? 'focused': ''}
                    onFocus={props.handleInputFocus}
                    onBlur={props.handleInputBlur}
                ></NavSearch>
                </CSSTransition>
                <IconfontStyle />
                <i className={props.focused ? 'focused iconfont': ''}>&#xe614;</i>
                </SearchWrapper>
                <Addition>
                    <Button className="reg">注册</Button>
                    <Button className="writting">
                    <IconfontStyle />
                    <i className="iconfont">&#xe615;</i>
                        写文章
                    </Button>
                </Addition>
            </Nav>
        </HeaderWrapper>
        );
}

const mapStateToProps = (state) => {
    return {
        focused: state.focused
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(){
            const action = {
                type: 'search_focus'
            }
            dispatch(action)
        },
        handleInputBlur(){
            const action = {
                type: 'search_blur'
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);