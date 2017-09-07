import React from 'react';
import { Modal as Modall} from 'antd';

import 'antd/dist/antd.css';

const Modal = ({ isVisible, title, okText, cancelText, handleCancel, handleCreate, children }) => (
    <Modall
        visible={isVisible}
        title={title}
        okText={okText}
        cancelText={cancelText}
        onOk={handleCreate} // function that will be called when a user clicked Oki button 
        onCancel={handleCancel}
      >
        {children}
      </Modall>
);

export default Modal;