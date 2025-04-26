import { useState } from "react";
import "./App.css";
import { store } from "./store";
import { Provider } from "react-redux";
import TabView from "./components/tabView";
import TabOne from "./components/tabOne";
import TabTwo from "./components/tabTwo";
import TabThree from "./components/tabThree";

function App() {
  const [activeTabOverride, setActiveTabOverride] = useState(null);

  return (
    <Provider store={store}>
      <div>
        <h1>Custom TabView</h1>

        <TabView
          activeTabOverride={activeTabOverride}
          setActiveTabOverride={setActiveTabOverride}
        >
          <TabView.Tab label="Tab 1">
            <TabOne />
          </TabView.Tab>

          <TabView.Tab label="Tab 2">
            <TabTwo setActiveTabOverride={setActiveTabOverride} />
          </TabView.Tab>

          <TabView.Tab label="Tab 3">
            <TabThree />
          </TabView.Tab>
        </TabView>
      </div>
    </Provider>
  );
}

export default App;
