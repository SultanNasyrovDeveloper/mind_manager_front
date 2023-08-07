import { PalaceNode } from 'types/node';

export const findNodeAndMap = (
	tree: PalaceNode,
	searchFunc: (node: PalaceNode) => boolean,
	mapFunc: (node: PalaceNode) => void
): void => {
	/*
	Walk through the given tree and search target node using search function.
	Then apply mapFunc to first found target node e.g. node that search function returned true for.

	@param: tree mind palace node tree root.
	@params: search function is used to determine target node.
	@param: map function will be applied to first found node.
	*/
	
	const nodes = [];
	nodes.push(tree);
	
	while (nodes.length > 0) {
		const currentNode = nodes.shift();
		const isTarget = searchFunc(currentNode as PalaceNode);
		if (isTarget) {
			return mapFunc(currentNode as PalaceNode);
		}
		currentNode?.children.forEach(child => nodes.push(child));
	}
}
