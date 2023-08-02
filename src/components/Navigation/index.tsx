import React, { useRef, useState, useEffect } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function App() {
  const [offset, setOffset] = useState<number | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [value, setValue] = useState<string | undefined>();
  const [activeTrigger, setActiveTrigger] =
    useState<HTMLButtonElement | null>(null);

  useEffect(() => {
    const list = listRef.current;
    if (activeTrigger && list) {
      const listWidth = list.offsetWidth;
      const listCenter = listWidth / 2;

      const triggerOffsetRight =
        listWidth -
        activeTrigger.offsetLeft -
        activeTrigger.offsetWidth +
        activeTrigger.offsetWidth / 2;

      setOffset(Math.round(listCenter - triggerOffsetRight));
    } else if (value === "") {
      setOffset(null);
    }
  }, [activeTrigger, value]);

  return (
    <NavigationMenu.Root
      value={value}
      onValueChange={setValue}
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <NavigationMenu.List
        ref={listRef}
        style={{
          display: "flex",
          listStyle: "none",
          margin: 0,
          marginBottom: 15,
          padding: 0,
        }}
      >
        {["one", "two", "three loooong", "four"].map((item) => {
          return (
            <NavigationMenu.Item key={item} value={item}>
              <NavigationMenu.Trigger
                ref={(node) => {
                  if (item === value && activeTrigger !== node) {
                    setActiveTrigger(node);
                  }
                  return node;
                }}
              >
                {item}
              </NavigationMenu.Trigger>
              <NavigationMenu.Content
                style={{ width: 200, height: 100, backgroundColor: "grey" }}
              >
                <button>{item} content</button>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          );
        })}

        <NavigationMenu.Indicator
          style={{
            bottom: 0,
            height: 5,
            backgroundColor: "grey",
            transition: "all 0.5s ease",
          }}
        />
      </NavigationMenu.List>

      <div
        style={{
          position: "absolute",
          left: 0,
          top: "100%",
          width: "100%",
          backgroundColor: "whitesmoke",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <NavigationMenu.Viewport
          style={{
            // Avoid transitioning from the initial position when first opening
            display: !offset ? "none" : undefined,
            transform: `translateX(${offset}px)`,
            top: "100%",
            width: "var(--radix-navigation-menu-viewport-width)",
            transition: "all 0.5s ease",
          }}
        />
      </div>
    </NavigationMenu.Root>
  );
}
