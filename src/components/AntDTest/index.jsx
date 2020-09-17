import * as React from 'react';
import { Menu, Input, DatePicker, Space, Avatar, Badge,  } from 'antd';
import { AppleOutlined, UserOutlined,  } from "@ant-design/icons" 

import "./styles.scss"
import 'antd/dist/antd.css'

const ModelAvatar = () => {

    const [num, setNum] = React.useState(1)

    return (
        <div>
            <span className="avatar-item">
                <Badge count={600} >
                    <Avatar shape="square" icon={<UserOutlined />} />
                </Badge>
            </span>
            <span className="avatar-item">
                <Badge count={num}>
                    <Avatar shape="square" icon={<UserOutlined />} onClick={()=>setNum(num+1)}/>
                </Badge>
            </span>
            <span className="avatar-item">
                <Badge dot>
                    <Avatar shape="square" icon={<UserOutlined />} />
                </Badge>
            </span>
        </div>
    )
}

const ModelDatePicker = () => {
    const { RangePicker } = DatePicker;
    return (
        <div>
            <DatePicker /><br/>
            <Space style={{marginTop:"10px"}}>
                <RangePicker />
            </Space>
        </div>
    )
}

const ModelInput = () => {
    
    return(
        <div>
            <Input size="large" placeholder=" large input"  prefix={<AppleOutlined />} className="commonInput"/>
            <Input size="middle" placeholder=" default input" className="commonInput" addonAfter="1111" />
            <Input size="small" placeholder=" small input" className="commonInput" suffix=".com"/>
        </div>
    )
}

const AntDTest = () => {

    const [ current, setCurrent ] = React.useState ("input")

    const handleClick = (e) => {
        console.log(e.key)
        setCurrent(e.key)
    }

    return(
        <div className="body">
            <h4>menu test</h4>
            <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
                <Menu.Item key="input">
                    Input Model
                </Menu.Item>
                <Menu.Item key="datePicker">
                    DatePicker
                </Menu.Item>
                <Menu.Item key="avatar">
                    Avatar
                </Menu.Item>
            </Menu>
            <div className="component">
                {current === "input" ? <ModelInput />
                    : current === "datePicker" ? <ModelDatePicker />
                    : current === "avatar" ? <ModelAvatar />
                    :''
                }
            </div>
        </div>
    )
}

export default AntDTest;