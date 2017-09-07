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

const FormCreate = ({ setFieldValue, onChangeUsername, onChangeDescription, isDisabled, options, value, onChangeRadio, defaultValue }) => (

    <Form layout="vertical">
    
        <FormItem label="Username" {...formItemLayout}>             
            <Input 
                type="text" 
                setFieldValue={setFieldValue} 
                onChange={onChangeUsername} 
            />  
        </FormItem>

        <FormItem label="User Type" {...formItemLayout}>
            <RadioGroup 
                options={options}
                defaultValue={value} 
                onChange={onChangeRadio}
                defaultValue={defaultValue}
            />
        </FormItem>

        <FormItem label="Password" {...formItemLayout}>
            <Input disabled={isDisabled}/>
        </FormItem>

        <FormItem label="Confirm Password" {...formItemLayout}>
            <Input disabled={isDisabled}/>
        </FormItem>

        <FormItem label="Description" {...formItemLayout}>
            <Input.TextArea onChange={onChangeDescription} />
        </FormItem>

    </Form>
);

export default FormCreate;