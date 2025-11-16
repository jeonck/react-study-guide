import mermaid from 'mermaid';
import { useEffect, useRef } from 'react';

interface MermaidDiagramProps {
  chart: string;
}

const MermaidDiagram = ({ chart }: MermaidDiagramProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: false, theme: 'neutral' });
    if (ref.current) {
      mermaid.run({
        nodes: [ref.current],
      });
    }
  }, [chart]);

  return (
    <div className="flex justify-center my-8">
      <div ref={ref} className="mermaid">
        {chart}
      </div>
    </div>
  );
};

export default MermaidDiagram;
