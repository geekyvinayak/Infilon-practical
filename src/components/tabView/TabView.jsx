import React, { useState, Children, cloneElement, useEffect } from "react";

function Tab({ label, children }) {
  return <>{children}</>;
}

function TabView({
  children,
  initialTabIndex = 0,
  activeTabOverride,
  setActiveTabOverride,
}) {
  const [activeIndex, setActiveIndex] = useState(initialTabIndex);
  const tabs = Children.toArray(children);
  console.log("activeIndex", activeIndex);
  useEffect(() => {
    if (activeTabOverride !== null) {
      setActiveIndex(activeTabOverride);
      setActiveTabOverride(null);
    }
  }, [activeTabOverride]);

  return (
    <div>
      {/* Tab Headers */}
      <div style={{ marginBottom: "16px" }}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              fontWeight: activeIndex === index ? "bold" : "normal",
              border: activeIndex === index ? "2px solid white" : "none",
              marginRight: "10px",
            }}
          >
            {tab.props.label}
          </button>
        ))}
      </div>

      <div>{tabs[activeIndex]}</div>
    </div>
  );
}

TabView.Tab = Tab;

export default TabView;
