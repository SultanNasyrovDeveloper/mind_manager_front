import React, { FC, useCallback, useState, useRef } from 'react';
import NodeForm from 'app/node/forms/NodeForm';
import FormActions from 'lib/components/FormActions';
import { FormRef } from 'lib/form';
import useOpen from 'lib/hooks/useOpen';
import { useNodeStore } from 'store/node';
import { TreeNode } from 'types/palace';
import { PalaceNode } from 'types/node';
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
  BarsOutlined,
  CaretUpOutlined,
  DeleteOutlined,
  EditOutlined,
  FormOutlined,
  SisternodeOutlined,
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
  const createNode = useNodeStore(state => state.create);
  console.log(createNodeFormRef.current?.errors);
  
  const openCreateNodeDrawer = useCallback(() => {
    setCreateNodeParent(node.id);
    setIsDrawerOpen(true);
  }, [node, setCreateNodeParent, setIsDrawerOpen]);
  
  const closeCreateNodeDrawer = useCallback(() => {
    setCreateNodeParent(undefined);
    setIsDrawerOpen(false);
  }, [setCreateNodeParent, setIsDrawerOpen]);
  
  const handleCreateNodeFormSubmit = useCallback(
    async (data: Partial<PalaceNode>) => {
      console.log(data);
      const [newNode, error] = await createNode(data);
      if (!error && newNode) closeCreateNodeDrawer();
    }, [createNode, closeCreateNodeDrawer]);
  
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
            onCancel={closeCreateNodeDrawer}
            onClear={() => createNodeFormRef.current?.resetForm()}
            onSave={() => {
              createNodeFormRef.current?.submitForm();
              console.log(createNodeFormRef.current?.values);
              console.log(createNodeFormRef.current?.errors);
            }}
          />
        }
      >
        <NodeForm
          enableReinitialize
          validateOnMount
          validateOnBlur
          innerRef={createNodeFormRef}
          initialValues={{ parent: createNodeParent }}
          innerFormProps={{ layout: 'vertical' }}
          onSubmit={handleCreateNodeFormSubmit}
        />
      </Drawer>
    </Space>
  );
};

export default NodeActions;