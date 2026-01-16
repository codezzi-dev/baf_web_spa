
'use client';

import React from 'react';
import Tree from 'react-d3-tree';
import { organogramData } from '@/components/data/Organogram';
import { buildOrgTree } from '@/utils/org-tree';
const treeData = buildOrgTree(organogramData); // nested { name, children, attributes... }

export default function OrgChartTree() {
  return (
    <div style={{ width: '100%', height: '800px' }}>
      <Tree
        data={treeData}
        orientation="vertical"
        pathFunc="straight"
        nodeSize={{ x: 300, y: 180 }}
        translate={{ x: 500, y: 120 }}
        renderCustomNodeElement={({ nodeDatum }) => {
          const attrs = nodeDatum.attributes || {};
          return (
            <g>
              <rect width="260" height="120" x="-130" y="-60" rx="10" fill="#2c3e50" />
              <text x="0" y="-25" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold">
                {nodeDatum.name}
              </text>
              {attrs.position && (
                <text x="0" y="0" textAnchor="middle" fill="#bdc3c7" fontSize="13">
                  {attrs.position}
                </text>
              )}
              {attrs.photo_url && (
                <image href={String(attrs.photo_url)} x="-40" y="-55" width="80" height="80" />
              )}
            </g>
          );
        }}
      />
    </div>
  );
}