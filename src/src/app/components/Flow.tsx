import {
  ReactFlow,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback } from "react";

type Props = {
  nodes: {
    id: string;
    type: string;
    targetPosition: string;
    position: { x: number; y: number };
    data: { label: string };
  }[];

  edges: {
    id: string;
    source: string;
    target: string;
  }[];

  setNodes: Function;

  setEdges: Function;
};

export default function Flow({ nodes, edges, setNodes, setEdges }: Props) {
  // Nodeを操作した時の処理
  const onNodesChange = useCallback(
    (changes: any) =>
      setNodes((nds: Props["nodes"]) => applyNodeChanges(changes, nds)),
    []
  );

  //Edgeを操作した時の処理
  const onEdgesChange = useCallback(
    (changes: any) =>
      setEdges((eds: Props["edges"]) => applyEdgeChanges(changes, eds)),
    []
  );

//   Edgeの関連性の制御
  const onConnect = useCallback(
    (params: any) => setEdges((eds: Props["edges"]) => addEdge(params, eds)),
    []
  );

  return (
    <div style={{ height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
