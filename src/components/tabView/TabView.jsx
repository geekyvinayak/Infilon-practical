import React, { useState, Children, cloneElement, useEffect } from "react";

// TabView.Tab subcomponent
function Tab({ label, children }) {
  return <>{children}</>; // Just a wrapper
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

      {/* Active Tab Content */}
      <div>{tabs[activeIndex]}</div>
    </div>
  );
}

// Attach Tab subcomponent
TabView.Tab = Tab;

export default TabView;
