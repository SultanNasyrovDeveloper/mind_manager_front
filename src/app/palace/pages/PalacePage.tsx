import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import useAsync from 'lib/hooks/useAsync';
import { usePalaceStore } from 'store/palace';
import Palace from '../components/Palace';

export interface PalacePageProps {}

const PalacePage: FC<PalacePageProps> = () => {
  const { rootId } = useParams();
  const subtreeRoot = usePalaceStore(state => state.subtree);
  const fetchSubtree = usePalaceStore(state => state.fetchSubtree);
  useAsync(async () => {
    const subtreeRootId = Number(rootId);
    if (subtreeRootId !== subtreeRoot?.id) await fetchSubtree(subtreeRootId);
  }, [rootId, subtreeRoot]);
  return <Palace />;
};

export default PalacePage;