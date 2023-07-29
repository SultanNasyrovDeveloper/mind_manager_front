import { IPalaceStatistics } from 'types';
import { Identifier } from 'types/core';
import { TreeNode } from 'types/palace';
import ApiEndpointClient from './base';
import { MethodResponse } from '../types';
import { palaceStatisticsUrl, palaceTreeUrl } from '../urls';

export class PalaceApiClient extends ApiEndpointClient<TreeNode> {
	async getTree(root: Identifier): Promise<MethodResponse<TreeNode>> {
		return await this.client.get<TreeNode>({ url: palaceTreeUrl(root) });
	}
	async statistics(palaceId: number): Promise<IPalaceStatistics | undefined> {
		const [stats, error] = await this.client.get<IPalaceStatistics>(
			{ url: palaceStatisticsUrl(palaceId) }
		);
		return stats;
	}
}