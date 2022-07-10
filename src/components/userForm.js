import React, { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import "antd/dist/antd.css";
import "./userForm.css";
import Image from "./image";

const CreateForm = (props) => {
  const { visible, setVisible, onCreate } = props;
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Edit Your Profile"
      className="modal-container"
      onCancel={() => {
        setVisible(false);
      }}
      style={{ color: "white" }}
    >
      <div className="modal-wrapper">
        <Form form={form} layout="vertical">
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              {
                required: false,
                message: "Full Name!",
              },
            ]}
          >
            <Input
            
            />
          </Form.Item>
          <Form.Item
            label="Display Name"
            name="displayName"
            rules={[
              {
                required: false,
                message: "Full Name!",
              },
            ]}
          >
            <Input
            
            />
          </Form.Item>
          <Form.Item
            label="Position"
            name="post"
            rules={[
              {
                required: false,
                message: "Full Name!",
              },
            ]}
          >
            <Input
    
            />
          </Form.Item>
        </Form>
        <div ><Image/></div>
      </div>
    </Modal>
  );
};

/**
 * Function version of the component below
 * @param {function} onChange when change occurs
 */
export const EditUserDetail = ({ onChange }) => {
  // const { onChange } = props;
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    onChange(values);
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
        className="edit-button"
      >
        Edit
      </Button>
      <CreateForm
        visible={visible}
        setVisible={setVisible}
        onCreate={onCreate}
      />
    </div>
  );
};

/**
 * Class version of the component above
 * @param {function} onChange when change occurs
 */
export class CollectionsPage extends React.Component {
  state = {
    visible: false,
  };

  constructor(props) {
    super(props);
    this.onChange = this.props.onChange;
  }

  setVisible = (bool) => {
    this.setState({ visible: bool });
  };

  onCreate = (values) => {
    this.onChange(values);
    this.setVisible(false);
  };

  // It renders a button and a model consists of a form
  // Create form component
  render() {
    return (
      <div>
        <Button
          type="primary"
          onClick={() => {
            this.setVisible(true);
          }}
        >
          New Collection
        </Button>
        <CreateForm
          visible={this.state.visible} // visibility flag
          setVisible={this.setVisible} // setVisible function as parameter
          onCreate={this.onCreate} // when form completed this function will bring the values
        />
      </div>
    );
  }
}

// render(<CollectionsPage />, document.getElementById("root"));
