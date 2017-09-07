import React from 'react';

import TableUsers from './TableUsers';
import CardView from '../CardView';
import ButtonCreate from '../ButtonCreate';
import Modal from '../Modal';
import FormCreate from '../FormCreate';

import 'antd/dist/antd.css';
import './ContentUsers.css';

const ContentUsers = ({ showModal, isVisible, handleCancel, handleCreate, data, setFieldValue, onChangeUsername, onChangeDescription, isDisabled, options, value, onChangeRadio, defaultValue }) => (

    <div>
        <CardView 
            cardTitle={"Users List"} 
            cardContent={
                <div>
                    <ButtonCreate 
                        showModal={ showModal }
                    />
                    <Modal 
                        isVisible={isVisible} 
                        title="Create User"
                        okText="Create"
                        cancelText="Cancel"
                        handleCreate={handleCreate}
                        handleCancel={handleCancel}
                    >
                        <FormCreate
                            setFieldValue={setFieldValue}
                            onChangeUsername={onChangeUsername}
                            onChangeDescription={onChangeDescription}
                            isDisabled={isDisabled}
                            options={options}
                            value={value}
                            onChangeRadio={onChangeRadio}
                            defaultValue={defaultValue}
                        />
                    </Modal>
                    <TableUsers data={data}/>
                </div>
            }
        />   
    </div>
);

export default ContentUsers;