import "./styles.css";
import { FocusNode } from "@please/lrud";
import { useRef } from "react";

export const Group = ({ title }) => {
  const parent = useRef(null);
  const lastPosition = useRef(0);
  const titleRef = useRef(null);

  const x = ({ focusNode }) => {
    const el = focusNode.elRef.current;
    if (el && parent.current) {
      lastPosition.current = +el.getAttribute("data-index") || 0;
      el.scrollIntoViewIfNeeded(true);
    }
  };
  return (
    <div ref={titleRef}>
      <h1>{title}</h1>
      <FocusNode
        wrapping
        ref={parent}
        onFocused={() => {
          alert();
          titleRef.current.scrollIntoViewIfNeeded(true);
        }}
        onBlurred={({ currentNode }) => {
          currentNode.defaultFocusChild = lastPosition.current;
        }}
        className="no-scrollbar block-container block-container-horizontal"
      >
        <FocusNode data-index={0} onFocused={x} className="block">
          1
        </FocusNode>
        <FocusNode data-index={1} onFocused={x} className="block">
          2
        </FocusNode>
        <FocusNode data-index={2} onFocused={x} className="block">
          3
        </FocusNode>
        <FocusNode data-index={3} onFocused={x} className="block">
          4
        </FocusNode>
        <FocusNode data-index={4} onFocused={x} className="block">
          5
        </FocusNode>
        <FocusNode data-index={5} onFocused={x} className="block">
          6
        </FocusNode>
        <FocusNode data-index={6} onFocused={x} className="block">
          7
        </FocusNode>
        <FocusNode data-index={7} onFocused={x} className="block">
          8
        </FocusNode>
        <FocusNode data-index={8} onFocused={x} className="block">
          9
        </FocusNode>
      </FocusNode>
    </div>
  );
};

export function CardHero() {
  const containerRef = useRef(null);
  const lastPosition = useRef(0);
  const x = ({ focusNode }) => {
    const el = focusNode.elRef.current;
    lastPosition.current = +el.getAttribute("data-index") || 0;
  };
  return (
    <div ref={containerRef} style={{ display: "flex" }}>
      <div style={{ flexShrink: 0, width: "50%" }}>
        <h1>Test Card Hero</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus
          nibh eget nisi maximus, at luctus nibh convallis. Aliquam iaculis
          tristique nunc, eget bibendum urna vulputate vel. Etiam in nulla sem.
          Donec iaculis vel neque ac luctus. Nulla eget pretium est. Suspendisse
        </p>
        <FocusNode
          onFocused={() => {
            containerRef.current.scrollIntoViewIfNeeded(true);
          }}
          onBlurred={({ currentNode }) => {
            currentNode.defaultFocusChild = lastPosition.current;
          }}
          style={{ display: "flex", gap: "2vw" }}
        >
          <FocusNode data-index={0} onFocused={x} className="btn">
            CardHeroBtn1
          </FocusNode>
          <FocusNode data-index={1} onFocused={x} className="btn">
            CardHeroBtn2
          </FocusNode>
        </FocusNode>
      </div>

      <div
        style={{
          flexShrink: 0,
          width: "50%",
          background: "black",
          height: "300px"
        }}
      ></div>
    </div>
  );
}

export function HomeHero() {
  const containerRef = useRef(null);
  const lastPosition = useRef(0);
  const x = ({ focusNode }) => {
    const el = focusNode.elRef.current;
    lastPosition.current = +el.getAttribute("data-index") || 0;
  };

  return (
    <div
      ref={containerRef}
      style={{ background: "pink", height: "70vh", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          width: "50vw",
          padding: "2vw"
        }}
      >
        <h1>Hello World</h1>
        <h3>Test | ABC | DEF</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus
          nibh eget nisi maximus, at luctus nibh convallis. Aliquam iaculis
          tristique nunc, eget bibendum urna vulputate vel. Etiam in nulla sem.
          Donec iaculis vel neque ac luctus. Nulla eget pretium est. Suspendisse
        </p>
        <FocusNode
          onFocused={() => {
            containerRef.current.scrollIntoViewIfNeeded(true);
          }}
          onBlurred={({ currentNode }) => {
            currentNode.defaultFocusChild = lastPosition.current;
          }}
          style={{ display: "flex", gap: "2vw" }}
        >
          <FocusNode data-index={0} onFocused={x} className="btn">
            CardHeroBtn1
          </FocusNode>
          <FocusNode data-index={1} onFocused={x} className="btn">
            CardHeroBtn2
          </FocusNode>
        </FocusNode>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <FocusNode wrapping orientation="vertical" className="app no-scrollbar">
      <HomeHero title="HomeHero" />
      <Group title="Group 1" />
      <Group title="Group 2" />
      <Group title="Group 3" />
      <CardHero title="CardHero 1" />
      <Group title="Group 4" />
      <Group title="Group 5" />
      <Group title="Group 6" />
      <CardHero title="CardHero 2" />
      <Group title="Group 7" />
      <Group title="Group 8" />
      <Group title="Group 9" />
      <CardHero title="CardHero 3" />
      <Group title="Group 10" />
      <Group title="Group 11" />
      <Group title="Group 12" />
    </FocusNode>
  );
}
