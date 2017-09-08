import React from 'react';
import { Button, Modal } from 'antd';

import ButtonViewMore from '../ButtonViewMore';

class ViewMoreUsers extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isVisible: false
        }
    }

    showModal = () => {
        this.setState({
            isVisible: !this.state.isVisible
        });
    }

    handleCreate =() => {
        this.setState({
            isVisible: !this.state.isVisible,
        });
    }

    handleCancel = () => {
        this.setState({
            isVisible: !this.state.isVisible,
        });
    }

    render(){
        return(
            <div>
                <Button icon="plus" onClick={this.showModal}>View More</Button>
                <Modal 
                    visible={this.state.isVisible}
                    title="View User"
                    okText="Ok"
                    cancelText="Cancel"
                    onOk={this.handleCreate} 
                    onCancel={this.handleCancel}
                >
                    <p>Hola</p>
                </Modal>
            </div>
        );
    }
}

export  default ViewMoreUsers;