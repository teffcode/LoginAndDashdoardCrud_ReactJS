import React from 'react';
import { Form, Input, Radio, message } from 'antd';
import axios from 'axios';

import 'antd/dist/antd.css';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
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

const FormCreate = ({ setFieldValue, onChange }) => (

    <Form layout="vertical">
    
        <FormItem label="Username" {...formItemLayout}>             
            <Input 
                type="text" 
                setFieldValue={setFieldValue} 
                onChange={onChange} 
            />  
        </FormItem>

        <FormItem label="User Type" {...formItemLayout}>
            <RadioGroup>
            <Radio value="a">Local</Radio>
            <Radio value="b">LDAP</Radio>
            </RadioGroup>
        </FormItem>

        <FormItem label="Password" {...formItemLayout}>
            <Input/>
        </FormItem>

        <FormItem label="Confirm Password" {...formItemLayout}>
            <Input/>
        </FormItem>

        <FormItem label="Description" {...formItemLayout}>
            <Input.TextArea/>
        </FormItem>

    </Form>
);

export default FormCreate;