import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Form, Input, Button, Row, Col, message } from 'antd';
import axios from 'axios';
import ActivityIndicator from 'antd-mobile/lib/activity-indicator';
import WingBlank from 'antd-mobile/lib/wing-blank';

const FormItem = Form.Item;
let phoneNumber = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;   //手机号码正则

class ForgetPasswords extends Component {
  constructor() {
    super();
    this.state = {
      animating: false,
      getCodesState: true,
      codeNum: 60,
      TestGetCode: "获取验证码",
      placeholder: "请输入手机号"
    }
  }

  // 生命周期函数 此函数最先执行
  componentWillMount() {
    axios.get('/api/user/getcaptcha')
    .then(response => {
      let responses = response.data.data
      this.setState({
        tuCodeLink: responses.captcha_src,
        sid: responses.sid,
      })
      // console.log(response.data.data);
    })
    .catch(error => {
      console.log(error);
    })
  }
  componentWillUnmount = () => {
    this.setState = (state,callback)=>{
      return;
    };
  }

  // 电话号码 onChange事件修改 placeholder值 让短信验证码按钮判断调用获取验证码接口
  onChange = (e) => {
    this.setState({
      placeholder: e.target.value
    })
  }

  // 获取短信验证码
  setCode = () => {
    if ( this.state.placeholder === "请输入手机号" ) {
      message.error("请输入手机号码！");
    } else if ( !phoneNumber.test(this.state.placeholder) ) {
      message.error("请输入正确的手机号码！");
    } else {
      // 再次调用获取验证码接口
      message.success("获取验证码中");
      let codeNum = this.state.codeNum
      const timer = setInterval(() => {
      this.setState({
        getCodesState:false,
        codeNum: (codeNum--)
        }, () => {
            if (codeNum === 0) {
            clearInterval(timer);
            this.setState({
              getCodesState: true,
              codeNum: 60,
              TestGetCode: "重新获取"
            })
          }
        })
      }, 1000)

    }
    // console.log("在此调用获取短信验证码接口");
  }

  // 提交注册按钮 提交数据
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        if ( !phoneNumber.test(values.phoneNum) ) {
          message.error("请输入正确的手机号码！")
        }else if( values.loginPassword !== values.aloginPassword ) {
          message.error("两次密码不一致！")
        }else {
          // 在此提交ajax数据
          console.log(values);
          message.success("修改成功！", successSkip => { // 注册成功后执行回调跳转到任务大厅
            this.props.history.push('/taskHallPage')
          })
        }
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { animating, tuCodeLink } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return(
      <div>
        <header className="tabTitle">
          <div className="return"><Link to="/"><Icon type="left" theme="outlined" />返回</Link></div>
          忘记密码
        </header>
        <WingBlank>
          <Form onSubmit={this.handleSubmit} style={{ padding: "3.7rem 0.6rem 0 0.6rem" }}>
            <FormItem
              {...formItemLayout}
              label="手机号："
            >
              {getFieldDecorator('phoneNum', {
                rules: [{
                  required: true, message: '请输入手机号码!',
                }],
              })(
                <Input className="register-input" onChange={ this.onChange } maxLength="11" placeholder={ this.state.placeholder } />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="图形验证码："
            >
              <div>
                <img style={{ width: "100%" }} src={ tuCodeLink } alt="短信验证码"/>
              </div>
              {getFieldDecorator('tuCode', {
                rules: [{
                  required: true, message: '请输入图形验证码!',
                }],
              })(
                <Input className="register-input" maxLength="11" placeholder="请输入图形验证码" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="短信验证码"
            >
              <Row gutter={8}>
                <Col span={16}>
                  {getFieldDecorator('captcha', {
                    rules: [{ required: true, message: '请输入短信验证码!' }],
                  })(
                    <Input className="register-input" placeholder="请输入短信验证码" />
                  )}
                </Col>
                <Col span={8}>
                  {
                    this.state.getCodesState
                      ? <Button onClick={this.setCode}>{ this.state.TestGetCode }</Button>
                      : <Button disabled="disabled">{this.state.codeNum}秒</Button>
                  }
                </Col>
              </Row>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="新密码"
            >
              {getFieldDecorator('loginPassword', {
                rules: [{
                  required: true, message: '请输入登录密码!',
                }],
              })(
                <Input className="register-input" placeholder="请输入6-16为数字，字母组合" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="确认密码"  style={{ marginBottom: '4rem' }}
            >
              {getFieldDecorator('aloginPassword', {
                rules: [{
                  required: true, message: '请确认登录密码!',
                }],
              })(
                <Input className="register-input" placeholder="请输入6-16为数字，字母组合" />
              )}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button className="btn-buy" type="primary" htmlType="submit">提交</Button>
            </FormItem>
            <div className="toast-example">
              <ActivityIndicator
                toast
                text="数据提交中..."
                animating={animating}
              />
            </div>
          </Form>
        </WingBlank>
      </div>
    )
  }
}

const ForgetPassword = Form.create()(ForgetPasswords);
export default ForgetPassword
