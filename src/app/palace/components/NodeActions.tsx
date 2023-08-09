import React, { FC, useState, useRef } from 'react';
import NodeForm from 'app/node/forms/NodeForm';
import FormActions from 'lib/components/FormActions';
import { FormRef } from 'lib/form';
import useOpen from 'lib/hooks/useOpen';
import { TreeNode } from 'types/palace';
import { PalaceNode } from 'types/node';
import { useUserStore } from 'store/user';
import {
  Button,
  ButtonType,
  Drawer,
  Dropdown,
  Link,
  SizedComponent,
  Space,
} from 'ui';
import {
  CaretUpOutlined,
  FormOutlined,
  BarsOutlined,
  SisternodeOutlined,
  DeleteOutlined,
  EditOutlined,
  VerticalAlignBottomOutlined
} from 'ui/icons';

export interface NodeActionsProps extends SizedComponent {
  node: TreeNode;
  withNavigation?: boolean;
  withCreateSubnode?: boolean;
  buttonType?: ButtonType;
}

const NodeActions: FC<NodeActionsProps> = ({
  node,
  size = 'middle',
  withNavigation = true,
  withCreateSubnode = true,
  buttonType = 'text',
}) => {
  
  const createNodeFormRef = useRef<FormRef<Partial<PalaceNode>>>(null)
  const [createNodeParent, setCreateNodeParent] = useState<number | undefined>();
  const [isDrawerOpen, setIsDrawerOpen] = useOpen();
  const userId = useUserStore(state => state.currentUser?.id);
  
  const openCreateNodeDrawer = () => {
    setCreateNodeParent(node.id);
    setIsDrawerOpen(true);
  };
  
  const closeCreateNodeDrawer = () => {
    setCreateNodeParent(undefined);
    setIsDrawerOpen(false);
  };
  
  return (
    <Space size="small">
      {withNavigation &&
        <Link to={`/palace/${node.parent}`}>
          <Button
            type={buttonType}
            size={size}
            icon={<CaretUpOutlined />}
            disabled={!node.parent}
          />
        </Link>
      }
      <Link to={`/palace/node/${node.id}`}>
        <Button
          size={size}
          type={buttonType}
          icon={<FormOutlined />}
        />
      </Link>
      {withCreateSubnode &&
        <Button
          type={buttonType}
          size={size}
          icon={<SisternodeOutlined />}
          onClick={openCreateNodeDrawer}
        />
      }
      <Dropdown
        placement="bottomRight"
        menu={{
          onClick: (item) => console.log(item),
          items: [
            {
              key: 'rename',
              label: 'Rename',
              icon: <EditOutlined />
            },
            {
              key: 'move',
              label: 'Move',
              icon: <VerticalAlignBottomOutlined />
            },
            {
              key: 'delete',
              label: 'Delete',
              icon: <DeleteOutlined />
              
            },
          ]
        }}
      >
        <Button
          size={size}
          type={buttonType}
          icon={<BarsOutlined />}
        />
      </Dropdown>
      <Drawer
        size="large"
        open={isDrawerOpen}
        title="Create node"
        onClose={closeCreateNodeDrawer}
        extra={
          <FormActions
            onClear={() => createNodeFormRef.current?.resetForm()}
            onSave={() => createNodeFormRef.current?.submitForm()}
            onCancel={closeCreateNodeDrawer}
          />
        }
      >
        <NodeForm
          enableReinitialize
          validateOnBlur
          innerRef={createNodeFormRef}
          initialValues={{ parent: createNodeParent, owner: userId }}
          innerFormProps={{ layout: 'vertical' }}
          onSubmit={(data) => console.log(data)}
        />
      </Drawer>
    </Space>
  );
};

export default NodeActions;