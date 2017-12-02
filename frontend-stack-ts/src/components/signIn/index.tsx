import * as React from 'react'
import * as CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import {History} from 'history'
import {Paper, RaisedButton, TextField} from 'material-ui'
import {changeSignInFrom, ChangeSignInFromAction} from '../../actions/signIn'
import {StoreState, SignInFrom} from '../../reducers/types'

const styles = require('./index.scss')

interface Props {
    history: History,
    signInFrom: SignInFrom
    changeSignInFrom: ChangeSignInFromAction,
}

@CSSModules(styles)
class Signin extends React.Component<Props, {}> {
    public constructor(props: any) {
        super(props)
        this.state = {
            usernameError: '用户名不能为空',
            phoneError: '手机号码格式错误'
        }
    }

    public render() {
        return (
            <Paper styleName="sign-box" zDepth={2}>
                <p>请输入考生个人信息</p>
                <TextField
                    hintText="姓名"
                    floatingLabelText="姓名"
                    // errorText={this.state.usernameError}
                    fullWidth={true}
                    onChange={this.changeInputFrom.bind(this, 'username')}
                />
                <TextField
                    hintText="手机号"
                    floatingLabelText="手机号"
                    fullWidth={true}
                    onChange={this.changeInputFrom.bind(this, 'phone')}
                />
                <RaisedButton
                    label="确认"
                    primary={true}
                    fullWidth={true}
                    style={{marginTop: 10}}
                    onTouchTap={this.signIn}
                />
            </Paper>
        )
    }

    private changeInputFrom = (field: string,
                               event: React.ChangeEvent<HTMLInputElement>) => {
        let fields = {}
        fields[field] = event.target.value
        this.props.changeSignInFrom(fields)
    }

    private signIn = () => {
        // const phoneRegExp = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/ // phone regular expression
        // const username = this.props.signInFrom.username, phone = this.props.signInFrom.phone
        // if (!username) {

        // }
        this.props.history.push('/home')
    }
}

const mapStateToProps = (state: StoreState) => ({
    signInFrom: state.signInFrom,
})

const mapDispatchToProps = {
    changeSignInFrom
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
