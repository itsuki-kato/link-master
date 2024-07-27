"use client";

import { Layout, Menu, theme, Flex } from "antd";
import Flow from "./components/Flow";
import { useState } from "react";
import { Position } from "@xyflow/react";

const { Header, Content, Footer, Sider } = Layout;

export default function Home() {
  const initialNodes = [
    {
      id: "node-1",
      type: "textUpdater" as Position,
      position: { x: 0, y: 0 },
      data: { value: 123 },
    },
    {
      id: "node-2",
      type: "output",
      targetPosition: "top" as Position,
      position: { x: 0, y: 200 },
      data: { label: "node 2" },
    },
    {
      id: "node-3",
      type: "output",
      targetPosition: "top" as Position,
      position: { x: 200, y: 200 },
      data: { label: "node 3" },
    },
  ];

  const initialEdges = [
    { id: "edge-1", source: "node-1", target: "node-2", sourceHandle: "a" },
    { id: "edge-2", source: "node-1", target: "node-3", sourceHandle: "b" },
  ];

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Flow nodes={nodes} edges={edges} setNodes={setNodes} setEdges={setEdges} />
  );
}
