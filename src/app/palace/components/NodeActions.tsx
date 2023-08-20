import React, { FC, useCallback, useRef, useState } from 'react';
import NodeForm from 'app/node/forms/NodeForm';
import FormActions from 'lib/components/FormActions';
import { FormManagerProps } from 'lib/form';
import useOpen from 'lib/hooks/useOpen';
import { useNodeStore } from 'store/node';
import { usePalaceStore } from 'store/palace';
import { PalaceNode } from 'types/node';
import { TreeNode } from 'types/palace';
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
  const createNodeFormRef =
    useRef<FormManagerProps<Partial<PalaceNode>>>(null);
  const [createNodeParent, setCreateNodeParent] = useState<number | undefined>();
  const [isDrawerOpen, setIsDrawerOpen] = useOpen();
  const createNode = useNodeStore(state => state.create);
  const deleteNode = useNodeStore(state => state.delete);
  const addNodeToTree = usePalaceStore(state => state.addNode);
  const removeNodeFromTree = usePalaceStore(state => state.removeNode);
  
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
      const [newNode, error] = await createNode(data);
      if (!error && newNode) {
        closeCreateNodeDrawer();
        addNodeToTree(newNode);
      }
    }, [createNode, addNodeToTree, closeCreateNodeDrawer]);
  
  const handleNodeDelete = useCallback(async () => {
    if (node) await deleteNode(node.id);
    removeNodeFromTree(node);
  }, [node, deleteNode, removeNodeFromTree]);
  
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
              icon: <DeleteOutlined />,
              onClick: handleNodeDelete
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
            onSave={() => createNodeFormRef.current?.submitForm()}
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