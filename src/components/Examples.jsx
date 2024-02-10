import { EXAMPLES } from "../data.js";
import TabButton from './TabButton.jsx';
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs.jsx";


export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState(); //si importano SEMPRE nel componente

    function handleClick(selectedButton){
      // selectButton => 'components', 'JSX'....
      console.log(selectedButton);
      setSelectedTopic(selectedButton);
    };
  
    let tabContent = <p>Please select a topic.</p>;
  
    if(selectedTopic) {
      tabContent = (
        <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
      )
    }
    
    return (
        <Section id="examples" title="Examples">
          <Tabs
          buttons={
            <>
                <TabButton onClick={()=>handleClick("components")} isSelected={selectedTopic === 'components'}>Components</TabButton>
                <TabButton onClick={()=>handleClick("jsx")} isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
                <TabButton onClick={()=>handleClick("props")} isSelected={selectedTopic === 'props'}>Props</TabButton>
                <TabButton onClick={()=>handleClick("state")} isSelected={selectedTopic === 'state'}>State</TabButton>            
            </>
          }>{tabContent}</Tabs>
          {/* {selectedTopic} */}
          {/* {!selectedTopic ? <p>Please select a topic.</p> :
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div> 
          } */}
          {/* {!selectedTopic && <p>Please select a topic.</p>}
          {!selectedTopic && 
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div> } */}
        </Section>
    );
}