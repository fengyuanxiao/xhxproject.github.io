import React,{ Component } from 'react';
import { Icon, Collapse  } from 'antd';
import { Link  } from 'react-router-dom';

const Panel = Collapse.Panel;

class AllCenter extends Component {
  render() {
    return(
      <div>
        <header className="tabTitle">
          <div className="return"><Link to="/myCenter"><Icon type="left" theme="outlined" />返回</Link></div>
          客服中心
        </header>
        <div style={{ paddingTop: '3.7rem' }}>
          <Collapse accordion>
            <Panel header="微信客服" key="1">
              <p>问题咨询加微信 xiaomeng666444；</p>
            </Panel>
            <Panel header="QQ客服" key="2">
              <p>问题咨询加 QQ3527307663或3219647714；</p>
            </Panel>
          </Collapse>
          <p style={{ padding: '0.4rem 0.5rem' , fontSize: '1.1rem' }}>常见问题</p>
          <Collapse accordion>
            <Panel header="淘宝账号用户名的要求" key="3">
              <p>要求填写的用户名就是旺旺的名称，非手机或邮箱，且用户名必须与提交的信誉截图、实名认证截图中的淘宝用户名相同；用户名不能雷同例如“renxiaowu”和“renxiaowi02”等，不能通过审核；用户名不能是乱码号，例如fnskjdhf等无意义的字母，tb开头的淘宝号要求必须开通花呗。</p>
            </Panel>
            <Panel header="淘宝账号信誉和实名认证要求及图片" key="4">
              <img style={{ width: '100%' }} src={ require("../../../img/shiming.jpg") } alt="shiming" />
            </Panel>
            <Panel header="淘宝买号信誉及注册时间要求" key="5">
              <p>淘宝账号注册时间必须大于三个月，支付宝注册时间必须大于六个月，信誉必须达到3星；必须实名认证，且要与本平台绑定的身份证相同；注册时间过短近期购买量却过大的不能通过审核</p>
            </Panel>
            <Panel header="淘宝号收货人信息要求" key="6">
              <p>绑定的信息（姓名、电话、地址）必须是真实的，电话地址有人接听签收；淘宝上使用的收货信息必须与小跳蛙上绑定的收货信息相同；收货人姓名不真实、手机号码重复或收货地址不完整不能通过审核。收货地址要求村或小区不能重复，地址必须精确到几幢、几号，收货地址中不能出现附近、周围等字眼，不能精确到几幢的必须加上“电话联系”。
              </p>
            </Panel>
            <Panel header="为什么要填身份证和银行卡" key="7">
              <p>银行卡用于返还垫付的本金和提取佣金；平台为保证用户提现的资金安全，要求用户绑定身份证与同身份证信息相符的银行卡，平台不会盗用或泄露用户的信息资料（用户可在上传的身份证添加水印不要挡住名字等信息即可）</p>
            </Panel>
            <Panel header="支持绑定的银行卡有哪些" key="8">
              <p>银行卡的持卡人信息必须与绑定的身份证一致； 支持绑定的银行如下：</p>
              <p>中国工商银行，中国农业银行，中国建设行，中国交通银行，中国邮政储蓄银行，中国银行，招商银行，平安银行，中信银行，兴业银行，民生银行，光大银行，广东发展银行，华夏银行，渤海银行，北京银行，上海银行，上海浦东发展银行。列表没有列出的银行暂不支持。</p>
            </Panel>
            <Panel header="什么是支行名称" key="9">
              <p>每个银行都有具体的网点名称，即银行支行名称，如果不知道的可以电话联系所在银行的在线客服，支行名称错误会影响转账的到账时间。</p>
            </Panel>
            <Panel header="刷单账号会被淘宝查封么" key="10">
              <p>用户必须按平台及商家的要求操作任务，且勿用一个淘宝号在多个平台同时刷单，如因不按要求操作导致账号被淘宝查封的用户小跳蛙账号也将被查封并没收剩余佣金。</p>
            </Panel>
            <Panel header="什么是本金账户，本金提现要求" key="11">
              <p>个人中心的“本金金额”就是用户的本金账户，平台返款的任务商家确认后垫资直接返还到本金账户；</p>
              <p>本金提现需转入到可提现余额中再提现到银行卡</p>
            </Panel>
            <Panel header="什么是佣金账户，佣金提现要求" key="12">
              <p>“佣金收益”就是佣金账户，用户提交任务评价截图后24小时佣金自动发放到佣金账户中；</p>
              <p>佣金提现需转入到可提现余额中再提现到银行卡，要求最低提现不低于10元</p>
            </Panel>
            <Panel header="什么是可提现账户，账户提现要求" key="13">
              <p>个人中心的“可提现总余额”就是用户的可提现账户，本金账户和佣金帐户的余额需转入到可提现账户再申请提现;</p>
              <p>余额提现每日可提一次,每次默认全额提出;每满500元奖励1元, 500元以下收取1元服务费;财务每日审核上一日的提现请求,具体到账时间以银行为准</p>
            </Panel>
            <Panel header="什么时候返还本金" key="14">
              <p>平台规定商家在买手付款并提交任务后的48小时内操作返款，实际到账会根据转账方式有0-3天延时，平台返款在商家确认后垫资（买手必须填写正确的实际垫付金额总价，如有运费要把运费算进去，填写的金额是你此单垫付的金额总价）直接到达本金账户如遇周末或国定节假日，很多淘宝的财务是休息的， 返款延迟到工作日操作返款是正常的（国定节假日银行处理转账也会延时）。</p>
            </Panel>
            <Panel header="什么时候发佣金" key="15">
              <p>提交评价截图后商家确认了佣金直接到“佣金收益”中，如商家未及时确认，在提交后24小时系统自动发放。</p>
            </Panel>
          </Collapse>
        </div>
      </div>
    )
  }
}

export default AllCenter
